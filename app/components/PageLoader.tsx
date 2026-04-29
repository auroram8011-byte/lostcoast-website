"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const pathname = usePathname();
    const isFirstLoad = useRef(true);
    const [isLoading, setIsLoading] = useState(pathname === "/");
    const [progress, setProgress] = useState(0);

    // Animate progress counter
    useEffect(() => {
        if (!isLoading) return;
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                // Slow down as it approaches 100
                const increment = prev < 70 ? 3 : prev < 90 ? 1 : 0.5;
                return Math.min(prev + increment, 100);
            });
        }, 50);
        return () => clearInterval(interval);
    }, [isLoading]);

    useEffect(() => {
        // Only show loader on home page, first load
        if (pathname !== "/" || !isFirstLoad.current) {
            setIsLoading(false);
            return;
        }
        isFirstLoad.current = false;
        setIsLoading(true);

        let hasFinished = false;
        let minTimeElapsed = false;
        let allMediaReady = false;

        const finish = () => {
            if (hasFinished) return;
            if (!minTimeElapsed || !allMediaReady) return;
            hasFinished = true;
            setIsLoading(false);
        };

        const markMediaReady = () => {
            allMediaReady = true;
            finish();
        };

        // Minimum display time so loader is always visible
        const minTimer = setTimeout(() => {
            minTimeElapsed = true;
            finish();
        }, 500);

        // Wait for all images & videos currently in the DOM
        const waitForAllMedia = () => {
            const images = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
            const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video"));

            // Filter to only visible/meaningful images (skip tiny tracking pixels, icons < 20px, etc.)
            const meaningfulImages = images.filter((img) => {
                // Skip images that are just placeholders or tiny
                const rect = img.getBoundingClientRect();
                return rect.width > 20 && rect.height > 20;
            });

            const totalMedia = meaningfulImages.length + videos.length;

            if (totalMedia === 0) {
                markMediaReady();
                return;
            }

            let loadedCount = 0;
            const onLoad = () => {
                loadedCount++;
                if (loadedCount >= totalMedia) {
                    markMediaReady();
                }
            };

            meaningfulImages.forEach((img) => {
                if (img.complete && img.naturalHeight !== 0) {
                    onLoad();
                } else {
                    img.addEventListener("load", onLoad, { once: true });
                    img.addEventListener("error", onLoad, { once: true });
                }
            });

            videos.forEach((video) => {
                if (video.readyState >= 2) {
                    onLoad();
                } else {
                    video.addEventListener("canplay", onLoad, { once: true });
                    video.addEventListener("error", onLoad, { once: true });
                }
            });
        };

        // Max fallback — never block longer than 4s (covers slow mobile connections)
        const fallbackTimer = setTimeout(() => {
            allMediaReady = true;
            minTimeElapsed = true;
            finish();
        }, 4000);

        // Wait for DOM to settle (images may be added by React hydration / dynamic imports)
        // Use a MutationObserver to detect when images are added, then check readiness
        let checkTimeout: NodeJS.Timeout;
        let settled = false;

        const observer = new MutationObserver(() => {
            // Every time DOM changes, reset the "settled" timer
            clearTimeout(checkTimeout);
            checkTimeout = setTimeout(() => {
                if (!settled) {
                    settled = true;
                    observer.disconnect();
                    waitForAllMedia();
                }
            }, 200); // Wait 200ms of no DOM changes = settled
        });

        // Start observing after a brief hydration delay
        const initialDelay = setTimeout(() => {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });

            // Also trigger an initial check in case DOM is already stable
            checkTimeout = setTimeout(() => {
                if (!settled) {
                    settled = true;
                    observer.disconnect();
                    waitForAllMedia();
                }
            }, 300);
        }, 100);

        return () => {
            clearTimeout(initialDelay);
            clearTimeout(fallbackTimer);
            clearTimeout(minTimer);
            clearTimeout(checkTimeout);
            observer.disconnect();
        };
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="global-loader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center h-[100dvh] w-screen overflow-hidden"
                >
                    {/* Top curtain */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-1/2 bg-white"
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    />
                    {/* Bottom curtain */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"
                        initial={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    />

                    {/* Content */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center justify-center"
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Logo */}
                        <motion.img
                            src="/images/logo2.png"
                            alt="Lost Coast Getaways"
                            className="w-52 h-52 md:w-72 md:h-72 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />

                        {/* Progress bar */}
                        <motion.div
                            className="w-48 md:w-56 h-[2px] bg-[#1c1c1c]/10 rounded-full overflow-hidden -mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                className="h-full bg-[#c9a84c] rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {/* Percentage */}
                        <motion.p
                            className="mt-4 text-sm md:text-base font-light tracking-[0.2em] text-[#1c1c1c]/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {Math.round(progress)}%
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#1c1c1c]/30 font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Shelter Cove, California
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
