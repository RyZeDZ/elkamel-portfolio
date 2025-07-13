"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { to: "#", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#work", label: "Work" },
  { to: "#contact", label: "Contact" },
];

const mobileMenuVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: "easeIn" },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HamburgerIcon = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button onClick={toggle} className="relative z-50 w-8 h-8">
    <motion.div
      className="absolute top-1/2 left-0 w-full h-0.5 bg-text"
      animate={{
        y: isOpen ? 0 : -6,
        rotate: isOpen ? 45 : 0,
      }}
    />
    <motion.div
      className="absolute top-1/2 left-0 w-full h-0.5 bg-text"
      animate={{ opacity: isOpen ? 0 : 1 }}
    />
    <motion.div
      className="absolute top-1/2 left-0 w-full h-0.5 bg-text"
      animate={{
        y: isOpen ? 0 : 6,
        rotate: isOpen ? -45 : 0,
      }}
    />
  </button>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 p-4 md:p-6"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-text cursor-pointer"
          >
            EK
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-text/80">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="cursor-pointer hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 flex flex-col justify-center items-center"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.ul className="text-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  variants={mobileLinkVariants}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.to}
                    onClick={toggleMenu}
                    className="text-4xl font-bold text-text hover:text-accent cursor-pointer"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
