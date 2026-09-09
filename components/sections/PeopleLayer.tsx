"use client";

import { useWaranStore } from "@/lib/store";

export function PeopleLayer() {
  const setCursorMode = useWaranStore((s) => s.setCursorMode);

  return (
    <section className="relative px-6 py-28 md:px-12 bg-[#08090d] border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* EDITORIAL SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="micro text-waran-gold">07 / THE HUMAN ELEMENT</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl text-waran-paper">
            People Build Systems. Systems Build Futures.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-waran-paper/75">
            Technology does not self-assemble. Behind every neural framework, orbital trajectory, and quantum yield curve are individuals committed to rigorous engineering and long-horizon discipline.
          </p>
        </div>

        {/* THREE EDITORIAL COLUMNS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#0b0e14] p-8 transition-transform hover:-translate-y-1">
            <span className="font-mono text-xs text-waran-gold">01 / DISCIPLINE OVER FLUFF</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-waran-paper">
              Engineered Enduringly
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-waran-paper/65">
              We reject short-term growth hacks and artificial metrics. We measure success by system throughput, algorithmic precision, and decades of institutional continuity.
            </p>
          </div>

          <div className="rounded-2xl border border-waran-gold/30 bg-radial-at-tl from-waran-gold/10 via-[#0b0e14] to-[#07090e] p-8 transition-transform hover:-translate-y-1 shadow-lg">
            <span className="font-mono text-xs text-waran-gold">02 / CAPITAL FLYWHEEL</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-waran-paper">
              Software Funds Hardware
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-waran-paper/70">
              WARAN PRIMAL provides immediate software revenue. This revenue is systematically allocated to frontier biotechnology, autonomous exploration, and space robotics.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0b0e14] p-8 transition-transform hover:-translate-y-1">
            <span className="font-mono text-xs text-waran-gold">03 / HIGHEST TALENT BAR</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-waran-paper">
              Frontier Leadership
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-waran-paper/65">
              We recruit engineers, researchers, and operational leaders who prioritize systems-level rigor, technical ownership, and multi-year commitment over quick iterations.
            </p>
          </div>
        </div>

        {/* QUIET EDITORIAL QUOTE / MANDATE */}
        <div className="mt-20 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#06070a] p-10 text-center">
          <blockquote className="max-w-2xl font-display text-2xl md:text-3xl font-medium tracking-tight text-waran-paper">
            &ldquo;Beginning today. Architected for decades.&rdquo;
          </blockquote>
          <p className="mt-4 font-mono text-xs text-waran-gold tracking-widest uppercase">
            — WARAN INDUSTRIES INSTITUTIONAL DIRECTIVE
          </p>
        </div>
      </div>
    </section>
  );
}
