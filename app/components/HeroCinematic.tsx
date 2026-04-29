"use client";

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroCinematic() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0f1012] text-[#f0f0f0] pt-20">

            {/* Background Video with Parallax */}
            <motion.div
                style={{ y, willChange: 'transform' }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    src="/images/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover transform-gpu"
                />



                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%]"></div>
            </motion.div>

            {/* Asymmetrical Content Layout */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 lg:p-20"
            >
                {/* Top Left: Logo / Brand - Minimal */}
                <div className="flex justify-between items-start">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-1 opacity-80 mix-blend-difference"
                    >
                        <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-light">Shelter Cove, CA</span>
                        <span className="text-[9px] md:text-[11px] font-light">
                            <span className="tracking-[0.2em] uppercase">San Diego & Las Vegas</span> <span className="tracking-normal normal-case opacity-80">with global reach</span>
                        </span>
                    </motion.div>
                </div>

                {/* Center: The Main Title - Split & Artistic */}
                <div className="absolute top-[40%] md:top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw]">
                    <div className="flex flex-col relative gap-6 md:gap-10">
                        <motion.h1
                            initial={{ x: "-10%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="font-amadine text-[14vw] md:text-[10vw] leading-[0.8] tracking-tight text-white/90 self-start uppercase"
                        >
                            Lost Coast
                        </motion.h1>

                        <motion.h1
                            initial={{ x: "10%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-amadine text-[14vw] md:text-[10vw] leading-[0.8] tracking-tighter text-white/90 self-end text-right uppercase"
                        >
                            Getaways
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom: Editorial Description & Minimal CTA */}
                <div className="flex flex-col md:flex-row items-end justify-between w-full mt-auto pb-20 md:pb-20 gap-4 md:gap-8">

                    {/* Description - Bottom Left */}
                    <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <p className="text-sm md:text-base font-medium leading-relaxed text-white drop-shadow-md">
                                Where the wild Pacific meets ancient redwood forests.
                                <span className="block mt-2 italic font-serif text-white/80 font-normal">Curated retreats & wellness journeys.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
