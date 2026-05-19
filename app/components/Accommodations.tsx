"use client";

import { motion } from 'framer-motion';
import { Coffee, Mic, Camera, Waves, Sparkles } from 'lucide-react';

export default function PastEvents() {
    return (
        <section className="relative pt-10 md:pt-0 pb-20 sm:pb-10 bg-[#faf8f5] overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-4 md:px-6">

                <div className="flex flex-col items-center max-w-7xl mx-auto relative z-10">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-4 md:mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block text-[10px] md:text-sm uppercase tracking-[0.3em] text-[#c9a84c] mb-2 md:mb-4">
                            California Coastal Commission x Lost Coast Getaways
                        </span>
                        <h2 className="text-2xl md:text-5xl font-serif text-[#1c1c1c] mb-3 md:mb-6">Past Events</h2>
                        <div className="w-16 h-[1px] bg-[#c9a84c]/30 mx-auto"></div>
                    </motion.div>

                    {/* Main Description */}
                    <motion.p
                        className="text-sm md:text-xl font-light text-[#1c1c1c] leading-relaxed text-center mb-4 md:mb-8 max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        California Coastal Commission x Lost Coast Getaways
Discover the dramatic 7'8" King Tide projected at 10:06 AM on Jan. 3 from the stunning ocean views at Inn of the Lost Coast's Sinkyone Room.

                    </motion.p>

                    {/* Info Block - Stylish */}
                    <motion.div
                        className="flex flex-row gap-4 md:gap-12 items-center justify-center mb-6 md:mb-12 text-xs tracking-widest uppercase border-y border-[#1c1c1c]/10 py-3 md:py-4 w-full max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></div>
                            <span className="text-[#5a5a5a]">Whitethorn, CA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></div>
                            <span className="text-[#1c1c1c] font-medium">Jan. 3, 9-11 AM</span>
                        </div>
                    </motion.div>

                    {/* Schedule Grid - Premium Cards */}
                    <motion.div
                        className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <ScheduleCard
                            time="9:00 AM"
                            event="Complimentary coffee & refreshments"
                            icon={<Coffee strokeWidth={1} className="w-6 h-6" />}
                        />
                        <ScheduleCard
                            time="9:30 AM"
                            event="Speaker | King Tides on our community"
                            icon={<Mic strokeWidth={1} className="w-6 h-6" />}
                        />
                        <ScheduleCard
                            time="10:06 AM"
                            event="7'8&quot; King tide photograph project!"
                            icon={<Camera strokeWidth={1} className="w-6 h-6" />}
                        />
                        <ScheduleCard
                            time="11:00 AM"
                            event="Event conclusion & Networking"
                            icon={<Sparkles strokeWidth={1} className="w-6 h-6" />}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function ScheduleCard({ time, event, icon }: { time: string, event: string, icon: React.ReactNode }) {
    return (
        <div className="relative bg-white/60 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[#1c1c1c]/5 shadow-sm flex flex-col items-center text-center overflow-hidden h-full">
            <div className="relative z-10 flex flex-col h-full justify-between items-center w-full">
                <div className="text-[#c9a84c] mb-1 md:mb-3 opacity-100">
                    {icon}
                </div>
                <div>
                    <span className="font-serif text-base md:text-xl text-[#1c1c1c] block mb-1 md:mb-2">{time}</span>
                    <div className="w-8 h-[1px] bg-[#1c1c1c]/10 mx-auto mb-1 md:mb-3"></div>
                    <span className="text-xs md:text-sm text-[#5a5a5a] font-light leading-snug md:leading-relaxed block">{event}</span>
                </div>
            </div>
        </div>
    );
}
