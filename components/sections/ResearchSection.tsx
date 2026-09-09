"use client";

import Link from "next/link";
import { researchPrograms } from "@/content/research";
import { useWaranStore } from "@/lib/store";

export function ResearchSection() {
  const setCursorMode = useWaranStore((s) => s.setCursorMode);

  return (
    <section id="research-section" className="relative px-6 py-28 md:px-12 bg-[#06070a] border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="micro text-waran-gold">05 / APPLIED RESEARCH</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl text-waran-paper">
              Investigating What Comes Next.
            </h2>
          </div>
          <p className="max-w-md text-sm text-waran-paper/60 leading-relaxed">
            Waran does not merely apply existing technology. We publish applied research directives across machine learning systems, synthetic biology, and autonomous orbital coordination.
          </p>
        </div>

        {/* RESEARCH DIRECTIVES GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchPrograms.map((paper, i) => (
            <div
              key={paper.slug}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#090c12] p-8 transition-all duration-300 hover:border-waran-gold/50 hover:bg-[#0c0f18]"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-waran-paper/50">
                  <span>RES-0{i + 1}</span>
                  <span className="text-waran-gold uppercase">{paper.division}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-waran-paper group-hover:text-waran-gold transition-colors">
                  {paper.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-waran-paper/65">
                  {paper.body}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-waran-paper/40">HORIZON: {paper.horizon.toUpperCase()}</span>
                <span className="text-waran-gold">WARAN RESEARCH</span>
              </div>
            </div>
          ))}
        </div>

        {/* LINK TO FULL RESEARCH ARCHIVE */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/research"
            onMouseEnter={() => setCursorMode("interactive")}
            onMouseLeave={() => setCursorMode("default")}
            className="inline-flex items-center gap-3 rounded-full border border-waran-gold/40 bg-waran-gold/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-waran-gold transition-all hover:bg-waran-gold/20 hover:scale-105"
          >
            <span>VIEW COMPLETE RESEARCH DIRECTIVES ARCHIVE</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
