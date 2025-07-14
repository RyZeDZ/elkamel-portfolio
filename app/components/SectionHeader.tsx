import React from "react";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-accent-start to-accent-end mx-auto mt-4 rounded-full"></div>
    </div>
  );
}
