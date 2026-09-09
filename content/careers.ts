export type AINativeLevel =
  | "AI User"
  | "AI Practitioner"
  | "AI Builder"
  | "AI Specialist"
  | "AI Researcher"
  | "AI Product Leader"
  | "AI Systems Leader";

export type SeniorityLevel =
  | "Trainee / Student"
  | "Associate"
  | "Mid-Level"
  | "Senior"
  | "Lead"
  | "Staff / Principal"
  | "Director / Executive";

export interface SuccessMilestones {
  m30: string;
  m90: string;
  m180: string;
  m365: string;
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  subFunction: string;
  discipline: string;
  seniority: SeniorityLevel;
  experienceLevel: "Students & Interns" | "Fresh Graduates" | "Early Career" | "Professional" | "Experienced" | "Leadership";
  minExpYears: number;
  maxExpYears: number;
  employmentType: "Full-time" | "Internship" | "Contract" | "Fellowship" | "Graduate Program";
  location: string;
  workMode: "India / Hybrid" | "Remote" | "On-site" | "Global";
  shortDescription: string;
  mission: string;
  impactSummary: string;
  aiNativeExpectation: AINativeLevel;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  technologies: string[];
  domain?: string;
  isFrontierBuilder?: boolean;
  isEarlyCareer?: boolean;
  successMilestones: SuccessMilestones;
  collaborationMap: string[];
  growthPathway: string;
}

export const careerDisciplines = [
  "Executive & Strategy",
  "Product Management",
  "AI Product Management",
  "AI Platform & Developer Products",
  "Research Product Management",
  "AI Safety & Trust Product",
  "Product Design & UX",
  "AI UX & Interaction Design",
  "AI-Native Software Engineering",
  "Machine Learning & AI Engineering",
  "AI Research",
  "Data & Analytics",
  "Cloud & AI Infrastructure",
  "Cybersecurity & Red Teaming",
  "AI Quality & Reliability",
  "Solutions Architecture",
  "Customer Success",
  "Sales & Commercial Growth",
  "Marketing & Developer Growth",
  "Legal, Governance & Policy",
  "Human Resources & Talent",
  "Operations",
  "Business Analysis & TPM",
  "Research & Innovation",
  "Responsible AI & Governance",
  "Content, Knowledge & Tech Writing",
  "Finance & Revenue Operations"
] as const;

export const experienceFilters = [
  "All",
  "Students & Interns",
  "Fresh Graduates",
  "Early Career",
  "Professional",
  "Experienced",
  "Leadership",
] as const;

export const aiNativeLevels: AINativeLevel[] = [
  "AI User",
  "AI Practitioner",
  "AI Builder",
  "AI Specialist",
  "AI Researcher",
  "AI Product Leader",
  "AI Systems Leader"
];

export const candidateSignals = [
  { name: "Demonstrated Impact", desc: "Measurable system performance or business revenue outcomes delivered." },
  { name: "Personal Ownership", desc: "End-to-end accountability from architectural blueprint to production deployment." },
  { name: "Technical Depth", desc: "First-principles engineering rigor and mastery of underlying abstractions." },
  { name: "Product Judgment", desc: "Acute intuition for user friction, market need, and non-deterministic UX." },
  { name: "Execution Velocity", desc: "Unusually high output speed without compromising code quality or reliability." },
  { name: "Scale & Reliability", desc: "Proven capability to architect high-throughput, fault-tolerant infrastructure." },
  { name: "Learning Velocity", desc: "Rapid absorption of frontier papers, codebases, and emerging paradigms." },
  { name: "AI Fluency", desc: "Deep reasoning with generative models, RAG, tool calling, and evaluation metrics." }
];

export const evaluationFramework = [
  { dimension: "Relevant Capability", weight: "20%", desc: "Direct alignment with domain engineering/product requirements." },
  { dimension: "Demonstrated Impact", weight: "20%", desc: "Proven track record of shipping production-grade outcomes." },
  { dimension: "Technical / Functional Depth", weight: "15%", desc: "First-principles mastery of stack, algorithms, or strategy." },
  { dimension: "Problem Solving", weight: "15%", desc: "Ability to decompose ambiguous bottleneck problems." },
  { dimension: "Product / Business Judgment", weight: "10%", desc: "Commercial viability and customer empathy." },
  { dimension: "Communication", weight: "10%", desc: "Clear, concise technical and strategic writing." },
  { dimension: "Learning Velocity", weight: "5%", desc: "Speed of acquiring new technical domains." },
  { dimension: "AI Fluency", weight: "5%", desc: "AI-native tool adoption and model reasoning." }
];

