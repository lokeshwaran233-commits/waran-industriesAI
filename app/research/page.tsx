import type { Metadata } from "next";
import Link from "next/link";
import { researchPrograms } from "@/content/research";
import { StatusChip } from "@/components/ui/StatusChip";
import { divisionBySlug } from "@/content/divisions";

export const metadata: Metadata = {
  title: "Research",
  description:
    "WARAN research directions across software, technology, life science, capital systems, exploration protocol and planetary robotics. Directions, not claimed results.",
};

export default function ResearchPage() {
  return (
    <article className="px-6 pb-28 pt-28 md:px-12">
      <p className="micro text-waran-gold">Research</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-[-0.06em] md:text-7xl">
        Directions with method. No invented achievements.
      </h1>
      <p className="measure mt-6 text-waran-paper/70">
        These programs describe where WARAN intends to build capability. They are not publications, patents or completed studies.
      </p>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {researchPrograms.map((program) => {
          const division = divisionBySlug[program.division];
          return (
            <article key={program.slug} className="border border-white/10 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <StatusChip status={program.horizon} />
                <Link href={`/divisions/${program.division}`} className="micro text-waran-gold/80">
                  {division.shortName}
                </Link>
              </div>
              <h2 className="mt-6 font-display text-3xl tracking-[-0.04em]">{program.title}</h2>
              <p className="mt-4 text-sm leading-6 text-waran-paper/65">{program.body}</p>
            </article>
          );
        })}
      </div>
    </article>
  );
}
