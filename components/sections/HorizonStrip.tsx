import { site } from "@/content/site";
import { StatusChip } from "@/components/ui/StatusChip";
import type { HorizonStatus } from "@/content/types";

export function HorizonStrip() {
  return (
    <section className="relative z-30 border-t border-white/10 bg-[#0b0c0e]/80 px-6 py-24 backdrop-blur-sm md:px-12">
      <p className="micro text-waran-gold">Current versus future</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-[-0.05em] md:text-6xl">
        Enormous vision. Honest sequence.
      </h2>
      <p className="measure mt-6 text-waran-paper/70">{site.honesty.body}</p>
      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {site.horizons.map((item) => (
          <article key={item.id} className="border border-white/10 bg-white/[0.03] p-6">
            <StatusChip status={item.id as HorizonStatus} />
            <h3 className="mt-6 font-display text-2xl tracking-[-0.04em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-waran-paper/65">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
