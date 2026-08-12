export default function FlipText({ text }: { text: string }) {
  return (
    <span className="flex" aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden
          className="relative block h-[1.2em] overflow-hidden leading-[1.2]"
        >
          <span
            className="flex flex-col transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2 motion-reduce:transition-none"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            <span>{char}</span>
            <span className="text-accent">{char}</span>
          </span>
        </span>
      ))}
    </span>
  );
}
