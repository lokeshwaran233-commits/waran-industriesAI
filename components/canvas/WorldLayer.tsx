"use client";

import { useMemo } from "react";
import { scenes } from "@/content/scenes";
import { useWaranStore } from "@/lib/store";
import { CapitalWorld } from "./worlds/CapitalWorld";
import { ExplorationWorld } from "./worlds/ExplorationWorld";
import { FlywheelWorld } from "./worlds/FlywheelWorld";
import { PrimalWorld } from "./worlds/PrimalWorld";
import { ScienceWorld } from "./worlds/ScienceWorld";
import { SpaceWorld } from "./worlds/SpaceWorld";
import { TechWorld } from "./worlds/TechWorld";
import { HelixMark } from "./objects/HelixMark";

function activity(progress: number, ids: string[]) {
  const matches = scenes.filter((s) => ids.includes(s.id));
  return matches.reduce((max, scene) => {
    const span = scene.end - scene.start;
    const mid = (scene.start + scene.end) / 2;
    const falloff = span * 1.6;
    const v = 1 - Math.min(1, Math.abs(progress - mid) / falloff);
    return Math.max(max, v);
  }, 0);
}

export function WorldLayer() {
  const progress = useWaranStore((s) => s.progress);
  const quality = useWaranStore((s) => s.quality);

  const a = useMemo(
    () => ({
      identity: activity(progress, ["signal", "question", "future", "cta"]),
      primal: activity(progress, ["primal"]),
      tech: activity(progress, ["tech", "machine"]),
      sciences: activity(progress, ["sciences"]),
      capital: activity(progress, ["capital"]),
      exploration: activity(progress, ["exploration", "machine"]),
      space: activity(progress, ["space", "future"]),
      system: activity(progress, ["system", "future", "cta"]),
    }),
    [progress],
  );

  return (
    <group>
      <group position={[1.4, 0.2, 0]} scale={0.95 + a.identity * 0.35}>
        <HelixMark />
      </group>
      {a.primal > 0.02 ? <PrimalWorld active={a.primal} /> : null}
      {a.tech > 0.02 ? <TechWorld active={a.tech} /> : null}
      {a.sciences > 0.02 ? <ScienceWorld active={a.sciences} /> : null}
      {a.capital > 0.02 ? <CapitalWorld active={a.capital} /> : null}
      {a.exploration > 0.02 ? <ExplorationWorld active={a.exploration} /> : null}
      {quality !== "essential" || a.space > 0.08 ? <SpaceWorld active={a.space} /> : null}
      {a.system > 0.05 ? <FlywheelWorld active={a.system} /> : null}
    </group>
  );
}
