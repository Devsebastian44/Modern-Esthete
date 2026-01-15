import { Twitter, Instagram, CreditCard, Wallet } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F5] pt-24 pb-16 text-sm">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="space-y-4">
                    <Link href="/" className="text-lg font-bold tracking-tight text-brand-dark flex items-center gap-2">
                        {/* Pie icon matching the image - Rotated 135deg (Mouth Bottom-Right) */}
                        <div className="w-6 h-6 bg-black rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0 100%, 0 0, 100% 0, 100% 50%)' }}></div>
                        MODERN_ESTHETE
                    </Link>
                    <p className="text-gray-500 leading-relaxed max-w-xs">
                        Elevating everyday essentials through technical innovation and minimalist aesthetics. Designed for the modern professional.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all group">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all group">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="font-bold text-brand-dark mb-6">Shopping</h4>
                    <ul className="space-y-4 text-zinc-500">
                        <li><Link href="#" className="hover:text-black transition-colors">Men's Collection</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Women's Collection</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Accessories</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">New Arrivals</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Gift Cards</Link></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="font-bold text-brand-dark mb-6">Company</h4>
                    <ul className="space-y-4 text-zinc-500">
                        <li><Link href="#" className="hover:text-black transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Sustainability</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Press</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Links Column 3 */}
                <div>
                    <h4 className="font-bold text-brand-dark mb-6">Customer Support</h4>
                    <ul className="space-y-4 text-zinc-500">
                        <li><Link href="#" className="hover:text-black transition-colors">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Shipping Information</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Returns & Exchanges</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Track Your Order</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">FAQs</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
                <p>&copy; {new Date().getFullYear()} MODERN_ESTHETE. All rights reserved. Crafted by Senior Portfolio.</p>
                <div className="flex gap-6 grayscale opacity-50">
                    <Wallet className="w-6 h-6" />
                    <CreditCard className="w-6 h-6" />
                    <Wallet className="w-6 h-6" /> {/* Placeholder for account_balance_wallet */}
                </div>
            </div>
        </footer>
    );
}
