"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animation";

type Project = {
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

const projects: Project[] = [
  {
    title: "Cognis - Collaborative hub for CS students",
    description:
      "Smarter notes for smarter minds. Your collaborative hub for all university CS subjects, powered by AI.",
    image: "/Cognis.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Python", "FastAPI"],
    liveUrl: "https://cognis.dev",
    sourceUrl: "https://github.com/RyZeDZ/Cognis",
  },
  {
    title: "SyncFlow - SaaS Website",
    description:
      "A modern, professional landing page for a fictional B2B SaaS company. Built with a focus on clean UI and conversion.",
    image: "/SyncFlow.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    liveUrl: "https://portfolio-syncflow-landing.vercel.app/",
    sourceUrl: "https://github.com/RyZeDZ/portfolio-syncflow-landing",
  },
  {
    title: "Pineapple AI - AI Chatbot discord bot",
    description: "An AI chatbot for Discord with a lot of fun features.",
    image: null,
    tags: ["Python", "discord.py", "SQLite"],
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=858328160654983168&permissions=379904&scope=applications.commands+bot",
    sourceUrl: undefined,
  },
];

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  sourceUrl,
}: Project) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -100, y: -100 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-lg p-[1px] overflow-hidden transition-all duration-300 group"
      style={{
        background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-accent), transparent 40%)`,
      }}
    >
      <div className="bg-card-bg rounded-[7px] h-full flex flex-col">
        <div className="relative h-52 w-full overflow-hidden bg-background/50">
          {image ? (
            <Image
              src={image}
              alt={`Screenshot of the ${title} project`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center p-4">
              <h4 className="text-2xl font-bold text-subtle text-center">
                {title}
              </h4>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
          <p className="text-subtle mb-4 flex-grow text-[15px] leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/10 border border-accent/20 text-accent font-medium px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-auto pt-4 border-t border-border/50">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-subtle hover:text-text transition-colors text-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-subtle hover:text-text transition-colors text-sm"
              >
                <Github size={16} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader title="Selected Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
