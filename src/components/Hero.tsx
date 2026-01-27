import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="pt-0">
            <section className="max-w-[1280px] mx-auto p-6">
                <div className="relative overflow-hidden rounded-xl h-[600px] flex items-center bg-zinc-900">
                    {/* Background Image using Next.js Image for maximum quality and optimization */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASr8ZZlL7hdZTw1CKmHFg3GfXhWWVIRJZTZJWnSJSVPXcjarxcKGcN1ZKv1_oVuGC1NKBqmOaTViEh33P4zS6Bhskgr8ym600Q6eIjgKydHhq5Mx1ydpBJVN8DpnDkNPIEuwwvkinPmd3mY4Kv6ASP4YkWHrEupmII1u8rBn6nHKq1097PYj16iLK8mzflWzJ0KjMXk0eLk7Vxwsu0rUtI1WyhtgFfCNp34PbM47-aqLlVU5ayxzMLqi0-V8kkr6jXcWSmDGeotCXa=s2048"
                            alt="high-end minimalist fashion model"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Overlay strictly according to HTML: 0.4 to 0.5 opacity */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />
                    </div>

                    <div className="relative z-10 px-12 lg:px-24 max-w-2xl text-white outline-none">
                        <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            New Collection 2024
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-6">
                            Elevate Your Lifestyle.
                        </h1>
                        <p className="text-lg lg:text-xl font-normal opacity-90 mb-10 leading-relaxed">
                            Curated essentials for the modern professional. Premium quality, minimalist design, and timeless aesthetic.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/shop"
                                className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
                            >
                                Shop Collection
                            </Link>
                            <Link
                                href="#"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold transition-all"
                            >
                                Explore Lookbook
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
