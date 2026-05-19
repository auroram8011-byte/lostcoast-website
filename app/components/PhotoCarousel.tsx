"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/16.jpg"
];

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

export default function PhotoCarousel() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextImage = useCallback(() => {
        setDirection(1);
        setMobileIndex((prev) => (prev + 1) % photos.length);
    }, []);

    const prevImage = useCallback(() => {
        setDirection(-1);
        setMobileIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }, []);

    return (
        <section className="bg-white overflow-hidden font-[family-name:var(--font-source-sans)] py-12">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-mist mb-6">Captured Moments</h2>
            </div>

            {/* Mobile: Draggable infinite loop carousel */}
            <div className="relative max-w-lg mx-auto md:hidden px-6">
                <div className="relative overflow-hidden aspect-[3/4] rounded-2xl shadow-lg touch-pan-y">
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
                                    nextImage();
                                } else if (info.offset.x > 50) {
                                    prevImage();
                                }
                            }}
                        >
                            <Image
                                width={1920}
                                height={1080}
                                src={photos[mobileIndex]}
                                alt={`Gallery image ${mobileIndex + 1}`}
                                className="w-full h-full object-cover pointer-events-none"
                                draggable="false"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Preload adjacent images */}
                    <div className="hidden">
                        <Image width={1920} height={1080} src={photos[(mobileIndex + 1) % photos.length]} alt="" />
                        <Image width={1920} height={1080} src={photos[(mobileIndex - 1 + photos.length) % photos.length]} alt="" />
                    </div>
                </div>

                {/* Mobile counter */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="text-sm text-[#1c1c1c]/50 font-light tracking-wider">
                        {mobileIndex + 1} / {photos.length}
                    </span>
                </div>
            </div>

            {/* Desktop: Auto-scrolling infinite strip */}
            <div className="relative w-full hidden md:block">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .scrolling-wrapper {
                        animation: scroll 60s linear infinite;
                    }
                    .scrolling-wrapper:hover {
                        animation-play-state: paused;
                    }
                `}} />

                <div className="flex w-max scrolling-wrapper">
                    {[...photos, ...photos].map((src, index) => (
                        <div key={index} className="relative px-4">
                            <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-lg select-none">
                                <Image width={1920} height={1080}
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    draggable="false"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
