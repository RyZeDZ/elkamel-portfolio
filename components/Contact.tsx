"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; href?: string };

const COMMANDS: Record<string, Line[]> = {
  help: [
    { text: "available:" },
    {
      text: "  whoami · email · socials · hire · stack · projects · cv · clear",
    },
    { text: "" },
  ],
  whoami: [
    { text: "kamel bensmaine — builds things, breaks things, ships anyway." },
    { text: "" },
  ],
  email: [
    {
      text: "bensmaine.kamel1@gmail.com",
      href: "mailto:bensmaine.kamel1@gmail.com",
    },
    { text: "" },
  ],
  socials: [
    {
      text: "github.com/RyZeDZ",
      href: "https://github.com/RyZeDZ",
    },
    {
      text: "linkedin.com/in/elkamelbens",
      href: "https://linkedin.com/in/elkamelbens",
    },
    {
      text: "instagram.com/kamel_bensmaine",
      href: "https://www.instagram.com/kamel_bensmaine/",
    },
    { text: "" },
  ],
  hire: [
    { text: "status: available" },
    { text: "remote work, freelance, and strange ideas." },
    { text: "" },
  ],
  stack: [
    { text: "python · typescript · pytorch · cloudflare · linux · docker" },
    { text: "" },
  ],
  projects: [
    {
      text: "pineapple ai      3,000+ discord servers",
      href: "https://pineappleai.xyz",
    },
    {
      text: "chofly            edis 2026, accepted",
    },
    { text: "smartpark         android + esp32" },
    { text: "guppynodes        linux hosting", href: "https://guppynodes.com" },
    {
      text: "py-recon          offensive tooling",
      href: "https://github.com/RyZeDZ/PyRecon-Suite",
    },
    {
      text: "nexara            freelance agency",
      href: "https://trynexara.tech",
    },
    { text: "" },
  ],
  cv: [
    { text: "→ Kamel-Bensmaine-CV.pdf", href: "/Kamel-Bensmaine-CV.pdf" },
    { text: "" },
  ],
  ls: [{ text: "you're already looking at everything." }, { text: "" }],
  sudo: [{ text: "nice try." }, { text: "" }],
  clear: [],
};

const BOOT: Line[] = [
  { text: "elkamel.dev — session started" },
  { text: "" },
  { text: "> whoami" },
  { text: "kamel bensmaine — builds things, breaks things, ships anyway." },
  { text: "" },
  { text: "> hire" },
  { text: "status: available" },
  { text: "remote work, freelance, and strange ideas." },
  { text: "" },
  { text: "type 'help' for more" },
  { text: "" },
];

const HINTS = ["projects", "stack", "socials", "cv"];

export default function Contact() {
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const el = endRef.current?.parentElement;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const out = COMMANDS[cmd] ?? [
      { text: `not found: ${cmd} — try 'help'` },
      { text: "" },
    ];
    setLines((l) => [...l, { text: `> ${cmd}` }, ...out]);
  }

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-line bg-page"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-body">
          Contact
        </h2>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[18ch] text-3xl font-bold leading-[1.15] tracking-[-0.02em] md:text-5xl">
            Let&apos;s build something.
          </p>
          <a
            href="mailto:bensmaine.kamel1@gmail.com"
            className="break-all text-base text-accent transition-opacity hover:opacity-80 md:text-lg"
          >
            bensmaine.kamel1@gmail.com
          </a>
        </div>

        <div
          onClick={() => {
            if (window.matchMedia("(hover: hover)").matches) {
              inputRef.current?.focus();
            }
          }}
          className="mt-12 cursor-text overflow-hidden rounded-xl border border-line bg-panel"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-accent/40" />
            <span className="ml-2 font-mono text-[11px] text-faint md:text-xs">
              kamel@elkamel.dev
            </span>
          </div>

          <div className="h-64 overflow-y-auto p-4 font-mono text-[12px] leading-relaxed md:h-80 md:p-5 md:text-sm">
            {lines.map((line, i) =>
              line.href ? (
                <p key={i}>
                  <a
                    href={line.href}
                    target={line.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="whitespace-pre-wrap text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
                  >
                    {line.text}
                  </a>
                </p>
              ) : (
                <p
                  key={i}
                  className={
                    line.text.startsWith(">")
                      ? "text-accent"
                      : "whitespace-pre-wrap text-body"
                  }
                >
                  {line.text || "\u00A0"}
                </p>
              ),
            )}

            <div className="flex items-center gap-2">
              <span className="text-accent">&gt;</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    run(value);
                    setValue("");
                  }
                }}
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                aria-label="Terminal input"
                className="w-full bg-transparent text-ink outline-none"
              />
            </div>
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-line p-4">
            {HINTS.map((h) => (
              <button
                key={h}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  run(h);
                }}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-faint transition-colors hover:border-accent hover:text-accent"
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Kamel Bensmaine</span>
          <span className="font-mono">Built with Next.js · Algeria</span>
        </div>
      </div>
    </section>
  );
}
