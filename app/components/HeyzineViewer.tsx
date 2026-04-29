"use client";

import { useState } from 'react';
import Reveal from './Reveal';

export default function HeyzineViewer() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full h-full relative group">
            <Reveal className="h-full">
                <div className="relative w-full h-[600px] md:h-[800px] bg-white rounded-xl overflow-hidden border border-brand-mist/10">
                    {/* Header/Label for the Flipbook */}
                    <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-10 px-6 py-4 border-b border-brand-mist/5 flex justify-between items-center">
                        <div>
                            <span className="text-brand-gold text-[10px] tracking-[0.3em] uppercase font-bold">Digital Guide</span>
                            <h3 className="text-brand-mist font-serif text-lg">Activity Brochure</h3>
                        </div>
                        <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                            <span className="text-[10px] text-brand-mist/40 uppercase tracking-widest">Live Preview</span>
                        </div>
                    </div>

                    {/* The actual Flipbook via Iframe */}
                    <iframe
                        src="https://heyzine.com/flip-book/76b6a3985a0999ccee73194823f33b32448f1c55"
                        className={`w-full h-full pt-16 ${!isActive ? 'pointer-events-none' : ''}`}
                        title="Lost Coast Activities Guide"
                        allowFullScreen
                    ></iframe>

                    {/* Tap to activate overlay */}
                    {!isActive && (
                        <button
                            onClick={() => setIsActive(true)}
                            className="absolute inset-0 z-20 flex items-center justify-center pt-16"
                        >
                            <span className="bg-white/90 backdrop-blur-sm text-[#1c1c1c] text-sm font-medium tracking-wider uppercase px-6 py-3 rounded-full shadow-lg">
                                Tap to interact with flipbook
                            </span>
                        </button>
                    )}

                    {/* Close button when active */}
                    {isActive && (
                        <button
                            onClick={() => setIsActive(false)}
                            className="absolute top-16 right-3 z-20 bg-white/90 backdrop-blur-sm text-[#1c1c1c] text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full shadow-lg mt-2"
                        >
                            ✕ Close
                        </button>
                    )}

                    {/* Branding/Footer Overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="px-4 py-2 bg-brand-mist/90 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] rounded-full shadow-lg border border-white/10 uppercase">
                            Interactive Experience
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
