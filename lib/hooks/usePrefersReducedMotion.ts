"use client";

import { useEffect } from "react";
import { useWaranStore } from "@/lib/store";

export function usePrefersReducedMotion() {
  const setReducedMotion = useWaranStore((s) => s.setReducedMotion);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [setReducedMotion]);
}
