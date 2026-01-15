import Link from "next/link";
import { MoveRight } from "lucide-react";
import { products } from "@/data/mockData";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
    return (
        <section className="py-12 bg-white">
            <div className="container-custom">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <span className="text-zinc-400 text-[11px] font-bold tracking-[0.25em] uppercase block mb-2">Editor's Choice</span>
                        <h2 className="text-4xl font-extrabold tracking-tight text-[#0a0a0a]">Featured Products</h2>
                    </div>
                    <Link href="/shop" className="text-black font-bold flex items-center gap-1 group mb-1">
                        <span className="text-sm">View All</span> <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            category={product.category}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-10 text-center md:hidden">
                    <Link href="/shop" className="inline-flex items-center gap-1 text-black font-bold">
                        View All <MoveRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
