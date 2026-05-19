"use client";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const desktopImages = [
    "/activities/Untitled.webp",
    "/activities/Untitled (17).webp",
    "/activities/Untitled (16).webp",
    "/activities/Untitled (14).webp",
    "/activities/Untitled (13).webp",
    "/activities/Untitled (12).webp",
    "/activities/Untitled (11).webp",
    "/activities/Untitled (10).webp",
    "/activities/Untitled (9).webp",
    "/activities/Untitled (8).webp",
    "/activities/1.webp",
];

const mobileImages = [
    "/activities/Untitled.webp",
    "/activities/Untitled (17).webp",
    "/activities/Untitled (16).webp",
    "/activities/Untitled (14).webp",
    "/activities/Untitled (13).webp",
    "/activities/Untitled (12).webp",
    "/activities/Untitled (11).webp",
    "/activities/Untitled (10).webp",
    "/activities/Untitled (9).webp",
    "/activities/Untitled (8).webp",
    "/activities/1.webp",
];

interface ImageStackSectionProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export default function ImageStackSection({ title = "A Story in Frames", subtitle = "", className = "" }: ImageStackSectionProps) {
    const [desktopIndex, setDesktopIndex] = useState(0);
    const [mobileIndex, setMobileIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: next/prev with infinite loop
    const nextDesktop = useCallback(() => {
        setDirection(1);
        setDesktopIndex((prev) => (prev + 1) % desktopImages.length);
    }, []);

    const prevDesktop = useCallback(() => {
        setDirection(-1);
        setDesktopIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
    }, []);

    // Mobile: next/prev with infinite loop
    const nextMobile = useCallback(() => {
        setDirection(1);
        setMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, []);

    const prevMobile = useCallback(() => {
        setDirection(-1);
        setMobileIndex((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
    }, []);

    // Desktop auto-scroll (infinite loop)
    useEffect(() => {
        if (isHovered) return;

        const autoScroll = setInterval(() => {
            nextDesktop();
        }, 3000);

        return () => clearInterval(autoScroll);
    }, [isHovered, nextDesktop]);

    // Mobile touch handlers
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
                nextMobile();
            } else {
                prevMobile();
            }
        }
    };

    // Slide animation variants
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    return (
        <section className={`bg-white relative px-0 py-12 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <motion.span
                    className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-4 block"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.span>
                <motion.h2
                    className="text-3xl md:text-5xl font-serif text-[#1c1c1c] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>
            </div>

            {/* Mobile Carousel - Draggable, infinite loop */}
            <div className="relative max-w-5xl mx-auto md:hidden px-6">
                <div className="relative overflow-hidden aspect-[3/4] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.08)] touch-pan-y bg-[#f5f3f0]">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={mobileIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 cursor-grab active:cursor-grabbing"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.3}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -50) {
                                    nextMobile();
                                } else if (info.offset.x > 50) {
                                    prevMobile();
                                }
                            }}
                        >
                            <Image
                                fill
                                src={mobileImages[mobileIndex]}
                                alt={`Story image ${mobileIndex + 1}`}
                                className="object-cover pointer-events-none"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Preload adjacent images */}
                    <div className="hidden">
                        <Image width={1080} height={1440} src={mobileImages[(mobileIndex + 1) % mobileImages.length]} alt="" />
                        <Image width={1080} height={1440} src={mobileImages[(mobileIndex - 1 + mobileImages.length) % mobileImages.length]} alt="" />
                    </div>
                </div>

                {/* Mobile Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {mobileImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > mobileIndex ? 1 : -1);
                                setMobileIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${index === mobileIndex ? 'bg-[#c9a84c] w-4' : 'bg-[#1c1c1c]/20 w-2'}`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Carousel - Arrows only, infinite loop, no drag */}
            <div
                className="relative max-w-5xl mx-auto hidden md:block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden aspect-[16/9] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.08)] mx-4">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={desktopIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <Image
                                fill
                                src={desktopImages[desktopIndex]}
                                alt={`Story image ${desktopIndex + 1}`}
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Preload adjacent images */}
                    <div className="hidden">
                        <Image width={1920} height={1080} src={desktopImages[(desktopIndex + 1) % desktopImages.length]} alt="" />
                        <Image width={1920} height={1080} src={desktopImages[(desktopIndex - 1 + desktopImages.length) % desktopImages.length]} alt="" />
                    </div>
                </div>

                {/* Arrow Buttons Below */}
                <div className="flex items-center justify-center gap-6 mt-6">
                    <button
                        onClick={prevDesktop}
                        className="w-12 h-12 flex items-center justify-center bg-white border border-[#1c1c1c]/20 hover:bg-[#c9a84c] hover:border-[#c9a84c] text-[#1c1c1c] hover:text-white rounded-full transition-all duration-300"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Desktop counter */}
                    <span className="text-sm text-[#1c1c1c]/50 font-light tracking-wider">
                        {desktopIndex + 1} / {desktopImages.length}
                    </span>

                    <button
                        onClick={nextDesktop}
                        className="w-12 h-12 flex items-center justify-center bg-white border border-[#1c1c1c]/20 hover:bg-[#c9a84c] hover:border-[#c9a84c] text-[#1c1c1c] hover:text-white rounded-full transition-all duration-300"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
