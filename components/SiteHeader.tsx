import Link from "next/link";
import FlipText from "./FlipText";

const links = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-5 z-30 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center">
        <Link
          href="/"
          className="flex size-10 items-center justify-center rounded-lg border border-line bg-panel/80 text-sm font-bold tracking-tight backdrop-blur"
        >
          EK
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-panel/80 p-1.5 backdrop-blur sm:flex">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-body transition-colors hover:bg-white/5 hover:text-ink"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a
            href="#contact"
            className="group flex items-center gap-2.5 rounded-full border border-line bg-panel/80 py-2.5 pl-5 pr-4 text-sm text-ink backdrop-blur transition-colors duration-300 hover:border-accent"
          >
            <FlipText text="Contact" />
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[2.5]" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
