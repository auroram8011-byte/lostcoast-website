"use client";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoCarousel from '../components/PhotoCarousel';
import EnquireCTA from '../components/EnquireCTA';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Waves, Flame, Utensils, MapPin } from 'lucide-react';


export default function AccommodationsPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen">
                <Navbar />

                {/* ARTISTIC HERO SECTION - 80vh */}
                <section ref={heroRef} className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">

                    {/* Parallax Background */}
                    <motion.div
                        style={{ y, opacity }}
                        className="absolute inset-0 w-full h-[120%]"
                    >
                        <Image width={1920} height={1080}
                            src="/images/2h.png"
                            alt="Luxury Accommodations"
                            className="w-full h-full object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">


                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
                        >
                            Where You <span className="italic text-[#c9a84c]">Stay.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed"
                        >
                            Raw coastline. Considered comfort. Where ancient redwoods meet the open ocean — and stillness becomes something you can finally feel.
                        </motion.p>
                    </div>

                    {/* Scroll Indicator */}

                </section>

                {/* EDITORIAL CONTENT SECTION - Redesigned Organic Layout */}
                <section className="pt-24 md:pt-24 bg-white px-6">
                    <div className="max-w-5xl mx-auto">

                        {/* Centered Editorial Header */}
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-5xl md:text-7xl font-serif text-[#1c1c1c] leading-none mb-12">
                                    Flagship <span className="italic text-[#c9a84c]">Locations.</span>
                                </h2>
                            </motion.div>
                        </div>

                        {/* Map Section */}
                        <MapSection />

                        {/* Amenities - Minimalist Horizontal Flow */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8  pt-12">
                            <AmenityItemMinimal icon={Waves} text="Ocean Views" />
                            <AmenityItemMinimal icon={Flame} text="Private Fireplaces" />
                            <AmenityItemMinimal icon={Utensils} text="Fine Dining" />
                            <AmenityItemMinimal icon={MapPin} text="Shelter Cove" />
                        </div>

                    </div>
                </section>

                {/* Photo Carousel */}
                <section className="bg-white overflow-hidden  ">
                    <PhotoCarousel />
                </section>

                {/* FAQ Section */}
                <FAQ />

                {/* General Contact Form */}
                <ContactForm />

                <EnquireCTA />
                <Footer />

            </main>
        </SmoothScroll>
    );
}



function AmenityItemMinimal({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Icon size={18} className="text-[#c9a84c]" />
            <span className="text-sm md:text-base text-[#1c1c1c] font-light tracking-wide uppercase">{text}</span>
        </div>
    );
}

function MapSection() {
    const [isMapActive, setIsMapActive] = useState(false);

    return (
        <section className="relative w-full py-10 flex items-center justify-center">
            <div
                className="relative w-full h-[50vh] md:h-[80vh] bg-[#1c1c1c] rounded-sm overflow-hidden mx-auto"
            >
                <div className="absolute inset-0 opacity-40">
                    <Image width={1920} height={1080} src="/images/map-bg.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 w-full h-full">
                    <iframe
                        src="https://viewer.mapme.com/lostcoastgetaways"
                        allowFullScreen
                        allow="fullscreen; geolocation"
                        width="100%"
                        height="100%"
                        className={`w-full h-full border-none transition-all duration-700 ${!isMapActive ? 'pointer-events-none' : ''}`}
                        title="Lost Coast Map"
                    ></iframe>

                    {/* Tap to activate overlay */}
                    {!isMapActive && (
                        <button
                            onClick={() => setIsMapActive(true)}
                            className="absolute inset-0 z-20 flex items-center justify-center"
                        >
                            <span className="bg-white/90 backdrop-blur-sm text-[#1c1c1c] text-sm font-medium tracking-wider uppercase px-6 py-3 rounded-full shadow-lg">
                                Click to interact with map
                            </span>
                        </button>
                    )}

                    {/* Close button when active */}
                    {isMapActive && (
                        <button
                            onClick={() => setIsMapActive(false)}
                            className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm text-[#1c1c1c] text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full shadow-lg"
                        >
                            ✕ Close Map
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
