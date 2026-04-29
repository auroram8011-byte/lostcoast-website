"use client";
import Image from "next/image";
import Link from "next/link";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import EnquireCTA from '../components/EnquireCTA';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import SmoothScroll from '../components/SmoothScroll';

export default function TransportPage() {
    return (
        <SmoothScroll>
            <main className="bg-[#1c1c1c] min-h-screen flex flex-col font-[family-name:var(--font-source-sans)]">
                <Navbar />

                {/* ARTISTIC HERO - Parallax */}
                <HeroSection />
                {/* NEW CONVERTING SECTION 1: The Seamless Package */}
                <section className="relative z-40 bg-white py-32 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <Reveal>
                                <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] font-medium block mb-4">
                                    Exclusive Offers
                                </span>
                                <h2 className="text-4xl md:text-6xl font-serif text-[#1c1c1c] leading-tight mb-6">
                                    The Seamless <span className="italic text-[#c9a84c]">Transfer.</span>
                                </h2>
                                <p className="text-lg text-[#5a5a5a] font-light leading-relaxed mb-6">
                                   White-glove service Sprinters to Mini Coaches will greet you at the airport.
Private-Air service with priority boarding. The quiet assurance that every transition has been considered.

                                </p>
                                {/* <p className="text-lg text-[#5a5a5a] font-light leading-relaxed mb-10">
                                    This package includes priority boarding, flexible cancellation, and a complimentary artisanal refreshment basket tailored to your dietary preferences upon arrival.
                                </p> */}
                                <Link href="/contact" className="group inline-flex items-center gap-4 text-[#1c1c1c] font-medium tracking-widest uppercase text-sm border-b border-[#1c1c1c] pb-2 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors duration-300 cursor-pointer">
                                    Add to Accommodation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </Reveal>
                        </div>
   <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="aspect-[3/4] rounded-sm overflow-hidden"
                                >
                                    <Image width={1920} height={1080} src="/images/trans/Lost Coast Getaways Luxury Fleet 2.png" alt="Luxury Fleet" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="aspect-[3/4] rounded-sm overflow-hidden mt-12"
                                >
                                    <Image width={1920} height={1080} src="/images/trans/Lost Coast Getaways Luxury Fleet.png" alt="Luxury Fleet" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>


                 {/* NEW CONVERTING SECTION 2: Charter Your Adventure */}
                <section className="relative z-40 bg-[#faf8f5] py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Reveal>
                            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] font-medium block mb-4">
                                Private Air
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif text-[#1c1c1c] mb-8">
                                Arrive at the edge of the world. On your schedule.
                            </h2>
                            <div className="w-24 h-[1px] bg-[#c9a84c] mx-auto mb-8"></div>
                            <p className="text-xl text-[#5a5a5a] font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                               Shelter Cove sits where the Lost Coast meets the sea — deliberately remote, entirely unhurried. We've arranged the one thing that changes everything: a private charter that lands directly on the airstrip at the center of town.<br></br>
                               No connections. No transfers. No hours lost to the road. Simply step off the plane and into the retreat you came for.
                            </p>
                            <Link href="/contact" className="group flex items-center justify-center gap-4 text-[#1c1c1c] font-medium tracking-widest uppercase text-sm pb-2 hover:text-[#c9a84c]  transition-colors duration-300 mx-auto">
                                Connect Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </Reveal>
                    </div>
                </section>


                {/* STICKY "SCROLL OVER" SHOWCASE SECTIONS */}
                <div className="relative">
                    <StickySection
                        image="/images/t1.png"
                        title=""
                        subtitle=""
                        desc=""
                        zIndex={10}
                    />

                    <StickySection
                        image="/images/t3.jpg"
                        title="AIR TAXI"
                        subtitle="Panoramic Skies"
                        desc=""
                        zIndex={20}
                        hideText={true}
                    />

                    <StickySection
                        image="/images/t4.jpg"
                        title="VIP CONCIERGE"
                        subtitle="White Glove Service"
                        desc=""
                        zIndex={30}
                        hideText={true}
                    />
                </div>



               

                {/* Transport FAQ Section */}
                <div className="relative z-40 bg-white">
                    <TransportFAQSection />
                    <EnquireCTA />
                    <Footer />
                </div>
            </main>
        </SmoothScroll>
    );
}

function HeroSection() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={heroRef} className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 w-full h-[120%]"
            >
                <Image width={1920} height={1080}
                    src="/images/transport.png"
                    alt="Transportation to Lost Coast"
                    className="w-full h-full object-cover object-center"
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
                    Arrive as the <span className="italic text-[#c9a84c]">Journey Begins.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
                >
                  By winding coastal road or open sky — the approach to the Lost Coast is its own kind of arrival. We make sure every mile feels intentional.

                </motion.p>
            </div>
        </section>
    );
}

function StickySection({ image, title, subtitle, desc, zIndex, hideText = false }: { image: string, title: string, subtitle: string, desc: string, zIndex: number, hideText?: boolean }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div
            ref={sectionRef}
            className="relative md:sticky md:top-0 h-[70vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ zIndex }}
        >
            {/* Parallax Image Background — parallax only on md+ */}
            <motion.div
                style={{ y: yImage }}
                className="absolute inset-0 w-full h-full md:h-[120%] hidden md:block"
            >
                <Image
                    width={1920}
                    height={1080}
                    src={image}
                    alt={title || "Transport showcase"}
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Static Image for Mobile — no parallax, proper sizing */}
            <div className="absolute inset-0 w-full h-full block md:hidden">
                <Image
                    width={1920}
                    height={1080}
                    src={image}
                    alt={title || "Transport showcase"}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content Container */}
            {!hideText && (
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:pr-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, margin: "-20%" }}
                        >
                            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] block mb-4 font-medium drop-shadow-md">
                                {subtitle}
                            </span>
                            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 uppercase leading-none drop-shadow-lg">
                                {title}
                            </h2>
                            <p className="text-base md:text-lg text-white drop-shadow-md font-medium leading-relaxed mb-10">
                                {desc}
                            </p>

                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
}

const transportFaqs = [
    {
        question: "When should I arrange transport?",
        answer: "At the same time you arrange everything else — which is to say, as early as possible. Air taxis and private vehicles move with the seasons, and the good ones go quietly."
    },
    {
        question: "Do you offer airport transfers?",
        answer: "Yes. Our ground and air services operate from San Francisco (SFO), Sacramento (SMF), and local municipal airports. Door-to-door pickup from your residence is also available — the journey begins wherever you are."
    },
    {
        question: "What can I bring on the air taxi?",
        answer: "One soft-sided overnight bag per passenger travels best. For larger luggage, our ground fleet will carry it ahead so it's waiting when you land."
    },
    {
        question: "Are your vehicles child and pet-friendly?",
        answer: "Yes to both. Safety seats are available upon request. Pets are warmly welcomed — we simply ask for a heads up so the right vehicle or aircraft is prepared for your whole family."
    }
];

function TransportFAQSection() {
    return (
        <section className="py-24 border-t border-[#1c1c1c]/10">
            <div className="max-w-4xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-4 block font-medium">
                            Need to Know
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c]">Transport FAQs</h2>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    {transportFaqs.map((faq, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <TransportFAQItem faq={faq} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TransportFAQItem({ faq }: { faq: { question: string; answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#1c1c1c]/10 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-left group"
            >
                <span className="text-lg md:text-xl font-serif text-[#1c1c1c] group-hover:text-[#c9a84c] transition-colors">
                    {faq.question}
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
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
