"use client";

import type { ExperienceQuality } from "./store";

export function detectQuality(): ExperienceQuality {
  if (typeof window === "undefined") return "balanced";
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const small = window.innerWidth < 768;
  if (small || coarse || cores <= 4 || memory <= 4) return "essential";
  if (cores <= 8 || memory <= 8) return "balanced";
  return "cinematic";
}

export function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = window.document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}
