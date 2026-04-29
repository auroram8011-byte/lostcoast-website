"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5
            }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * i + 0.3,
                duration: 0.5
            }
        })
    };

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Accommodations", href: "/accommodations" },
        { name: "Activities", href: "/activities" },
        { name: "Transport", href: "/transport" },
        { name: "Youth Coaching", href: "/youth-coaching" },
        { name: "Giving", href: "/giving" },
        { name: "Sponsors", href: "/sponsors" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <nav
            id="navbar"
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg"
        >
            <div className="flex items-center justify-between px-8 py-2 w-full">
                <Link href="/" className="relative flex items-center mr-8 py-2" onClick={closeMenu}>
                    <Image
                        src="/images/logo2.png"
                        alt="Lost Coast Getaways"
                        width={240}
                        height={96}
                        className="w-auto h-12 md:h-14 object-contain brightness-0 invert"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
                    {links.slice(1).map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xs xl:text-sm tracking-widest transition-colors uppercase ${isActive ? 'text-[#c9a84c] font-bold' : 'text-white/90 font-medium hover:text-[#c9a84c]'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-[60] focus:outline-none transition-colors duration-300 text-white flex items-end flex-col justify-center gap-[6px] w-8 h-8 ml-auto"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-4 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[55] flex flex-col pt-16 px-6 h-screen w-screen overflow-hidden"
                    >
                        {/* Close Button at Top Right */}
                        <button
                            onClick={closeMenu}
                            className="absolute top-8 right-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                        >
                            <span className="text-sm font-medium tracking-widest uppercase group-hover:tracking-[0.2em] transition-all">close</span>
                            <X size={24} />
                        </button>

                        {/* Menu Links */}
                        <div className="flex flex-col items-center justify-start pt-12 flex-grow space-y-4">
                            {links.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div key={link.name} custom={i} variants={linkVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={`text-2xl md:text-4xl font-serif transition-colors block text-left md:text-center leading-relaxed ${isActive ? 'text-[#c9a84c] font-bold' : 'text-white hover:text-[#c9a84c]'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            className="pb-4 hidden md:flex flex-col items-center justify-end space-y-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.8 } }}
                        >
                            <div className="w-12 h-[1px] bg-white/20"></div>
                            <p className="text-xs text-center text-white/60 max-w-[280px] leading-relaxed">
                                We curate honest experiences and thoughtful getaways in a human dimension
                            </p>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
