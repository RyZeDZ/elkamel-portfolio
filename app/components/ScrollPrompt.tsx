// components/ScrollPrompt.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react"; // Using a clean icon

export default function ScrollPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <Link
        href="#about" // Scrolls to your About section, the next logical step
        aria-label="Scroll to my work"
        className="
          flex flex-col items-center gap-2 text-subtle 
          hover:text-accent transition-colors duration-300 group
        "
      >
        <span className="font-mono text-sm tracking-widest uppercase">
          See my work
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
