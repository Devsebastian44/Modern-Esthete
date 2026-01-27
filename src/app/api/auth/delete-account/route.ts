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
        } catch (prismaError: unknown) {
            const error = prismaError as { code?: string; message?: string; meta?: unknown };
            console.error('Prisma deletion detail error:', {
                code: error.code,
                message: error.message,
                meta: error.meta
            });
            // P2025 is "Record to delete does not exist"
            if (error.code === 'P2025') {
                console.warn(`User ${userId} not found in Prisma, maybe already deleted.`);
            } else {
                return NextResponse.json(
                    { error: `Database error: ${error.message || 'Unknown error'}` },
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
            } catch (authError: unknown) {
                console.error('Supabase Admin client error:', authError);
            }
        } else {
            console.warn('Supabase Admin client not initialized. Skipping Supabase Auth deletion.');
        }

        return NextResponse.json({ message: 'Account deleted successfully' });
    } catch (error: unknown) {
        console.error('Global account deletion error:', error);
        const message = error instanceof Error ? error.message : 'Internal server error';
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
