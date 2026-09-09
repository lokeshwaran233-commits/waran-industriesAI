import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { divisions, divisionBySlug } from "@/content/divisions";
import { relatedByDivision, illuminationCopy } from "@/content/flywheel";
import { StatusChip } from "@/components/ui/StatusChip";
import { site } from "@/content/site";
import { DivisionVisualSystem } from "@/components/divisions/DivisionVisualSystem";
import { ExplorationBoard } from "@/components/divisions/ExplorationBoard";
import { SpaceArchitecture } from "@/components/divisions/SpaceArchitecture";

type Params = { slug: string };

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const division = divisionBySlug[params.slug as keyof typeof divisionBySlug];
  if (!division) return { title: "Division" };
  return {
    title: division.name,
    description: division.summary,
    openGraph: {
      title: `${division.name} · ${site.name}`,
      description: division.summary,
    },
  };
}

export default function DivisionPage({ params }: { params: Params }) {
  const division = divisionBySlug[params.slug as keyof typeof divisionBySlug];
  if (!division) notFound();
  const related = relatedByDivision[division.slug];

  return (
    <article className="relative min-h-screen">
      {/* GRANDIOSE FLOATING BACKGROUND SIMULATION */}
      <DivisionVisualSystem slug={division.slug} />

      <header className="relative z-10 overflow-hidden px-6 pb-20 pt-32 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <p className="micro text-waran-gold">
              {division.code} / {division.kicker}
            </p>
            <div className="mt-5">
              <StatusChip status={division.status} label={division.statusLabel} />
            </div>
            <h1 className="mt-6 font-display text-5xl tracking-[-0.07em] md:text-8xl">{division.name}</h1>
            <p className="mt-6 max-w-3xl font-display text-2xl tracking-[-0.03em] text-waran-goldSoft md:text-4xl">
              {division.headline}
            </p>
            <p className="measure mt-8 text-lg leading-8 text-waran-paper/85">{division.summary}</p>
          </div>
          {/* Asymmetric right space for ambient background visibility */}
          <div className="hidden md:block md:col-span-4 border-l border-white/10 pl-8 pt-10">
            <p className="micro text-waran-gold">ATMOSPHERIC METRIC</p>
            <p className="mt-2 font-mono text-xs tracking-[0.2em] text-waran-paper/60 uppercase">
              WORLD: {division.world}
            </p>
            <p className="mt-6 text-xs leading-6 text-waran-paper/60">
              Real-time operational background matrix reflecting state data for {division.name}.
            </p>
          </div>
        </div>
      </header>

      {/* TRANSPARENT SECTIONS - LETTING THE FLOATING ANIMATIONS BE FULLY VISIBLE */}
      <section className="relative z-10 grid gap-12 border-t border-white/10 px-6 py-20 md:grid-cols-2 md:px-12">
        <div className="border border-white/10 bg-black/40 p-8 backdrop-blur-sm rounded-sm">
          <p className="micro text-waran-gold">Mission</p>
          <p className="mt-4 text-xl leading-8 text-waran-paper/85">{division.mission}</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-8 backdrop-blur-sm rounded-sm">
          <p className="micro text-waran-gold">Principle</p>
          <p className="mt-4 text-xl leading-8 text-waran-paper/85">{division.principle}</p>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-6 py-20 md:px-12">
        <p className="micro text-waran-gold">Capabilities</p>
        <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">What this division is for</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {division.capabilities.map((cap) => (
            <article key={cap.title} className="border border-white/10 bg-black/50 p-6 backdrop-blur-sm rounded-sm">
              <h3 className="font-display text-2xl tracking-[-0.03em]">{cap.title}</h3>
              <p className="mt-3 text-sm leading-6 text-waran-paper/65">{cap.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-6 py-20 md:px-12">
        <p className="micro text-waran-gold">Internal workflow</p>
        <ol className="mt-8 space-y-4">
          {division.workflow.map((step, i) => (
            <li key={step} className="flex gap-5 border-l border-waran-gold/30 pl-5 bg-black/30 p-4 rounded-sm">
              <span className="micro text-waran-paper/40">0{i + 1}</span>
              <p className="text-waran-paper/80">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative z-10 border-t border-white/10 px-6 py-20 md:px-12">
        <p className="micro text-waran-gold">Relationships</p>
        <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">How it connects</h2>
        <p className="measure mt-4 text-waran-paper/65">{illuminationCopy[division.slug]}</p>
        <ul className="mt-8 space-y-3 text-waran-paper/75">
          {division.relationships.map((rel) => (
            <li key={rel}>— {rel}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {related.map((slug) => {
            const other = divisionBySlug[slug];
            return (
              <Link
                key={slug}
                href={`/divisions/${slug}`}
                className="border border-white/15 bg-black/50 px-4 py-2 text-[11px] tracking-[0.2em] hover:border-waran-gold hover:text-waran-gold"
              >
                {other.shortName}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-6 py-20 md:px-12">
        <p className="micro text-waran-gold">Roadmap</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {division.roadmap.map((item) => (
            <article key={item.title} className="border border-white/10 bg-black/50 p-6 backdrop-blur-sm rounded-sm">
              <StatusChip status={item.horizon} />
              <h3 className="mt-5 font-display text-2xl tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-waran-paper/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {division.slug === "exploration" ? <ExplorationBoard /> : null}
      {division.slug === "space" ? <SpaceArchitecture /> : null}

      <section className="relative z-10 border-t border-white/10 px-6 py-20 md:px-12">
        <p className="micro text-waran-gold">Opportunities</p>
        <ul className="mt-6 space-y-3 text-waran-paper/75">
          {division.opportunities.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
        <Link
          href={division.cta.href}
          className="mt-10 inline-flex border border-waran-gold px-6 py-3 text-[11px] tracking-[0.28em] text-waran-gold hover:bg-waran-gold hover:text-waran-ink"
        >
          {division.cta.label}
        </Link>
      </section>
    </article>
  );
}
