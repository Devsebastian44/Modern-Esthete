import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/mockData";

export default function CategoryGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <h2 className="text-4xl font-extrabold tracking-tight text-[#0a0a0a] mb-10">Shop by Category</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="relative group rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                                <p className="text-gray-200 text-sm mb-4 opacity-90">{category.description}</p>
                                <Link href="#" className="inline-flex items-center gap-2 text-white font-medium hover:underline decoration-2 underline-offset-4">
                                    Explore <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
