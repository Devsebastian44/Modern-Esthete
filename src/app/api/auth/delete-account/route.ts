import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function DELETE() {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = session.user.id;

        // 1. Delete user from Prisma
        try {
            console.log(`Starting Prisma deletion for user: ${userId}`);
            await prisma.user.delete({
                where: { id: userId },
            });
            console.log(`User ${userId} deleted from Prisma.`);
        } catch (prismaError: any) {
            console.error('Prisma deletion detail error:', {
                code: prismaError.code,
                message: prismaError.message,
                meta: prismaError.meta
            });
            // P2025 is "Record to delete does not exist"
            if (prismaError.code === 'P2025') {
                console.warn(`User ${userId} not found in Prisma, maybe already deleted.`);
            } else {
                return NextResponse.json(
                    { error: `Database error: ${prismaError.message}` },
                    { status: 500 }
                );
            }
        }

        // 2. Delete user from Supabase Auth (requires Service Role Key)
        if (supabaseAdmin) {
            try {
                const { error: supabaseError } = await supabaseAdmin.auth.admin.deleteUser(userId);
                if (supabaseError) {
                    console.error('Supabase deletion error:', supabaseError);
                } else {
                    console.log(`User ${userId} deleted from Supabase Auth.`);
                }
            } catch (authError: any) {
                console.error('Supabase Admin client error:', authError);
            }
        } else {
            console.warn('Supabase Admin client not initialized. Skipping Supabase Auth deletion.');
        }

        return NextResponse.json({ message: 'Account deleted successfully' });
    } catch (error: any) {
        console.error('Global account deletion error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
