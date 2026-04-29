"use client";

import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutBio from '../components/AboutBio';
import ValuesSection from '../components/ValuesSection';
import PhotoCarousel from '../components/PhotoCarousel';
import ImageStackSection from '../components/ImageStackSection';
import Testimonials from '../components/Testimonials';
import EnquireCTA from '../components/EnquireCTA';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

export default function AboutPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen">
                <Navbar />

                {/* Sticky Hero Section */}
                <div className="sticky top-0 z-0 h-[78vh] md:h-[80vh]">
                    <AboutHero />
                </div>

                {/* Content that scrolls OVER the hero */}
                <div className="relative z-10 bg-white shadow-2xl rounded-t-3xl mt-[-2rem] md:mt-0 md:rounded-none">
                    <AboutBio />
                    <PhotoCarousel />
                    <ValuesSection />
                    <ImageStackSection />
                    <Testimonials />
                </div>

                {/* Sticky CTA - Sits behind Footer but covers Hero */}
       
                    <EnquireCTA />
        

                {/* Footer scrolls OVER CTA */}
                <div className="relative z-20 bg-[#faf8f5]">
                    <Footer />
                </div>
            </main>
        </SmoothScroll>
    );
}
