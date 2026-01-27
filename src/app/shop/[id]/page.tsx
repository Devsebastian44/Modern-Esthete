"use client";

import { useState, useMemo, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Truck, ShieldCheck, Star, ChevronLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/mockData";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { addToCart } = useCart();

    // Find product from mock data
    const product = useMemo(() => {
        const found = products.find(p => p.id === parseInt(id));
        if (found) return found;

        // Default if not found (fallback to a demo product)
        return {
            id: 1,
            name: "Limited Edition Midnight Chronograph",
            category: "ACCESSORIES",
            price: 1250,
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop",
            sizes: ["38mm", "42mm", "44mm"],
            colors: ["#0f172a", "#cbd5e1", "#92400e"],
            description: "A masterpiece of precision engineering and timeless design. Featuring a sapphire crystal face, Swiss-made automatic movement, and a hand-stitched Italian leather strap."
        };
    }, [id]);

    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

    return (
        <div className="bg-white pt-24 pb-20">
            <div className="container-custom">
                {/* Breadcrumbs */}
                <div className="flex items-center text-xs text-gray-400 mb-8 gap-2">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-black">Shop</Link>
                    <span>/</span>
                    <span className="text-black font-bold uppercase tracking-widest text-[10px]">
                        {product.name}
                    </span>
                </div>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
                    {/* Left: Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden group">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {product.id < 5 && (
                                <span className="absolute top-6 left-6 bg-black text-white text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm">
                                    Limited Release
                                </span>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${i === 1 ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                                    <Image
                                        src={product.image}
                                        alt={`Thumbnail ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:sticky lg:top-24">
                        <span className="text-zinc-400 text-[10px] font-black tracking-[0.2em] uppercase mb-3 block">
                            {product.category}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6 leading-tight tracking-tight">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-6 mb-8">
                            <span className="text-3xl font-bold text-[#0a0a0a]">${typeof product.price === 'number' ? product.price.toLocaleString() : product.price}</span>
                            <div className="flex items-center gap-1">
                                <div className="flex items-center text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-zinc-400 text-xs ml-2 font-medium">(128 reviews)</span>
                            </div>
                        </div>

                        <p className="text-zinc-500 leading-relaxed mb-10 text-lg">
                            {(product as any).description || "A masterpiece of precision engineering and timeless design. Featuring a sapphire crystal face, Swiss-made automatic movement, and a premium hand-stitched finish."}
                        </p>

                        {/* Selectors */}
                        <div className="space-y-8 mb-10 pb-8 border-b border-zinc-100">
                            {product.sizes && product.sizes.length > 0 && (['APPAREL', 'Apparel', 'FOOTWEAR'].includes(product.category)) && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[11px] font-black text-black uppercase tracking-[0.1em]">
                                            Select Size
                                        </span>
                                        <button className="text-[11px] font-bold text-zinc-400 underline underline-offset-4 hover:text-black uppercase tracking-widest">
                                            Size Guide
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {product.sizes.map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`min-w-[70px] h-12 flex items-center justify-center border rounded-lg text-xs font-bold transition-all ${selectedSize === size ? 'border-black bg-black text-white shadow-lg' : 'border-zinc-200 text-zinc-500 hover:border-black hover:text-black'}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {product.colors && product.colors.length > 0 && (
                                <div>
                                    <span className="text-[11px] font-black text-black uppercase tracking-[0.1em] block mb-4">Colorway</span>
                                    <div className="flex gap-4">
                                        {product.colors.map(color => (
                                            <button
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                style={{ backgroundColor: color }}
                                                className={`w-9 h-9 rounded-full transition-all ${selectedColor === color ? 'ring-2 ring-offset-4 ring-black scale-110 shadow-md' : 'hover:scale-105'}`}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mb-10">
                            <button
                                onClick={() => addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price as number,
                                    image: product.image,
                                    category: product.category
                                })}
                                className="flex-1 bg-[#0a0a0a] text-white font-bold py-5 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/10 text-sm uppercase tracking-widest"
                            >
                                Add to Cart
                            </button>
                            <button className="p-5 border-2 border-zinc-100 rounded-xl text-zinc-300 hover:text-black hover:border-black transition-all group">
                                <Heart className="w-6 h-6 transition-transform group-active:scale-90" />
                            </button>
                        </div>

                        {/* Extra Info */}
                        <div className="space-y-4 pt-4 border-t border-zinc-50">
                            <div className="flex items-center gap-4 group cursor-help">
                                <div className="size-10 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-zinc-600">Complimentary carbon-neutral shipping</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-help">
                                <div className="size-10 rounded-full bg-zinc-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-zinc-600">2-year international warranty included</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs / Lower Section */}
                <div className="mb-24">
                    <div className="flex border-b border-zinc-100 mb-12 scrollbar-hide overflow-x-auto">
                        {['Product Details', 'Technical Specs', 'Shipping & Returns', 'Care Instructions'].map((tab, i) => (
                            <button key={tab} className={`pb-6 px-6 text-[11px] font-black uppercase tracking-[0.2em] transition-all border-b-2 whitespace-nowrap ${i === 0 ? 'border-black text-black' : 'border-transparent text-zinc-400 hover:text-zinc-600'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-zinc-50 rounded-[32px] p-12 lg:p-20">
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-8 tracking-tight">Modern craftsmanship</h3>
                            <p className="text-zinc-500 leading-relaxed mb-10 text-lg">
                                Designed for those who appreciate the intersection of high-performance materials and minimal aesthetics. Each piece is a testament to our commitment to quality and architectural design.
                            </p>
                            <div className="space-y-6">
                                {[
                                    'Premium materials sourced for longevity and minimal environmental impact',
                                    'Rigorous testing for performance and daily durability',
                                    'Designed with a modular and architectural focus'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center mt-1 shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-zinc-700 font-medium leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-zinc-200 rounded-3xl bg-white p-12 shadow-sm">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-zinc-50 text-black rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-2xl text-black mb-4 tracking-tight">Artisan Quality</h4>
                                <p className="text-zinc-500 max-w-sm mx-auto leading-relaxed">
                                    Every item is inspected through our rigorous quality control process to ensure it exceeds international standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
