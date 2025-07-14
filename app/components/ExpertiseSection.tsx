"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { LayoutTemplate, DatabaseZap, Wand2 } from "lucide-react";
import { sectionVariants } from "../utils/animation";
import { motion } from "framer-motion";

const ExpertiseCard = ({
  title,
  description,
  technologies,
  icon,
}: {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}) => (
  <div
    className="bg-card-bg p-8 rounded-lg border border-border 
                  hover:border-accent transition-all duration-300 group"
  >
    <div className="text-subtle mb-4 transition-colors duration-300 group-hover:text-accent">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
    <p className="text-subtle mb-6 text-[15px] leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="bg-background border border-border px-3 py-1 rounded-full text-xs text-subtle"
        >
          {tech}
        </div>
      ))}
    </div>
  </div>
);

export default function ExpertiseSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader title="Areas of Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpertiseCard
            icon={<LayoutTemplate size={28} />}
            title="Frontend Mastery"
            description="Crafting stunning, intuitive interfaces that users love to use."
            technologies={["Next.js", "React", "TypeScript", "TailwindCSS"]}
          />
          <ExpertiseCard
            icon={<DatabaseZap size={28} />}
            title="Backend Power"
            description="Architecting robust, scalable server-side solutions and APIs."
            technologies={["Python", "FastAPI", "PostgreSQL", "SQLite"]}
          />
          <ExpertiseCard
            icon={<Wand2 size={28} />}
            title="Automation & Bots"
            description="Building intelligent workflows and custom bots that save time."
            technologies={["Python Scripting", "discord.py", "API Integration"]}
          />
        </div>
      </motion.div>
    </section>
  );
}
