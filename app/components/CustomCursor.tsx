"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) {
        setIsHoveringLink(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  const cursorVariants: Variants = {
    default: {
      height: 32,
      width: 32,
      border: "2px solid var(--color-accent)",
      backgroundColor: "transparent",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    hovering: {
      height: 50,
      width: 50,
      backgroundColor: "var(--color-accent)",
      border: "2px solid var(--color-accent)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      className="hidden md:flex items-center justify-center fixed top-0 left-0 rounded-full pointer-events-none z-[100]"
      style={{
        left: position.x,
        top: position.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={cursorVariants}
      animate={isHoveringLink ? "hovering" : "default"}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-accent"
        animate={{ scale: isHoveringLink ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
