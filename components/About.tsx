const timeline = [
  {
    year: "2024 — now",
    role: "Co-founder & technical lead",
    org: "GuppyNodes",
  },
  { year: "2026 — now", role: "Co-founder", org: "Nexara" },
  { year: "2025 — now", role: "Tech lead", org: "AI & Robotics Club" },
  { year: "2025", role: "Network infrastructure intern", org: "Sonatrach" },
  {
    year: "2023 — 2026",
    role: "BSc Computer Science",
    org: "Univ. Larbi Ben M'hidi",
  },
];

const awards = [
  { place: "Paper", label: "Accepted at EDiS 2026", year: "2026" },
  { place: "1st", label: "National AI Hackathon", year: "2026" },
  { place: "2nd", label: "National Healthcare AI Hackathon", year: "2026" },
  { place: "4th", label: "National Salon: AI in Security", year: "2025" },
  { place: "4th", label: "AINEC AI & Healthcare", year: "2025" },
];

const skills = [
  {
    group: "Backend",
    items: "Python · FastAPI · Node · Cloudflare Workers · PostgreSQL · Java",
  },
  { group: "Frontend", items: "TypeScript · React · Next.js · Kotlin" },
  {
    group: "AI / ML",
    items: "PyTorch · TFLite · YOLOv8 · OpenCLIP · CTC decoding",
  },
  {
    group: "Security",
    items: "OWASP Top 10 · Linux hardening · DDoS mitigation · Wireshark",
  },
  { group: "Infra", items: "Linux · Docker · Nginx · VPS · Cloudflare" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 border-t border-line bg-page">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-body">
          About
        </h2>

        <p className="mt-8 max-w-[34ch] text-3xl font-bold leading-tight tracking-[-0.02em] md:text-4xl">
          I build things on the internet and try to understand how they break.
        </p>

        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-body">
          CS graduate from Algeria. Most of what I make starts because something
          annoyed me or looked impossible. If you&apos;re building something
          strange, I&apos;m probably interested.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-3">
          <div className="bg-page p-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Timeline
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {timeline.map((t) => (
                <li key={t.role}>
                  <span className="block font-mono text-[11px] text-accent">
                    {t.year}
                  </span>
                  <span className="mt-0.5 block text-sm">{t.role}</span>
                  <span className="block text-sm text-faint">{t.org}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-page p-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Recognition
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {awards.map((a) => (
                <li key={a.label} className="flex gap-4">
                  <span className="w-12 shrink-0 font-mono text-[11px] text-accent">
                    {a.place}
                  </span>
                  <span className="text-sm">
                    {a.label}
                    {a.year && <span className="text-faint"> · {a.year}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-page p-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Stack
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {skills.map((s) => (
                <li key={s.group}>
                  <span className="block font-mono text-[11px] text-accent">
                    {s.group}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-body">
                    {s.items}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
