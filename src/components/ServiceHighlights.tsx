export default function ServiceHighlights() {
    return (
        <section className="max-w-[1280px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Express Shipping */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-zinc-100 shadow-sm">
                    <div className="bg-zinc-100 p-3 rounded-lg text-black">
                        <span className="material-symbols-outlined text-3xl">local_shipping</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Express Shipping</h3>
                        <p className="text-sm text-zinc-500 mt-1">Free worldwide shipping on orders over $250.</p>
                    </div>
                </div>

                {/* Premium Quality */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-zinc-100 shadow-sm">
                    <div className="bg-zinc-100 p-3 rounded-lg text-black">
                        <span className="material-symbols-outlined text-3xl">verified</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Premium Quality</h3>
                        <p className="text-sm text-zinc-500 mt-1">Every item is crafted with artisanal precision.</p>
                    </div>
                </div>

                {/* 24/7 Support */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-zinc-100 shadow-sm">
                    <div className="bg-zinc-100 p-3 rounded-lg text-black">
                        <span className="material-symbols-outlined text-3xl">support_agent</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">24/7 Support</h3>
                        <p className="text-sm text-zinc-500 mt-1">Expert styling advice and order assistance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
