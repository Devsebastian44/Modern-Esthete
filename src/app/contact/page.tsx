import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="max-w-[1280px] mx-auto px-6 py-16 lg:py-32">
            {/* Philosophy Section */}
            <section className="mb-32 lg:mb-48">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7">
                        <div
                            className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200 bg-cover bg-center rounded-3xl shadow-sm"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6RqrV8tzoM21z8-2SmzTeFWTsDRP6w-txoi8rqW93kBI4Qg0LBYImS9Dkc_3_frDQJmuOKlFdpK5tVcUQIQoTurf7QDs-k1x-lVq4u67d5bJ5xqfp3ND3B9ErNoEALcIFwhy_3IcslT0HW9CVIMarmoagC7Z4SLDEB0j5duoKdBkJaL6tNnzSDSi3V0mDp-c7oLsTgnMg08aF6ymEfS3h7AfbRlFGu0tXl_gG3kpZ2eYT28TG5b0YiBsmpzrdbw5OsCSHYzVgOwLb")' }}
                        >
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                        <span className="text-[#0a0a0a] font-black tracking-[0.4em] uppercase text-[10px]">The Philosophy</span>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic text-black mb-4">
                            Where Code<br />Meets Craft
                        </h1>
                        <p className="text-[17px] text-zinc-500 leading-relaxed font-light mb-6">
                            We merge the surgical precision of senior engineering with the uncompromising aesthetic of high-end fashion. Every line of code is a stitch; every interface, a tailored silhouette. We don't just build software; we craft digital legacies that transcend the ordinary.
                        </p>
                        <div>
                            <Link href="#contact" className="inline-flex items-center gap-4 font-black text-[11px] uppercase tracking-[0.2em] group border-b-2 border-black pb-2 transition-all hover:opacity-70">
                                Read the Full Manifesto
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let's Interface Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="contact">
                <div className="lg:col-span-6 flex flex-col gap-12">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter uppercase italic text-[#0a0a0a]">Let's Interface</h2>
                        <p className="text-zinc-500 max-w-md font-light text-lg">
                            Whether it's a new venture or a refined architectural challenge, we're ready to bring a master's touch to your vision.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8 p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm h-32">
                            <span className="material-symbols-outlined text-3xl text-black">alternate_email</span>
                            <div>
                                <h3 className="font-bold text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Direct Inquiry</h3>
                                <p className="text-xl font-bold text-[#0a0a0a]">hello@devstudio.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm h-32">
                            <span className="material-symbols-outlined text-3xl text-black">location_on</span>
                            <div>
                                <h3 className="font-bold text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Atelier Location</h3>
                                <p className="text-xl font-bold text-[#0a0a0a]">Remote / Global Ops</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm h-32">
                            <span className="material-symbols-outlined text-3xl text-black">public</span>
                            <div>
                                <h3 className="font-bold text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Digital Presence</h3>
                                <div className="flex gap-8 mt-2">
                                    <Link href="#" className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">LinkedIn</Link>
                                    <Link href="#" className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">GitHub</Link>
                                    <Link href="#" className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">Instagram</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 bg-black p-10 lg:p-16 flex flex-col justify-between min-h-[700px] rounded-3xl shadow-xl">
                    <form action="#" className="space-y-12">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Full Name</label>
                            <input
                                className="w-full h-16 bg-[#1a1a1a] border-none px-6 text-white transition-all placeholder:text-zinc-600 rounded-xl focus:outline-none"
                                placeholder="Christian Dior"
                                type="text"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Email Address</label>
                            <input
                                className="w-full h-16 bg-[#1a1a1a] border-none px-6 text-white transition-all placeholder:text-zinc-600 rounded-xl focus:outline-none"
                                placeholder="client@luxury.com"
                                type="email"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">The Brief</label>
                            <textarea
                                className="w-full bg-[#1a1a1a] border-none p-6 text-white transition-all resize-none placeholder:text-zinc-600 rounded-xl focus:outline-none"
                                placeholder="Tell us about your architectural requirements..."
                                rows={6}
                            ></textarea>
                        </div>

                        <button className="w-full bg-white text-black h-16 font-black uppercase tracking-[0.4em] text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 rounded-xl shadow-lg shadow-white/5" type="submit">
                            Transmit Request
                            <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]">
                            Privacy is absolute. 24h response time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Map/Location Section */}
            <section className="mt-32 lg:mt-48">
                <div
                    className="relative h-[500px] lg:h-[600px] w-full overflow-hidden bg-slate-200 bg-cover bg-center grayscale contrast-[1.2] brightness-[0.7] rounded-3xl"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrKnf6rgdpR3s3zBzQSChbDMzeWzCn1brbOvvOxDGquZjd3Ezj4p0jjs8zAPG6U7bpMVFUz7KSmruPHJLLgTwP4fJRiNGK_6bfB-axLHiaRq0DOhqDieDy7adRUUHTnblKg-4hzJjlyZgANgm7-Ef-r3o9hjrkfmgYnKyqYJJDvfrP1arojUJGsCq18oAeQAOh07jXe1s7kHL_momYxqa9l6NNbbhPRnrBaV-nX25cxc2xW1_hUXC7VlJMIsZs6DEeNO21WAj_lFso")' }}
                >
                    <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                        <div className="bg-white p-12 lg:p-16 shadow-2xl text-center border border-zinc-100 max-w-sm w-full rounded-2xl">
                            <span className="material-symbols-outlined text-black text-5xl mb-6">location_on</span>
                            <h4 className="font-black text-xs uppercase tracking-[0.4em] mb-2 text-black">Headquarters</h4>
                            <p className="text-sm text-zinc-500 font-light tracking-wide">Innovation District, SF</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
