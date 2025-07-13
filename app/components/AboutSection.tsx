"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animation";

const StatCard = ({ number, text }) => (
  <div className="bg-card-bg p-6 rounded-lg border border-border text-center">
    <div className="text-4xl font-bold text-accent">{number}</div>
    <div className="text-sm mt-2 text-text/80">{text}</div>
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <motion.div
        className="container mx-auto ..."
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <SectionHeader title="About Me" />

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column: Bio */}
            <div className="md:w-1/2">
              <p className="text-text/80 leading-relaxed text-lg">
                I am a passionate software engineer who transforms ideas into
                exceptional digital experiences. With a deep understanding of
                both frontend artistry and backend architecture, I craft
                solutions that are not just functional, but truly remarkable.
              </p>
              <p className="text-text/80 leading-relaxed text-lg mt-6">
                My journey in tech is driven by an obsession with clean code,
                innovative problem-solving, and the belief that great software
                should feel effortless to use. I specialize in the modern stack,
                leveraging Python/FastAPI for robust backends and
                Next.js/TypeScript for dynamic frontends.
              </p>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <StatCard number="3+" text="Years Experience" />
              <StatCard number="10+" text="Projects Completed" />
              <StatCard number="5+" text="Programming Languages" />
              <StatCard number="∞" text="Coffee Cups" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
