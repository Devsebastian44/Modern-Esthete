'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AccountPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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

    async function handleDeleteAccount() {
        setIsDeleting(true);
        console.log('User confirmed deletion, calling API...');
        try {
            const response = await fetch('/api/auth/delete-account', {
                method: 'DELETE',
            });

            console.log('API response status:', response.status);

            if (response.ok) {
                console.log('Deletion successful, signing out...');
                await signOut({ callbackUrl: '/' });
            } else {
                const contentType = response.headers.get('content-type');
                let errorMessage = 'Failed to delete account';

                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    errorMessage = data.error || errorMessage;
                    console.error('Delete error JSON:', data);
                } else {
                    const text = await response.text();
                    console.error('Delete error HTML/Text:', text);
                    errorMessage = `Error ${response.status}: Internal Server Error`;
                }

                alert(errorMessage);
                setIsDeleting(false);
                setShowDeleteConfirm(false);
            }
        } catch (error: unknown) {
            console.error('Fetch error:', error);
            const message = error instanceof Error ? error.message : 'Unknown error';
            alert(`Something went wrong: ${message}`);
            setIsDeleting(false);
            setShowDeleteConfirm(false);
        }
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="overflow-hidden bg-white shadow-xl sm:rounded-2xl border border-gray-100">
                <div className="px-6 py-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50/50 border-b border-gray-100 gap-4">
                    <div>
                        <h3 className="text-xl font-bold leading-7 text-gray-900 tracking-tight">Account Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application settings.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                        >
                            Sign Out
                        </button>
                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            className="rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
                        >
                            Delete Account
                        </button>
                    </div>
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
                    </dl>
                </div>
            </div>

            {/* Custom Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-300">
                        <div className="p-8">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
                                <span className="material-symbols-outlined text-red-600 text-3xl">warning</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Delete Account?</h3>
                            <p className="text-gray-500 text-center mb-8">
                                This action is permanent and cannot be undone. All your data, orders, and preferences will be lost forever.
                            </p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleDeleteAccount}
                                    disabled={isDeleting}
                                    className="w-full rounded-2xl bg-red-600 px-4 py-4 text-sm font-bold text-white shadow-lg hover:bg-red-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isDeleting ? (
                                        <>
                                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Deleting Account...
                                        </>
                                    ) : (
                                        'Yes, Delete My Account'
                                    )}
                                </button>
                                <button
                                    onClick={() => !isDeleting && setShowDeleteConfirm(false)}
                                    disabled={isDeleting}
                                    className="w-full rounded-2xl bg-gray-100 px-4 py-4 text-sm font-bold text-gray-900 hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
