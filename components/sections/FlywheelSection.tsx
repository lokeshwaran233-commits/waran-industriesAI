"use client";

import { flywheelNodes, illuminationCopy, relatedByDivision } from "@/content/flywheel";
import { cn } from "@/lib/cn";
import { useWaranStore } from "@/lib/store";
import type { DivisionSlug } from "@/content/types";

export function FlywheelSection() {
  const focus = useWaranStore((s) => s.flywheelFocus);
  const setFocus = useWaranStore((s) => s.setFlywheelFocus);
  const slug = (focus as DivisionSlug) || "primal";

  return (
    <section id="system" className="relative z-30 border-t border-white/10 px-6 py-24 md:px-12">
      <p className="micro text-waran-gold">The system</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-[-0.05em] md:text-6xl">
        Value becomes capability. Capability becomes frontier.
      </h2>
      <div className="mt-12 flex flex-wrap gap-3">
        {flywheelNodes.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setFocus(focus === node.id ? null : node.slug ?? node.id)}
            className={cn(
              "border px-4 py-3 text-left text-xs tracking-[0.18em] transition-colors",
              focus === node.id || focus === node.slug
                ? "border-waran-gold bg-waran-gold/10 text-waran-gold"
                : "border-white/10 text-waran-paper/70 hover:border-white/30",
            )}
          >
            {node.label}
          </button>
        ))}
      </div>
      <p className="measure mt-8 text-sm leading-7 text-waran-paper/70">
        {flywheelNodes.find((n) => n.id === focus || n.slug === focus)?.body ?? illuminationCopy[slug]}
      </p>
      {relatedByDivision[slug] ? (
        <p className="mt-4 text-xs tracking-[0.2em] text-waran-paper/40">
          Related: {relatedByDivision[slug].join(" · ")}
        </p>
      ) : null}
    </section>
  );
}
