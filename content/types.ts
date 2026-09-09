export type HorizonStatus = "now" | "building" | "frontier" | "future";

export type DivisionSlug =
  | "primal"
  | "tech"
  | "sciences"
  | "capital"
  | "exploration"
  | "space";

export type SceneId =
  | "signal"
  | "question"
  | "primal"
  | "tech"
  | "sciences"
  | "capital"
  | "exploration"
  | "machine"
  | "space"
  | "system"
  | "future"
  | "cta";

export interface Capability {
  title: string;
  body: string;
}

export interface RoadmapItem {
  horizon: HorizonStatus;
  title: string;
  body: string;
}

export interface Division {
  slug: DivisionSlug;
  code: string;
  name: string;
  shortName: string;
  kicker: string;
  status: HorizonStatus;
  statusLabel: string;
  headline: string;
  mission: string;
  principle: string;
  summary: string;
  world: string;
  atmosphere: string;
  accent: string;
  capabilities: Capability[];
  workflow: string[];
  relationships: string[];
  roadmap: RoadmapItem[];
  opportunities: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface Scene {
  id: SceneId;
  index: number;
  start: number;
  end: number;
  chapter: string;
  kicker: string;
  title: string;
  lines: string[];
  body: string;
  status?: HorizonStatus;
  href?: string;
  camera: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
  };
}

export interface ConceptualMission {
  id: string;
  title: string;
  type: string;
  difficulty: string;
  expertise: string[];
  teamSize: string;
  duration: string;
  environment: string;
  scientificObjective: string;
  equipment: string[];
  safety: string;
  clientObjective: string;
  status: string;
}

export interface InquiryPayload {
  name: string;
  email: string;
  organization?: string;
  interest: string;
  message: string;
}
