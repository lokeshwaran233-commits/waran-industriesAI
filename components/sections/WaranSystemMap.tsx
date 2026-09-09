"use client";

import { useState } from "react";
import Link from "next/link";
import { divisions } from "@/content/divisions";
import { useWaranStore } from "@/lib/store";
import { cn } from "@/lib/cn";

export function WaranSystemMap() {
  const [activeNode, setActiveNode] = useState<string | null>("primal");
  const setCursorMode = useWaranStore((s) => s.setCursorMode);
  const markSectionExplored = useWaranStore((s) => s.markSectionExplored);

  const selectedDivision = divisions.find((d) => d.slug === activeNode) || divisions[0];

  return (
    <section id="system-map" className="relative px-6 py-28 md:px-12 bg-[#090b10]/80 border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="micro text-waran-gold">03 / SYSTEM ARCHITECTURE</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl text-waran-paper">
              The Waran Interconnected System.
            </h2>
          </div>
          <p className="max-w-md text-sm text-waran-paper/60 leading-relaxed">
            Waran is not a portfolio of isolated bets. It is an engineered flywheel where AI software revenues fund long-horizon physical science, capital allocation, and orbital robotics.
          </p>
        </div>

        {/* SPATIAL SYSTEM MAP CONTAINER */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT: INTERACTIVE NETWORK NODES */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-7 rounded-2xl border border-white/10 bg-[#07090e]/90 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            {/* BACKGROUND SYSTEM GRID & CONNECTOR LINES */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            {/* TOP NODE: HUMANITY & INTELLIGENCE */}
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full border border-waran-gold/50 bg-waran-gold/10 px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-waran-gold">
                00 / HUMAN PROGRESS &amp; INTELLIGENCE
              </div>
              <div className="h-10 w-px bg-gradient-to-b from-waran-gold to-white/20" />
            </div>

            {/* CORE NODE: WARAN CORE */}
            <div className="relative flex items-center justify-center p-6 rounded-full border border-waran-gold/40 bg-[#0c0f17] shadow-[0_0_40px_rgba(197,160,89,0.2)]">
              <div className="absolute -inset-2 rounded-full border border-dashed border-waran-gold/25 animate-[spin_40s_linear_infinite]" />
              <span className="font-display text-lg font-bold tracking-[0.25em] text-waran-paper">WARAN CORE</span>
            </div>

            {/* BRANCHING CONNECTOR LINES */}
            <div className="my-6 h-8 w-full max-w-md border-t border-x border-white/20 rounded-t-xl" />

            {/* DIVISION NODES ROW */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 w-full">
              {divisions.map((div) => {
                const isActive = activeNode === div.slug;
                return (
                  <button
                    key={div.slug}
                    type="button"
                    onClick={() => {
                      setActiveNode(div.slug);
                      markSectionExplored(div.slug);
                    }}
                    onMouseEnter={() => setCursorMode("node")}
                    onMouseLeave={() => setCursorMode("default")}
                    className={cn(
                      "group relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 text-center",
                      isActive
                        ? "border-waran-gold bg-waran-gold/10 shadow-[0_0_25px_rgba(197,160,89,0.2)]"
                        : "border-white/10 bg-[#0a0d14]/70 hover:border-white/30 hover:bg-white/5"
                    )}
                  >
                    <span className="micro text-[9px] text-waran-paper/40 group-hover:text-waran-gold">
                      {div.code}
                    </span>
                    <span className="mt-1 font-display text-xs font-semibold tracking-wider text-waran-paper">
                      {div.name.replace("WARAN ", "")}
                    </span>
                    <div
                      className={cn(
                        "mt-2 h-1.5 w-1.5 rounded-full transition-colors",
                        isActive ? "bg-waran-gold animate-ping" : "bg-white/20"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: SELECTED NODE TELEMETRY INSPECTOR */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-waran-gold/30 bg-radial-at-tl from-waran-gold/10 via-[#0a0d14] to-[#07090e] p-8 md:p-10 backdrop-blur-xl shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-waran-gold tracking-widest uppercase">
                  {selectedDivision.code} TELEMETRY
                </span>
                <span className="rounded bg-waran-gold/10 px-2 py-0.5 font-mono text-[10px] text-waran-gold border border-waran-gold/30">
                  {selectedDivision.statusLabel}
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-waran-paper">
                {selectedDivision.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-waran-gold/90">
                {selectedDivision.headline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-waran-paper/75">
                {selectedDivision.summary}
              </p>

              {/* CAPABILITIES LIST */}
              <div className="mt-6 space-y-2">
                <p className="micro text-[10px] text-waran-paper/40">SYSTEM CAPABILITIES</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDivision.capabilities.map((cap) => (
                    <span
                      key={cap.title}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-sans text-xs text-waran-paper/80"
                    >
                      {cap.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTION LINK TO DEDICATED DIVISION PAGE */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-waran-paper/40">HORIZON / {selectedDivision.statusLabel.toUpperCase()}</span>
              <Link
                href={`/divisions/${selectedDivision.slug}`}
                onMouseEnter={() => setCursorMode("interactive")}
                onMouseLeave={() => setCursorMode("default")}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-waran-gold hover:underline"
              >
                <span>EXPLORE DIVISION SPEC</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
