import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "High-quality work that perfectly matched our vision. Communication was smooth, and the turnaround was fast.",
    name: "Adrian",
    role: "CEO",
    company: "COMPANY NAME",
    project: "PROJECT NAME",
    stars: 5,
  },
  {
    quote: "PLACEHOLDER — paste real quote here.",
    name: "Client name",
    role: "Role",
    company: "Company",
    project: "Project",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="text-sm font-medium text-faint">What clients say</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl border border-line bg-white p-7"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">
                {r.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {r.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium">{r.name}</span>
                  <span className="block text-faint">
                    {r.role}, {r.company} · {r.project}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
