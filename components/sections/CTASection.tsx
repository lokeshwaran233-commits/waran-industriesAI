import Link from "next/link";
import { site } from "@/content/site";

export function CTASection() {
  return (
    <section className="relative z-30 border-t border-white/10 px-6 py-28 text-center md:px-12">
      <p className="micro text-waran-gold">Call to action</p>
      <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl tracking-[-0.06em] md:text-7xl">
        Build with WARAN.
      </h2>
      <p className="mx-auto measure mt-6 text-waran-paper/70">
        Begin at PRIMAL. Research, exploration and partnership are open conversations — not invented operations.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {site.ctas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="border border-waran-gold/50 px-6 py-3 text-[11px] tracking-[0.28em] text-waran-gold hover:bg-waran-gold hover:text-waran-ink"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
