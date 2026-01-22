'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AccountPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!session) {
        return null; // Will redirect
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="overflow-hidden bg-white shadow-xl sm:rounded-2xl border border-gray-100">
                <div className="px-6 py-6 sm:px-10 flex justify-between items-center bg-gray-50/50 border-b border-gray-100">
                    <div>
                        <h3 className="text-xl font-bold leading-7 text-gray-900 tracking-tight">Account Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application status.</p>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
                <div>
                    <dl>
                        <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10 hover:bg-gray-50/50 transition-colors">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-medium">{session.user?.name}</dd>
                        </div>
                        <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10 hover:bg-gray-50/50 transition-colors border-t border-gray-100">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-medium">{session.user?.email}</dd>
                        </div>
                        {/* 
                         <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10 hover:bg-gray-50/50 transition-colors border-t border-gray-100">
                            <dt className="text-sm font-medium text-gray-500">User ID</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-mono text-xs text-gray-400">{session.user?.id}</dd>
                        </div>
                        */}
                    </dl>
                </div>
            </div>
        </div>
    );
}
