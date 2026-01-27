import { LayoutGrid, Shirt, Watch, Footprints } from "lucide-react";

interface SidebarFiltersProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    priceRange: [number, number];
    onPriceRangeChange: (range: [number, number]) => void;
    selectedSize: string;
    onSizeChange: (size: string) => void;
}

export default function SidebarFilters({
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    selectedSize,
    onSizeChange
}: SidebarFiltersProps) {
    const categories = [
        { name: "All Categories", icon: LayoutGrid, value: "All" },
        { name: "Apparel", icon: Shirt, value: "APPAREL" },
        { name: "Accessories", icon: Watch, value: "ACCESSORIES" },
        { name: "Footwear", icon: Footprints, value: "FOOTWEAR" },
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
        <div className="w-64 flex-shrink-0 space-y-10 hidden lg:block">
            {/* Categories */}
            <div>
                <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider mb-6">Categories</h3>
                <div className="space-y-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => onCategoryChange(cat.value)}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm transition-all ${selectedCategory === cat.value
                                ? 'bg-blue-50 text-brand-blue font-bold shadow-sm'
                                : 'text-gray-500 hover:text-brand-dark hover:bg-gray-50 font-medium'
                                }`}
                        >
                            <cat.icon className={`w-4 h-4 ${selectedCategory === cat.value ? 'text-brand-blue' : ''}`} />
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider">Price Range</h3>
                </div>
                <div className="px-2">
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => onPriceRangeChange([0, parseInt(e.target.value)])}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue mb-4"
                    />
                    <div className="flex justify-between text-xs font-bold text-brand-blue">
                        <span>$0</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Size */}
            <div>
                <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider mb-6">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                    <button
                        onClick={() => onSizeChange("All")}
                        className={`h-10 border rounded-lg text-sm font-bold transition-all ${selectedSize === "All"
                            ? 'border-black bg-black text-white shadow-lg'
                            : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                            }`}
                    >
                        ALL
                    </button>
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => onSizeChange(selectedSize === size ? "All" : size)}
                            className={`h-10 border rounded-lg text-sm font-bold transition-all ${selectedSize === size
                                ? 'border-black bg-black text-white shadow-lg'
                                : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
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
