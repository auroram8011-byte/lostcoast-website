"use client";
import Image from "next/image";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

    return (
        <section ref={sectionRef} id="about" className="relative pt-28 overflow-hidden bg-[#faf8f5] text-[#1c1c1c]">
            {/* Background Texture - Removed as per user request */}

            <div className="relative max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ">

                {/* Left: The Narrative - Editorial Style */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative z-10 px-4 lg:pl-18 lg:pr-0 pb-16 lg:pb-38">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Small Label */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-[#1c1c1c]/30"></div>
                            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#1c1c1c]/60">Our Philosophy</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-2xl md:text-2xl lg:text-[1.5rem] font-serif leading-[1.0] mb-10 text-[#1c1c1c]">
                            Guided by the traditions of grand hospitality, our work reflects intuitive service, understated elegance, and a steadfast dedication to the guest experience.

                            {/* <span className="italic font-light text-[#5a5a5a]">Edge of the World.</span> */}
                        </h2>

                        {/* Body Copy with Drop Cap */}
                        <div className="space-y-8 pr-0 lg:pr-12">
                            <p className="text-lg md:text-lg font-light leading-relaxed text-[#4a4a4a]">
                                <span className="float-left text-6xl md:text-7xl font-serif mr-3 mt-[-8px] leading-none text-[#1c1c1c]">T</span>
                               ucked away in the wild beauty of Shelter Cove, California, along the <strong><em>untouched shores</em></strong> of the Lost Coast, we create corporate retreats and more that feel less like events and more like experiences. Our mission is simple: to take teams out of their usual routine and immerse them in a place where connection, creativity, and adventure thrive.
                            </p>

                            <p className="text-base md:text-lg font-light leading-relaxed text-[#4a4a4a]">
                                Even before the moment your group arrives, everything is taken care of—luxury shuttles, cozy tents under the stars or lush stays, air taxi, charter boat fishing, chef curated meals - and a full lineup of activities. Whether it’s sunrise yoga, hiking through ancient forests, surfing the Pacific waves, or gathering around a campfire after a day of <strong><em>team-building</em></strong>, each retreat is designed to leave your team refreshed, inspired, and reconnected.
                                <br></br>

                                    We don’t just plan events—we craft journeys that balance work and play, reflection and adventure, comfort and the wild. 
                                    <br></br>
                                         On the Lost Coast, your team will discover not just a retreat, but a <strong><em>reset</em></strong>. 

                            </p>
                        </div>

                        {/* Signature Element */}
                        <div className="mt-12 flex flex-col gap-6">
                            <div className="font-serif italic text-3xl opacity-70 text-[#1c1c1c]">
                                The Lost Coast Getaways Team
                            </div>

                            {/* Minimal Magnetic Link */}
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b border-[#1c1c1c]/20 pb-1 hover:border-[#1c1c1c] transition-colors duration-500 w-fit"
                            >
                                <span>Read Our Full Story</span>
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Immersive Visuals */}
                <div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] md:h-[700px]">
                    <motion.div
                        style={{ y, scale: imageScale }}
                        className="relative w-full h-full"
                    >
                        {/* Main Image */}
                        <div className="absolute inset-0 lg:left-20 w-full h-full overflow-hidden rounded-3xl">
                            <Image
                                src="/images/14.jpg"
                                alt="Misty Coastline"
                                fill
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                className="object-cover object-center lg:grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-out"
                                loading="lazy"
                            />
                        </div>

                        {/* Floating Caption Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute inset-0 m-auto h-fit w-[90%] lg:inset-auto lg:bottom-8 lg:left-0 lg:m-0 bg-white p-6 rounded-3xl max-w-xs z-20"
                        >
                            <p className="font-serif italic text-lg leading-snug text-[#1c1c1c]">
                                &ldquo;I am drawn to the quiet moments,
where the world softens into light and breath.
Here, creativity and conversation drift like silk,
and time unfolds as an atelier,
a sanctuary for those who seek beauty, connection, and calm
                            </p> 
                            <span className="block mt-3 text-[10px] uppercase tracking-widest opacity-50">— Anonymous</span>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
