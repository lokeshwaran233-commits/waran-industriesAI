"use client";

import Link from "next/link";
import { scenes } from "@/content/scenes";
import { StatusChip } from "@/components/ui/StatusChip";
import { cn } from "@/lib/cn";
import { useWaranStore } from "@/lib/store";

export function SceneCopy() {
  const sceneId = useWaranStore((s) => s.sceneId);
  const progress = useWaranStore((s) => s.progress);
  const reducedMotion = useWaranStore((s) => s.reducedMotion);
  const scene = scenes.find((s) => s.id === sceneId) ?? scenes[0];

  // Calculate local progress for smooth fade-out as user scrolls past the 3D canvas experience zone (progress > 0.92)
  let containerOpacity = 1;
  let pointerEvents: "auto" | "none" = "auto";

  if (progress > 0.88) {
    containerOpacity = Math.max(0, 1 - (progress - 0.88) / 0.08);
    if (progress > 0.95) {
      pointerEvents = "none";
    }
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 flex items-center justify-start px-6 pt-24 pb-16 transition-opacity duration-300 md:px-12 lg:px-20"
      style={{ opacity: containerOpacity, pointerEvents }}
    >
      <div
        key={scene.id}
        className={cn(
          "w-full max-w-xl lg:max-w-2xl rounded-2xl border border-waran-gold/30 bg-[#07090e]/60 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] pointer-events-auto transition-all duration-500",
          !reducedMotion && "scene-copy-enter"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-waran-gold font-semibold">{scene.chapter}</span>
          <span className="h-px w-8 bg-waran-gold/40" />
          <span className="font-mono text-xs tracking-[0.2em] text-waran-paper/60 uppercase">{scene.kicker}</span>
        </div>

        {scene.status ? (
          <div className="mt-3">
            <StatusChip status={scene.status} />
          </div>
        ) : null}

        <h1 className="mt-4 font-display text-2xl tracking-[-0.04em] text-waran-paper sm:text-4xl md:text-5xl font-bold leading-[1.05]">
          {scene.title}
        </h1>

        <div className="mt-4 space-y-1 font-mono text-[11px] md:text-xs tracking-[0.22em] text-waran-goldSoft/90 uppercase">
          {scene.lines.map((line) => (
            <p key={line}>— {line}</p>
          ))}
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-waran-paper/80 font-light max-w-xl">{scene.body}</p>

        {scene.href ? (
          <Link
            href={scene.href}
            className="pointer-events-auto mt-6 inline-flex items-center gap-3 border border-waran-gold/50 bg-waran-gold/10 px-5 py-2.5 font-mono text-[11px] tracking-[0.25em] text-waran-gold hover:border-waran-gold hover:bg-waran-gold/20 transition-all duration-300 rounded-sm"
          >
            ENTER THIS LAYER
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