export const careerRoles: JobRole[] = [
  // --- 0. FLAGSHIP TRAINEE PROGRAM ---
  {
    id: "rotational-trainee-12m",
    title: "12-Month Rotational Industry Trainee & Future Leader",
    department: "WARAN Academy & Early Careers",
    subFunction: "Early Talent Residency",
    discipline: "Research & Innovation",
    seniority: "Trainee / Student",
    experienceLevel: "Students & Interns",
    minExpYears: 0,
    maxExpYears: 1,
    employmentType: "Graduate Program",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Flagship paid 12-month residency (Stipend up to ₹1 Lakh/month). Rotate across AI, Software, Product, and Automation, then select your permanent role.",
    mission: "Develop world-class technical and strategic capabilities through a paid 12-month residency mentored directly by industry veterans and senior WARAN leads.",
    impactSummary: "Build high-throughput production features across 4 core divisions while receiving structured executive mentorship.",
    aiNativeExpectation: "AI Builder",
    responsibilities: [
      "Rotate through engineering, AI systems, product strategy, and applied automation divisions during a 12-month intensive residency.",
      "Work directly under senior industry mentors and WARAN engineering leads on high-impact operational bottleneck systems.",
      "Complete quarterly milestone evaluations, technical design briefs, and production deployments.",
      "Upon completion, select your preferred career path and transition directly into a full-time role at WARAN Industries based on performance."
    ],
    requirements: [
      "Final-year student or fresh graduate (0-1 year experience).",
      "Selection via college merit / CGPA, rigorous technical assessment, and multi-stage interview rounds.",
      "Demonstrated problem-solving ability, technical curiosity, and high building velocity."
    ],
    niceToHave: [
      "Academic honors, competitive coding achievements, or active open-source project contributions."
    ],
    technologies: ["AI Systems", "Software Engineering", "Automation", "Product Architecture", "Mentorship", "Up to ₹1L/mo Stipend"],
    isEarlyCareer: true,
    successMilestones: {
      m30: "Complete initial onboarding, setup local toolchains, and pass the core software engineering baseline audit.",
      m90: "Finish first 3-month division rotation with a shipped production feature.",
      m180: "Complete second rotation in AI Systems / Automation with a published technical design brief.",
      m365: "Present final capstone architecture, select your permanent career track, and transition to a full-time engineer/PM."
    },
    collaborationMap: ["Senior Engineering Mentors", "Product Leads", "Division Vice Presidents"],
    growthPathway: "Trainee → Associate Engineer / APM → Senior Specialist → Staff / Principal Leader"
  },

  // --- 1. EXECUTIVE & STRATEGY ---
  {
    id: "strat-ops-mgr-4-7",
    title: "Strategy & Operations Manager",
    department: "Executive Strategy",
    subFunction: "Corporate Strategy & Operations",
    discipline: "Executive & Strategy",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 4,
    maxExpYears: 7,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Drive company-level strategy, business analytics, division portfolio planning, and cross-functional execution.",
    mission: "Align division capital allocation and operational cadence with long-term industrial enterprise objectives.",
    impactSummary: "Structure commercial go-to-market motions and operational frameworks for new division launches.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Conduct quantitative market analysis, competitor benchmarking, and unit economics modeling.",
      "Partner with executive leaders to establish quarterly OKRs and operating performance metrics.",
      "Identify operational bottlenecks across AI software deployment and lead process redesign initiatives."
    ],
    requirements: [
      "4-7 years experience in corporate strategy, management consulting (MBB/Tier 1), or tech strategy & ops.",
      "Mastery of financial modeling, SQL analytics, and executive presentation building.",
      "Deep understanding of software business models and industrial value chains."
    ],
    niceToHave: [
      "MBA from a top-tier institution or equivalent founder experience."
    ],
    technologies: ["Financial Modeling", "SQL", "Market Analytics", "Scenario Planning", "Executive Comms"],
    successMilestones: {
      m30: "Audit operational metrics across WARAN PRIMAL and deliver strategic friction report.",
      m90: "Formulate strategic expansion model for commercial B2B sales pipelines.",
      m180: "Implement automated performance telemetry dashboard for all operating divisions.",
      m365: "Lead strategic annual planning cycle and allocate 5-year capital budgets."
    },
    collaborationMap: ["Chief Executive Officer", "Division Leads", "Finance & Product Leads"],
    growthPathway: "Strategy Manager → Senior Strategy Manager → Director of Corporate Strategy"
  },

  // --- 2 & 3. AI PRODUCT MANAGEMENT ---
  {
    id: "sr-ai-pm-5-8",
    title: "Senior AI Product Manager — Enterprise AI Products",
    department: "Product Management",
    subFunction: "AI Product Specialization",
    discipline: "AI Product Management",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 5,
    maxExpYears: 8,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Own the end-to-end product lifecycle of WARAN's flagship enterprise AI agent platforms.",
    mission: "Convert complex industrial business bottlenecks into deterministic, highly valuable AI products.",
    impactSummary: "Ship production RAG and agentic workflows serving high-volume enterprise operations.",
    aiNativeExpectation: "AI Product Leader",
    responsibilities: [
      "Define product strategy, roadmap, PRDs, and success telemetry for WARAN PRIMAL AI products.",
      "Manage latency, context window, token cost, and accuracy trade-offs with AI research and engineering leads.",
      "Conduct customer discovery sessions with Fortune 500 enterprise CTOs and COOs.",
      "Design human-in-the-loop fallback workflows and non-deterministic UX interaction patterns."
    ],
    requirements: [
      "5-8 years product management experience (with 2+ years explicitly dedicated to AI/ML products).",
      "Deep fluency with LLM APIs, vector databases, prompt engineering, and evaluation benchmarks.",
      "Strong technical literacy in Python, SQL, REST APIs, and system architecture."
    ],
    niceToHave: [
      "Computer Science or Engineering degree.",
      "Track record of scaling B2B enterprise AI applications from 0 to 1."
    ],
    technologies: ["LLM APIs", "RAG", "Agent Orchestration", "Python", "SQL", "Figma", "Mixpanel"],
    successMilestones: {
      m30: "Complete customer discovery interviews across 10 enterprise clients.",
      m90: "Release PRD and architecture specification for Next-Gen Agent Platform.",
      m180: "Launch v1.0 product into pilot enterprise environments with 95%+ task accuracy.",
      m365: "Expand product ARR and establish standardized enterprise onboarding playbook."
    },
    collaborationMap: ["AI Engineering Leads", "UX Designers", "Enterprise Account Executives"],
    growthPathway: "Senior AI PM → Lead AI PM → Principal AI PM → VP of Product Management"
  },

  // --- 4. AI PLATFORM & DEVELOPER PRODUCTS ---
  {
    id: "pm-dev-platform-3-6",
    title: "Product Manager — Developer Platform & AI APIs",
    department: "Product Management",
    subFunction: "Developer Ecosystem & APIs",
    discipline: "AI Platform & Developer Products",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 3,
    maxExpYears: 6,
    employmentType: "Full-time",
    location: "Remote",
    workMode: "Remote",
    shortDescription: "Build developer-facing APIs, SDKs, documentation, and rate-limiting infrastructure for WARAN's AI platforms.",
    mission: "Deliver world-class developer experience enabling external builders to integrate WARAN AI engines seamlessly.",
    impactSummary: "Scale API infrastructure handling millions of daily inference requests.",
    aiNativeExpectation: "AI Product Leader",
    responsibilities: [
      "Own product strategy for developer APIs, SDKs (Python, TypeScript), and developer documentation portals.",
      "Define developer authentication, rate limiting, usage metering, and billing primitives.",
      "Monitor developer friction points and optimize API latency and SDK DX."
    ],
    requirements: [
      "3-6 years technical product management experience focusing on APIs, SDKs, or developer platforms.",
      "Proficiency in API design (REST/gRPC), authentication (OAuth/JWT), and OpenAPI specifications.",
      "Hands-on ability to write sample code in Python and TypeScript."
    ],
    niceToHave: [
      "Experience building public API platforms at Stripe, Twilio, or OpenAI."
    ],
    technologies: ["REST APIs", "Python", "TypeScript", "OpenAPI", "Postman", "Stripe Billing"],
    successMilestones: {
      m30: "Audit existing API developer documentation and publish DX improvement roadmap.",
      m90: "Ship updated Python & TypeScript SDKs with zero-friction onboarding.",
      m180: "Launch self-serve developer portal with automated usage dashboard.",
      m365: "Scale active monthly developer API calls by 5x."
    },
    collaborationMap: ["API Platform Engineers", "Developer Relations", "Tech Writers"],
    growthPathway: "PM Developer Platform → Senior PM Developer Ecosystem → Principal PM Platform"
  },

  // --- 5. RESEARCH PRODUCT MANAGEMENT ---
  {
    id: "research-pm-4-7",
    title: "Research Product Manager — 0→1 AI Innovations",
    department: "WARAN Research",
    subFunction: "Research-to-Product Translation",
    discipline: "Research Product Management",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 4,
    maxExpYears: 7,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Bridge frontier research breakthroughs with commercially valuable product prototypes.",
    mission: "Accelerate the transition of novel AI model capabilities into scalable commercial products.",
    impactSummary: "Lead 0→1 incubation of breakthrough research concepts into production software.",
    aiNativeExpectation: "AI Product Leader",
    responsibilities: [
      "Partner with AI Research Scientists to evaluate novel model architectures and capability breakthroughs.",
      "Design rapid prototyping experiments to test commercial viability of new research models.",
      "Translate theoretical AI advances into clear product specifications for production engineering teams."
    ],
    requirements: [
      "4-7 years experience bridging AI research and product engineering.",
      "Strong research literacy (ability to digest arXiv pre-prints and benchmark results).",
      "Demonstrated track record of shipping 0→1 products."
    ],
    niceToHave: [
      "M.S. or Ph.D. in CS, Machine Learning, or quantitative physical sciences."
    ],
    technologies: ["PyTorch", "Python", "Model Benchmarks", "Prototypes", "Research Papers"],
    successMilestones: {
      m30: "Review ongoing WARAN research initiatives and compile commercial potential audit.",
      m90: "Build working proof-of-concept for 1 novel research capability.",
      m180: "Hand off validated research prototype to core product engineering team.",
      m365: "Launch 2 breakthrough research-derived products into production."
    },
    collaborationMap: ["AI Research Scientists", "Founding Engineers", "Commercial Strategy"],
    growthPathway: "Research PM → Senior Research PM → Principal Research Product Manager"
  },

  // --- 6. AI SAFETY & TRUST PRODUCT ---
  {
    id: "ai-safety-pm-4-7",
    title: "AI Safety & Trust Product Manager",
    department: "Responsible AI & Trust",
    subFunction: "Model Safety & Risk Product",
    discipline: "AI Safety & Trust Product",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 4,
    maxExpYears: 7,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Engineer product guardrails, toxicity filtering, red teaming protocols, and model trust frameworks.",
    mission: "Ensure WARAN AI products operate with absolute enterprise safety, compliance, and zero vulnerability.",
    impactSummary: "Build automated safety evaluators and jailbreak defense layers into production pipelines.",
    aiNativeExpectation: "AI Product Leader",
    responsibilities: [
      "Define safety policies, content guardrails, and adversarial red teaming methodologies for LLM agents.",
      "Build real-time prompt injection, data exfiltration, and toxic response detection guardrails.",
      "Monitor trust & safety metrics and coordinate rapid incident response for model anomalies."
    ],
    requirements: [
      "4-7 years experience in product management, trust & safety, or AI safety engineering.",
      "Deep understanding of prompt injection attacks, adversarial ML, and model alignment.",
      "Strong knowledge of AI governance frameworks (NIST AI RMF, EU AI Act)."
    ],
    niceToHave: [
      "Experience conducting red teaming exercises for foundation models."
    ],
    technologies: ["Llama Guard", "NeMo Guardrails", "Python", "Red Teaming", "Safety Telemetry"],
    successMilestones: {
      m30: "Conduct vulnerability audit across all deployed agent pipelines.",
      m90: "Deploy automated guardrail middleware layer reducing injection risk by 99%.",
      m180: "Publish quarterly enterprise AI safety benchmark report.",
      m365: "Achieve ISO/IEC 42001 and enterprise security certification for WARAN AI platforms."
    },
    collaborationMap: ["Red Team Engineers", "Legal Counsel", "AI Research Scientists"],
    growthPathway: "AI Safety PM → Senior AI Safety Lead → Director of Responsible AI & Safety"
  },

  // --- 7. PRODUCT DESIGN & UX ---
  {
    id: "ai-ux-designer-3-5",
    title: "AI UX & Interaction Designer",
    department: "Design & Experience",
    subFunction: "AI Interaction & Multimodal Design",
    discipline: "AI UX & Interaction Design",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 3,
    maxExpYears: 5,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Craft intuitive, enterprise-grade interfaces for non-deterministic AI workflows, agents, and multi-modal systems.",
    mission: "Redefine human-AI interaction by turning complex model outputs into seamless, delightful user experiences.",
    impactSummary: "Design non-deterministic UI paradigms, streaming feedback states, and human-in-the-loop control boards.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Design user interfaces for AI agent control panels, conversational interfaces, and workflow builders.",
      "Establish UI patterns for confidence indicators, latency skeleton states, and multi-turn edit loops.",
      "Conduct user research with enterprise operators to eliminate cognitive overhead."
    ],
    requirements: [
      "3-5 years experience in product design, UX/UI, or interaction design (with focus on complex web apps).",
      "Mastery of Figma, interactive prototyping, and design systems.",
      "Deep interest in AI UX design patterns, streaming responses, and multimodal interactions."
    ],
    niceToHave: [
      "Front-end coding ability in React / Next.js / TailwindCSS."
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research", "Next.js"],
    successMilestones: {
      m30: "Audit current design system and introduce AI-specific UI component set.",
      m90: "Deliver redesigned interface for WARAN PRIMAL Command Center.",
      m180: "Publish enterprise AI UX design guidelines.",
      m365: "Win design recognition for enterprise software UX excellence."
    },
    collaborationMap: ["Product Managers", "Frontend Engineers", "User Researchers"],
    growthPathway: "AI UX Designer → Senior Product Designer → Principal AI Experience Designer"
  },

  // --- 8. AI-NATIVE SOFTWARE ENGINEERING ---
  {
    id: "staff-ai-systems-engineer-7-12",
    title: "Staff Software Engineer — AI Systems Architecture",
    department: "Software Infrastructure",
    subFunction: "Distributed AI Systems",
    discipline: "AI-Native Software Engineering",
    seniority: "Staff / Principal",
    experienceLevel: "Experienced",
    minExpYears: 7,
    maxExpYears: 12,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Architect distributed, high-throughput backend services powering multi-agent orchestration and production inference.",
    mission: "Engineers deterministic, zero-latency execution environments around probabilistic LLM architectures.",
    impactSummary: "Architect microservices layer processing gigabytes of streaming context with sub-100ms response times.",
    aiNativeExpectation: "AI Systems Leader",
    responsibilities: [
      "Architect microservice pipelines in Python, Go, and Rust for high-frequency model inference.",
      "Implement persistent memory indexing structures using Redis, PostgreSQL, and vector stores.",
      "Establish automated concurrency boundaries, rate limiting, and fault recovery protocols for multi-agent loops."
    ],
    requirements: [
      "7-12 years software engineering experience building distributed systems at scale.",
      "Deep mastery of Python, Go or Rust, PostgreSQL, Redis, Kafka, and Kubernetes.",
      "Proven track record of designing high-concurrency event-driven backend systems."
    ],
    niceToHave: [
      "Experience optimizing CUDA/C++ inference kernels or vLLM deployments."
    ],
    technologies: ["Python", "Go", "Rust", "PostgreSQL", "Redis", "Kafka", "Kubernetes", "Vector DBs"],
    successMilestones: {
      m30: "Audit backend service performance and reduce P99 inference orchestration latency by 35%.",
      m90: "Deploy fault-tolerant multi-agent state persistence engine.",
      m180: "Architect zero-downtime microservices infrastructure scaling to 10x throughput.",
      m365: "Establish company-wide technical standards for distributed AI systems."
    },
    collaborationMap: ["Principal Architects", "ML Engineers", "Infrastructure Leads"],
    growthPathway: "Staff Engineer → Principal Engineer → Distinguished Systems Engineer"
  },
  {
    id: "fullstack-ai-eng-2-5",
    title: "Full-Stack AI Engineer",
    department: "WARAN PRIMAL",
    subFunction: "Product Engineering",
    discipline: "AI-Native Software Engineering",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 2,
    maxExpYears: 5,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Build modern Next.js 14 frontends and FastAPI backends for AI-native enterprise applications.",
    mission: "Deliver high-velocity product features bridging user interfaces with backend LLM engines.",
    impactSummary: "Ship end-to-end full-stack AI features directly used by enterprise operators.",
    aiNativeExpectation: "AI Builder",
    responsibilities: [
      "Develop responsive Next.js 14, React, and TailwindCSS interfaces for enterprise products.",
      "Build robust Python FastAPI backend services integrating LLM chains, RAG, and vector search.",
      "Optimize client-side rendering, WebSocket connections, and server streaming performance."
    ],
    requirements: [
      "2-5 years experience building web applications using Next.js / React and Python backend frameworks.",
      "Solid mastery of TypeScript, Python, PostgreSQL, and REST/WebSocket APIs.",
      "High building velocity and attention to UI detail."
    ],
    niceToHave: [
      "Experience with Three.js, Canvas, or WebGL visual components."
    ],
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "TailwindCSS", "PostgreSQL"],
    successMilestones: {
      m30: "Ship first full-stack feature component with complete test coverage.",
      m90: "Build real-time streaming dashboard for enterprise workflow telemetry.",
      m180: "Lead end-to-end development of a new division sub-product.",
      m365: "Become core tech lead for a WARAN product team."
    },
    collaborationMap: ["AI Product Managers", "UI Designers", "Backend Engineers"],
    growthPathway: "Full-Stack AI Engineer → Senior Software Engineer → Tech Lead"
  },

  // --- 9. MACHINE LEARNING & AI ENGINEERING ---
  {
    id: "generative-ai-eng-3-7",
    title: "Generative AI & LLM Engineer",
    department: "AI Research & Core ML",
    subFunction: "Model Fine-Tuning & RAG Architecture",
    discipline: "Machine Learning & AI Engineering",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 3,
    maxExpYears: 7,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Fine-tune open-weight foundation models (Llama, Mistral), build hybrid RAG pipelines, and optimize model evaluation.",
    mission: "Maximize domain accuracy, inference efficiency, and domain alignment for WARAN's proprietary AI models.",
    impactSummary: "Achieve state-of-the-art benchmark performance on industrial domain evaluation sets.",
    aiNativeExpectation: "AI Specialist",
    responsibilities: [
      "Execute LoRA/QLoRA fine-tuning scripts and SFT datasets for open-source foundation models.",
      "Architect advanced hybrid RAG pipelines combining sparse keyword and dense vector embeddings.",
      "Build automated LLM-as-a-judge evaluation frameworks for model accuracy, hallucination, and latency."
    ],
    requirements: [
      "3-7 years experience in machine learning and deep learning (with 2+ years focused on LLMs/NLP).",
      "Deep proficiency in PyTorch, Hugging Face Transformers, vLLM, and vector search engines.",
      "Proven track record training or fine-tuning models on custom domain datasets."
    ],
    niceToHave: [
      "Published research or top performance in Kaggle / competitive ML benchmarks."
    ],
    technologies: ["PyTorch", "Hugging Face", "vLLM", "Qdrant", "Pinecone", "Python", "LangChain"],
    successMilestones: {
      m30: "Benchmark baseline domain accuracy for base open-weight models.",
      m90: "Deploy fine-tuned 70B parameter model outperforming commercial API baselines.",
      m180: "Optimize inference server infrastructure reducing cost per 1M tokens by 50%.",
      m365: "Publish proprietary WARAN enterprise model evaluation suite."
    },
    collaborationMap: ["AI Research Scientists", "Backend Engineers", "Data Engineers"],
    growthPathway: "Generative AI Engineer → Senior ML Engineer → Staff ML Engineer"
  },

  // --- 10. AI RESEARCH ---
  {
    id: "sr-research-scientist-ai-6-10",
    title: "Senior Research Scientist — Foundation Models & Agents",
    department: "WARAN Frontier Labs",
    subFunction: "Foundational AI Research",
    discipline: "AI Research",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 6,
    maxExpYears: 10,
    employmentType: "Full-time",
    location: "Global",
    workMode: "Remote",
    shortDescription: "Conduct breakthrough research in novel neural architectures, multi-modal reasoning, and autonomous agent alignment.",
    mission: "Expand the boundaries of artificial intelligence through foundational mathematical and algorithmic research.",
    impactSummary: "Develop novel pre-training algorithms and reasoning architectures for enterprise intelligence.",
    aiNativeExpectation: "AI Researcher",
    responsibilities: [
      "Formulate, test, and publish novel machine learning research hypotheses in peer-reviewed venues.",
      "Develop innovative pre-training, RLHF, and post-training optimization methods.",
      "Collaborate with engineering teams to convert theoretical algorithms into production code."
    ],
    requirements: [
      "Ph.D. in Computer Science, Machine Learning, Applied Mathematics, or Physics.",
      "6-10 years research experience with a track record of publications at NeurIPS, ICML, ICLR, or CVPR.",
      "Expert-level PyTorch programming and GPU compute cluster management."
    ],
    niceToHave: [
      "Experience training large-scale (>10B parameter) foundation models from scratch."
    ],
    technologies: ["PyTorch", "CUDA", "Distributed Training", "Deep Learning", "Mathematics"],
    successMilestones: {
      m30: "Define research agenda for multi-modal agent reasoning.",
      m90: "Complete initial algorithmic proof-of-concept for novel attention mechanism.",
      m180: "Submit flagship paper to major AI conference.",
      m365: "Integrate breakthrough research model into WARAN PRIMAL core engine."
    },
    collaborationMap: ["Research Directors", "ML Engineers", "Chief Scientist"],
    growthPathway: "Senior Research Scientist → Principal Scientist → Research Director"
  },

  // --- 11. DATA & ANALYTICS ---
  {
    id: "data-eng-3-7",
    title: "Senior Data & Analytics Engineer",
    department: "Data Infrastructure",
    subFunction: "Data Engineering & Pipelines",
    discipline: "Data & Analytics",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 3,
    maxExpYears: 7,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Build automated ETL/ELT pipelines, data warehouses, and vector ingestion pipelines for enterprise AI training.",
    mission: "Provide clean, reliable, high-throughput data infrastructure powering WARAN AI models and business analytics.",
    impactSummary: "Construct data processing pipelines handling terabytes of structured and unstructured enterprise documents.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Architect data ingestion pipelines using Python, SQL, dbt, Spark, and Kafka.",
      "Design relational and vector data schemas in PostgreSQL, Snowflake, and Qdrant.",
      "Ensure strict data governance, GDPR compliance, and encryption across all data pipelines."
    ],
    requirements: [
      "3-7 years experience in data engineering, data warehousing, or analytics engineering.",
      "Mastery of SQL, Python, dbt, Apache Spark, Airflow, and cloud data warehouses.",
      "Experience handling both structured SQL and unstructured text/vector data."
    ],
    niceToHave: [
      "Knowledge of synthetic dataset generation for LLM fine-tuning."
    ],
    technologies: ["Python", "SQL", "dbt", "PostgreSQL", "Snowflake", "Spark", "Airflow"],
    successMilestones: {
      m30: "Audit current ETL pipelines and implement automated data quality checks.",
      m90: "Deploy automated vector embedding pipeline processing 1M documents daily.",
      m180: "Migrate legacy data warehouse to unified real-time analytics warehouse.",
      m365: "Achieve 99.99% data pipeline reliability across all operational streams."
    },
    collaborationMap: ["ML Engineers", "Business Analysts", "Security Architects"],
    growthPathway: "Data Engineer → Staff Data Engineer → Principal Data Architect"
  },

  // --- 12. CLOUD & AI INFRASTRUCTURE ---
  {
    id: "ai-infra-eng-4-8",
    title: "Senior AI Infrastructure & MLOps Engineer",
    department: "Cloud Infrastructure",
    subFunction: "GPU Compute & Model Serving",
    discipline: "Cloud & AI Infrastructure",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 4,
    maxExpYears: 8,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Manage GPU clusters (NVIDIA H100/A100), Kubernetes orchestration, model serving, and zero-downtime cloud infrastructure.",
    mission: "Guarantee 99.99% availability, optimal GPU utilization, and zero-trust security for WARAN cloud platforms.",
    impactSummary: "Scale GPU inference cluster efficiency by 40% while cutting cloud compute expenditures.",
    aiNativeExpectation: "AI Systems Leader",
    responsibilities: [
      "Deploy and manage Kubernetes (EKS/GKE) clusters hosting vLLM, Triton, and FastAPI services.",
      "Build Infrastructure-as-Code using Terraform and Ansible across AWS/GCP/Bare-Metal providers.",
      "Implement real-time observability, Prometheus alerting, and automated failover protocols."
    ],
    requirements: [
      "4-8 years experience in DevOps, SRE, or Cloud Infrastructure (with 2+ years in MLOps/GPU infrastructure).",
      "Deep expertise with Kubernetes, Docker, Terraform, AWS/GCP, Linux internals, and GPU drivers.",
      "Proficiency in Python and Bash scripting for infrastructure automation."
    ],
    niceToHave: [
      "Certified Kubernetes Administrator (CKA) or AWS Solutions Architect Professional."
    ],
    technologies: ["Kubernetes", "AWS", "Terraform", "Docker", "vLLM", "Prometheus", "Grafana", "NVIDIA CUDA"],
    successMilestones: {
      m30: "Audit GPU cluster utilization and implement dynamic auto-scaling rules.",
      m90: "Deploy multi-region Kubernetes failover cluster with zero loss telemetry.",
      m180: "Reduce infrastructure operating expense by 30% through spot instance orchestration.",
      m365: "Establish global AI compute cluster serving multi-region enterprise traffic."
    },
    collaborationMap: ["ML Engineers", "Backend Developers", "Security Officers"],
    growthPathway: "AI Infrastructure Engineer → Staff AI Infra Engineer → Principal Infrastructure Architect"
  },

  // --- 13. CYBERSECURITY & RED TEAMING ---
  {
    id: "ai-security-redteam-5-9",
    title: "Senior AI Security & Red Team Engineer",
    department: "Information Security",
    subFunction: "Adversarial AI & Penetration Testing",
    discipline: "Cybersecurity & Red Teaming",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 5,
    maxExpYears: 9,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Conduct adversarial attacks, prompt injection testing, cloud penetration tests, and vulnerability assessments on AI systems.",
    mission: "Protect WARAN platforms against zero-day exploits, model inversion, prompt leakage, and cyber threats.",
    impactSummary: "Uncover and neutralize critical prompt injection vectors prior to production deployment.",
    aiNativeExpectation: "AI Specialist",
    responsibilities: [
      "Perform continuous red teaming and penetration testing against WARAN LLM APIs and cloud infrastructure.",
      "Design threat models for AI multi-agent communication protocols and tool execution sandboxes.",
      "Develop automated vulnerability scanners detecting prompt injection, data poisoning, and OWASP Top 10 vulnerabilities."
    ],
    requirements: [
      "5-9 years experience in application security, penetration testing, or red teaming.",
      "Deep understanding of adversarial ML, prompt injection defenses, cloud IAM, and web security.",
      "Proficiency with Python, Go, Burp Suite, Metasploit, and Linux security auditing."
    ],
    niceToHave: [
      "OSCP, CISSP, or GWAPT cybersecurity certifications."
    ],
    technologies: ["Python", "Burp Suite", "Adversarial ML", "Prompt Injection", "AWS IAM", "Kubernetes Sec"],
    successMilestones: {
      m30: "Publish comprehensive threat model for WARAN multi-agent tool execution engine.",
      m90: "Execute full red team exercise and remediate all identified high-severity findings.",
      m180: "Deploy continuous automated AI security testing pipeline.",
      m365: "Achieve SOC 2 Type II and ISO 27001 security compliance."
    },
    collaborationMap: ["Software Engineers", "AI Safety PMs", "General Counsel"],
    growthPathway: "AI Security Engineer → Security Architect → Chief Information Security Officer (CISO)"
  },

  // --- 14. AI QUALITY & RELIABILITY ---
  {
    id: "ai-eval-lead-4-7",
    title: "Model Reliability & AI Evaluation Engineer",
    department: "AI Quality & Evaluation",
    subFunction: "Automated Benchmarking & Quality",
    discipline: "AI Quality & Reliability",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 4,
    maxExpYears: 7,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Build automated evaluation pipelines, statistical regression tests, and LLM-as-a-judge benchmarking suites.",
    mission: "Maintain non-negotiable software reliability, zero hallucination rate, and output consistency for enterprise clients.",
    impactSummary: "Construct automated test harness evaluating 50,000 synthetic test cases daily.",
    aiNativeExpectation: "AI Specialist",
    responsibilities: [
      "Design automated test datasets and evaluation algorithms for multi-step AI agent workflows.",
      "Implement LLM-as-a-judge scoring frameworks measuring hallucination, factual accuracy, and intent fulfillment.",
      "Partner with product engineers to establish CI/CD quality gates preventing model performance regression."
    ],
    requirements: [
      "4-7 years experience in software quality engineering, data science, or ML evaluation.",
      "Strong Python programming skills and statistical analysis (Pandas, NumPy, Scikit-learn).",
      "Hands-on experience building evaluation frameworks for NLP or generative AI systems."
    ],
    niceToHave: [
      "Background in quantitative testing or scientific benchmarking."
    ],
    technologies: ["Python", "Ragas", "DeepEval", "Pandas", "PyTest", "SQL", "CI/CD"],
    successMilestones: {
      m30: "Establish baseline evaluation metric dashboard across all production agents.",
      m90: "Deploy automated PR evaluation bot blocking model regressions in CI/CD.",
      m180: "Reduce client-reported output inaccuracies to less than 0.1%.",
      m365: "Pioneer novel statistical evaluation methodologies for complex multi-modal workflows."
    },
    collaborationMap: ["ML Engineers", "Product Managers", "Customer Success Leads"],
    growthPathway: "AI Evaluation Engineer → Senior AI Quality Lead → Principal Reliability Architect"
  },

  // --- 15. SOLUTIONS ARCHITECTURE ---
  {
    id: "solutions-arch-4-8",
    title: "Senior AI Solutions Architect",
    department: "Enterprise Solutions",
    subFunction: "Client Architecture & Deployment",
    discipline: "Solutions Architecture",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 4,
    maxExpYears: 8,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Design custom enterprise integration blueprints, VPC deployments, and technical implementation roadmaps.",
    mission: "Bridge client legacy IT infrastructure with WARAN AI platforms seamlessly and securely.",
    impactSummary: "Successfully architect and onboard multi-site industrial clients to WARAN AI software.",
    aiNativeExpectation: "AI Product Leader",
    responsibilities: [
      "Lead technical discovery workshops with enterprise client CTOs, CISOs, and enterprise architects.",
      "Architect secure hybrid cloud, on-premise, and VPC AI integration blueprints.",
      "Oversee technical execution during enterprise deployment phases to guarantee zero disruption."
    ],
    requirements: [
      "4-8 years experience as a Solutions Architect, Enterprise Consultant, or Technical Sales Engineer.",
      "Deep mastery of enterprise cloud architecture (AWS/GCP/Azure), API integrations, and security standards.",
      "Exceptional technical presentation and consultative client communication skills."
    ],
    niceToHave: [
      "AWS / Azure Certified Solutions Architect credential."
    ],
    technologies: ["AWS", "VPC Architecture", "REST APIs", "Kubernetes", "Security Standards", "Python"],
    successMilestones: {
      m30: "Complete 5 enterprise architectural reviews with prospective clients.",
      m90: "Publish standardized WARAN Enterprise Deployment Reference Blueprint.",
      m180: "Successfully deploy 3 Fortune 500 enterprise integration projects.",
      m365: "Scale enterprise implementation velocity by 2x."
    },
    collaborationMap: ["Enterprise Account Executives", "Product Engineers", "Client CTOs"],
    growthPathway: "Solutions Architect → Senior Solutions Architect → Principal Solutions Architect"
  },

  // --- 16. CUSTOMER SUCCESS ---
  {
    id: "csm-3-5",
    title: "Customer Success Manager — Enterprise AI",
    department: "Customer Success",
    subFunction: "Enterprise Account Management & Adoption",
    discipline: "Customer Success",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 3,
    maxExpYears: 5,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Drive client onboarding, product adoption, expansion, and long-term retention across enterprise accounts.",
    mission: "Ensure enterprise customers achieve maximum operational ROI from WARAN AI software.",
    impactSummary: "Maintain 115%+ Net Revenue Retention (NRR) across managed enterprise accounts.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Lead enterprise customer onboarding, user training, and adoption health tracking.",
      "Conduct quarterly business reviews (QBRs) with client executive sponsors showcasing ROI metrics.",
      "Identify account expansion opportunities and partner with sales to execute contract renewals."
    ],
    requirements: [
      "3-5 years experience in enterprise B2B SaaS Customer Success or Account Management.",
      "Proven track record of maintaining high retention rates and driving account growth.",
      "Strong technical empathy and ability to translate complex AI metrics into business value."
    ],
    niceToHave: [
      "Experience serving industrial, manufacturing, or financial sector enterprise clients."
    ],
    technologies: ["Gainsight", "Salesforce", "Customer Analytics", "Excel", "Product Telemetry"],
    successMilestones: {
      m30: "Onboard and take ownership of 8 key enterprise accounts.",
      m90: "Achieve 100% target adoption metrics across all managed client teams.",
      m180: "Deliver QBRs resulting in 2 major account expansion upgrades.",
      m365: "Achieve 98%+ customer renewal rate."
    },
    collaborationMap: ["Solutions Architects", "Account Executives", "Product Managers"],
    growthPathway: "CSM → Senior CSM → Strategic Customer Success Lead"
  },

  // --- 17. SALES & COMMERCIAL GROWTH ---
  {
    id: "dir-sales-5-6",
    title: "Director of Enterprise Sales & Revenue",
    department: "Commercial Growth",
    subFunction: "Enterprise B2B Sales Leadership",
    discipline: "Sales & Commercial Growth",
    seniority: "Director / Executive",
    experienceLevel: "Leadership",
    minExpYears: 5,
    maxExpYears: 6,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Lead global enterprise sales strategy, multi-million dollar deal negotiation, and sales team expansion.",
    mission: "Build and scale high-performing sales channels across industrial enterprise sectors.",
    impactSummary: "Scale WARAN commercial software revenue by 3x through enterprise contract acquisition.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Formulate and execute WARAN's enterprise go-to-market and commercial sales expansion strategy.",
      "Build, recruit, and mentor a world-class team of Account Executives and Business Development leads.",
      "Lead negotiation and closure of 7-figure multi-year enterprise software contracts."
    ],
    requirements: [
      "5-6+ years experience leading enterprise B2B software sales or strategic commercial growth.",
      "Demonstrated track record closing 7-figure enterprise contracts with global corporations.",
      "Strong network of C-level enterprise technology and operations relationships."
    ],
    niceToHave: [
      "Experience scaling sales teams from early-stage to high-growth enterprise scale."
    ],
    technologies: ["CRM", "Enterprise Sales", "GTM Strategy", "Revenue Operations", "Pipeline Management"],
    successMilestones: {
      m30: "Audit commercial pipeline and optimize enterprise sales playbook.",
      m90: "Close 2 landmark enterprise software agreements.",
      m180: "Recruit and onboard 3 high-performing Enterprise Account Executives.",
      m365: "Deliver 300% annual revenue growth across target industrial sectors."
    },
    collaborationMap: ["Chief Executive Officer", "Account Executives", "Solutions Architects"],
    growthPathway: "Director of Sales → Vice President of Revenue → Chief Commercial Officer"
  },

  // --- 18. MARKETING & DEVELOPER GROWTH ---
  {
    id: "pmm-3-6",
    title: "Product Marketing Manager — Enterprise AI",
    department: "Marketing & Growth",
    subFunction: "GTM Strategy & Product Messaging",
    discipline: "Marketing & Developer Growth",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 3,
    maxExpYears: 6,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Craft compelling product messaging, sales enablement assets, launch campaigns, and market positioning.",
    mission: "Position WARAN Industries as the definitive leader in enterprise-grade AI software and automation.",
    impactSummary: "Execute high-impact product launches generating enterprise inbound sales leads.",
    aiNativeExpectation: "AI Product Leader",
    responsibilities: [
      "Define product messaging, value propositions, and positioning frameworks for WARAN PRIMAL products.",
      "Create pitch decks, case studies, product whitepapers, and sales collateral for enterprise AEs.",
      "Coordinate cross-functional product launch campaigns across web, PR, and industry channels."
    ],
    requirements: [
      "3-6 years experience in product marketing for B2B SaaS, developer tools, or AI products.",
      "Exceptional storytelling, strategic writing, and visual presentation skills.",
      "Ability to translate complex technical AI capabilities into clear business benefits."
    ],
    niceToHave: [
      "Technical degree or background in software engineering/product management."
    ],
    technologies: ["Product Positioning", "GTM Strategy", "Content Writing", "Figma", "Google Analytics"],
    successMilestones: {
      m30: "Publish updated product positioning guide and enterprise sales deck.",
      m90: "Execute major product v2.0 launch campaign driving 50+ enterprise inbound inquiries.",
      m180: "Publish 3 detailed enterprise customer success case studies.",
      m365: "Establish WARAN as a recognized category leader in enterprise AI publications."
    },
    collaborationMap: ["Product Managers", "Sales Leads", "Designers", "Executive Team"],
    growthPathway: "Product Marketing Manager → Senior PMM → Director of Product Marketing"
  },

  // --- 19 & 24. LEGAL, GOVERNANCE & RESPONSIBLE AI ---
  {
    id: "ai-governance-mgr-5-9",
    title: "AI Governance & Compliance Lead",
    department: "Legal & Governance",
    subFunction: "AI Regulatory & Data Privacy",
    discipline: "Responsible AI & Governance",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 5,
    maxExpYears: 9,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Navigate global AI regulations (EU AI Act, NIST), enterprise data compliance, and responsible AI policy.",
    mission: "Protect WARAN and its enterprise clients with ironclad legal compliance, data privacy, and governance framework.",
    impactSummary: "Implement corporate governance framework certifying full compliance with global AI regulatory standards.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Monitor global AI regulatory developments (EU AI Act, US Executive Orders, GDPR, India DPDP Act).",
      "Draft enterprise data protection agreements, AI terms of service, and model card documentation.",
      "Conduct AI Impact Assessments (AIA) and partner with engineering leads on data isolation protocols."
    ],
    requirements: [
      "5-9 years experience in corporate legal counsel, tech compliance, or AI policy.",
      "Deep expertise in data privacy law (GDPR, CCPA), intellectual property, and emerging AI regulations.",
      "Strong legal writing and risk assessment capability."
    ],
    niceToHave: [
      "Juris Doctor (J.D.) or LL.M. degree with technology specialization."
    ],
    technologies: ["AI Governance", "GDPR", "EU AI Act", "NIST AI RMF", "Legal Contracts"],
    successMilestones: {
      m30: "Audit all WARAN data ingestion processes for GDPR and DPDP compliance.",
      m90: "Publish WARAN Responsible AI Governance Manifesto and Model Cards.",
      m180: "Secure enterprise AI compliance certification for European client expansion.",
      m365: "Establish industry-leading AI policy council within WARAN Industries."
    },
    collaborationMap: ["General Counsel", "AI Safety PMs", "Chief Security Officer"],
    growthPathway: "AI Governance Lead → Corporate Counsel → General Counsel"
  },

  // --- 20. HUMAN RESOURCES & TALENT ---
  {
    id: "head-talent-5-6",
    title: "Head of People & Talent Acquisition",
    department: "People & Talent",
    subFunction: "Global Recruiting & HR Operations",
    discipline: "Human Resources & Talent",
    seniority: "Director / Executive",
    experienceLevel: "Leadership",
    minExpYears: 5,
    maxExpYears: 6,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Lead global talent acquisition, culture, technical recruiting, and the flagship 12-Month Trainee program.",
    mission: "Recruit, retain, and empower world-class technical and business talent at WARAN Industries.",
    impactSummary: "Build high-throughput recruiting engine sourcing top 1% AI engineering and leadership talent.",
    aiNativeExpectation: "AI User",
    responsibilities: [
      "Design and execute global talent acquisition strategies across AI, engineering, product, and sales.",
      "Oversee university partnerships and the 12-Month Rotational Industry Trainee program.",
      "Build a high-performance, meritocratic organizational culture focused on ownership and speed."
    ],
    requirements: [
      "5-6+ years experience in HR leadership, technical talent acquisition, or people ops in top tech firms.",
      "Deep understanding of technical recruiting across AI, software, and enterprise domains.",
      "Exceptional empathetic leadership and communication skills."
    ],
    niceToHave: [
      "Track record of scaling engineering organizations from 50 to 500+ employees."
    ],
    technologies: ["ATS Platforms", "Technical Recruiting", "People Analytics", "Culture Development"],
    successMilestones: {
      m30: "Audit talent acquisition funnels and reduce time-to-hire by 40%.",
      m90: "Successfully recruit 15 senior AI engineers and product leaders.",
      m180: "Launch nationwide university recruitment campaign for the 12-Month Trainee program.",
      m365: "Achieve 95%+ employee retention and build top-tier employer brand."
    },
    collaborationMap: ["Chief Executive Officer", "Department Heads", "Engineering Leads"],
    growthPathway: "Head of People → VP of Human Resources → Chief People Officer"
  },

  // --- 21 & 22. OPERATIONS & TPM ---
  {
    id: "sr-tpm-6-10",
    title: "Senior Technical Program Manager — AI Infrastructure",
    department: "Business Operations",
    subFunction: "Technical Program Management",
    discipline: "Business Analysis & TPM",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 6,
    maxExpYears: 10,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Orchestrate complex cross-functional AI engineering programs, dependency mapping, and release execution.",
    mission: "Ensure flawless execution velocity and alignment across research, engineering, and product teams.",
    impactSummary: "Manage multi-team technical delivery of WARAN's core AI platform release.",
    aiNativeExpectation: "AI Practitioner",
    responsibilities: [
      "Manage end-to-end execution roadmaps for complex AI infrastructure and software releases.",
      "Track technical dependencies, risk mitigation, and resource allocation across 5+ engineering teams.",
      "Conduct sprint planning, architecture reviews, and executive status reporting."
    ],
    requirements: [
      "6-10 years experience as a Technical Program Manager in high-growth software or AI companies.",
      "Deep technical understanding of software development lifecycles, cloud deployments, and AI models.",
      "PMP, CSM, or equivalent program management credentials."
    ],
    niceToHave: [
      "Background as a software engineer or DevOps engineer."
    ],
    technologies: ["Jira", "Agile/Scrum", "Roadmapping", "System Architecture", "Python"],
    successMilestones: {
      m30: "Map cross-functional dependencies for upcoming Q3 platform release.",
      m90: "Achieve 100% on-time milestone delivery across all managed engineering squads.",
      m180: "Optimize sprint velocity resulting in a 25% throughput increase.",
      m365: "Standardize company-wide TPM playbook for multi-divisional releases."
    },
    collaborationMap: ["Engineering Leads", "Product Managers", "Operations Leads"],
    growthPathway: "Senior TPM → Lead TPM → Director of Technical Program Management"
  },

  // --- 23. FRONTIER BUILDER (SPECIALIZED) ---
  {
    id: "ai-generalist-builder",
    title: "AI Generalist Builder — Frontier Labs",
    department: "WARAN Frontier Labs",
    subFunction: "Rapid Prototyping & Incubation",
    discipline: "Research & Innovation",
    seniority: "Senior",
    experienceLevel: "Professional",
    minExpYears: 0,
    maxExpYears: 5,
    employmentType: "Fellowship",
    location: "Global",
    workMode: "Remote",
    shortDescription: "For unconventional thinkers who take raw problems from complete ambiguity to working AI prototypes.",
    mission: "Explore unexplored intersections of AI, hardware, software, and human capability.",
    impactSummary: "Rapidly build and validate 0→1 experimental software prototypes in short iteration cycles.",
    aiNativeExpectation: "AI Specialist",
    responsibilities: [
      "Identify high-impact industrial bottlenecks that traditional software has failed to solve.",
      "Rapidly prototype end-to-end proof-of-concepts using whatever stack gets the job done.",
      "Present technical & commercial feasibility blueprints directly to WARAN leadership."
    ],
    requirements: [
      "Unusually high building velocity and product intuition.",
      "Ability to write full-stack code, construct AI prompts/pipelines, and design interfaces independently.",
      "Obsessive focus on output over traditional credentials."
    ],
    niceToHave: [
      "Experience founding projects, building open-source tools, or conducting solo research."
    ],
    technologies: ["Full-Stack", "AI Models", "Prototypes", "Python", "TypeScript", "Next.js"],
    isFrontierBuilder: true,
    successMilestones: {
      m30: "Deliver 2 working functional prototypes for internal review.",
      m90: "Validate 1 prototype with external pilot users.",
      m180: "Graduate prototype into a dedicated WARAN product stream.",
      m365: "Lead incubation unit for new WARAN frontier division."
    },
    collaborationMap: ["Chief Executive Officer", "AI Researchers", "Product Designers"],
    growthPathway: "Generalist Builder → Principal Frontier Lead → Division Co-Founder"
  },

  // --- 25. TECH WRITING & KNOWLEDGE ---
  {
    id: "tech-writer-2-5",
    title: "Developer Documentation & AI Knowledge Engineer",
    department: "Technical Content",
    subFunction: "API Documentation & Knowledge Systems",
    discipline: "Content, Knowledge & Tech Writing",
    seniority: "Mid-Level",
    experienceLevel: "Professional",
    minExpYears: 2,
    maxExpYears: 5,
    employmentType: "Full-time",
    location: "Remote",
    workMode: "Remote",
    shortDescription: "Author comprehensive API documentation, developer guides, system architecture specs, and LLM knowledge bases.",
    mission: "Ensure perfect technical documentation clarity for external developers and internal AI agents.",
    impactSummary: "Build automated documentation pipeline synced directly with codebase updates.",
    aiNativeExpectation: "AI Builder",
    responsibilities: [
      "Write high-precision API reference documentation, SDK guides, and integration tutorials.",
      "Maintain internal knowledge bases and Karpathy-style structured topic wikis for AI retrieval.",
      "Collaborate with engineers to ensure 100% accuracy of technical specifications."
    ],
    requirements: [
      "2-5 years experience in technical writing, developer documentation, or developer relations.",
      "Proficiency with Markdown, Git, OpenAPI/Swagger, and static site generators.",
      "Ability to read and understand Python and TypeScript code."
    ],
    niceToHave: [
      "Experience writing prompt documentation or RAG knowledge base articles."
    ],
    technologies: ["Markdown", "Git", "OpenAPI", "Python", "TypeScript", "Docusaurus"],
    successMilestones: {
      m30: "Audit existing API documentation and publish developer portal guide.",
      m90: "Launch updated developer portal with interactive API playgrounds.",
      m180: "Build automated documentation sync bot connected to GitHub CI/CD.",
      m365: "Establish WARAN technical documentation as an industry benchmark for clarity."
    },
    collaborationMap: ["API Product Managers", "Software Engineers", "Developer Relations"],
    growthPathway: "Technical Writer → Senior Tech Writer → Documentation & Knowledge Lead"
  },

  // --- 26. FINANCE & REVENUE OPERATIONS ---
  {
    id: "fin-controller-4-6",
    title: "Financial Controller & Revenue Operations Lead",
    department: "Finance & Operations",
    subFunction: "Corporate Finance & Revenue Ops",
    discipline: "Finance & Revenue Operations",
    seniority: "Senior",
    experienceLevel: "Experienced",
    minExpYears: 4,
    maxExpYears: 6,
    employmentType: "Full-time",
    location: "India / Hybrid",
    workMode: "India / Hybrid",
    shortDescription: "Manage financial modeling, FP&A, revenue operations, SaaS metrics (ARR/MRR), and audit compliance.",
    mission: "Maintain absolute financial rigor, disciplined capital allocation, and audit readiness across WARAN.",
    impactSummary: "Architect corporate financial model and revenue operations tracking systems.",
    aiNativeExpectation: "AI User",
    responsibilities: [
      "Manage corporate financial planning, FP&A forecasting, and monthly ledger closes.",
      "Track SaaS business metrics (ARR, MRR, LTV:CAC, Gross Margin, Net Retention).",
      "Oversee cash flow management, corporate taxation, and statutory audit compliance."
    ],
    requirements: [
      "4-6 years experience in corporate finance, financial controlling, or revenue ops (CA / MBA Finance).",
      "Mastery of financial modeling, SQL, Excel/Sheets, and Ind AS / GAAP accounting standards.",
      "High integrity and analytical precision."
    ],
    niceToHave: [
      "Experience in B2B SaaS finance or venture capital capital allocation."
    ],
    technologies: ["FP&A", "Financial Modeling", "SQL", "SaaS Metrics", "Taxation", "Compliance"],
    successMilestones: {
      m30: "Build 5-year multi-scenario financial model for all WARAN divisions.",
      m90: "Implement automated Revenue Operations telemetry tracking ARR/MRR in real-time.",
      m180: "Complete annual statutory audit with zero discrepancies.",
      m365: "Optimize operating margins by 15% through strategic procurement controls."
    },
    collaborationMap: ["Chief Executive Officer", "Director of Sales", "Legal Counsel"],
    growthPathway: "Financial Controller → VP of Finance → Chief Financial Officer (CFO)"
  }
];
