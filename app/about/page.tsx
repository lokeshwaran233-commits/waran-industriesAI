import type { Metadata } from "next";
import { HelixFallback } from "@/components/brand/HelixFallback";
import { StatusChip } from "@/components/ui/StatusChip";
import { site } from "@/content/site";
import { divisions } from "@/content/divisions";

export const metadata: Metadata = {
  title: "About",
  description:
    "WARAN Industries is a long-horizon technology, science, capital and exploration organization. WARAN PRIMAL is the first operating division.",
};

export default function AboutPage() {
  return (
    <article className="px-6 pb-28 pt-28 md:px-12">
      <p className="micro text-waran-gold">About</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-[-0.06em] md:text-7xl">
        An institution designed for decades, beginning with software.
      </h1>
      <div className="mt-12">
        <HelixFallback />
      </div>
      <p className="measure mt-10 text-lg leading-8 text-waran-paper/75">
        WARAN Industries is not a startup costume and not a completed conglomerate. It is a long-term organization whose first real work is WARAN PRIMAL: AI-native software that turns operational bottlenecks into scalable systems.
      </p>
      <p className="measure mt-6 text-waran-paper/65">
        The remaining divisions describe planned capability. They exist on this site so the architecture is visible before it is operational — not so the future can be mistaken for the present.
      </p>
      <section className="mt-20">
        <h2 className="font-display text-3xl tracking-[-0.04em]">Sequence of capability</h2>
        <ol className="mt-8 space-y-4">
          {divisions.map((d) => (
            <li key={d.slug} className="flex flex-wrap items-center gap-4 border-b border-white/10 py-4">
              <span className="micro text-waran-paper/40">{d.code}</span>
              <span className="font-display text-2xl">{d.name}</span>
              <StatusChip status={d.status} label={d.statusLabel} />
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-20 grid gap-8 md:grid-cols-2">
        {site.philosophy.map((line) => (
          <p key={line} className="border border-white/10 p-6 text-lg text-waran-paper/80">
            {line}
          </p>
        ))}
      </section>
    </article>
  );
}
