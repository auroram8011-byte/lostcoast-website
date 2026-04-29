"use client";
import Image from "next/image";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';

const personas = [
    {
        id: "corporate",
        title: "The Executive",
        subtitle: "Corporate Leadership Teams",
        description: "Where the 1% go to disappear deliberately. Strategic off-sites designed for clarity, alignment, and high-level thinking in total isolation.",
        image: "/images/Home/The Executive DSCF1581.JPG",
        link: "/contact"
    },
    {
        id: "founders",
        title: "The Creator",
        subtitle: "Founders & Artists",
        description: "A serene sanctuary for deep restoration. With the intimacy of a coterie, immersive escapes unfold like a quiet atelier, where artistry and inspiration converge seamlessly.",
        image: "/images/Home/The Creator DSCF1578.JPG",
        link: "/contact"
    },
    {
        id: "private",
        title: "The Circle",
        subtitle: "Private Groups",
        description: "Bespoke gatherings for those who seek the extraordinary. Wild adventures and culinary journeys for your inner circle.",
        image: "/images/Home/The Circle DSCF1577.JPG",
        link: "/contact"
    }
];

const PersonaCard = ({ persona, index, setActiveIndex }: { persona: typeof personas[0], index: number, setActiveIndex: (i: number | null) => void }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={ref}
            key={persona.id}
            className="relative group overflow-hidden rounded-2xl cursor-pointer lg:h-full min-h-[500px] "
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <Link href={persona.link} className="block w-full h-full relative overflow-hidden">
                {/* Image Container with Parallax */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105">
                    {/* Dark Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>

                    <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] relative">
                        <Image
                            src={persona.image}
                            alt={persona.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Content Overlay - Cinematic Title */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12">

                    {/* Top Number */}
                    <div className="text-xs font-mono text-white/70 pb-4 flex justify-between">

                    </div>

                    {/* Bottom Info */}
                    <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                        <h3 className="text-4xl md:text-5xl font-serif italic text-white mb-2 leading-none ">
                            {persona.title}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/80 mb-6 font-medium ">
                            {persona.subtitle}
                        </p>

                        {/* Hidden Description Reveal */}
                        <div className="max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <p className="text-sm font-medium leading-relaxed text-white/90 max-w-[95%] border-l-2 border-white/40 pl-4 py-2 ">
                                {persona.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function WhoThisIsForCinematic() {
    const [, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative bg-[#faf8f5] text-[#1c1c1c] overflow-hidden">

            {/* Background Texture - Inline CSS pattern instead of external request */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>

            <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header - Minimal & Editorial */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                    >
                        <span className="block text-xs uppercase tracking-[0.3em] text-[#1c1c1c]/60 mb-4">Curated Personas</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-[#1c1c1c]">
                            Designed for <span className="italic ">Visionaries</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1.0 }}
                        className="max-w-xs text-right hidden md:block"
                    >
                        {/* <p className="text-sm font-medium text-[#1c1c1c]/60 leading-relaxed">
                            Every retreat is bespoke. Identify your archetype and let us craft the perfect escape.
                        </p> */}
                    </motion.div>
                </div>

                {/* The Cinematic Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                    {personas.map((persona, index) => (
                        <PersonaCard key={persona.id} persona={persona} index={index} setActiveIndex={setActiveIndex} />
                    ))}
                </div>

            </div>
        </section>
    );
}
