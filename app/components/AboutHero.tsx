"use client";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-[120%]"
            >
                <Image width={1920} height={1080}
                    src="/images/1hero.png"
                    alt="Behind the Magic"
                    className="w-full h-full object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto ">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
                >
                    Behind The <span className="italic text-[#c9a84c]">Magic.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
                >
Where vision meets intention, every celebration unfolds with quiet precision and soulful grace.

                </motion.p>
            </div>
        </section>
    );
}
