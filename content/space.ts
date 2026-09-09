export const spaceChain = [
  "Earth",
  "Launch",
  "Orbital infrastructure",
  "Destination",
  "Lander / transport",
  "Exploration robot",
  "Survey",
  "Mapping",
  "Analysis",
  "Resource prospecting",
  "Sample / material collection",
  "Storage",
  "Return / transfer",
  "Earth",
] as const;

export const spaceControlStack = [
  {
    layer: "Human",
    body: "Mission authority, strategic control, scientific decisions, exception handling.",
  },
  {
    layer: "Immersive interface",
    body: "Telepresence designed so operators understand the remote environment without being inside its risk.",
  },
  {
    layer: "AI assistance",
    body: "Local autonomy, navigation help, stabilization, diagnostics, optimization and safety support.",
  },
  {
    layer: "Robot",
    body: "Physical execution: mobility, sensing, manipulation, collection and storage.",
  },
] as const;

export const spaceTargets = [
  { name: "Moon", body: "Nearest rehearsal of vacuum operations, communications delay and return logistics." },
  { name: "Mars", body: "A scientifically dense destination requiring autonomy because delay forbids joystick exploration." },
  { name: "Asteroids", body: "Prospecting and sample problems in microgravity. Not an extraction business." },
  { name: "Other environments", body: "Any scientifically relevant body approached only when the architecture can carry the work." },
] as const;

export const spaceSystems = [
  "Autonomous rovers",
  "Orbital systems",
  "Telepresence",
  "Robotic manipulation",
  "Resource prospecting",
  "Sample collection",
  "Communications",
  "Energy systems",
  "Storage",
  "Return systems",
] as const;
