"use client";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap } from "lucide-react";

export default function AboutBio() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for image
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="relative pt-28 md:pt-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left: Artistic Image Composition */}
                <motion.div
                    className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:h-[800px] overflow-hidden rounded-3xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <Image width={1920} height={1080}
                            src="/images/a1.jpg"
                            alt="Aurora - Founder of Lost Coast Getaways"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/images/14.jpg";
                            }}
                        />
                    </motion.div>

                    {/* Floating Artistic Element */}
                    <motion.div
                        className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 max-w-xs shadow-lg border-l-4 border-[#c9a84c] rounded-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <p className="font-serif italic text-lg text-[#1c1c1c] leading-snug">
                            &quot;Your time is sacred. Your presence, the only agenda.&quot;
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right: Modern Text Layout */}
                <div className="flex flex-col justify-center space-y-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="block text-xs uppercase tracking-[0.3em] text-[#c9a84c] mb-4 font-medium">
                            Meet the Founder
                        </span>
                        <h2 className="text-6xl md:text-6xl font-serif text-[#1c1c1c] leading-none mb-6">
                            Aurora
                        </h2>
                        <div className="w-24 h-[1px] bg-[#1c1c1c]/20"></div>
                    </motion.div>

                    <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-[#1c1c1c]/80 pr-4 md:pr-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-6">
                                <span className="text-[#1c1c1c] font-normal">Lost Coast Getaways</span> is where a lifelong dream found its landscape. 
                                Aurora carries more than a decade of Manhattan&apos;s most refined celebrations into the wild stillness of the coast — where sophistication dissolves into nature, and nature becomes the ceremony.
                            </p>
                            <p className="mb-6 font-medium text-[#1c1c1c]">Rooted in Craft. Born of the World.</p>
                            <p className="mb-6">
                                From the ateliers of Barcelona to the galleries of Seoul, the warmth of Buenos Aires to the ambition of Manhattan — a life lived across cultures leaves its mark.
                            </p>
                            <p className="mb-6">
                                Lost Coast Getaways carries that inheritance. The unhurried attention of European craftsmanship. The soulfulness of globally inspired living. And the quiet brushstroke of a mother&apos;s artistry, passed down and reimagined in every experience we create.
                            </p>
                            <p className="mb-6">
                                This is not simply an events company. It is a vision — brought to American shores with intention, care, and a deep reverence for the beauty of the made-by-hand.
                            </p>
                            <p>
                                Her intention is singular: to clear the space between you and the present moment. Every detail quietly disappears so that only the experience remains.
                            </p>
                        </motion.div>
                    </div>

                    {/* Credentials - Styled */}
                    <div className="pt-8 space-y-6 border-t border-[#1c1c1c]/10">
                        <motion.div
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="p-2 bg-[#faf8f5] rounded-full text-[#c9a84c]">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1c1c1c] mb-1">Education</h4>
                                <div className="text-sm text-[#5a5a5a] leading-relaxed">
                                    <p>University of Pennsylvania</p>
                                    <p>Bachelor, New York Institute of Technology</p>
                                    <p>Hospitality Management, <span className="italic text-[#c9a84c]">summa cum laude</span></p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="p-2 bg-[#faf8f5] rounded-full text-[#c9a84c]">
                                <Award size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1c1c1c] mb-1">Experience</h4>
                                <p className="text-sm text-[#5a5a5a] leading-relaxed">
                                    11+ Years Industry Experience
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
