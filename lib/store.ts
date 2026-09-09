"use client";

import { create } from "zustand";
import type { DivisionSlug, SceneId } from "@/content/types";

export type ExperienceQuality = "cinematic" | "balanced" | "essential";
export type CursorMode = "default" | "interactive" | "node";

interface WaranState {
  progress: number;
  sceneId: SceneId;
  activeDivision: DivisionSlug | null;
  hoveredDivision: DivisionSlug | null;
  hoveredNavSection: string | null;
  flywheelFocus: string | null;
  cursorMode: CursorMode;
  exploredSections: string[];
  menuOpen: boolean;
  reducedMotion: boolean;
  quality: ExperienceQuality;
  webgl: boolean;
  entered: boolean;
  setProgress: (progress: number, sceneId: SceneId) => void;
  setActiveDivision: (slug: DivisionSlug | null) => void;
  setHoveredDivision: (slug: DivisionSlug | null) => void;
  setHoveredNavSection: (section: string | null) => void;
  setFlywheelFocus: (id: string | null) => void;
  setCursorMode: (mode: CursorMode) => void;
  markSectionExplored: (section: string) => void;
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
  hoveredNavSection: null,
  flywheelFocus: null,
  cursorMode: "default",
  exploredSections: [],
  menuOpen: false,
  reducedMotion: false,
  quality: "cinematic",
  webgl: true,
  entered: false,
  setProgress: (progress, sceneId) => set({ progress, sceneId }),
  setActiveDivision: (activeDivision) => set({ activeDivision }),
  setHoveredDivision: (hoveredDivision) => set({ hoveredDivision }),
  setHoveredNavSection: (hoveredNavSection) => set({ hoveredNavSection }),
  setFlywheelFocus: (flywheelFocus) => set({ flywheelFocus }),
  setCursorMode: (cursorMode) => set({ cursorMode }),
  markSectionExplored: (section) =>
    set((state) => ({
      exploredSections: state.exploredSections.includes(section)
        ? state.exploredSections
        : [...state.exploredSections, section],
    })),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setQuality: (quality) => set({ quality }),
  setWebgl: (webgl) => set({ webgl }),
  setEntered: (entered) => set({ entered }),
}));
