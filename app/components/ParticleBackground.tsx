"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [p.y, p.y - 100, p.y + 100, p.y],
            x: [p.x, p.x + 20, p.x - 20, p.x],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
