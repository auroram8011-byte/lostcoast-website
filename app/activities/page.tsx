"use client";
import Image from "next/image";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import HeyzineViewer from '../components/HeyzineViewer';
import ImageStackSection from '../components/ImageStackSection';
import EnquireCTA from '../components/EnquireCTA';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import SmoothScroll from '../components/SmoothScroll';

export default function ActivitiesPage() {
    const heroRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-source-sans)]">
                <Navbar />

                {/* Hero Section - Matching Accommodations/About structure */}
                <section ref={heroRef} className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
                    {/* Parallax Background */}
                    <motion.div
                        style={{ y, opacity }}
                        className="absolute inset-0 w-full h-[120%]"
                    >
                        <Image width={1920} height={1080}
                            src="/images/activity.png"
                            alt="Lost Coast Activities"
                            className="w-full h-full object-cover object-bottom"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto ">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight mb-8"
                        >
                            The Coast <span className="italic text-[#c9a84c]">Calls.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
                        >
                            Untamed. Unhurried. Unforgettable. Let the wild edges of the Lost Coast find you — whether through the rush of the surf, the silence of an ancient trail, or a moment of stillness that changes everything.
                        </motion.p>
                    </div>
                </section>
                {/* Artistic Feature Section */}
                <section className="py-12 bg-white px-6 overflow-hidden flex items-center pt-24 ">
                    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        {/* Left Image (Now Video) */}
                        <div className="w-full md:w-1/2 relative group mx-auto max-w-sm md:max-w-none">
                            <Reveal className="relative z-10 w-full h-full">
                                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] relative">
                                    <motion.video
                                        ref={videoRef}
                                        src="/images/show.mov"
                                        loop
                                        muted
                                        playsInline
                                        autoPlay
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.1 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                                </div>
                            </Reveal>
                            {/* Artistic decorative elements */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute -bottom-8 -left-8 w-48 h-48 border border-[#c9a84c]/30 rounded-3xl -z-10 hidden md:block"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute -top-10 -right-10 w-32 h-32 bg-[#1c1c1c]/5 rounded-full -z-10 hidden md:block"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <Reveal>
                                <span className="text-[#c9a84c] text-sm uppercase tracking-[0.3em] font-medium block mb-4">
                                    The Essence of Adventure
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1c1c1c] leading-[1.1]">
                                    Find Your Flow
                                </h2>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <p className="text-lg text-[#5a5a5a] font-light leading-relaxed">
                                    Every experience here moves at the pace of nature. The ocean. The trail. The silence between. Whether you're drawn to the pull of open water or the solitude of a morning hillside, something here is already waiting for you.
                                </p>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <p className="text-lg text-[#5a5a5a] font-light leading-relaxed">
                                    Our guides don't simply lead the way — they dissolve the distance between you and the land, until the landscape is no longer something you observe, but something you remember in your body.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                <ImageStackSection title="What We Offer" className="" />

                {/* Video Parallax Section */}
                {/* <VideoSection /> */}



                {/* Flipbook Section */}
                <section className="py-12 px-6 bg-white overflow-hidden">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl font-serif text-brand-mist mb-6">A Guide to What Awaits</h2>
                                <p className="text-brand-accent font-light italic text-lg">Turn the page. Let curiosity lead.</p>
                            </Reveal>
                        </div>
                        <HeyzineViewer />
                    </div>
                </section>

                {/* Additional Activities Grid (Adventure Awaits) */}
                <section className="py-12 bg-brand-primary/5 px-6">
                    <div className="max-w-7xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-serif text-brand-mist mb-6">Adventure Awaits</h2>
                                <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Sunrise Yoga", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2670&auto=format&fit=crop" },
                                { title: "Charter Boat Fishing", image: "https://images.unsplash.com/photo-1625183656263-171183307b15?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcnRlciUyMGZpc2hpbmd8ZW58MHx8MHx8fDA%3D" },
                                { title: "Team-Building Coach", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop" },
                                { title: "Surfing Lessons", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2670&auto=format&fit=crop" }
                            ].map((item, index) => (
                                <Reveal key={index} delay={index * 0.1} className="text-center group cursor-pointer">
                                    <div className="aspect-square overflow-hidden mb-4 shadow-lg rounded-sm">
                                        <Image width={1920} height={1080}
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="bg-white py-6 px-4  rounded-sm border border-brand-mist/5">
                                        <h4 className="text-xl font-serif text-brand-mist tracking-wide">{item.title}</h4>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                    </div>
                </section>

                {/* What you get Section */}
                <WhatYouGetSection />

                {/* CTA Section - Styled like EnquireCTA */}
                <EnquireCTA />

                <Footer />
            </main>
        </SmoothScroll>
    );
}

function VideoSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const width = useTransform(scrollYProgress, [0, 1], ["70%", "90%"]);

    return (
        <section ref={ref} className="pt-24 bg-white flex flex-col items-center overflow-hidden w-full px-6 md:px-0">
            <div className="text-center mb-12">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-mist mb-4">Activities you Experience</h2>
                    <p className="text-brand-accent font-light italic text-lg">A glimpse into your next adventure</p>
                </Reveal>
            </div>
            <motion.div style={{ width }} className="relative aspect-video rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-[100vw]">
                <video
                    src="/images/show.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
}

const whatYouGetItems = [
    {
        title: "Guides Who Know the Land",
        content: "Our guides carry the Lost Coast in them. They move through it with quiet expertise — pointing to what others miss, and knowing when to let the silence speak."
    },
    {
        title: "Everything You Need, Nothing You Don't",
        content: "The right gear arrives before the question does. Surfboards, fishing tackle, yoga mats — all thoughtfully prepared so your only task is to show up."
    },
    {
        title: "Flavors of the Coast",
        content: "Along the way, locally-sourced provisions and artisan beverages appear at just the right moment — small tastes of the region that linger."
    },
    {
        title: "A Journey Made for You",
        content: "No two itineraries are the same. Group sizes stay intentionally small, so the experience never feels shared — only yours."
    }
];

function WhatYouGetSection() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-4 block font-medium">
                            The Experience
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c]">What Awaits You</h2>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    {whatYouGetItems.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <WhatYouGetItem item={item} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhatYouGetItem({ item }: { item: { title: string; content: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#1c1c1c]/10 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-left group"
            >
                <span className="text-lg md:text-xl font-serif text-[#1c1c1c] group-hover:text-[#c9a84c] transition-colors">
                    {item.title}
                </span>
                <span className="p-2 rounded-full border border-[#1c1c1c]/10 text-[#1c1c1c] transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:text-white group-hover:border-[#c9a84c]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[#5a5a5a] font-light leading-relaxed">
                            {item.content}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

