"use client";

import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import About from './components/About';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Lazy-load below-fold components to reduce initial bundle size
const WhoThisIsFor = dynamic(() => import('./components/WhoThisIsFor'));
const TheExperience = dynamic(() => import('./components/TheExperience'));
const Accommodations = dynamic(() => import('./components/Accommodations'));
const EnquireCTA = dynamic(() => import('./components/EnquireCTA'));
const Footer = dynamic(() => import('./components/Footer'));

const ParallaxSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);

  return (
    <motion.div
      className={`relative ${className} z-10`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div ref={ref} className="relative">
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Navbar />

      {/* Hero Section with Sticky Curtain Effect */}
      <div className="relative h-screen sticky top-0 z-0">
        <HeroCinematic />
      </div>

      {/* Content Sections that slide over the Hero */}
      <div className="relative z-10 bg-[#faf8f5]">
        <ParallaxSection>
          <About />
        </ParallaxSection>

        <ParallaxSection>
          <WhoThisIsFor />
        </ParallaxSection>
        <ParallaxSection>
          <TheExperience />
        </ParallaxSection>
      </div>

      {/* Accommodations - Sticky to allow CTA to slide over */}
      <div className="sticky top-0 z-0 md:min-h-screen bg-[#faf8f5] flex flex-col md:justify-center sm-pt-10 md:pt-20">
        <Accommodations />
      </div>

      {/* CTA & Footer - Slide over Accommodations */}
      <div className="relative z-20 bg-brand-dark">
        <EnquireCTA />
        <Footer />
      </div>
    </main>
  );
}
