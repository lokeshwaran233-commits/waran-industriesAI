import type { DivisionSlug } from "./types";

export interface FlywheelNode {
  id: string;
  label: string;
  kind: "division" | "flow";
  slug?: DivisionSlug;
  body: string;
}

export const flywheelNodes: FlywheelNode[] = [
  { id: "primal", label: "PRIMAL", kind: "division", slug: "primal", body: "AI-native software creates operating value and reusable systems." },
  { id: "revenue", label: "VALUE", kind: "flow", body: "Proven work becomes capacity — not a claimed revenue figure." },
  { id: "capital", label: "CAPITAL", kind: "division", slug: "capital", body: "Allocation logic routes capacity toward the next necessary capability." },
  { id: "rnd", label: "R&D", kind: "flow", body: "Research is funded because a constraint is real, not because a slide requires it." },
  { id: "tech", label: "TECH", kind: "division", slug: "tech", body: "Machines and instruments extend reach into physical environments." },
  { id: "sciences", label: "SCIENCES", kind: "division", slug: "sciences", body: "Computation and method accelerate biological and scientific understanding." },
  { id: "exploration", label: "EXPLORATION", kind: "division", slug: "exploration", body: "Field work produces knowledge laboratories cannot invent." },
  { id: "discovery", label: "DISCOVERY", kind: "flow", body: "Data, samples, failure modes and new requirements re-enter the system." },
  { id: "space", label: "SPACE", kind: "division", slug: "space", body: "The same operating logic, eventually, beyond Earth." },
  { id: "frontiers", label: "NEW FRONTIERS", kind: "flow", body: "Each completed loop should make a harder environment tractable." },
  { id: "capability", label: "CAPABILITY", kind: "flow", body: "WARAN compounds methods, tools, people and infrastructure." },
  { id: "waran", label: "WARAN", kind: "flow", body: "The institution is the product: a durable way of expanding human capability." },
];

export const flywheelLinks: Array<[string, string]> = [
  ["primal", "revenue"],
  ["revenue", "capital"],
  ["capital", "rnd"],
  ["rnd", "tech"],
  ["rnd", "sciences"],
  ["tech", "exploration"],
  ["sciences", "exploration"],
  ["exploration", "discovery"],
  ["discovery", "tech"],
  ["discovery", "sciences"],
  ["discovery", "primal"],
  ["tech", "space"],
  ["sciences", "space"],
  ["space", "frontiers"],
  ["frontiers", "capability"],
  ["capability", "waran"],
  ["waran", "primal"],
  ["capital", "exploration"],
  ["primal", "tech"],
  ["primal", "sciences"],
];

export const relatedByDivision: Record<DivisionSlug, DivisionSlug[]> = {
  primal: ["capital", "tech", "sciences", "exploration", "space"],
  tech: ["primal", "sciences", "exploration", "space", "capital"],
  sciences: ["primal", "tech", "exploration", "space", "capital"],
  capital: ["primal", "tech", "sciences", "exploration", "space"],
  exploration: ["tech", "sciences", "capital", "primal", "space"],
  space: ["tech", "sciences", "exploration", "primal", "capital"],
};

export const illuminationCopy: Record<DivisionSlug, string> = {
  primal: "Software and AI systems support every later operation: planning, control, data and learning.",
  tech: "Exploration, science and space all require machines, sensors and engineered platforms.",
  sciences: "Biological, geological and sample science give later missions something worth measuring.",
  capital: "Serious missions, laboratories and spacecraft are allocation problems before they are slogans.",
  exploration: "Field requirements create the problems TECH and SCIENCES must solve, and the proof SPACE will need.",
  space: "The eventual expansion of the same loop: capability compounding until Earth is no longer the outer wall.",
};
