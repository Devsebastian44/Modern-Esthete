"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function NewArrivalsPage() {
    const { addToCart } = useCart();
    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Hero Section */}
            <section className="w-full px-6 lg:px-12 py-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="relative min-h-[560px] flex flex-col items-center justify-center p-8 text-center overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5EcmJLPi5hbj-6S-Yic7Vu171C9oMtiaPO9Vl_bMsNv2z9vZHQgg7DIIuxJEVRGYCK8f7vqv-t8hXQocYlYJTMLpxIf9LMn4dtL8i0JiWIDog6-PnLj-DCadklLZTyR_IIu6XOc5wPbNWzaWrVCadR2K317rU_iZKvn0YMc_dOkNGH-z1KYxQU83wCYTwYFB-GrTo79zWwijfxAHj2CQdjKinrAtJuCsxfh4rml8eVS2Dn_IhtG2JTFeWRMi9WIbSwBUUXIewh0nV")' }}
                            ></div>
                        </div>
                        <div className="relative z-20 flex flex-col gap-6 max-w-3xl">
                            <span className="inline-block self-center px-4 py-1 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-2">
                                Edition 04 / 2024
                            </span>
                            <h1 className="text-white text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase italic">
                                Just<br />Dropped
                            </h1>
                            <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto">
                                Precision-engineered for the modern creative. A fusion of technical performance and architectural silhouettes.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center mt-6">
                                <button className="bg-white text-[#0a0a0a] px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-zinc-100 transition-colors shadow-2xl">
                                    Shop the drop
                                </button>
                                <button className="bg-transparent border border-white text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all">
                                    Lookbook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Filter Bar */}
            <section className="sticky top-[73px] z-40 w-full bg-[#fafafa]/90 backdrop-blur-md border-y border-slate-200 py-4">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar items-center">
                        <button className="text-xs font-black uppercase tracking-widest text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-1 shadow-[0_1px_0_0_#0a0a0a]">All Items</button>
                        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-text transition-colors">Last 7 Days</button>
                        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-text transition-colors">Exclusives</button>
                        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-text transition-colors">Tech-Wear</button>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sort By</span>
                        <button className="flex items-center gap-2 border-b border-slate-300 pb-1 text-xs font-bold text-[#0a0a0a]">
                            Release Date
                            <span className="material-symbols-outlined text-[16px]">expand_more</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid Section */}
            <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-[#0a0a0a] text-4xl font-black uppercase tracking-tighter">The New Standard</h2>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">24 Curated Pieces</span>
                            <span className="h-[1px] w-8 bg-slate-300"></span>
                            <span className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest">Season 02</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {/* Item 1 */}
                    <div className="group flex flex-col">
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 rounded-lg">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVDFw1u5vWQjK5lPbnq_2AUNrHaOgEsuCwd0W33yUNSv01vgUT2L0GDHK4lkf4CCyrdVg3xoixfdt6c2Vu42ICq271ojd4EKZKvVy8dmjpfIcGuJhC3NqPnTE3efYym3UH6yz0Jo-v-nPcpEcZYuCBXCVCA3YBlzO5FSFT0DXK4avS1Dsxon2GApdPLiZ2bVxDIMaxOXjvfk_85bntegzjH5qZlnbO6isdinTSLB7GE9rSdU7FI2Uy-yB5we3p_7Q06rC4LF2lYSs3")' }}
                            ></div>
                            <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-1',
                                            name: 'Tech-Knit Blazer',
                                            price: 245,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVDFw1u5vWQjK5lPbnq_2AUNrHaOgEsuCwd0W33yUNSv01vgUT2L0GDHK4lkf4CCyrdVg3xoixfdt6c2Vu42ICq271ojd4EKZKvVy8dmjpfIcGuJhC3NqPnTE3efYym3UH6yz0Jo-v-nPcpEcZYuCBXCVCA3YBlzO5FSFT0DXK4avS1Dsxon2GApdPLiZ2bVxDIMaxOXjvfk_85bntegzjH5qZlnbO6isdinTSLB7GE9rSdU7FI2Uy-yB5we3p_7Q06rC4LF2lYSs3',
                                            category: 'Carbon / Technical Blend'
                                        });
                                    }}
                                    className="w-full bg-white/90 backdrop-blur-md text-[#0a0a0a] py-3.5 rounded-full font-bold text-xs shadow-lg hover:bg-white transition-all duration-300"
                                >
                                    Quick Add +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <h3 className="text-[#0a0a0a] text-sm font-bold uppercase tracking-tight">Tech-Knit Blazer</h3>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Carbon / Technical Blend</p>
                            </div>
                            <p className="text-[#0a0a0a] text-sm font-black">$245</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="group flex flex-col">
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 rounded-lg">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDH2q5LFPqebtbC3HTAB5s6eo7Ui3UU7JmSEBeZ5AyRPWD6wlqD7w8dj3Dfj6M9WQQYeS3LmbNSnbrxRlPYbgzK-4v6aQQK_sqgoNkw1cPcA6i1AlHvv2st2PQuWxZGMv3exaiOi8PFZZbmYApot5LCq4NgDrrTJtfbLMu7XoEAyoqbf_EVLyebIvt0-VTDmQwWrUB8sDRHqcY64pTjssHDwrNrM_RZftbybdaz8-MbsjeQVD6cJ21yBiWNoePONXcnL4V4_twJz7wY")' }}
                            ></div>
                            <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-2',
                                            name: 'Minimalist Chrono',
                                            price: 180,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH2q5LFPqebtbC3HTAB5s6eo7Ui3UU7JmSEBeZ5AyRPWD6wlqD7w8dj3Dfj6M9WQQYeS3LmbNSnbrxRlPYbgzK-4v6aQQK_sqgoNkw1cPcA6i1AlHvv2st2PQuWxZGMv3exaiOi8PFZZbmYApot5LCq4NgDrrTJtfbLMu7XoEAyoqbf_EVLyebIvt0-VTDmQwWrUB8sDRHqcY64pTjssHDwrNrM_RZftbybdaz8-MbsjeQVD6cJ21yBiWNoePONXcnL4V4_twJz7wY',
                                            category: 'Titanium / Sapphire'
                                        });
                                    }}
                                    className="w-full bg-white/90 backdrop-blur-md text-[#0a0a0a] py-3.5 rounded-full font-bold text-xs shadow-lg hover:bg-white transition-all duration-300"
                                >
                                    Quick Add +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <h3 className="text-[#0a0a0a] text-sm font-bold uppercase tracking-tight">Minimalist Chrono</h3>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Titanium / Sapphire</p>
                            </div>
                            <p className="text-[#0a0a0a] text-sm font-black">$180</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="group flex flex-col">
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 rounded-lg">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0_Q1ZNE2RiMmcQSF5DfYAccObXnLsbw7cwxc5t1APz7LzK5Qi6105zwIDRGlaZioLDdHjTAOYqufyZhpcuUMkPr9i_TFCq7Bn9VXqwgAAcvBtmg2Akx4cNn94BUEFJAvCCuM3d4ceBStmx6l_f-cNaTkQrVyL1iFyjLz32SXadt4Wpo3lcilOsdZX116z_X7ZTkXHG35uihAGCZ9yJDnomWVhOVWntOJtX4XMe_Re4J2F3E5YgP6-5N32RURAePWTyscRIjZrpXqd")' }}
                            ></div>
                            <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-3',
                                            name: 'Urban Parka',
                                            price: 320,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0_Q1ZNE2RiMmcQSF5DfYAccObXnLsbw7cwxc5t1APz7LzK5Qi6105zwIDRGlaZioLDdHjTAOYqufyZhpcuUMkPr9i_TFCq7Bn9VXqwgAAcvBtmg2Akx4cNn94BUEFJAvCCuM3d4ceBStmx6l_f-cNaTkQrVyL1iFyjLz32SXadt4Wpo3lcilOsdZX116z_X7ZTkXHG35uihAGCZ9yJDnomWVhOVWntOJtX4XMe_Re4J2F3E5YgP6-5N32RURAePWTyscRIjZrpXqd',
                                            category: 'Sand / Weatherproof'
                                        });
                                    }}
                                    className="w-full bg-white/90 backdrop-blur-md text-[#0a0a0a] py-3.5 rounded-full font-bold text-xs shadow-lg hover:bg-white transition-all duration-300"
                                >
                                    Quick Add +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <h3 className="text-[#0a0a0a] text-sm font-bold uppercase tracking-tight">Urban Parka</h3>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Sand / Weatherproof</p>
                            </div>
                            <p className="text-[#0a0a0a] text-sm font-black">$320</p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="group flex flex-col">
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 rounded-lg">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtbl5NUKeRyIPHhoJcY-ajU8tU7GIWiprttuCalKzffTMQhVffE4WVuXGU6-q06mSn_v9aAY7xQHSN_vF_UQeRbE8mbjqlvMqmZNEm819YDK5tR2oIzuoOjq051043aduhC5323BMWukZlmZmemescdW9Px24fscIYzTFkVSdYs0i7rwze2as38gcKElZAqCRc6ULDpmUDyTklvh5tr3XrWrcXA-QO8RfjBHARxj72WdQtmSK39DICn8atW3cx2TKatGwS6_Z2mHuD")' }}
                            ></div>
                            <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-4',
                                            name: 'Silk Essential',
                                            price: 110,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtbl5NUKeRyIPHhoJcY-ajU8tU7GIWiprttuCalKzffTMQhVffE4WVuXGU6-q06mSn_v9aAY7xQHSN_vF_UQeRbE8mbjqlvMqmZNEm819YDK5tR2oIzuoOjq051043aduhC5323BMWukZlmZmemescdW9Px24fscIYzTFkVSdYs0i7rwze2as38gcKElZAqCRc6ULDpmUDyTklvh5tr3XrWrcXA-QO8RfjBHARxj72WdQtmSK39DICn8atW3cx2TKatGwS6_Z2mHuD',
                                            category: 'Midnight / 100% Silk'
                                        });
                                    }}
                                    className="w-full bg-white/90 backdrop-blur-md text-[#0a0a0a] py-3.5 rounded-full font-bold text-xs shadow-lg hover:bg-white transition-all duration-300"
                                >
                                    Quick Add +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <h3 className="text-[#0a0a0a] text-sm font-bold uppercase tracking-tight">Silk Essential</h3>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Midnight / 100% Silk</p>
                            </div>
                            <p className="text-[#0a0a0a] text-sm font-black">$110</p>
                        </div>
                    </div>
                </div>

                {/* Upcoming Slots */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
                    <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center p-8 text-center rounded-xl">
                        <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.4em]">Upcoming 05.24</p>
                    </div>
                    <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center p-8 text-center rounded-xl">
                        <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.4em]">Capsule Drop</p>
                    </div>
                    <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center p-8 text-center rounded-xl">
                        <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.4em]">Collaboration</p>
                    </div>
                    <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center p-8 text-center rounded-xl">
                        <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.4em]">Seasonal Archive</p>
                    </div>
                </div>
            </section>

            {/* Next Activation / Waitlist */}
            <section className="w-full py-24 bg-white border-t border-slate-200">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Next Activation</span>
                            <h2 className="text-[#0a0a0a] text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase">The Vertex<br />Collection</h2>
                            <p className="text-slate-500 text-lg font-medium max-w-md leading-relaxed">
                                A study in modularity. Our upcoming capsule exploration focuses on multi-environment utility without compromising minimalist aesthetics.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-0 border border-slate-200 max-w-lg rounded-lg overflow-hidden">
                            <input
                                className="h-14 flex-1 bg-transparent border-none px-6 text-xs font-bold uppercase tracking-widest focus:ring-0 placeholder:text-slate-300"
                                placeholder="Enter email for access"
                                type="email"
                            />
                            <button className="h-14 px-10 bg-[#0a0a0a] text-white text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-slate-100 rounded-3xl"></div>
                        <div className="relative w-full aspect-video bg-zinc-100 overflow-hidden rounded-2xl">
                            <div
                                className="w-full h-full bg-center bg-cover grayscale opacity-60"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRXWxmzO6L5cBS1WgfKkYeSTYC8R6v-r0wgnJ1A0qtLeIl8qX4AjiTOKkzOi0KFqel5H1zgmL1pn59rK6E29aIW0UHbRGy_Ps7Wd2NEUPFZ93YYyZmnXY5IO3SBzLEVHFNA4XjuW5-K6yJy6nqTtEwSpnKa8DZTe-VifcaA2rU3P7McwjctjlwFHOR8xRhOisRqKAXRLG5lr7BFaTVK2xQGAE-_lKce7N4DbVkFk_R-GHSJNrHfeK5DTNNU1gZr41YeYRApID7Xgz4")' }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]/10">
                                <div className="text-center space-y-2">
                                    <span className="block text-4xl md:text-6xl font-black text-white tracking-tighter">06 : 14 : 22</span>
                                    <span className="text-[9px] font-black text-white/70 tracking-[0.5em] uppercase">Release Countdown</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
