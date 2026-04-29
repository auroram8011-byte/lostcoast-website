"use client";

import { motion } from "framer-motion";
import { Trees, Anchor, Heart, Sparkles } from "lucide-react";

const values = [
    {
        id: 1,
        title: "Nature",
        description: "Immersed in the rugged beauty of the Lost Coast, we believe in the healing power of the wild.",
        icon: Trees
    },
    {
        id: 2,
        title: "Solitude",
        description: "True luxury is silence. We curate spaces where you can disconnect to reconnect.",
        icon: Anchor
    },
    {
        id: 3,
        title: "Connection",
        description: "Whether with yourself or your community, we foster deep, meaningful human connections.",
        icon: Heart
    },
    {
        id: 4,
        title: "Detail",
        description: "Excellence is in the details. Every moment is thoughtfully designed for effortless flow.",
        icon: Sparkles
    }
];

export default function ValuesSection() {
    return (
        <section className="py-24 bg-[#faf8f5]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-medium block mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Philosophy
                    </motion.span>
                    <motion.h2
                        className="text-2xl md:text-3xl font-serif text-[#1c1c1c] mb-6 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Guided by the traditions of grand hospitality, our work reflects intuitive service, understated elegance, and a steadfast dedication to the guest experience
                    </motion.h2>
                    <div className="w-16 h-[1px] bg-[#c9a84c]/30 mx-auto"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {values.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col items-center text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                        >
                            <div className="mb-6 p-4 rounded-full bg-white border border-[#c9a84c]/20 text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                                <item.icon strokeWidth={1} size={32} />
                            </div>
                            <h3 className="text-xl font-serif text-[#1c1c1c] mb-4">{item.title}</h3>
                            <p className="text-[#5a5a5a] text-sm leading-relaxed font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
