import SocialRail, { socials } from "./SocialRail";
import RotatingWord from "./RotatingWord";

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-line)_1px,transparent_1px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_at_50%_40%,black,transparent_70%)]"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none text-[16rem] font-bold leading-none tracking-tighter text-white/2 lg:block"
      >
        EK
      </span>

      <div
        aria-hidden
        className="absolute left-8 top-0 hidden h-full w-px bg-linear-to-b from-transparent via-line to-transparent lg:block"
      />

      <SocialRail />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-body">
          Hi, my name is
        </p>

        <h1 className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em]">
          <span className="block">Kamel Bensmaine.</span>
          <span className="mt-1 block">
            I design and ship <RotatingWord />
          </span>
        </h1>

        <p className="mt-8 max-w-[54ch] text-lg leading-relaxed text-body">
          Computer science graduate from Algeria. I&apos;ve shipped a Discord
          bot to thousands of servers, an offline AI model that reads Arabic
          handwriting, and a hosting platform I co-founded and still run.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="group relative isolate flex items-center gap-5 overflow-hidden rounded-full border border-accent/30 py-2 pl-7 pr-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent"
          >
            <span className="transition-colors duration-300 group-hover:text-page">
              Start here
            </span>

            <span
              aria-hidden
              className="absolute right-2 -z-10 size-10 origin-center rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[8]"
            />

            <span className="flex size-10 items-center justify-center rounded-full text-page">
              <svg viewBox="0 0 16 16" fill="none" className="size-4">
                <path
                  d="M8 3v10M8 13l-4-4M8 13l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <ul className="flex gap-2.5 xl:hidden">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  className="flex size-11 items-center justify-center rounded-lg border border-line bg-panel text-body transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
