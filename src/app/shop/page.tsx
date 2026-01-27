"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import SidebarFilters from "@/components/SidebarFilters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

import { Suspense } from "react";

function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("q") || "";

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
    const [selectedSize, setSelectedSize] = useState("All");

    // Filter products based on selected state
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Search filter
            const matchesSearch = !query ||
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase());

            // Category filter
            const matchesCategory = selectedCategory === "All" ||
                product.category.toUpperCase() === selectedCategory.toUpperCase();

            // Price filter
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

            // Size filter
            const matchesSize = selectedSize === "All" || (product.sizes && (product.sizes as string[]).includes(selectedSize));

            return matchesSearch && matchesCategory && matchesPrice && matchesSize;
        });
    }, [selectedCategory, priceRange, selectedSize, query]);

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header / Breadcrumbs */}
            <div className="bg-gray-50/50 border-b border-gray-100 mb-8">
                <div className="container-custom py-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-brand-dark">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-brand-dark font-medium">Shop</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-3xl font-bold text-brand-dark">
                            {query ? `Search results for "${query}"` : (selectedCategory === "All" ? "All Products" : selectedCategory.charAt(0) + selectedCategory.slice(1).toLowerCase())}
                        </h1>
                        {query && (
                            <button
                                onClick={() => router.push("/shop")}
                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                            >
                                <X className="w-3 h-3" />
                                Clear search
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="container-custom flex flex-col lg:flex-row gap-12">
                <SidebarFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    selectedSize={selectedSize}
                    onSizeChange={setSelectedSize}
                />

                <div className="flex-1">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm text-gray-500">
                            Showing <span className="font-bold text-brand-dark">{filteredProducts.length}</span> results
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
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-dashed rounded-2xl border-gray-200">
                            <p className="text-gray-400 font-medium">No products found matching your filters.</p>
                            <button
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setPriceRange([0, 500]);
                                    setSelectedSize("All");
                                    router.push("/shop");
                                }}
                                className="mt-4 text-brand-blue font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Shop...</div>}>
            <ShopContent />
        </Suspense>
    );
}
