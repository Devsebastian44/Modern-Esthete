export default function Newsletter() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="bg-[#F5F5F5] rounded-[2.5rem] py-20 px-6 md:px-12 text-center max-w-5xl mx-auto">
                    <span className="text-gray-500 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Stay In Style</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Join our Inner Circle
                    </h2>
                    <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed text-base md:text-lg">
                        Subscribe to receive exclusive access to new launches, editorial content, and member-only benefits.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 bg-white border-0 rounded-lg px-6 py-4 text-gray-900 focus:outline-none focus:ring-0 placeholder:text-gray-400 shadow-sm"
                        />
                        <button
                            type="button"
                            className="bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

