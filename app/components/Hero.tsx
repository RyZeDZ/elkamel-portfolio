"use client";

import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import ScrollPrompt from "./ScrollPrompt";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-24 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Crafting high-performance applications,
          <br />
          from <span className="text-accent">concept</span> to code.
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-text/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Bensmaine Mohamed // Software Engineer
        </motion.p>
      </div>
      <ScrollPrompt />
    </section>
  );
}
