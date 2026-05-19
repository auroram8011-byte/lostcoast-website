"use client";
import Image from "next/image";
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import EnquireCTA from '../components/EnquireCTA';
import { motion, useScroll, useTransform } from "framer-motion";
import SmoothScroll from '../components/SmoothScroll';

export default function YouthCoachingPage() {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

    const calendlyUrl = "https://calendly.com/aurora11222025/30min";

    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen font-source overflow-x-hidden">
                <Navbar />

                {/* HERO SECTION - CLEAN */}
                <section ref={heroRef} className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
                    <motion.div
                        style={{ y, opacity }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image 
                            width={1920} height={1080}
                            src="/images/youth.png"
                            alt="Youth Coaching Hero"
                            className="w-full h-full object-cover object-center"
                            priority
                        />
                    </motion.div>
                </section>

                {/* IMAGES SECTION */}
                <section className="py-12 md:py-24 px-6 bg-white">
                    <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-20">
                        {/* Image 1 */}
                        <Reveal>
                            <a 
                                href={calendlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl group"
                            >
                                <Image 
                                    fill
                                    src="/images/yc-1.png"
                                    alt="Youth Coaching 1"
                                    className="object-cover transition-transform duration-1000 "
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors "></div>
                            </a>
                        </Reveal>

                        {/* Image 2 */}
                        <Reveal>
                            <a 
                                href={calendlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[4/3] md:aspect-video overflow-hidden rounded-sm shadow-2xl group bg-white/5"
                            >
                                <Image 
                                    fill
                                    src="/images/yc-2.png"
                                    alt="Youth Coaching 2"
                                    className="object-contain transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </a>
                        </Reveal>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}