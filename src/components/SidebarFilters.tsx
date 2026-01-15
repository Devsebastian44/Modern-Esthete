import { LayoutGrid, Shirt, Watch, Footprints } from "lucide-react";

export default function SidebarFilters() {
    return (
        <div className="w-64 flex-shrink-0 space-y-10 hidden lg:block">
            {/* Categories */}
            <div>
                <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider mb-6">Categories</h3>
                <div className="space-y-3">
                    <button className="flex items-center gap-3 w-full bg-blue-50 text-brand-blue font-medium px-4 py-3 rounded-lg text-sm">
                        <LayoutGrid className="w-4 h-4" />
                        All Categories
                    </button>
                    <button className="flex items-center gap-3 w-full text-gray-500 hover:text-brand-dark px-4 py-2 rounded-lg text-sm transition-colors">
                        <Shirt className="w-4 h-4" />
                        Apparel
                    </button>
                    <button className="flex items-center gap-3 w-full text-gray-500 hover:text-brand-dark px-4 py-2 rounded-lg text-sm transition-colors">
                        <Watch className="w-4 h-4" />
                        Accessories
                    </button>
                    <button className="flex items-center gap-3 w-full text-gray-500 hover:text-brand-dark px-4 py-2 rounded-lg text-sm transition-colors">
                        <Footprints className="w-4 h-4" />
                        Footwear
                    </button>
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider mb-6">Price Range</h3>
                <div className="px-2">
                    <div className="relative h-1 bg-gray-200 rounded-full mb-6">
                        <div className="absolute left-0 right-1/4 h-full bg-brand-blue rounded-full" />
                        <div className="absolute top-1/2 -mt-2 left-0 w-4 h-4 bg-brand-blue rounded-full border-2 border-white shadow-md cursor-pointer" />
                        <div className="absolute top-1/2 -mt-2 right-1/4 w-4 h-4 bg-brand-blue rounded-full border-2 border-white shadow-md cursor-pointer" />
                    </div>
                    <div className="flex justify-between text-xs font-medium text-brand-blue">
                        <span>$0</span>
                        <span>$350</span>
                    </div>
                </div>
            </div>

            {/* Size */}
            <div>
                <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider mb-6">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button
                            key={size}
                            className={`h-10 border rounded-lg text-sm font-medium transition-colors ${size === 'S'
                                    ? 'border-brand-blue text-brand-blue bg-blue-50'
                                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
