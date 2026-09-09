import { spaceChain, spaceControlStack, spaceSystems, spaceTargets } from "@/content/space";
import { StatusChip } from "@/components/ui/StatusChip";

export function SpaceArchitecture() {
  return (
    <section className="border-t border-white/10 px-6 py-20 md:px-12">
      <div className="flex items-center gap-3">
        <StatusChip status="future" label="Long-range objective" />
      </div>
      <h2 className="mt-6 max-w-4xl font-display text-4xl tracking-[-0.05em] md:text-6xl">
        Robotics first. Humans when safety justifies it.
      </h2>
      <p className="measure mt-5 text-waran-paper/65">
        WARAN SPACE is not a current launch program, mining operation or crewed mission. It is the outer architecture the rest of WARAN is designed to become capable of approaching.
      </p>
      <ol className="mt-12 grid gap-3 md:grid-cols-2">
        {spaceChain.map((step, i) => (
          <li key={`${step}-${i}`} className="flex items-center gap-4 border border-white/10 px-4 py-3">
            <span className="micro text-waran-gold">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {spaceControlStack.map((layer) => (
          <article key={layer.layer} className="border border-white/10 p-6">
            <h3 className="font-display text-2xl">{layer.layer}</h3>
            <p className="mt-3 text-sm leading-6 text-waran-paper/65">{layer.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {spaceTargets.map((target) => (
          <article key={target.name} className="border border-white/10 p-6">
            <h3 className="font-display text-2xl">{target.name}</h3>
            <p className="mt-3 text-sm leading-6 text-waran-paper/65">{target.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-2">
        {spaceSystems.map((item) => (
          <span key={item} className="border border-white/10 px-3 py-2 text-[11px] tracking-[0.16em] text-waran-paper/70">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
