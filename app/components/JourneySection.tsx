"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { sectionVariants } from "../utils/animation";

const journeyData = [
  {
    id: "fsd",
    role: "Full-Stack Developer",
    company: "Self-Employed (Portfolio Projects)",
    period: "2025 - Present",
    description:
      'Architecting and developing full-stack applications like "SyncFlow" and this portfolio site to demonstrate modern web development expertise using Python, FastAPI, and Next.js.',
  },
  {
    id: "hack",
    role: "Hackathon Competitor & Team Lead",
    company: "Various National Competitions",
    period: "2024 - Present",
    description:
      "Led teams in high-pressure environments to rapidly prototype solutions, honing skills in problem-solving, collaboration, and applying cutting-edge technologies under tight deadlines.",
  },
  {
    id: "cs",
    role: "Computer Science Student",
    company: "Larbi Ben M'hidi University",
    period: "2023 - Present",
    description:
      "Building a strong theoretical foundation in algorithms, data structures, and software engineering principles while consistently achieving top academic standing.",
  },
];

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState(journeyData[0].id);

  const activeJourney = journeyData.find((item) => item.id === activeTab);

  return (
    <section id="journey" className="py-20 md:py-32 bg-background">
      <motion.div
        className="container mx-auto ..."
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionHeader title="Professional Journey" />

          <div className="flex flex-col md:flex-row gap-12 mt-12">
            {/* Left Side: The "Tabs"  */}
            <div className="md:w-1/3">
              <ul className="space-y-2">
                {journeyData.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left p-4 rounded-lg transition-colors duration-300
                        ${
                          activeTab === item.id
                            ? "bg-card-bg text-accent"
                            : "text-text/70 hover:bg-card-bg/50"
                        }`}
                    >
                      <span className="font-bold text-lg">{item.role}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: The Content Display */}
            <div className="md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-lg bg-card-bg border border-border min-h-[250px]"
                >
                  {activeJourney && (
                    <>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-text">
                          {activeJourney.role}
                        </h3>
                        <span className="text-sm text-subtle font-mono">
                          {activeJourney.period}
                        </span>
                      </div>
                      <p className="text-lg text-text/80 mb-4">
                        {activeJourney.company}
                      </p>
                      <p className="text-base text-text/70 leading-relaxed">
                        {activeJourney.description}
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
