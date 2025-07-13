"use client";
import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animation";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto text-center px-4">
        <motion.div
          className="container mx-auto ..."
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Let&apos;s Build Something Amazing.
          </h2>
          <p className="text-lg md:text-xl text-text/70 max-w-2xl mx-auto mb-8">
            Ready to bring your next project to life? I&apos;d love to hear
            about your ideas and discuss how we can work together.
          </p>
          <a
            href="mailto:bensmaine.kamel1@gmail.com"
            className="inline-block bg-accent text-background font-bold py-3 px-8 rounded-lg 
                       hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
