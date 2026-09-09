"use client";

import { create } from "zustand";
import type { DivisionSlug, SceneId } from "@/content/types";

export type ExperienceQuality = "cinematic" | "balanced" | "essential";

interface WaranState {
  progress: number;
  sceneId: SceneId;
  activeDivision: DivisionSlug | null;
  hoveredDivision: DivisionSlug | null;
  flywheelFocus: string | null;
  menuOpen: boolean;
  reducedMotion: boolean;
  quality: ExperienceQuality;
  webgl: boolean;
  entered: boolean;
  setProgress: (progress: number, sceneId: SceneId) => void;
  setActiveDivision: (slug: DivisionSlug | null) => void;
  setHoveredDivision: (slug: DivisionSlug | null) => void;
  setFlywheelFocus: (id: string | null) => void;
  setMenuOpen: (open: boolean) => void;
  setReducedMotion: (value: boolean) => void;
  setQuality: (quality: ExperienceQuality) => void;
  setWebgl: (value: boolean) => void;
  setEntered: (value: boolean) => void;
}

export const useWaranStore = create<WaranState>((set) => ({
  progress: 0,
  sceneId: "signal",
  activeDivision: null,
  hoveredDivision: null,
  flywheelFocus: null,
  menuOpen: false,
  reducedMotion: false,
  quality: "cinematic",
  webgl: true,
  entered: false,
  setProgress: (progress, sceneId) => set({ progress, sceneId }),
  setActiveDivision: (activeDivision) => set({ activeDivision }),
  setHoveredDivision: (hoveredDivision) => set({ hoveredDivision }),
  setFlywheelFocus: (flywheelFocus) => set({ flywheelFocus }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setQuality: (quality) => set({ quality }),
  setWebgl: (webgl) => set({ webgl }),
  setEntered: (entered) => set({ entered }),
}));
