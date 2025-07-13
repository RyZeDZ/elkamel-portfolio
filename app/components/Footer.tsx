import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 text-center md:text-left">
          {/* Left Side: Info */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-text">Bensmaine Mohamed</h4>
            <p className="text-sm text-subtle mt-1">
              Based in Algeria • Available Worldwide
            </p>
          </div>
          {/* Center: Copyright */}
          <div className="flex-shrink-0 text-sm text-subtle order-last md:order-none">
            © {new Date().getFullYear()} El Kamel. Crafted with{" "}
            <FaHeart className="inline text-accent" /> and lots of coffee.
          </div>
          {/* Right Side: Social Links */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="flex space-x-6">
              <a href="https://github.com/RyZeDZ">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/elkamelbens">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:bensmaine.kamel1@gmail.com">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
