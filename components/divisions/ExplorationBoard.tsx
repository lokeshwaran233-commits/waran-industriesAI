"use client";

import { useState } from "react";
import { conceptualMissions, explorerPath, explorationLoop, missionClients } from "@/content/exploration";
import { StatusChip } from "@/components/ui/StatusChip";

export function ExplorationBoard() {
  const [active, setActive] = useState(conceptualMissions[0].id);
  const mission = conceptualMissions.find((m) => m.id === active) ?? conceptualMissions[0];

  return (
    <section className="border-t border-white/10 px-6 py-20 md:px-12">
      <p className="micro text-waran-gold">Exploration system</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-[-0.04em] md:text-5xl">
        Train before terrain. Protocol before prestige.
      </h2>
      <p className="measure mt-5 text-waran-paper/65">
        This is a future professional expedition architecture. Every mission below is labelled conceptual. WARAN does not currently operate field expeditions.
      </p>

      <div className="mt-12 overflow-x-auto">
        <ol className="flex min-w-max gap-3">
          {explorerPath.map((rank, i) => (
            <li key={rank.rank} className="w-48 border border-white/10 p-4">
              <p className="micro text-waran-paper/40">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl">{rank.rank}</h3>
              <p className="mt-2 text-xs leading-5 text-waran-paper/55">{rank.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="micro mt-16 text-waran-gold">Mission loop</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {explorationLoop.map((step) => (
          <span key={step} className="border border-white/10 px-3 py-2 text-[11px] tracking-[0.16em] text-waran-paper/70">
            {step}
          </span>
        ))}
      </div>

      <p className="micro mt-16 text-waran-gold">Conceptual mission board</p>
      <div className="mt-6 grid gap-4 md:grid-cols-[220px_1fr]">
        <div className="space-y-2">
          {conceptualMissions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`block w-full border px-4 py-3 text-left text-xs tracking-[0.16em] ${
                active === item.id ? "border-waran-gold text-waran-gold" : "border-white/10 text-waran-paper/70"
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>
        <article className="border border-white/10 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip status="frontier" label={mission.status} />
            <span className="micro text-waran-paper/40">{mission.id}</span>
          </div>
          <h3 className="mt-5 font-display text-3xl tracking-[-0.04em]">{mission.title}</h3>
          <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <dt className="micro text-waran-paper/40">Type</dt>
              <dd className="mt-1">{mission.type}</dd>
            </div>
            <div>
              <dt className="micro text-waran-paper/40">Difficulty</dt>
              <dd className="mt-1">{mission.difficulty}</dd>
            </div>
            <div>
              <dt className="micro text-waran-paper/40">Team</dt>
              <dd className="mt-1">{mission.teamSize}</dd>
            </div>
            <div>
              <dt className="micro text-waran-paper/40">Duration</dt>
              <dd className="mt-1">{mission.duration}</dd>
            </div>
            <div>
              <dt className="micro text-waran-paper/40">Environment</dt>
              <dd className="mt-1">{mission.environment}</dd>
            </div>
            <div>
              <dt className="micro text-waran-paper/40">Safety</dt>
              <dd className="mt-1">{mission.safety}</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-6 text-waran-paper/70">{mission.scientificObjective}</p>
          <p className="mt-3 text-sm text-waran-paper/55">{mission.clientObjective}</p>
          <p className="mt-4 text-xs tracking-[0.16em] text-waran-gold/80">
            Expertise: {mission.expertise.join(" · ")}
          </p>
        </article>
      </div>
      <p className="mt-8 text-xs tracking-[0.18em] text-waran-paper/40">
        Future request sources: {missionClients.join(" · ")}
      </p>
    </section>
  );
}
