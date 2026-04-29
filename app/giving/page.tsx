"use client";
import Image from "next/image";

import { useState } from 'react';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, UtensilsCrossed, BookOpen } from "lucide-react";
import EnquireCTA from '../components/EnquireCTA';

const faqs = [
    {
        question: "How can I volunteer?",
        answer: "We welcome open hands and willing hearts. Find us at the Shelter Cove Library, or come by during a Stone Soup Pantry distribution — someone will always be there to show you the way in."
    },
    {
        question: "What does the Stone Soup Pantry need?",
        answer: "Non-perishables travel best — canned goods, pasta, rice, sealed dry snacks. Drop them at the library during operating hours. Every contribution finds its purpose."
    },
    {
        question: "Are book donations welcome?",
        answer: "Always. Lightly loved books find new life here. Bring them by during library hours. For larger collections, a quick note to us beforehand helps us make room."
    },
    {
        question: "How else can I show up?",
        answer: "Your presence matters as much as your provisions. Come to our events. Tell someone. The simplest acts of community carry the furthest."
    }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#1c1c1c]/10 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-left group"
            >
                <span className="text-lg md:text-xl font-serif text-[#1c1c1c] group-hover:text-[#c9a84c] transition-colors">
                    {question}
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
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function GivingPage() {
    const [isVideoActive, setIsVideoActive] = useState(false);

    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen overflow-x-hidden">
                <Navbar />

                {/* Hero Section */}
                <section className="relative w-full h-[80vh] flex items-center justify-center z-0">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image width={1920} height={1080}
                            src="/images/giving.png"
                            alt="Giving Back"
                            className="w-full h-full object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto ">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
                        >
                            The Land and <span className="italic text-[#c9a84c]"> Its People</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
                        >
                            The Lost Coast is not a backdrop. It is a living community — and we are humbled to be part of it.

                        </motion.p>
                    </div>
                </section>

                {/* Community Services Section */}
                <section className="px-6 py-12 md:py-20 bg-white relative overflow-hidden">
                    <div className="max-w-5xl mx-auto relative z-10">
                        {/*: Featured Image */}
                        <Reveal>
                            <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[21/9]">
                                <Image 
                                    src="/images/giving-1.png"
                                    alt="Community Giving"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Booking Section */}
                <section className="pb-12 md:pb-28 px-6 bg-brand-primary/10 overflow-hidden flex flex-col items-center justify-center">
                    <Reveal className="w-full text-center flex flex-col items-center justify-center">
                        <div className="mb-12 relative w-full max-w-5xl h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-[#1c1c1c] mx-auto">
                            <iframe
                                className={`w-full h-full object-cover ${!isVideoActive ? 'pointer-events-none' : ''}`}
                                src={isVideoActive ? "https://www.youtube.com/embed/PcmqSfr1ENY?autoplay=1&mute=0&loop=1&playlist=PcmqSfr1ENY&controls=1&showinfo=0&rel=0" : "https://www.youtube.com/embed/PcmqSfr1ENY?controls=0&showinfo=0&rel=0"}
                                title="Community Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>

                            {/* Play overlay */}
                            {!isVideoActive && (
                                <button
                                    onClick={() => setIsVideoActive(true)}
                                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/40"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-[#1c1c1c] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </button>
                            )}

                            {/* Close button when active */}
                            {isVideoActive && (
                                <button
                                    onClick={() => setIsVideoActive(false)}
                                    className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm text-[#1c1c1c] text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full shadow-lg"
                                >
                                    ✕ Close
                                </button>
                            )}
                        </div>

                        <a
                            href="https://calendly.com/aurora11222025/30min?month=2026-02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-black border border-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 mx-auto"
                        >
                            BOOK NOW
                        </a>
                    </Reveal>
                </section>

                {/* Custom FAQ Section */}
                <section className="py-24 md:py-32 px-6 bg-[#f8f6f0] border-t border-[#1c1c1c]/5 relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-16">
                                <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-4 block font-medium">
                                Getting Involved
                                </span>
                                <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c] mb-6">Frequently Asked Questions</h2>
                            </div>
                        </Reveal>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <FAQItem question={faq.question} answer={faq.answer} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
                <EnquireCTA />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
