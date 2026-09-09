import { HelixFallback } from "@/components/brand/HelixFallback";
import { scenes } from "@/content/scenes";
import { StatusChip } from "@/components/ui/StatusChip";

export function StaticFallback() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      <HelixFallback />
      <p className="micro mt-10 text-waran-gold">A reduced-motion / essential reading of the journey</p>
      <div className="mt-10 space-y-16">
        {scenes.map((scene) => (
          <section key={scene.id} className="border-t border-white/10 pt-8">
            <p className="micro text-waran-paper/45">{scene.chapter}</p>
            <p className="mt-3 micro text-waran-gold/80">{scene.kicker}</p>
            {scene.status ? (
              <div className="mt-4">
                <StatusChip status={scene.status} />
              </div>
            ) : null}
            <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">{scene.title}</h2>
            <p className="mt-5 text-sm tracking-[0.16em] text-waran-goldSoft">{scene.lines.join(" ")}</p>
            <p className="measure mt-4 text-waran-paper/70">{scene.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
