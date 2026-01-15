import { ChevronDown, ChevronRight, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import SidebarFilters from "@/components/SidebarFilters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

// Filter only the shop products (skip the first 4 if we want distinct ones, but for now show all or specific subset logic)
const shopProducts = products.filter(p => p.id >= 5).concat(products.filter(p => p.id >= 5)); // Duplicating to fill grid

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white pb-20">

            {/* Header / Breadcrumbs */}
            <div className="bg-gray-50/50 border-b border-gray-100 mb-8">
                <div className="container-custom py-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-brand-dark">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-brand-dark font-medium">Shop</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-brand-dark font-medium">Lifestyle</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-3xl font-bold text-brand-dark">Lifestyle</h1>

                        {/* Mobile Filter Toggle could go here */}
                    </div>
                </div>
            </div>

            <div className="container-custom flex gap-12">
                <SidebarFilters />

                <div className="flex-1">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm text-gray-500">
                            Showing <span className="font-bold text-brand-dark">24</span> results
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Sort by:</span>
                            <button className="flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-blue">
                                Newest Arrivals
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
                        {/* Manually mapped for demo to match image count roughly or just map available mock data */}
                        {products.slice(4).map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                        {/* Repeat to fill grid for demo visual */}
                        {products.slice(4, 6).map((product, i) => (
                            <ProductCard key={`dup-${i}`} {...product} id={100 + i} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-blue text-white font-medium">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50">
                            2
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50">
                            3
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50">
                            8
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
