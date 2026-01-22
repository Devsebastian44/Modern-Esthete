"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const { data: session } = useSession();

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container-custom flex items-center justify-between h-18 py-6 px-4 md:px-8 max-w-[1920px]">
                {/* Left Side: Logo + Nav Links */}
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        {/* Custom Pie Icon matching reference image */}
                        <div className="w-10 h-10 relative flex items-center justify-center">
                            <div className="w-8 h-8 bg-black rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0 100%, 0 0, 100% 0, 100% 50%)' }}></div>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-brand-dark uppercase">MODERN ESTHETE</span>
                    </Link>

                    {/* Desktop Nav - Now next to logo */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide text-brand-dark">
                        <Link href="/shop" className="hover:text-gray-600 transition-colors">Shop</Link>
                        <Link href="/new-arrivals" className="hover:text-gray-600 transition-colors">New Arrivals</Link>
                        <Link href="/collections" className="hover:text-gray-600 transition-colors">Collections</Link>
                        <Link href="/contact" className="hover:text-gray-600 transition-colors">About</Link>
                    </div>
                </div>

                {/* Right Side: Search + Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center bg-gray-100/80 rounded-full px-4 py-2 w-64 hover:bg-gray-100 transition-colors cursor-text">
                        <Search className="w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search curated items..."
                            className="bg-transparent border-none text-xs ml-3 w-full focus:outline-none placeholder:text-gray-500 text-brand-dark font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-3 md:gap-5">
                        <Link href="/cart" className="relative p-1 hover:text-gray-700 transition-colors text-brand-dark">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 7V6C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6V7H4C2.89543 7 2 7.89543 2 9V18C2 20.7614 4.23858 23 7 23H17C19.7614 23 22 20.7614 22 18V9C22 7.89543 21.1046 7 20 7H17ZM9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V7H9V6Z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-[2.5px] border-white leading-none">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <Link
                            href={session ? "/account" : "/login"}
                            className="hidden sm:block p-1 hover:text-gray-700 transition-colors text-brand-dark"
                            title={session ? "My Account" : "Sign In"}
                        >
                            <svg className={`w-6 h-6 ${session ? "text-indigo-600" : ""}`} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2ZM4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V22H4V20Z" />
                            </svg>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-1 text-brand-dark hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 top-[73px] bg-white z-[100] transition-transform duration-300 md:hidden h-[calc(100vh-73px)] overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-8 gap-8 min-h-full bg-white text-brand-dark">
                    {/* Mobile Search */}
                    <div className="flex items-center bg-gray-100 rounded-xl px-5 py-4 w-full">
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent border-none text-sm ml-4 w-full focus:outline-none placeholder:text-gray-500 text-brand-dark font-semibold"
                        />
                    </div>

                    {/* Mobile Links */}
                    <div className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tighter text-brand-dark">
                        <Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link href="/new-arrivals" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
                        <Link href="/collections" onClick={() => setIsMenuOpen(false)}>Collections</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </div>

                    <div className="h-px bg-gray-100 w-full mt-4"></div>

                    <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest text-gray-500">
                        <Link href={session ? "/account" : "/login"} className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                            <span className={`material-symbols-outlined text-[20px] ${session ? "text-indigo-600" : ""}`}>person</span>
                            {session ? "My Account" : "Sign In / Register"}
                        </Link>
                        <Link href="/cart" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                            Cart {cartCount > 0 ? `(${cartCount} Items)` : ""}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

