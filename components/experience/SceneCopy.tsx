"use client";

import Link from "next/link";
import { scenes } from "@/content/scenes";
import { StatusChip } from "@/components/ui/StatusChip";
import { cn } from "@/lib/cn";
import { useWaranStore } from "@/lib/store";

export function SceneCopy() {
  const sceneId = useWaranStore((s) => s.sceneId);
  const reducedMotion = useWaranStore((s) => s.reducedMotion);
  const scene = scenes.find((s) => s.id === sceneId) ?? scenes[0];

  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex items-end px-6 pb-20 pt-28 md:items-center md:px-12 md:pb-0">
      <div
        key={scene.id}
        className={cn("max-w-2xl", !reducedMotion && "scene-copy-enter")}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.3em] text-waran-gold">{scene.chapter}</span>
          <span className="h-px w-8 bg-waran-gold/40" />
          <span className="font-mono text-xs tracking-[0.2em] text-waran-paper/50 uppercase">{scene.kicker}</span>
        </div>

        {scene.status ? (
          <div className="mt-4">
            <StatusChip status={scene.status} />
          </div>
        ) : null}

        <h1 className="mt-6 font-display text-4xl tracking-[-0.05em] text-waran-paper leading-[1.1] md:text-7xl font-medium">
          {scene.title}
        </h1>

        <div className="mt-6 space-y-1.5 font-mono text-xs tracking-[0.25em] text-waran-goldSoft/90 uppercase">
          {scene.lines.map((line) => (
            <p key={line}>— {line}</p>
          ))}
        </div>

        <p className="measure mt-6 text-sm leading-7 text-waran-paper/75 font-light md:text-base">{scene.body}</p>

        {scene.href ? (
          <Link
            href={scene.href}
            className="pointer-events-auto mt-8 inline-flex items-center gap-3 border border-waran-gold/40 bg-[#0a0c10]/80 px-5 py-2.5 font-mono text-[10px] tracking-[0.28em] text-waran-gold hover:border-waran-gold hover:bg-waran-gold/10 transition-all duration-300 backdrop-blur-md rounded-xs"
          >
            ENTER THIS LAYER
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
