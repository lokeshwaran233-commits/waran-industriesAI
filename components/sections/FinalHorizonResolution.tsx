"use client";

import Link from "next/link";
import { WaranMark } from "@/components/brand/WaranMark";
import { GoldenSocialBadges } from "@/components/ui/GoldenSocialBadges";
import { useWaranStore } from "@/lib/store";

export function FinalHorizonResolution() {
  const setCursorMode = useWaranStore((s) => s.setCursorMode);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32 bg-[#050608] text-center border-t border-white/10">
      {/* BACKGROUND ATMOSPHERIC RADIAL GLOW */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="h-96 w-96 rounded-full bg-waran-gold/10 blur-3xl animate-pulse" />
      </div>

      {/* RESTRAINED CENTERED WARAN LOGO MARK */}
      <div className="group relative flex items-center justify-center p-6 rounded-full border border-waran-gold/30 bg-[#07090f]/90 shadow-[0_0_50px_rgba(197,160,89,0.2)] transition-transform duration-500 hover:scale-110">
        <WaranMark gold className="h-16 w-16 md:h-20 md:w-20" />
      </div>

      {/* FINAL STATEMENT */}
      <div className="mt-12 max-w-3xl">
        <p className="micro text-waran-gold">WARAN INDUSTRIES</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl text-waran-paper leading-tight">
          BEGINNING TODAY.<br />
          ARCHITECTED FOR DECADES.
        </h2>
        <p className="mt-6 font-mono text-sm tracking-[0.3em] text-waran-paper/50 uppercase">
          BUILD. EXPLORE. ENDURE.
        </p>
      </div>

      {/* STRATEGIC ACTIONS */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        <Link
          href="/careers"
          onMouseEnter={() => setCursorMode("interactive")}
          onMouseLeave={() => setCursorMode("default")}
          className="rounded-full border border-waran-gold bg-waran-gold px-8 py-3.5 font-display text-xs font-semibold uppercase tracking-widest text-[#090c10] shadow-[0_0_25px_rgba(197,160,89,0.3)] transition-all hover:bg-waran-goldSoft hover:scale-105"
        >
          EXPLORE CAREERS ARCHITECTURE
        </Link>
        <Link
          href="/contact"
          onMouseEnter={() => setCursorMode("interactive")}
          onMouseLeave={() => setCursorMode("default")}
          className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-display text-xs font-semibold uppercase tracking-widest text-waran-paper transition-all hover:border-waran-gold hover:text-waran-gold"
        >
          STRATEGIC INQUIRIES
        </Link>
      </div>

      {/* METALLIC GOLDEN SOCIAL BADGES */}
      <div className="mt-16">
        <GoldenSocialBadges />
      </div>
    </section>
  );
}
