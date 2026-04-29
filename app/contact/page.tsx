"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';

import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SmoothScroll from '../components/SmoothScroll';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
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

                {/* Hero Section */}
                <section ref={heroRef} className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
                    <motion.div
                        style={{ y, opacity }}
                        className="absolute inset-0 w-full h-[120%]"
                    >
                        <Image
                            src="/images/contact.png"
                            alt="Contact Hero"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto mt-16 md:mt-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
                        >
                            The Coast Is Ready.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed mb-8"
                        >
                           Untamed. Unhurried. Waiting. Tell us what you're looking for — we'll handle everything else.

                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm md:text-base font-semibold tracking-widest uppercase"
                        >
                            <span className="flex items-center gap-3">
                                <MapPin size={16} className="text-[#c9a84c]" /> Shelter Cove, CA
                            </span>

                            <a href="tel:707-300-0960" className="flex items-center gap-3 hover:text-[#c9a84c] transition-colors">
                                <Phone size={16} className="text-[#c9a84c]" /> 707-300-0960
                            </a>

                            <a href="mailto:lostcoastgetaway@gmail.com" className="flex items-center gap-3 hover:text-[#c9a84c] transition-colors normal-case tracking-widest">
                                <Mail size={16} className="text-[#c9a84c]" /> lostcoastgetaway@gmail.com
                            </a>
                        </motion.div>
                    </div>

                </section>

                {/* Simple Centered Contact Form */}
                <ContactForm />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
