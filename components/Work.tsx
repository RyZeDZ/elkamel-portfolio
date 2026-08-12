import Image from "next/image";

const projects = [
  {
    name: "SmartPark",
    tag: "IoT · Full-stack",
    blurb:
      "A parking system that runs end to end: an Android app with real-time reservations and payments, a web dashboard for lot owners, and an ESP32 rig with proximity sensors that physically opens the gate when you arrive.",
    stack: ["Android", "Firestore", "ESP32", "Chargily"],
    href: "#",
    image: "/work/smartpark.png",
    alt: "SmartPark running on a monitor, a phone, and an ESP32 prototype board",
  },
  {
    name: "Pineapple AI",
    tag: "AI · Discord",
    blurb:
      "A multi-model chatbot living in thousands of Discord servers. Per-user memory, a fallback chain when providers go down, and prompt-injection safeguards. Thousands of conversations a day at under 3% error.",
    stack: ["Python", "discord.py", "Gemini", "Cloudflare"],
    href: "https://pineappleai.xyz",
    image: "/work/pineapple.png",
    alt: "Pineapple AI answering a question in a Discord channel",
  },
  {
    name: "Chofly",
    tag: "Edge AI · Research",
    blurb:
      "Reads handwritten Arabic from a phone photo, fully offline. I built a synthetic data factory for 225k training images, then quantized the model to 28MB for on-device inference. Paper accepted at EDiS 2026.",
    stack: ["PyTorch Mobile", "Python", "Android"],
    href: "#",
    image: "/work/arabic.png",
    alt: "Chofly project card — Arabic handwriting recognition, EDiS 2026",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-baseline justify-between border-b border-line py-6">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-body">
            Selected work
          </h2>
          <span className="font-mono text-xs text-faint">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
      </div>

      {projects.map((p, i) => (
        <div
          key={p.name}
          className="bg-page lg:sticky lg:top-0 lg:min-h-svh"
          style={{ zIndex: i + 1 }}
        >
          <div className="mx-auto flex max-w-6xl items-center border-t border-line px-6 py-16 md:px-10 lg:min-h-svh lg:py-20">
            <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="font-mono text-xs text-accent">{p.tag}</span>
                </div>

                <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] md:text-5xl">
                  {p.name}
                </h3>

                <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-body md:text-lg">
                  {p.blurb}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-body md:text-xs"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                {p.href !== "#" && (
                  <a
                    href={p.href}
                    className="mt-7 inline-block w-fit border-b border-accent/40 pb-0.5 text-sm text-accent transition-colors hover:border-accent"
                  >
                    Visit site
                  </a>
                )}
              </div>

              <div className="order-1 overflow-hidden rounded-xl border border-line bg-panel lg:order-2">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={1200}
                  height={900}
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
