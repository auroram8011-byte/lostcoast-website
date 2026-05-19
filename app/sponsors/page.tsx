"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import SmoothScroll from '../components/SmoothScroll';

const SPONSOR_SHEET_URL = process.env.NEXT_PUBLIC_SPONSOR_SHEET_URL || "";

export default function SponsorsPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const sponsors = [
        {
            name: "Mapme",
            image: "/images/mampe.png",
            link: "https://mapme.com/solutions/event-maps/",
            description: "Interactive mapping solutions for events and destinations."
        },
        {
            name: "ReflowQR",
            image: "/images/reflow.png",
            link: "https://www.reflowqr.com/#overview",
            description: "Dynamic QR codes that bridge the physical and digital worlds."
        },
        {
            name: "SoftEXedge",
            image: "/images/image.png",
            link: "https://www.softexedge.in",
            description: "Empowering businesses with innovative digital solutions."
        }
    ];

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
                            src="/images/sph.png"
                            alt="Sponsors Hero"
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
                          Thank You, <span className="italic text-[#c9a84c]">Sponsors</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
                        >
                            We don't simply partner — we align. Each organization we stand behind carries the same quiet commitment to this land, this community, and the experiences that emerge from both.

                        </motion.p>
                    </div>
                </section>

                {/* Sponsors Grid */}
                <section className="py-20 md:py-28 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c] mb-6">Sponsored By</h2>
                                <div className="w-24 h-1 bg-[#c9a84c] mx-auto"></div>
                            </Reveal>
                        </div>
                        <div className="flex flex-wrap justify-center gap-12">
                            {sponsors.map((sponsor, index) => (
                                <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)] max-w-[400px]">
                                    <Reveal delay={index * 0.15} className="group h-full">
                                    <Link href={sponsor.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        <div className="bg-white rounded-2xl p-8  transition-all duration-500 border border-brand-mist/5 h-full flex flex-col items-center justify-between group-hover:-translate-y-2">
                                            <div className="w-full aspect-[3/2] flex items-center justify-center p-6 mb-6 bg-brand-primary/5 rounded-xl overflow-hidden">
                                                <Image width={1920} height={1080}
                                                    src={sponsor.image}
                                                    alt={sponsor.name}
                                                    className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="text-xl font-serif text-[#1c1c1c] mb-3 group-hover:text-[#c9a84c] transition-colors">{sponsor.name}</h3>
                                                <p className="text-brand-accent text-sm leading-relaxed">{sponsor.description}</p>
                                            </div>
                                            <div className="mt-8">
                                                <span className="text-xs uppercase tracking-widest text-[#1c1c1c] border-b border-[#1c1c1c]/20 pb-1 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-all">Visit Website</span>
                                            </div>
                                        </div>
                                    </Link>
                                </Reveal>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* Application Form Section */}
                <section className="pb-28 bg-white relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl font-serif text-brand-mist mb-6">Become a Sponsor</h2>
                                <p className="text-brand-accent max-w-2xl mx-auto">
                                    Join our community of partners. Apply below to showcase your brand at our next exclusive retreat or community event.
                                </p>
                            </Reveal>
                        </div>

                        <SponsorForm />
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}

function SponsorForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        const params = new URLSearchParams();
        params.append('email', formData.get('email') as string || '');
        params.append('name', formData.get('name') as string || '');
        params.append('phone', '');
        params.append('company', formData.get('company') as string || '');
        params.append('source', `Sponsor Form | Website: ${formData.get('website') || 'N/A'} | Message: ${formData.get('message') || 'N/A'}`);
        params.append('updates', 'Sponsor Application');
        params.append('timestamp', new Date().toISOString());

        try {
            await fetch(SPONSOR_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params,
            });

            setSubmitStatus('success');
            form.reset();
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Reveal delay={0.2} className="bg-white p-8 md:p-12 border border-brand-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.08)] rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Company Name *</label>
                        <input type="text" name="company" required className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="Your Company" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Contact Person *</label>
                        <input type="text" name="name" required className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="Full Name" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Email Address *</label>
                        <input type="email" name="email" required className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="email@company.com" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Website</label>
                        <input type="url" name="website" className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="https://..." />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Sponsorship Message</label>
                    <textarea name="message" rows={4} className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="Tell us about your brand and why you'd like to partner with us..."></textarea>
                </div>

                {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-center font-medium">
                        ✓ Thank you! Your sponsorship application has been submitted.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-center font-medium">
                        Something went wrong. Please try again or email us directly.
                    </div>
                )}

                <div className="text-center pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 text-white font-bold tracking-[0.2em] mt-4 shadow-md bg-[#1c1c1c] hover:bg-[#c9a84c] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {isSubmitting ? 'SENDING...' : 'APPLY NOW'}
                    </button>
                </div>
            </form>
        </Reveal>
    );
}
