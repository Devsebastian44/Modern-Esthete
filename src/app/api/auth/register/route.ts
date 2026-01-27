import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate fields
        const validatedFields = registerSchema.safeParse(body);

        if (!validatedFields.success) {
            return NextResponse.json(
                { error: 'Invalid fields' },
                { status: 400 }
            );
        }

        const { name, email, password } = validatedFields.data;

        // Check if user exists in Prisma
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 409 }
            );
        }

        // 1. Sign up with Supabase Auth to trigger email confirmation
        const { data: supabaseData, error: supabaseError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                },
                // Redirect user back to local dev or production URL after confirmation
                emailRedirectTo: `${new URL(req.url).origin}/api/auth/callback`,
            },
        });

        if (supabaseError) {
            console.error('Supabase Auth error:', supabaseError);
            return NextResponse.json(
                { error: supabaseError.message },
                { status: 400 }
            );
        }

        if (!supabaseData.user) {
            return NextResponse.json(
                { error: 'Failed to create auth user' },
                { status: 400 }
            );
        }

        // 2. Hash password for local Prisma storage (to keep current NextAuth working)
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Create user in Prisma with the same ID as Supabase
        const newUser = await prisma.user.create({
            data: {
                id: supabaseData.user.id,
                name,
                email,
                password: hashedPassword,
            },
        });

        // Remove password from response
        const { password: _, ...userWithoutPassword } = newUser;

        return NextResponse.json({
            ...userWithoutPassword,
            message: 'Please check your email to confirm your account.',
        }, { status: 201 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
