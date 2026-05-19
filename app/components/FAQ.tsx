"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Lost Coast Getaways?",
        answer: "A curated space for stillness. We design immersive coastal experiences along California's remote Lost Coast — where personalized stays, group retreats, and nature-led adventures exist for one purpose: to help you return to yourself."
    },
    {
        question: "Where are you located?",
        answer: "Shelter Cove, California. Tucked along one of the most unspoiled stretches of the Pacific coastline."
    },
    {
        question: "What do you offer?",
        answer: "Ocean-view retreat homes. Nature-immersed accommodations. Thoughtfully arranged group experiences. And the kind of full-service planning that makes everything feel effortless."
    },
    {
        question: "What awaits you here?",
        answer: "Hiking trails that lead nowhere and everywhere. The rhythm of the ocean from a charter boat. Horses, surf, sound, spa, and the rare gift of doing absolutely nothing at all."
    }
];

export default function FAQ() {
    return (
        <section className=" bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c]">Questions & Answers</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }: { faq: FAQItem }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#1c1c1c]/10 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-left group"
            >
                <span className="text-lg md:text-xl font-serif text-[#1c1c1c] group-hover:text-[#c9a84c] transition-colors">
                    {faq.question}
                </span>
                <span className="p-2 rounded-full border border-[#1c1c1c]/10 text-[#1c1c1c] transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:text-white group-hover:border-[#c9a84c]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[#5a5a5a] font-light leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
