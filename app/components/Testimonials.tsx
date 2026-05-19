"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "Aurora is the dream person to create and coordinate with! A wonderful experience from beginning to end! Everything was accomplished so beautifully and impeccably. She is truly the very best and we couldn't be more grateful!",
        author: "V.A., Model"
    },
    {
        quote: "Lost Coast Getaways planned my family's vacation in Shelter Cove. What a beautiful town. Her planning was excellent. We received an itinerary way before arrival and had a massage, charter boat fishing (we caught 3 fish in the same line every 3 seconds), beach combing (I found a starfish), kayak rental, and stayed at an outdoor jacuzzi hotel. Watching the sunset in the jacuzzi and not having to call or check reservations made my vacation so much more enjoyable.",
        author: "H.K., International Artist"
    },
    {
        quote: "Aurora did an amazing job planning our event. Her creativity, attention to detail, and calm approach made the entire process stress-free. Everything came together perfectly, and we couldn’t have asked for a better experience.",
        author: "T.W., Business Owner"
    },
    {
        quote: "I've worked with Lost Coast Getaways in a professional capacity and it's been a great experience. She's thoughtful, responsive, and clearly cares about the people she works with and the guest experience. I've enjoyed supporting her through ReFlowQR and truly admire how she runs her business.",
        author: "A.S., Software Engineer"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        }
    };

    return (
        <section className="py-28 md:py-28 bg-white px-6">
            <div className="max-w-4xl mx-auto text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="uppercase text-xs tracking-[0.2em] font-medium text-brand-accent/60 block mb-6">What Our Friends Are Saying</span>
                   
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 z-10 w-10 h-10 rounded-full bg-brand-mist/5 hover:bg-brand-mist/10 text-brand-mist transition-colors hidden md:flex items-center justify-center"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 z-10 w-10 h-10 rounded-full bg-brand-mist/5 hover:bg-brand-mist/10 text-brand-mist transition-colors hidden md:flex items-center justify-center"
                    >
                        <ChevronRight size={16} />
                    </button>

                    <div
                        className="overflow-hidden min-h-[200px] flex items-center justify-center touch-pan-y cursor-grab active:cursor-grabbing"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="px-4"
                            >
                                <p className="text-base md:text-lg font-light italic text-[#5a5a5a] leading-relaxed mb-10">
                                    &quot;{testimonials[currentIndex].quote}&quot;
                                </p>

                                <div className="w-10 h-1 bg-[rgb(201,168,76)]/30 mx-auto mb-6"></div>

                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-mist/60">
                                    {testimonials[currentIndex].author}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[rgb(201,168,76)] w-4" : "bg-brand-mist/20 hover:bg-brand-mist/40"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
