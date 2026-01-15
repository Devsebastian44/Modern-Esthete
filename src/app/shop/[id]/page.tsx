"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Truck, ShieldCheck, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { addToCart } = useCart();

    // In a real app, we would fetch data based on id
    console.log("Rendering product:", id);
    // For this demo, we are hardcoding the "Limited Edition Midnight Chronograph" design

    return (
        <div className="bg-white pt-24 pb-20">
            <div className="container-custom">
                {/* Breadcrumbs */}
                <div className="flex items-center text-xs text-gray-500 mb-8 gap-2">
                    <Link href="/" className="hover:text-brand-dark">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-brand-dark">Shop</Link>
                    <span>/</span>
                    <span className="text-brand-dark font-medium">Limited Edition Chronograph</span>
                </div>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
                    {/* Left: Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop"
                                alt="Watch Main"
                                fill
                                className="object-cover"
                            />
                            <span className="absolute top-4 left-4 text-brand-blue text-[10px] font-bold tracking-widest uppercase">Limited Release</span>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${i === 1 ? 'ring-2 ring-brand-blue' : 'opacity-70 hover:opacity-100'}`}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=200&auto=format&fit=crop"
                                        alt={`Thumbnail ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div>
                        <span className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-2 block">Limited Release</span>
                        <h1 className="text-4xl font-bold text-brand-dark mb-4">Limited Edition Midnight Chronograph</h1>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl font-medium text-brand-dark">$1,250.00</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-gray-400 ml-2">(128 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-500 leading-relaxed mb-8">
                            A masterpiece of precision engineering and timeless design. Featuring a sapphire crystal face, Swiss-made automatic movement, and a hand-stitched Italian leather strap.
                        </p>

                        {/* Selectors */}
                        <div className="space-y-6 mb-8 border-t border-b border-gray-100 py-6">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-gray-900 uppercase">Case Size</span>
                                    <span className="text-xs text-brand-blue cursor-pointer">Size Guide</span>
                                </div>
                                <div className="flex gap-3">
                                    {['38mm', '42mm', '44mm'].map(size => (
                                        <button key={size} className={`px-4 py-2 border rounded text-sm ${size === '38mm' ? 'border-brand-blue text-brand-blue bg-blue-50' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <span className="text-xs font-bold text-gray-900 uppercase block mb-3">Colorway</span>
                                <div className="flex gap-3">
                                    <button className="w-8 h-8 rounded-full bg-brand-dark ring-2 ring-offset-2 ring-brand-blue"></button>
                                    <button className="w-8 h-8 rounded-full bg-gray-300 hover:ring-2 ring-offset-2 ring-gray-300"></button>
                                    <button className="w-8 h-8 rounded-full bg-amber-800 hover:ring-2 ring-offset-2 ring-amber-800"></button>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => addToCart({
                                    id: 'watch-1',
                                    name: 'Limited Edition Midnight Chronograph',
                                    price: 1250,
                                    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop',
                                    category: 'Limited Release'
                                })}
                                className="flex-1 bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Add to Cart
                            </button>
                            <button className="p-4 border border-gray-200 rounded-lg text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Extra Info */}
                        <div className="space-y-3 text-sm text-gray-500">
                            <div className="flex items-center gap-3">
                                <Truck className="w-4 h-4 text-brand-blue" />
                                <span>Complimentary carbon-neutral shipping</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                                <span>2-year international warranty included</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs / Lower Section */}
                <div className="mb-24">
                    <div className="flex border-b border-gray-200 mb-12">
                        {['Product Details', 'Technical Specs', 'Shipping & Returns', 'Care Instructions'].map((tab, i) => (
                            <button key={tab} className={`pb-4 px-4 text-sm font-bold uppercase tracking-wide transition-colors border-b-2 ${i === 0 ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-6">The Essence of Time</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                Inspired by the heritage of maritime exploration, the Midnight Chronograph represents the pinnacle of our design philosophy. Each component is meticulously selected for its durability and aesthetic contribution.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Scratch-resistant sapphire crystal glass with anti-reflective coating',
                                    'Water resistance up to 10 ATM (100 meters / 330 feet)',
                                    'Exhibition case back revealing the complex movement'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center mt-0.5 shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-200 rounded-xl bg-white p-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-brand-dark mb-2">Artisan Crafted</h4>
                                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                    Every watch is hand-assembled by master watchmakers in our Swiss workshop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Complete the Look */}
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <h3 className="text-2xl font-bold text-brand-dark">Complete the Look</h3>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-brand-dark"><span className="sr-only">Previous</span>&larr;</button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-brand-dark"><span className="sr-only">Next</span>&rarr;</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Artisan Leather Wallet", price: "$145.00", img: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Titanium Fountain Pen", price: "$89.00", img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Navigator Sunglasses", price: "$220.00", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Tuscany Weekender Bag", price: "$450.00", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop" }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="font-bold text-brand-dark text-sm">{item.name}</h4>
                                <p className="text-gray-500 text-xs mt-1">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
