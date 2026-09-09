import type { Division } from "./types";

export const divisions: Division[] = [
  {
    slug: "primal",
    code: "01",
    name: "WARAN PRIMAL",
    shortName: "PRIMAL",
    kicker: "The first frontier",
    status: "now",
    statusLabel: "Operating entry point",
    headline: "AI that transforms work.",
    mission:
      "Turn complex operational bottlenecks into scalable digital systems, then reinvest the resulting capability into the rest of WARAN.",
    principle: "Understand the workflow. Identify the bottleneck. Quantify the opportunity. Engineer the solution. Deploy. Learn. Scale.",
    summary:
      "WARAN PRIMAL is the only current operating division. It builds AI-native software, intelligent automation and domain-specific systems. Everything begins here: revenue capacity, technical craft, customer insight and reusable infrastructure.",
    world: "Digital / neural / computational",
    atmosphere: "Bright computational volume, lattice of workflow nodes, restrained gold signal paths.",
    accent: "#C5A059",
    capabilities: [
      {
        title: "Workflow intelligence",
        body: "Map how work actually moves, isolate friction, and convert it into measurable system design.",
      },
      {
        title: "AI-native products",
        body: "Software designed around models, tools and human oversight rather than bolted-on chat.",
      },
      {
        title: "Intelligent automation",
        body: "Replace brittle hand-offs with systems that observe, decide, act and leave an audit trail.",
      },
      {
        title: "Enterprise systems",
        body: "Durable operational software for organizations whose complexity cannot be solved by a dashboard.",
      },
      {
        title: "Domain-specific AI",
        body: "Models and interfaces shaped by a particular industry’s constraints, language and risk.",
      },
    ],
    workflow: [
      "Observe the operating reality, not the org chart.",
      "Quantify the bottleneck in time, error, cost and lost optionality.",
      "Engineer a system that can be deployed, measured and revised.",
      "Learn from production, then extract reusable infrastructure.",
      "Scale only after the mechanism is proven.",
    ],
    relationships: [
      "Feeds CAPITAL with operating insight and future funding capacity.",
      "Creates software and AI systems that later divisions can inherit.",
      "Turns field, lab and capital requirements into product problems.",
    ],
    roadmap: [
      {
        horizon: "now",
        title: "Build the first operating systems",
        body: "Ship AI-native software against real operational bottlenecks.",
      },
      {
        horizon: "building",
        title: "Extract reusable infrastructure",
        body: "Convert each deployment into platforms, methods and internal tools.",
      },
      {
        horizon: "future",
        title: "Fund later frontiers",
        body: "Use proven capability as the industrial base for TECH, SCIENCES and beyond.",
      },
    ],
    opportunities: [
      "Organizations with complex, high-friction workflows.",
      "Operators who need systems, not slideware.",
      "Partners who want to build with WARAN from the first frontier.",
    ],
    cta: { label: "Start with PRIMAL", href: "/contact?interest=primal" },
  },
  {
    slug: "tech",
    code: "02",
    name: "WARAN TECH",
    shortName: "TECH",
    kicker: "Advanced technology",
    status: "building",
    statusLabel: "Planned capability",
    headline: "Machines extend human reach.",
    mission:
      "Extend human capability through robotics, advanced computing, sensing and engineered systems for environments software cannot enter.",
    principle: "Software discovers the constraint. Hardware is built when the constraint is physical.",
    summary:
      "WARAN TECH is the advanced technology division being designed around robotics, autonomous systems, spatial interfaces and extreme-environment engineering. It is not a consumer-gadget studio. The annual concept WARAN FRONTIER EXPO is a future showcase architecture, not a current event.",
    world: "Robotic / mechanical / engineered",
    atmosphere: "Precision machine volume, brushed metal, measured gold highlights on joints and rails.",
    accent: "#9AA4B2",
    capabilities: [
      { title: "Robotics and autonomy", body: "Machines that can act where distance, danger or scale exceed unaided human work." },
      { title: "Advanced computing", body: "Compute, sensing and control stacks for systems that must remain reliable under load." },
      { title: "Human-machine interfaces", body: "Spatial, holographic and teleoperation concepts that keep humans in authority." },
      { title: "Extreme-environment systems", body: "Technology intended for heat, cold, pressure, dust, darkness and isolation." },
      { title: "Frontier Expo concept", body: "A planned showcase for prototypes, research directions and partner demonstrations." },
    ],
    workflow: [
      "Translate field and operational requirements into engineering problems.",
      "Prototype only where physics, not presentation, is the question.",
      "Test in controlled conditions before any hazardous environment.",
      "Feed results back into PRIMAL software and CAPITAL allocation.",
    ],
    relationships: [
      "Receives requirements from EXPLORATION and SPACE.",
      "Supplies instruments and platforms to SCIENCES.",
      "Depends on PRIMAL for control software, simulation and operations tooling.",
    ],
    roadmap: [
      { horizon: "building", title: "Define the R&D agenda", body: "Identify the first physical problems worth an industrial response." },
      { horizon: "frontier", title: "Prototype with discipline", body: "Build demonstrators that can be tested, not merely rendered." },
      { horizon: "future", title: "WARAN FRONTIER EXPO", body: "A future-facing showcase for prototypes, partners and research directions." },
    ],
    opportunities: [
      "Research collaborators in robotics, sensing and autonomy.",
      "Operators with extreme-environment constraints.",
      "Future partners for the Frontier Expo concept.",
    ],
    cta: { label: "Discuss TECH research", href: "/contact?interest=tech" },
  },
  {
    slug: "sciences",
    code: "03",
    name: "WARAN SCIENCES",
    shortName: "SCIENCES",
    kicker: "Biological frontier",
    status: "building",
    statusLabel: "Research direction",
    headline: "Computation meets biology.",
    mission:
      "Use computation, AI, engineering and scientific method to accelerate biological understanding and expand what is possible in life science.",
    principle: "Do not claim discovery. Build the capability to pursue it rigorously.",
    summary:
      "WARAN SCIENCES is a planned biological and scientific frontier: computational biology, protein design, synthetic biology, neuroscience and biohybrid computing. It is presented as a research direction, not as an operating laboratory or a catalogue of results.",
    world: "Biological / cellular / molecular",
    atmosphere: "Quiet wet-lab light, molecular lattices, pale gold markers on otherwise scientific surfaces.",
    accent: "#7FA58A",
    capabilities: [
      { title: "Computational biology", body: "Models and simulations intended to compress experimental search space." },
      { title: "AI-driven discovery methods", body: "Machine systems that propose, score and explain biological hypotheses." },
      { title: "Protein and cell engineering", body: "Long-horizon work in protein design, cell engineering and bioengineering." },
      { title: "Neuroscience interfaces", body: "Research interest in BCI, neuromorphic and biological information processing." },
      { title: "Scientific computation", body: "Infrastructure that treats life science as an engineering-grade information problem." },
    ],
    workflow: [
      "Frame a biological question that computation can actually narrow.",
      "Build models that remain accountable to experiment.",
      "Keep safety, ethics and regulation inside the research design.",
      "Return methods to PRIMAL as software and to TECH as instruments.",
    ],
    relationships: [
      "Uses PRIMAL software methods for modeling and experiment operations.",
      "Specifies instruments and compute for TECH.",
      "Informs EXPLORATION field sampling protocols.",
    ],
    roadmap: [
      { horizon: "building", title: "Establish research posture", body: "Define questions, constraints and collaborations before any claim of result." },
      { horizon: "frontier", title: "Computational wet-lab loop", body: "Design a future cycle of model, experiment, measurement and revision." },
      { horizon: "future", title: "Bio-computational platforms", body: "Long-range capability in protein, cell and neural information systems." },
    ],
    opportunities: [
      "Universities and labs exploring computational biology.",
      "Researchers who need serious engineering partners.",
      "Future collaborators in neuroscience and bioengineering.",
    ],
    cta: { label: "Open a research conversation", href: "/contact?interest=sciences" },
  },
  {
    slug: "capital",
    code: "04",
    name: "WARAN CAPITAL",
    shortName: "CAPITAL",
    kicker: "Capital intelligence",
    status: "building",
    statusLabel: "Institutional design",
    headline: "Capital as an instrument of progress.",
    mission:
      "Allocate capital intelligently to accelerate WARAN’s long-term mission: treasury, research, operations and future frontiers.",
    principle: "The purpose is not merely to make money. The purpose is to make the next necessary capability possible.",
    summary:
      "WARAN CAPITAL is the planned financial and capital-intelligence division: treasury, quantitative research, market intelligence, corporate finance, risk and internal funding strategy. No returns, funds or investment products are claimed.",
    world: "Institutional / analytical / financial",
    atmosphere: "Quiet architecture, pale stone and steel, gold reserved for allocation markers.",
    accent: "#C5A059",
    capabilities: [
      { title: "Treasury and operations", body: "Cash, controls and financial operations designed for a multi-decade organization." },
      { title: "Quantitative research", body: "Methods for understanding markets and risk without theatrical performance charts." },
      { title: "Capital allocation", body: "A future internal market for funding PRIMAL, TECH, SCIENCES, EXPLORATION and SPACE." },
      { title: "Strategic analysis", body: "Investment analysis as a decision system, not a pitch." },
      { title: "Risk management", body: "Institutional caution as a condition of long-horizon work." },
    ],
    workflow: [
      "Measure where value is actually created.",
      "Fund the next constraint, not the loudest narrative.",
      "Hold risk visible, quantified and reversible where possible.",
      "Return allocation logic to the rest of WARAN as operating discipline.",
    ],
    relationships: [
      "Receives operating reality from PRIMAL.",
      "Funds planned R&D in TECH and SCIENCES.",
      "Underwrites the cost of future EXPLORATION and SPACE capability.",
    ],
    roadmap: [
      { horizon: "building", title: "Design the allocation system", body: "Create the institutional logic before any public financial claim." },
      { horizon: "frontier", title: "Internal funding engine", body: "Route operating surplus toward the next scientifically justified frontier." },
      { horizon: "future", title: "Long-horizon capital intelligence", body: "A durable treasury and research function for a multi-decade organization." },
    ],
    opportunities: [
      "Operators who treat capital as a scientific instrument.",
      "Future collaborators in quantitative research.",
      "Institutions evaluating WARAN’s long-horizon architecture.",
    ],
    cta: { label: "Talk capital architecture", href: "/contact?interest=capital" },
  },
  {
    slug: "exploration",
    code: "05",
    name: "WARAN EXPLORATION",
    shortName: "EXPLORATION",
    kicker: "Earthly frontier",
    status: "frontier",
    statusLabel: "Frontier architecture",
    headline: "Train. Prepare. Explore. Discover.",
    mission:
      "Become a professional expedition organization: scientific, disciplined, physically demanding, and accountable to safety, law and environment.",
    principle: "Exploration is not tourism. It is trained work in the field, under protocol.",
    summary:
      "WARAN EXPLORATION is a planned professional exploration division for mountains, deserts, jungles, polar, cave, ocean and scientific field missions. All missions shown on this site are conceptual frameworks, not current WARAN operations.",
    world: "Planetary / geographical / environmental",
    atmosphere: "Open earth light, terrain strata, gold used only as survey markers.",
    accent: "#C47A3A",
    capabilities: [
      { title: "Expedition architecture", body: "A future progression from rookie to frontier specialist, in teams of roughly 4–6." },
      { title: "Scientific field missions", body: "Mapping, sampling, geological and biological work under research protocol." },
      { title: "Engineering missions", body: "Equipment testing and extreme-environment evaluation that feeds TECH." },
      { title: "Search, recovery and survey", body: "Disciplined field operations with permissions, risk assessment and legal compliance." },
      { title: "Mission board concept", body: "A future request system for universities, labs, companies and environmental organizations." },
    ],
    workflow: [
      "Train and certify before any field exposure.",
      "Specialize, then form a team matched to the environment.",
      "Accept only missions that clear safety, legal and environmental gates.",
      "Prepare, deploy, collect, analyze, return, publish or commercialize only what is legitimate.",
      "Learn, then upgrade equipment, software and protocol.",
    ],
    relationships: [
      "Specifies field equipment for TECH.",
      "Returns samples, measurements and constraints to SCIENCES.",
      "Depends on PRIMAL for planning, communications and data systems.",
      "Requires CAPITAL because serious expeditions are expensive on purpose.",
    ],
    roadmap: [
      { horizon: "frontier", title: "Build the training spine", body: "Define competency, safety and certification before any expedition brand." },
      { horizon: "frontier", title: "Mission framework", body: "Create the request, planning and compliance architecture shown as conceptual missions." },
      { horizon: "future", title: "Professional field force", body: "Deploy specialist teams only when the organization can carry the risk honestly." },
    ],
    opportunities: [
      "Universities and research organizations with legitimate field needs.",
      "Engineering groups requiring extreme-environment testing.",
      "Future explorers willing to train rather than perform.",
    ],
    cta: { label: "Study the exploration framework", href: "/frontier" },
  },
  {
    slug: "space",
    code: "06",
    name: "WARAN SPACE",
    shortName: "SPACE",
    kicker: "Beyond Earth",
    status: "future",
    statusLabel: "Long-range objective",
    headline: "Beyond Earth. For a greater future.",
    mission:
      "Extend operational capability beyond Earth through robotics-first systems: orbit, destination, survey, prospecting and return. Humans remain in authority. Machines take the risk until safety justifies otherwise.",
    principle: "Robotics first. Humans when technology and safety justify it.",
    summary:
      "WARAN SPACE is not an initial operating business and not a current spaceflight program. It is the long-range frontier: Moon, Mars, asteroids and other scientifically relevant environments, approached through autonomous and teleoperated robotics.",
    world: "Cosmic / orbital / extraterrestrial",
    atmosphere: "Hard sunlight, deep shadow, pale gold only on guidance marks and return vectors.",
    accent: "#8FB7D6",
    capabilities: [
      { title: "Robotics-first architecture", body: "Earth, launch, orbit, destination, lander, robot, survey, storage, return." },
      { title: "Telepresence control", body: "Human operators through immersive interface, 3D presence, AI assistance and robot execution." },
      { title: "Survey and prospecting", body: "Mapping, analysis and resource prospecting as research problems, not extraction claims." },
      { title: "Sample and return logic", body: "Collection, storage and transfer designed as engineering, not science fiction." },
      { title: "Safety split", body: "Humans keep mission authority. AI handles local autonomy. Robots do the physical work." },
    ],
    workflow: [
      "Prove methods on Earth through TECH and EXPLORATION.",
      "Design orbital and destination systems only after the terrestrial loop is real.",
      "Keep humans in strategic control; give machines the hazardous execution.",
      "Treat every extraterrestrial target as a scientific and engineering problem, not a brand backdrop.",
    ],
    relationships: [
      "Inherits robotics from TECH and field method from EXPLORATION.",
      "Inherits sensing, analysis and sample science from SCIENCES.",
      "Inherits operations software from PRIMAL and funding logic from CAPITAL.",
    ],
    roadmap: [
      { horizon: "future", title: "Terrestrial rehearsal", body: "Extreme-environment robotics on Earth before any off-world claim." },
      { horizon: "future", title: "Orbital architecture study", body: "Communications, energy, storage and return as a system, not a poster." },
      { horizon: "future", title: "Destination robotics", body: "Moon, Mars and asteroids remain objectives, not operations." },
    ],
    opportunities: [
      "Researchers in planetary robotics and teleoperation.",
      "Institutions evaluating long-horizon space architectures.",
      "Partners who understand that this is a decades-scale objective.",
    ],
    cta: { label: "Read the space architecture", href: "/contact?interest=space" },
  },
];

export const divisionBySlug = Object.fromEntries(divisions.map((d) => [d.slug, d])) as Record<
  Division["slug"],
  Division
>;
