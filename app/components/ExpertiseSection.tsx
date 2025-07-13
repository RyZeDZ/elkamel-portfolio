"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { FaLaptopCode, FaServer, FaRobot } from "react-icons/fa";
import { sectionVariants } from "../utils/animation";
import { motion } from "framer-motion";

const ExpertiseCard = ({ title, description, technologies, icon }) => (
  <div
    className="bg-card-bg p-8 rounded-lg border border-border 
                  hover:border-accent transition-all duration-300 group"
  >
    <div className="text-3xl text-subtle mb-4 transition-colors duration-300 group-hover:text-text">
      {icon}
    </div>{" "}
    <h3 className="text-xl font-bold text-text mb-4 transition-colors duration-300 group-hover:text-accent">
      {title}
    </h3>
    <p className="text-text/80 mb-6">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="bg-background border border-border px-3 py-1 rounded-full text-xs text-text/80"
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
        className="container mx-auto ..."
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader title="Areas of Expertise" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExpertiseCard
              icon={<FaLaptopCode />}
              title="Frontend Mastery"
              description="Creating stunning, responsive interfaces that users love."
              technologies={["Next.js", "React", "TypeScript", "TailwindCSS"]}
            />
            <ExpertiseCard
              icon={<FaServer />}
              title="Backend Power"
              description="Building robust, scalable server-side solutions and APIs."
              technologies={["Python", "FastAPI", "PostgreSQL", "SQLite"]}
            />
            <ExpertiseCard
              icon={<FaRobot />}
              title="Automation & Bots"
              description="Automating workflows and creating custom Discord bots."
              technologies={[
                "Python Scripting",
                "discord.py",
                "API Integration",
              ]}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
