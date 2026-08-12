import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        404
      </p>

      <h1 className="mt-5 text-4xl font-bold tracking-[-0.02em] md:text-5xl">
        This page doesn&apos;t exist.
      </h1>

      <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-body">
        Either it moved, or you found something I haven&apos;t built yet.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-page transition-opacity duration-300 hover:opacity-90"
      >
        Back home
      </Link>

      <p className="mt-14 font-mono text-xs text-faint">elkamel.dev</p>
    </main>
  );
}
