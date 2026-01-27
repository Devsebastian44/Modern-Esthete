"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cartItems, cartCount, updateQuantity, removeFromCart } = useCart();

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% estimated tax
    const shipping = subtotal > 200 ? 0 : (cartItems.length > 0 ? 15 : 0);
    const total = subtotal + tax + shipping;

    return (
        <div className="bg-[#f5f7f8] min-h-screen pt-20">
            <main className="max-w-[1280px] mx-auto px-6 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-slate-900 font-medium">Your Cart</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Items Column */}
                    <div className="flex-1">
                        <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-slate-200">
                            <h1 className="text-3xl font-extrabold tracking-tight">Shopping Cart</h1>
                            <span className="text-slate-500 font-medium">{cartCount} Items</span>
                        </div>

                        <div className="space-y-1">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 py-6 border-b border-slate-100 group">
                                        <div className="w-full sm:w-32 aspect-square bg-slate-100 rounded-xl overflow-hidden shrink-0">
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${item.image}')` }}
                                            ></div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between h-full py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">{item.name}</h3>
                                                    <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                                <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider">{item.category || item.variant || "Standard Edition"}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-6">
                                                <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="size-8 flex items-center justify-center rounded-full hover:bg-white transition-all text-slate-600"
                                                    >
                                                        <span className="material-symbols-outlined text-lg">remove</span>
                                                    </button>
                                                    <span className="px-4 text-sm font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="size-8 flex items-center justify-center rounded-full hover:bg-white transition-all text-slate-600"
                                                    >
                                                        <span className="material-symbols-outlined text-lg">add</span>
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs font-semibold text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-sm">delete</span> REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-20 text-center">
                                    <span className="material-symbols-outlined text-6xl text-slate-200 mb-4 block">shopping_bag</span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h3>
                                    <p className="text-slate-500 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
                                    <Link href="/shop" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-colors">
                                        Start Shopping
                                    </Link>
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
                                <span className="material-symbols-outlined text-lg">local_shipping</span>
                                <span>{subtotal > 200 ? "Free shipping on orders over $200" : `Add $${(200 - subtotal).toFixed(2)} more for free shipping`}</span>
                            </div>
                        )}
                    </div>

                    {/* Summary Column */}
                    <div className="lg:w-[400px]">
                        <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-500">
                                    <span>Subtotal</span>
                                    <span className="text-slate-900 font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <span>Estimated Shipping</span>
                                        <span className="material-symbols-outlined text-xs cursor-help" title="Shipping rates calculated based on location">info</span>
                                    </div>
                                    <span className={shipping === 0 ? "text-green-500 font-semibold uppercase text-xs tracking-tighter" : "text-slate-900 font-semibold"}>
                                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <span>Estimated Tax</span>
                                    <span className="text-slate-900 font-semibold">${tax.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="border-t border-slate-100 pt-6 mb-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold">Total</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-slate-900">${total.toFixed(2)}</span>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Including VAT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-black focus:border-black placeholder:text-slate-400"
                                        placeholder="Promo code"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black font-bold text-xs px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors">APPLY</button>
                                </div>
                                <button className="w-full py-4 bg-black text-white font-black rounded-xl shadow-lg shadow-black/10 hover:bg-black/90 transition-all flex items-center justify-center gap-2 group">
                                    PROCEED TO CHECKOUT
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <div className="flex items-center justify-center gap-4 py-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        alt="Visa"
                                        width={40}
                                        height={16}
                                        className="h-4 w-auto"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsl3YdO_rTJYFpsZ9tvcWVqOuesVPalklSbpQ2o9egb88HwWkGX56GZABhbApvZ5L5VePKNG2DkRMznMiYYxygjLE63KTJL1-9Cs1Vw9y9BhLBgU6J9trAGcUUaP29PjmJeNypzAm22QNy7wWp3XrTHUaevJBOOWtVmajxj6yFdbZ28L1C7TKuWOVDKvGqxHFkh8OFbZEBh8IiR2VJjCs7qQZBgg9Xulvv9PwQK25P1xSXFxO1ASaFfrZRHMVSWiTvPRu14rcEh7R4"
                                    />
                                    <Image
                                        alt="Mastercard"
                                        width={40}
                                        height={24}
                                        className="h-6 w-auto"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieXkJQyl1ELRkt7sncJxQ_sUYBXQRDHGrLBnq2ZliFZb-VGWyzAoi2piYsH5yJw-5HSdYzq_LSvABLyZRE_fsSTHCQ5VviU0CzR7zB-rcOGv80JNx578ykKXGbOn-EAnaR1dVr37moldkw9ggvb37tJWeRChcua5a1XMhIkF5ZaL9pIJVcWxT868qvrKgs29WmRWX7327BDB2fMl5kc9PSfcifXiAUOHyV1z8MOt1DHYHcYnyW30EnkPba75d-JUXMJl2LQw3KsFy"
                                    />
                                    <Image
                                        alt="PayPal"
                                        width={60}
                                        height={16}
                                        className="h-4 w-auto"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0207RaP2Uqy7ycBlvk_tphHB31qh_PRddGG72USrOrj-WMBG4QD8qF-YG-xTyetTRWnmO7rJ3k8dS31kb6X52W0hBXymPNpEAJCSKEHKxQh1qpf9q37iSiaTskd57AXUTH3WfVmcvb6GpGEee3sbbOvLk0vpEz8mtTnjYJYDE2KPqKRo6dbgNTRS4YnnkThhyh9XSV8GnEj9cbvVu-559U38FJG5NcYs42BHDwB7FU9Vv_1E3Y1arxMYecvgBUy7UX7gEfPP_Liya"
                                    />
                                </div>
                            </div>
                            <p className="mt-6 text-center text-xs text-slate-400 leading-relaxed font-medium">
                                By checking out, you agree to our <a className="underline decoration-slate-300 hover:text-black transition-colors" href="#">Terms of Service</a> and <a className="underline decoration-slate-300 hover:text-black transition-colors" href="#">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <section className="mt-24">
                    <h2 className="text-2xl font-extrabold mb-8">You might also like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="group cursor-pointer">
                            <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden mb-3">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0CSfwAnRV3L5DIIsJ2dGKn25V-FDb67Ll68ruE6RPVO4Xt040ktqR7CENEBTrA8mEn50tjqUAPSV_QRylxvS8RW-uU4Su7hEo-oGNIBS9thCcyFBq8cd0GmXBLiPaEf_-8sLwEH_0NSgu-Ze-RpgBAqsA9IFAtydR5pSdHLCI1B_mV44E-yN4EmqHMj_cSzP_OtY2oDTMahPcP-jqEceh68DSyHHupAba_68CXKIr4X3cuSAmAWANZ5Ats1bOHs9yQq_g7JAdRXgP')" }}
                                ></div>
                            </div>
                            <h4 className="font-bold text-slate-900">Essential Cotton Tee</h4>
                            <p className="text-sm text-slate-500">$45.00</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden mb-3">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-wHqyyQJVakoh7XZ7H4vgSkWfYSUNzOmNM6yLFkIvLZxs2sKYO2ZUc1TSdmjV0_6yqcW9fAkOs5F2k0BEchay8R4M7eT3p9X1j4SD0Z9rUQgwj1hBvuXVcwPmC3BJ_IAkJyuJ2Y36QgF2RHQ86pwKf3SNkauM7xe6b9H53EITI5IOLZrcn3UwL473xhPsqKYRpSF2t9-ns1i6zbOTjfcGhQJtNCC3lf-3S0uovfCcTAaVaxngE1WD_EcVUGYfSQUbd6yKBRIe7ilH')" }}
                                ></div>
                            </div>
                            <h4 className="font-bold text-slate-900">Minimalist Wall Clock</h4>
                            <p className="text-sm text-slate-500">$85.00</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden mb-3">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACLjw-xGZtbsVUnwIBKeJiG5RvqmUOv9ToSm7Br6kZ8Sz8oIaxbt3VUYEkO8Kqf55mPLJJqhXlN7wLz7qHldKJaM1ye5qfRaLu_RBFRyLRsquToUPX3WU8WRjVz6yAlLTLjEU4s7NGBmMi9SjVak87TzKNjT4r4IyTVbq0aMSvE5b9dPtoj8v1wzTbsn2VRCSDO7pdiweDQpH6fphtG-CSIunEbJKuguDbwFvcOnPjcc1bspN7TXwphtTFHB3UAXAX151vlBvzaIv_')" }}
                                ></div>
                            </div>
                            <h4 className="font-bold text-slate-900">Organic Cotton Sweats</h4>
                            <p className="text-sm text-slate-500">$110.00</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden mb-3">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPpgYRT8TR1giG_JFNURZnkKZWO0C1cObt_tyOGHPj9DKP1izM7GRJn-mzBD5cJu1ges88uIKNdFg_IJuhGBweOnmIPu-66UToIowoPTrokCtozCk7gobMkHkiPhKNz9YmEsEILzb42otdJ9ErZ--Ef_F1yxDvnBf1FtFcQsHfVVcvJoN3bGYzHIsXJeYMGGQKvB_xwn4c7LadnIcrqenvsQHIsEvrTxh5zJ2-EpxUMhpgrzZ8MGrqygjdORQ2GrvSmxlE2KfzqojY')" }}
                                ></div>
                            </div>
                            <h4 className="font-bold text-slate-900">Midnight Scented Candle</h4>
                            <p className="text-sm text-slate-500">$35.00</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
