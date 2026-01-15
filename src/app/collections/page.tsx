import Link from "next/link";

export default function CollectionsPage() {
    return (
        <div className="bg-[#fafafa] text-[#0f172a] min-h-screen">
            <main className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-16 lg:py-24">
                {/* Header Section */}
                <div className="flex flex-col gap-4 mb-20 max-w-3xl">
                    <span className="text-slate-400 font-bold tracking-[0.4em] uppercase text-[10px]">Curation Series 2024</span>
                    <h1 className="text-[#0f172a] text-5xl lg:text-8xl font-light leading-tight tracking-tight">
                        Editorial <br />
                        <span className="font-bold">Collections</span>
                    </h1>
                    <p className="text-slate-600 text-lg lg:text-xl font-normal leading-relaxed max-w-xl mt-4">
                        An immersive exploration of modular living, refined aesthetics, and the intersection of modern utility and high-end craftsmanship.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
                    {/* Featured Series */}
                    <div className="md:col-span-12 group cursor-pointer relative overflow-hidden aspect-[21/9] rounded-none">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRD5rr69Tuok5LV2Ud8dB5obKiGRIlDTZlGK6xQbaZdIMnFITvJdNzwnLq2YCavmtc19PC1SERolwaJP-jsefPx3WVEJESVA5E6tT4mpVGxwzeVjpFB2hUdpIKfBCL-bzycvKVLj1uNFYy35LYPujopqavtfqZ5pHdaAscQ7DPK5iGI489mrSYQZjijocU-a-QKp1X7G89AZIIORakrxeAyxYHzVt2EjE9cWL4mp9s6PQf5tFz4SazrVX0MujIlDC1xhe8UtWBej0w")' }}
                        >
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-700"></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-20 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent">
                            <div className="flex flex-col gap-6 items-start text-white">
                                <div>
                                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">Featured Series</span>
                                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">The Summer Essentials</h2>
                                </div>
                                <p className="text-white/90 text-base lg:text-lg max-w-lg font-light leading-relaxed">Artisanal textures and fluid silhouettes designed for the contemporary explorer.</p>
                                <div className="inline-flex items-center gap-4 group/btn mt-2">
                                    <span className="uppercase tracking-widest text-[11px] font-bold border-b border-white pb-1">View Collection</span>
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2 text-[18px]">east</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Urban Minimalist */}
                    <div className="md:col-span-7 group cursor-pointer relative overflow-hidden aspect-[4/5] rounded-none">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCY7tfrDxtuoPhOH8ODlv9p4NLC0g1prdVf_cqrpIm-qTMHwAHIDbEqY89sKgYABv8eu7KbZ14DyX8hRWIe3qYR8BQWrKqA3J4t9CncRedzlLrpLS0TRPfBzcs3REYJR8QDFT1p9WMnb0RInBJsLqoct9z4xTHSC2WRkh0qKqWtxL1Fd2At4AC_DIcv3XcRBqn5xof2ZhsWGDkP9gYbDOS2P9B9en4Cw5ktkcizqZsTuPBsuJ6lRDmy0z-xiTFbsViTj57KF9hTJB9u")' }}
                        >
                            <div className="absolute inset-0 bg-slate-900/5"></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent text-white">
                            <h3 className="text-3xl font-bold mb-3">Urban Minimalist</h3>
                            <p className="text-white/80 text-sm mb-8 max-w-xs font-light">Structural precision meets the velocity of city life. A study in monochromatic form.</p>
                            <button className="w-fit bg-zinc-50 text-slate-900 px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">Discover</button>
                        </div>
                    </div>

                    {/* Classics & Accessories Column */}
                    <div className="md:col-span-5 flex flex-col gap-10">
                        {/* The Classics */}
                        <div className="group cursor-pointer relative overflow-hidden aspect-square flex-1 rounded-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGP41J97B-gzvJgg0S9XVw4aAkrRM0P-ptW7tXtE1pMw_yGYA-newXq2PT6uC8CZo_jj9DkkwB0QmzuYFgCLTi701-g4sVEy2brfKc54MqS54tkSgsNltEwMeJZh6366EfS5x1-tmEZU4WfcB1p6DAMJz49SWvLW4ji-Ug5-05ebiuoByWt8Gr1WKFaINq3K2zJP0MW41ZVi68ap-KJx85I-T-fidA5qmwPIq-uSqE8qE6vvtlf1294ekq2chcjHzMxvKydcyFCk7j")' }}
                            ></div>
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500 flex flex-col items-center justify-center text-center p-8 text-white">
                                <h3 className="text-2xl font-bold tracking-tight mb-2">The Classics</h3>
                                <p className="text-white/80 text-[11px] uppercase tracking-[0.2em] font-medium">Timeless Artifacts</p>
                            </div>
                        </div>
                        {/* Accessories */}
                        <div className="group cursor-pointer relative overflow-hidden aspect-square flex-1 rounded-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDavwx2Okmsk5t9gpP4FygwXaa0F1ZDjdBT8KlWwKLIbPl8_oPynjiAVjehPSU8oIDuzkQ38_BJgTEkv75N4VGyN_s3LTxZxsdoXL_xef-75coImBpAQFNPEeA2wYhUk_8sS2l33BgJH7CT6X83yj_si1fuQThxjLDhEFGadqz7YOoJFt-KPC4Bl4uypE3h0zynkWcm_H7zgPGlbbkg-9OErjpFD2k-4xoiAeab3VCshK3pNvclyVV8Kc06dN9aT6CbsS939bMeIK3C")' }}
                            ></div>
                            <div className="absolute inset-0 bg-zinc-50/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center text-white">
                                <h4 className="text-xl font-bold">Accessories</h4>
                                <div className="h-px w-12 bg-white mt-4"></div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h4 className="text-xl font-bold group-hover:opacity-0 transition-opacity">Accessories</h4>
                            </div>
                        </div>
                    </div>

                    {/* The Archive */}
                    <div className="md:col-span-4 group cursor-pointer relative overflow-hidden aspect-[4/5] rounded-none">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxJyHxb_P-CobY4VMs06GgMO1j3uza89w5EsMw_GAuZSZlcX331oLftKwrKuLgKGDuNPCchEg6sU0jhazbwTPigUYiwEwT2qWr3ssf_ou_9ShYuW_AzoLZ_y0Ruzo6lBjzB4JZjTvDQMVLSusyqUE5AYvzBSn8Odm5e-HO11A_WyM-hXfHINQdwxsYqxn9RGm69lcf7BjNcUQgeue7FCuJxg0KPg91QQvXQ_K3zM2q_XYIH4_RoMbyADToVKLymnvaTGQqiakht-Ti")' }}
                        ></div>
                        <div className="absolute inset-0 flex flex-col justify-between p-10 border border-transparent group-hover:border-white/20 transition-all duration-700 text-white">
                            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Volume 04</span>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">The Archive</h4>
                                <span className="text-white inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                    Browse <span className="material-symbols-outlined text-sm">trending_flat</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* New Arrivals CTA */}
                    <div className="md:col-span-8 group cursor-pointer relative overflow-hidden aspect-[16/9] rounded-none">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1RgebPU6CNVzHlQGBWoBgth5NVEvcIGoVTm0EZISZlnX7cfm5YZhwG8zxY9V-Mk7UmMQ60qnS3K17nB_RE74PBR2m0os5mY2o_P9DMQlK1EiOMq51k11liNL9d_CSYpZ0P2PAVU1aVJxL2f5GTg_fF0kr9Vu-ULabNizcVnwzdO4rYmeM0YOTZE0DDFQP2Pk6Sy-Q_K4qDcoGdygyfbxwMcuOYedJL6kCCE_93mrxbEI7mlZjicO-1rnl1i4N9ih7Rzm4_GTCU37Y")' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent flex flex-col justify-center p-16 text-white">
                            <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Latest Release</span>
                            <h4 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">New Arrivals</h4>
                            <Link href="/new-arrivals" className="w-fit border border-white text-white px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                                Shop Latest
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 py-24 border-t border-zinc-200 flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="flex flex-col gap-4 text-center lg:text-left max-w-md">
                        <h3 className="text-slate-900 text-3xl font-bold tracking-tight">Refined Updates.</h3>
                        <p className="text-slate-600 font-normal leading-relaxed">Sign up to receive early access to seasonal collections and editorial lookbooks.</p>
                    </div>
                    <div className="flex w-full lg:w-auto gap-0 border-b border-slate-900">
                        <input
                            className="flex-1 lg:min-w-96 bg-transparent border-none py-4 text-slate-900 focus:ring-0 placeholder:text-slate-400 text-sm font-medium focus:outline-none"
                            placeholder="Email Address"
                            type="email"
                        />
                        <button className="text-slate-900 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">Submit</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
