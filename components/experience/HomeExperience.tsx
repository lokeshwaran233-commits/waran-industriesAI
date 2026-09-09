"use client";

import { useEffect, useState } from "react";
import { ExperienceCanvas } from "@/components/canvas/ExperienceCanvas";
import { SceneCopy } from "@/components/experience/SceneCopy";
import { ScrollRail } from "@/components/experience/ScrollRail";
import { StaticFallback } from "@/components/experience/StaticFallback";
import { canUseWebGL, detectQuality } from "@/lib/detect";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { useScrollProgress } from "@/lib/hooks/useScrollProgress";
import { useWaranStore } from "@/lib/store";

export function HomeExperience() {
  usePrefersReducedMotion();
  useScrollProgress();
  const setEntered = useWaranStore((s) => s.setEntered);
  const setQuality = useWaranStore((s) => s.setQuality);
  const setWebgl = useWaranStore((s) => s.setWebgl);
  const reducedMotion = useWaranStore((s) => s.reducedMotion);
  const webgl = useWaranStore((s) => s.webgl);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    setQuality(detectQuality());
    setWebgl(canUseWebGL());
    setEntered(true);
    setBooted(true);
  }, [setEntered, setQuality, setWebgl]);

  if (!booted) {
    return <div className="h-screen w-full" aria-hidden="true" />;
  }

  if (reducedMotion || !webgl) {
    return <StaticFallback />;
  }

  return (
    <>
      <ExperienceCanvas />
      <div className="vignette pointer-events-none fixed inset-0 z-10" />
      <div className="grain pointer-events-none fixed inset-0 z-10" />
      <SceneCopy />
      <ScrollRail />
      <div id="waran-scroll" className="relative z-0 h-[220vh] w-full" aria-hidden="true" />
    </>
  );
}
