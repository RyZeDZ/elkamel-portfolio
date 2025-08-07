"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoveredElementInfo {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Bracket = ({ side }: { side: "left" | "right" }) => (
  <svg
    width="12"
    height="24"
    viewBox="0 0 12 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {side === "left" ? (
      <path
        d="M9 4L4 9.5L9 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M3 4L8 9.5L3 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoveredElementInfo, setHoveredElementInfo] =
    useState<HoveredElementInfo | null>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveParent = target.closest("a, button");

      if (interactiveParent) {
        const rect = interactiveParent.getBoundingClientRect();
        setHoveredElementInfo({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveParent = target.closest("a, button");

      if (interactiveParent) {
        setHoveredElementInfo(null);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const bracketHeight = 24;

  return (
    <div className="custom-cursor-container">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 text-accent flex"
        style={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        animate={{ opacity: hoveredElementInfo ? 0 : 1 }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <Bracket side="left" />
        <Bracket side="right" />
      </motion.div>

      <AnimatePresence>
        {hoveredElementInfo && (
          <>
            <motion.div
              key="left-bracket"
              className="fixed pointer-events-none z-50 text-accent"
              initial={{
                x: mousePosition.x - 6,
                y: mousePosition.y - bracketHeight / 2,
                height: bracketHeight,
                opacity: 0,
              }}
              animate={{
                x: hoveredElementInfo.x - 14,
                y:
                  hoveredElementInfo.y +
                  hoveredElementInfo.height / 2 -
                  bracketHeight / 2 +
                  2,
                height: hoveredElementInfo.height,
                opacity: 1,
              }}
              exit={{
                x: mousePosition.x - 6,
                y: mousePosition.y - bracketHeight / 2,
                height: bracketHeight,
                opacity: 0,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Bracket side="left" />
            </motion.div>

            <motion.div
              key="right-bracket"
              className="fixed pointer-events-none z-50 text-accent"
              initial={{
                x: mousePosition.x - 6,
                y: mousePosition.y - bracketHeight / 2,
                height: bracketHeight,
                opacity: 0,
              }}
              animate={{
                x: hoveredElementInfo.x + hoveredElementInfo.width + 2,
                y:
                  hoveredElementInfo.y +
                  hoveredElementInfo.height / 2 -
                  bracketHeight / 2 +
                  2,
                height: hoveredElementInfo.height,
                opacity: 1,
              }}
              exit={{
                x: mousePosition.x - 6,
                y: mousePosition.y - bracketHeight / 2,
                height: bracketHeight,
                opacity: 0,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Bracket side="right" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
