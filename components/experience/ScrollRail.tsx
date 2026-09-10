"use client";

import { scenes } from "@/content/scenes";
import { cn } from "@/lib/cn";
import { useWaranStore } from "@/lib/store";

export function ScrollRail() {
  const sceneId = useWaranStore((s) => s.sceneId);
  const progress = useWaranStore((s) => s.progress);

  let opacity = 1;
  let pointerEvents: "auto" | "none" = "auto";
  if (progress > 0.88) {
    opacity = Math.max(0, 1 - (progress - 0.88) / 0.08);
    if (progress > 0.95) pointerEvents = "none";
  }

  return (
    <aside
      className="pointer-events-none fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden w-48 lg:block transition-opacity duration-300"
      style={{ opacity, pointerEvents }}
    >
      <div className="rounded-xl border border-white/10 bg-[#090b10]/80 p-4 backdrop-blur-md shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
          <span className="font-mono text-[9px] tracking-[0.3em] text-waran-gold uppercase">TRAVERSE</span>
          <span className="font-mono text-[9px] tracking-widest text-waran-paper/50">
            {Math.round(progress * 100).toString().padStart(2, "0")}%
          </span>
        </div>

        <ol className="space-y-1 text-right">
          {scenes.map((scene) => {
            const isActive = sceneId === scene.id;
            const chapterNum = scene.chapter.split(" / ")[0];
            const chapterName = scene.chapter.split(" / ")[1];

            return (
              <li key={scene.id} className="flex items-center justify-end gap-2">
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-waran-gold shadow-[0_0_8px_#C5A059] animate-pulse" />
                )}
                <button
                  type="button"
                  className={cn(
                    "pointer-events-auto font-mono text-[9px] tracking-[0.22em] transition-all duration-300",
                    isActive
                      ? "text-waran-gold font-semibold translate-x-0 opacity-100"
                      : "text-waran-paper/40 hover:text-waran-paper/80 opacity-60"
                  )}
                  onClick={() => {
                    const max = Math.max(1, (document.getElementById("waran-scroll")?.scrollHeight ?? 0) - window.innerHeight);
                    window.scrollTo({ top: scene.start * max, behavior: "smooth" });
                  }}
                >
                  <span className="opacity-40 mr-1.5">{chapterNum}</span>
                  {chapterName}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}
