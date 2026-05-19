"use client";
import Image from "next/image";

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function EnquireCTA() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={containerRef} className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">

            {/* Parallax Background Image */}
            <motion.div
                className="absolute inset-0 w-full h-[120%]"
                style={{ y, willChange: 'transform' }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
                <Image
                    src="/images/cta.png"
                    alt="Lost Coast Shelter Cove coastline"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-80"
                    loading="lazy"
                />
            </motion.div>

            {/* Film Grain Texture - Inline data URI instead of external request */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.1]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            {/* Content */}
            <div className="relative z-30 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-xs md:text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase mb-6">
                        The Journey Awaits
                    </span>

                    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white leading-[1.1] mb-6 sm:mb-8">
                       READY TO ESCAPE?
                    </h2>

                    <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Melt your mind and soul with our immersive retreatiques. Connect with your retreat attendees on another level.

                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Link href="/contact" className="group relative overflow-hidden rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-7 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-white hover:border-white text-center">
                            <span className="relative z-10 font-medium tracking-[0.15em] text-white uppercase text-sm group-hover:text-black transition-colors duration-300">
                                Contact Us
                            </span>
                        </Link>

                        <Link
                            href="https://calendly.com/aurora11222025/30min?month=2026-02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-full border border-[#c9a84c]/50 bg-[#c9a84c]/10 backdrop-blur-sm px-7 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-[#c9a84c] hover:border-[#c9a84c] text-center"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3 font-medium tracking-[0.15em] text-[#c9a84c] uppercase text-sm group-hover:text-black transition-colors duration-300">
                                Book a Call
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
