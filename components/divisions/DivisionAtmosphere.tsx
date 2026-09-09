import type { DivisionSlug } from "@/content/types";
import { HelixFallback } from "@/components/brand/HelixFallback";

const copy: Record<DivisionSlug, string> = {
  primal: "Computational lattice",
  tech: "Machine volume",
  sciences: "Molecular quiet",
  capital: "Allocation architecture",
  exploration: "Terrain and protocol",
  space: "Robotics beyond Earth",
};

export function DivisionAtmosphere({ slug }: { slug: DivisionSlug }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute -right-20 top-10 opacity-40"
        aria-hidden
      >
        <HelixFallback />
      </div>
      <p className="sr-only">{copy[slug]}</p>
    </div>
  );
}
