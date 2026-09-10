import { site } from "@/content/site";

export function PhilosophyBand() {
  return (
    <section className="relative z-30 overflow-hidden border-t border-white/10 bg-[#0b0c0e] px-6 py-24 md:px-12 isolation-isolate shadow-[0_-20px_50px_rgba(11,12,14,0.95)]">
      <p className="micro text-waran-gold">Philosophy</p>
      <h2 className="mt-4 max-w-4xl font-display text-4xl tracking-[-0.05em] md:text-6xl">
        Build what humanity needs. Explore what it does not yet understand.
      </h2>
      <ol className="mt-12 grid gap-6 md:grid-cols-2">
        {site.philosophy.map((line, i) => (
          <li key={line} className="border-l border-waran-gold/40 pl-5">
            <p className="micro text-waran-paper/40">0{i + 1}</p>
            <p className="mt-3 text-lg text-waran-paper/85">{line}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
