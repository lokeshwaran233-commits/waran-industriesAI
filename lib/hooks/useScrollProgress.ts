"use client";

import { useEffect } from "react";
import { sceneAt } from "@/content/scenes";
import { useWaranStore } from "@/lib/store";

export function useScrollProgress(targetId = "waran-scroll") {
  const setProgress = useWaranStore((s) => s.setProgress);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = Math.max(1, el.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      const scene = sceneAt(progress);
      setProgress(progress, scene.id);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [setProgress, targetId]);
}
