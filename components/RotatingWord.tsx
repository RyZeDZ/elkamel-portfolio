"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "websites",
  "mobile apps",
  "AI pipelines",
  "Discord bots",
  "Telegram bots",
  "automations",
  "backends",
  "security tooling",
];

export default function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom h-[1.15em]">
      {WORDS.map((w) => (
        <span
          key={w}
          aria-hidden
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
        >
          {w}
        </span>
      ))}
      <span
        className="col-start-1 row-start-1 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
        style={{ transform: `translateY(-${i * 1.15}em)` }}
      >
        {WORDS.map((w) => (
          <span key={w} className="h-[1.15em] whitespace-nowrap text-accent">
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
