import { ArrowUpRight } from "lucide-react";

const items = [
  {
    name: "GuppyNodes",
    role: "Co-founded",
    blurb:
      "Linux hosting platform for Minecraft servers and Discord bots. Automated provisioning, hardened containers, active L4/L7 DDoS defense.",
    stack: ["Linux", "Docker", "Nginx"],
    href: "https://guppynodes.com",
  },
  {
    name: "Py-Recon Suite",
    role: "Security tooling",
    blurb:
      "Reconnaissance toolkit automating DNS enumeration, port scanning, and header analysis. Found a live iLO 4 vulnerability on a production network.",
    stack: ["Python", "Bash"],
    href: "https://github.com/RyZeDZ/PyRecon-Suite",
  },
  {
    name: "Nexara",
    role: "Co-founded",
    blurb:
      "A digital freelance agency I co-founded, taking on web, mobile, and AI work for clients end to end.",
    stack: ["NextJS", "Flutter"],
    href: "https://trynexara.tech",
  },
];

export default function AlsoBuilt() {
  return (
    <section className="relative z-10 border-t border-line bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-body">
          Also built
        </h2>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="group flex h-full flex-col bg-page p-6 transition-colors duration-300 hover:bg-panel"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-base font-semibold">{item.name}</span>
                  <ArrowUpRight
                    size={15}
                    className="mt-1 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>

                <span className="mt-0.5 font-mono text-[11px] text-accent">
                  {item.role}
                </span>

                <p className="mt-3 text-sm leading-relaxed text-body">
                  {item.blurb}
                </p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-faint"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
