import type { Metadata } from "next";
import { ExplorationBoard } from "@/components/divisions/ExplorationBoard";
import { SpaceArchitecture } from "@/components/divisions/SpaceArchitecture";
import { StatusChip } from "@/components/ui/StatusChip";

export const metadata: Metadata = {
  title: "Frontier",
  description:
    "WARAN Exploration and WARAN Space as planned frontiers: professional expedition architecture and robotics-first space systems. Conceptual only.",
};

export default function FrontierPage() {
  return (
    <article className="pt-28">
      <header className="px-6 md:px-12">
        <p className="micro text-waran-gold">Frontier</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-[-0.06em] md:text-7xl">
          Earth first. Then further.
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <StatusChip status="frontier" label="Exploration architecture" />
          <StatusChip status="future" label="Space objective" />
        </div>
        <p className="measure mt-6 text-waran-paper/70">
          The frontier layer of WARAN is designed before it is staffed. No current expeditions, launches or extraterrestrial operations are claimed.
        </p>
      </header>
      <ExplorationBoard />
      <SpaceArchitecture />
    </article>
  );
}
