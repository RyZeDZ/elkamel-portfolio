"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sectionVariants } from "../utils/animation";

const journeyData = [
  {
    label: "Full-Stack Developer",
    title: "Full-Stack Developer",
    company: "Self-Employed (Portfolio Projects)",
    date: "2023 – Present",
    content:
      "Architecting and developing full-stack applications like 'SyncFlow' and this portfolio site to demonstrate modern web development expertise using Python, FastAPI, and Next.js.",
  },
  {
    label: "Hackathon Competitor & Team Lead",
    title: "Hackathon Competitor & Team Lead",
    company: "Various Tech Competitions",
    date: "2024 - Present",
    content:
      "Led teams in high-pressure environments to rapidly prototype and build functional applications from scratch. Honed skills in problem-solving, collaboration, and applying new technologies under tight deadlines.",
  },
  {
    label: "Computer Science Student",
    title: "Computer Science Student",
    company: "Larbi Ben M'hidi University",
    date: "2024 – Present",
    content:
      "Building a deep theoretical foundation in algorithms, data structures, and software engineering principles while consistently achieving top academic standing in my class.",
  },
];

const panelVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

export default function JourneySection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const itemIndex =
    ((page % journeyData.length) + journeyData.length) % journeyData.length;
  const selectedTab = journeyData[itemIndex];

  return (
    <section id="journey" className="py-20 md:py-32 bg-background">
      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader title="Professional Journey" />

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left Column: DESKTOP-ONLY Tab Buttons */}
          <div className="hidden md:flex flex-col border-r-2 border-border pr-4">
            {journeyData.map((tab, index) => (
              <button
                key={tab.label}
                className={`relative shrink-0 p-4 w-full text-left transition-colors duration-300 ${
                  selectedTab.label === tab.label
                    ? "text-accent"
                    : "text-subtle hover:text-text"
                }`}
                onClick={() => setPage([index, index > itemIndex ? 1 : -1])}
              >
                {tab.label}
                {selectedTab.label === tab.label && (
                  <motion.div
                    className="absolute top-0 right-[-2px] w-0.5 h-full bg-accent"
                    layoutId="active-journey-indicator"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Content Display */}
          <div className="md:w-3/4 relative min-h-[250px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-bold text-text">
                    {selectedTab.title}
                  </h3>
                  <p className="text-sm text-subtle font-mono">
                    {selectedTab.date}
                  </p>
                </div>
                <p className="text-lg font-semibold text-text/80 mb-4">
                  {selectedTab.company}
                </p>
                <p className="text-subtle leading-relaxed">
                  {selectedTab.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE-ONLY Navigation Arrows */}
        <div className="mt-8 flex md:hidden justify-center items-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full border border-border text-subtle hover:text-accent hover:border-accent transition-colors"
            aria-label="Previous Item"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="font-mono text-sm text-subtle">
            {itemIndex + 1} / {journeyData.length}
          </div>
          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full border border-border text-subtle hover:text-accent hover:border-accent transition-colors"
            aria-label="Next Item"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
