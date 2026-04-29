"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 0,
    title: "Camping to Indoor Stays",
    description:
      "From Private Residences and Boutique Hotels to RV & Tent Camping under the stars, experience the rugged beauty of the coastline.",
    image: "/images/16.jpg",
    features: ["Private Residences", "Boutique Hotels", "RV & Tent Camping", "Rugged Coastline Views"],
  },
  {
    id: 1,
    title: "C-Suite & Strategy Retreats",
    description:
      "White-glove retreats and high-performance escapes. Curated experiences where leaders recalibrate and reset, grounded in the science of inner leadership.",
    image: "/images/Home/The Executive DSCF1581.JPG",
    features: ["White-Glove C-Suite Retreats", "Private Strategy Gatherings", "Inner Leadership Science"],
  },
  {
    id: 2,
    title: "Coterie Adventures & Culinary",
    description:
      "Guided adventures from plant experts to bluefin tuna fishing. Culinary moments where a sushi chef transforms your catch into a shared feast.",
    image: "/images/activity.png",
    features: ["Guided Wild Adventures", "Fish-to-Table Culinary", "Private Sushi Chef", "Bluefin Tuna Catch"],
  },
  {
    id: 3,
    title: "Serenity & Sanctuary",
    description:
      "A blend of sanctuary retreat and the intimacy of a Coterie. Each experience unfolds like a quiet atelier where ideas and artistry converge.",
    image: "/images/Home/The Creator DSCF1578.JPG",
    features: ["Quiet Atelier", "Creative Conjunction", "Meaningful Connections", "Quiet Elegance"],
  },
  {
    id: 4,
    title: "Zero-Logistics Getaway",
    description:
      "A seamless journey from start to finish. We design moments that rejuvenate, inspire, and cultivate meaningful connections.",
    image: "/images/14.jpg",
    features: ["White-Glove Fleet Service", "Private Airtaxi Lifts", "Seamless Transportation"],
  },
];

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function TheExperience() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="relative bg-[#faf8f5] pt-16 md:pt-28 pb-12 md:pb-0 px-4 sm:px-6 lg:pl-36 lg:pr-0">
      <div className="max-w-[90rem] mx-auto lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: Sticky Image */}
          <div className="hidden lg:block relative h-[600px] sticky top-48">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: activeId === exp.id ? 1 : 0,
                    scale: activeId === exp.id ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-center space-y-10 lg:space-y-16 lg:py-12 lg:pb-96">

            {/* Header */}
            <div className="mb-8">
              <motion.span
                className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#c9a84c] border-b border-[#c9a84c]/30 pb-2 mb-3 sm:mb-4 inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Experience
              </motion.span>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#1c1c1c] leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
               Immersive <br />
                <span className="italic text">
              Retreatiques.
                </span>
              </motion.h2>
            </div>

            {/* Items */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={exp.id}
                  data={exp}
                  index={index}
                  setActiveId={setActiveId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  data,
  index,
  setActiveId,
}: {
  data: Experience;
  index: number;
  setActiveId: (id: number) => void;
}) {
  return (
    <motion.div
      className="group relative"
      onViewportEnter={() => setActiveId(data.id)}
      viewport={{ amount: 0.6 }}   // triggers when 60% visible
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Mobile Image */}
      <div className="lg:hidden mb-6 w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg relative">
        <Image
          src={data.image}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-2xl sm:text-4xl font-serif italic text-[#c9a84c]">0{index + 1}</span>
        <div className="h-[1px] w-12 bg-[#c9a84c]/30"></div>
      </div>

      <div className="relative z-10 pl-2 sm:pl-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1c1c1c] mb-4 sm:mb-6">
          {data.title}
        </h3>

        <p className="text-base sm:text-lg text-[#5a5a5a] font-light leading-relaxed mb-6 sm:mb-8 max-w-md">
          {data.description}
        </p>

        <ul className="space-y-3 sm:space-y-4 border-l border-[#c9a84c]/30 pl-4 sm:pl-6">
          {data.features.map((feature, i) => (
            <li
              key={i}
              className="text-sm uppercase tracking-widest text-[#1c1c1c]/70 font-medium"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
