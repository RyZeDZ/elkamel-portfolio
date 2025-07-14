"use client";
import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animation";
import { Briefcase, Layers, Cpu, Coffee } from "lucide-react";
import SectionHeader from "./SectionHeader";

const StatBox = ({
  icon,
  number,
  text,
  className,
}: {
  icon: React.ReactNode;
  number: string;
  text: string;
  className?: string;
}) => (
  <div
    className={`bg-card-bg/80 backdrop-blur-md border border-border p-4 rounded-lg shadow-lg z-20 ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className="text-accent">{icon}</div>
      <div>
        <p className="text-xl font-bold text-text">{number}</p>
        <p className="text-xs text-subtle">{text}</p>
      </div>
    </div>
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-black text-white/5 -z-10">
        01
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <SectionHeader title="About Me" />

        <div className="relative max-w-5xl mx-auto mt-8">
          <div className="relative z-10 lg:w-3/4 mx-auto text-center space-y-6 pb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              A Philosophy of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">
                Craftsmanship
              </span>
            </h2>
            <p className="text-lg md:text-xl text-subtle max-w-3xl mx-auto leading-relaxed">
              The focus is on clean architecture and craftsmanship. Building
              digital experiences that are not only powerful and scalable, but
              also intuitive and elegant to the touch. It&apos;s about finding
              the perfect intersection of robust backend logic and fluid
              frontend design, creating solutions that are built to last.
            </p>
          </div>

          {/* Desktop-Only Floating Cards */}
          <div className="hidden lg:block">
            <StatBox
              icon={<Briefcase size={24} />}
              number="3+"
              text="Years Experience"
              className="absolute top-[-5%] left-[-5%]"
            />
            <StatBox
              icon={<Layers size={24} />}
              number="10+"
              text="Projects Architected"
              className="absolute top-[10%] right-[-10%]"
            />
            <StatBox
              icon={<Cpu size={24} />}
              number="5+"
              text="Core Technologies"
              className="absolute bottom-[5%] left-[5%]"
            />
            <StatBox
              icon={<Coffee size={24} />}
              number="∞"
              text="Fuel Consumed"
              className="absolute bottom-[-5%] right-[-5%]"
            />
          </div>

          {/* Mobile-Only Grid Cards */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
            <StatBox
              icon={<Briefcase size={24} />}
              number="3+"
              text="Years Experience"
            />
            <StatBox
              icon={<Layers size={24} />}
              number="10+"
              text="Projects Architected"
            />
            <StatBox
              icon={<Cpu size={24} />}
              number="5+"
              text="Core Technologies"
            />
            <StatBox
              icon={<Coffee size={24} />}
              number="∞"
              text="Fuel Consumed"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
