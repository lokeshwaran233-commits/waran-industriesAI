# ⚔️ WARAN INDUSTRIES — FRONTIER AI DIGITAL HEADQUARTERS & ENTERPRISE CAREERS PLATFORM

> **Official Repository:** `https://github.com/lokeshwaran233-commits/waran-industriesAI`  
> **Architecture:** Next.js 14 App Router · React 18 · Three.js / React Three Fiber · GSAP · Zustand · TailwindCSS  
> **Aesthetic Signature:** Tier-1 AI Institutional · Procedural 3D WebGL Worlds · Space Grotesk & Plus Jakarta Sans Typography · Restrained Metallic Gold (`#C5A059`) Accents  
> **Contact Badges:** Gmail (`waranindustriesai@gmail.com`) · LinkedIn (`https://www.linkedin.com/in/waran-industries`)

---

## 🌌 EXECUTIVE OVERVIEW

**WARAN Industries** is a long-horizon industrial technology, science, capital, and space organization designed for decades. The organization begins with **WARAN PRIMAL**—an operational AI-native software engine that turns enterprise operational bottlenecks into high-throughput computational flywheels.

This codebase contains the complete, production-grade digital experience, including:
1. **Interactive 3D Headquarters (`/`):** Real-time scroll-driven Three.js camera rig navigating 6 distinct division worlds.
2. **Procedural Atmospheric Division Subpages (`/divisions/[slug]`):** Real-time HTML5 2D Canvas ambient physics & mathematical simulations.
3. **Frontier AI Enterprise Career Architecture (`/careers`):** Google/Meta/OpenAI/Anthropic-tier talent platform spanning 26 specialized functional divisions, natural-language query search, 30/90/180/365-day success milestones, candidate signals matrix, and a 10-step enterprise application platform.
4. **Flagship 12-Month Rotational Industry Trainee Program:** Highlighted paid residency (stipend up to **₹1 Lakh / Month**) mentored by senior industry leads.
5. **Interactive 3D Atomic Nucleus Simulation (`/about`):** Procedural 3D canvas simulation featuring counter-rotating electron orbital rings around the canonical WARAN core mark.

---

## 🏛️ SYSTEM & SITE INFORMATION ARCHITECTURE

```
waran-industries/
├── app/                                 # Next.js 14 App Router Pages & API Routes
│   ├── layout.tsx                       # Root Layout (Space Grotesk + Plus Jakarta Sans + JetBrains Mono)
│   ├── globals.css                      # Custom atmospheric utilities, vignette, glassmorphic panels & scrollbar
│   ├── page.tsx                         # Main Headquarters (Scroll-Driven 3D Canvas + Elite Division Grid)
│   ├── about/                           # Institution Story & 3D Atomic Electron Nucleus Simulation
│   │   └── page.tsx
│   ├── careers/                         # Frontier AI Enterprise Careers Platform & Search Engine
│   │   └── page.tsx
│   ├── contact/                         # Strategic Inquiries & Golden Social Badges (Gmail / LinkedIn)
│   │   └── page.tsx
│   ├── divisions/                       # Dynamic Division Subpages with Ambient Physics Canvas
│   │   └── [slug]/
│   │       └── page.tsx                 # (primal, tech, sciences, capital, exploration, space)
│   ├── frontier/                        # Advanced Exploration & Space Robotics Architectures
│   │   └── page.tsx
│   ├── research/                        # Structured Karpathy-style Research Directives
│   │   └── page.tsx
│   └── api/
│       └── inquiry/
│           └── route.ts                 # Serverless Inquiry API Endpoint with Validation & Rate Limiting
├── components/                          # Modular React Components
│   ├── brand/                           # Canonical Logo Marks & 3D Atomic Fallbacks
│   │   ├── WaranMark.tsx                # Official Logo (public/brand/logo.png)
│   │   └── HelixFallback.tsx            # 3D Atomic Nucleus & Multi-Orbital Electron Canvas Simulation
│   ├── canvas/                          # Three.js / WebGL Visual Components
│   │   ├── CameraRig.tsx                # High-Damping Smooth Camera Rig (Speed 6.5)
│   │   ├── ExperienceCanvas.tsx         # R3F Canvas Container & Responsive Viewport Controller
│   │   ├── WorldLayer.tsx               # Dynamic Scene Switcher based on Scroll State
│   │   ├── objects/
│   │   │   └── HelixMark.tsx            # 3D Double-Helix DNA Mark & Pulsating Core Nucleus
│   │   └── worlds/                      # 6 Division 3D Visual Worlds
│   │       ├── PrimalWorld.tsx          # Neural Agent Network Node Cluster
│   │       ├── TechWorld.tsx            # Cybernetic Silicon Grid Matrix
│   │       ├── ScienceWorld.tsx         # Molecular Bio-Engineering Lattices
│   │       ├── CapitalWorld.tsx         # Quantum Flow Monolith Pipelines
│   │       ├── ExplorationWorld.tsx     # Autonomous Sensor Mesh Particles
│   │       ├── SpaceWorld.tsx           # Orbital Robotics Coordinate Rings
│   │       └── FlywheelWorld.tsx        # Multi-Ring Capital Acceleration Engine
│   ├── careers/                         # Enterprise Career Systems
│   │   ├── CareersExplorer.tsx          # Natural Language Job Search & 4-Tab Spec Modal
│   │   └── CandidateApplicationFlow.tsx # 10-Step Interactive Application Drawer (Tracking Token Generator)
│   ├── divisions/                       # Division Subpage Components
│   │   ├── DivisionVisualSystem.tsx     # Persistent Full-Viewport Ambient Procedural Simulation
│   │   ├── DivisionAtmosphere.tsx       # Canvas Fluid Background Particles
│   │   ├── ExplorationBoard.tsx         # Sensor Telemetry HUD
│   │   └── SpaceArchitecture.tsx        # Orbital Payload Coordinates
│   ├── experience/                      # Homepage Scroll & HUD Interfaces
│   │   ├── HomeExperience.tsx           # Smooth 220vh Scroll Container & Zustand Integration
│   │   ├── SceneCopy.tsx                # Micro-Typography Overlay & Scene Copy
│   │   ├── ScrollRail.tsx               # Precision HUD Index (`TRAVERSE 01..06`) & Progress Bar
│   │   └── StaticFallback.tsx           # Mobile / Reduced Motion Static Render Layer
│   ├── nav/                             # Navigation & Footers
│   │   ├── SiteNav.tsx                  # Global Glassmorphic Header & Smooth Anchor Links
│   │   └── SiteFooter.tsx               # Institutional Footer with Metallic Golden Social Badges
│   ├── sections/                        # Layout Content Sections
│   │   ├── EliteDivisionExperience.tsx  # Asymmetric High-Density Division Showcase with Real-Time Canvas
│   │   ├── DivisionExplorer.tsx         # Division Matrix
│   │   ├── FlywheelSection.tsx          # Operational Monetization Flywheel (PRIMAL → SPACE)
│   │   ├── HorizonStrip.tsx             # Strategic Timeline Banner
│   │   ├── PhilosophyBand.tsx           # Core Enterprise Philosophy
│   │   └── CTASection.tsx               # Strategic Action Banner
│   ├── ui/                              # Granular UI Primitives
│   │   ├── GoldenSocialBadges.tsx       # Metallic Golden Badges (`G` Gmail & `IN` LinkedIn)
│   │   └── StatusChip.tsx               # Operational Status Indicator (Operational / Active / Planning)
│   └── seo/
│       └── JsonLd.tsx                   # Structured Enterprise Schema.org JSON-LD Metadata
├── content/                             # Structured Type-Safe Enterprise Datasets
│   ├── careers.ts                       # 26 Functional Divisions, Candidate Signals, 12-Mo Trainee Data
│   ├── divisions.ts                     # Master Specifications for 6 WARAN Divisions
│   ├── exploration.ts                   # Deep-Sea & Autonomous Robotics Telemetry Specs
│   ├── flywheel.ts                      # Monetization & Capital Allocation Blueprint
│   ├── research.ts                      # Active Research Papers & Technological Directives
│   ├── scenes.ts                        # 3D Scene Keyframe Telemetry Coordinates
│   ├── site.ts                          # Canonical Metadata, Legal Name & Philosophy Lines
│   ├── space.ts                         # Orbital Robotics & Space Systems Architecture
│   └── types.ts                         # Core TypeScript Specifications
├── lib/                                 # Utilities & State Management
│   ├── cn.ts                            # Tailwind Class Merger Utility
│   ├── detect.ts                        # WebGL, GPU Tier & Device Hardware Detector
│   ├── store.ts                         # Zustand Store (`useWaranStore` for Scroll Progress)
│   └── hooks/
│       ├── useScrollEngine.ts           # Smooth Scroll Interpolator
│       ├── useScrollProgress.ts         # Window Scroll Progress Listener
│       └── usePrefersReducedMotion.ts   # Accessibility Hardware Check
├── public/                              # Static Assets
│   └── brand/
│       └── logo.png                     # Official High-Resolution WARAN Canonical Logo
├── docs/                                # Technical Documentation & Architecture Plans
│   └── MASTER_PLAN.md                   # 32-Phase Blueprint & Careers Talent Framework
├── tailwind.config.ts                   # Custom Colors (`waran-gold`, `waran-ink`), Fonts & Spacing
├── tsconfig.json                        # Strict TypeScript Rules & Path Aliases (`@/*`)
├── next.config.mjs                      # Next.js Build Configuration
└── README.md                            # Repository Quick Start & Guide
```

---

## 🧭 COMPREHENSIVE USER & DEVELOPER NAVIGATION GUIDE

### 1. 🏠 Homepage (`/`) — Main Industrial Headquarters
- **3D Hero Helix Nucleus (`HelixMark.tsx`):** Displays a dual metallic gold/silver double-helix DNA strand encircling a central **WARAN Core Nucleus** sphere with an internal light-breathing pulse.
- **Scroll HUD Index (`ScrollRail.tsx`):** Located on the right side of the screen (`TRAVERSE 01 / PRIMAL` → `06 / SPACE`). Shows live percentage readouts (`0%` to `100%`) and active division markers. Clicking any division index smoothly scrolls to its exact 3D scene coordinate.
- **Asymmetrical Division Showcase (`EliteDivisionExperience.tsx`):** Replaces basic grid cards with procedural 2D canvas simulations:
  - **WARAN PRIMAL (AI Software):** Real-time neural node graph simulation.
  - **WARAN TECH (Hardware & Silicon):** Microchip circuit telemetry animation.
  - **WARAN SCIENCES (Bio & Synthetic):** Molecular lattice particle simulation.
  - **WARAN CAPITAL (Asset Allocation):** Quantum yield trajectory curves.
  - **WARAN EXPLORATION (Deep Sea):** Ocean sonar pulse simulation.
  - **WARAN SPACE (Space Robotics):** Orbital ellipse trajectory simulation.

---

### 2. 💼 Careers Platform (`/careers`) — Frontier AI Enterprise Talent Framework

Structured around **Google, Meta, OpenAI, and Anthropic-tier organizational standards**.

#### 🔍 Natural-Language Search & Filters
Filter open roles across **26 specialized functional divisions** using natural language search queries (e.g., `"Show me AI product roles 3-6 years"`, `"DevOps 4-8 years"`, `"Python & Vector DBs"`, `"Remote"`).

Filter options include:
- **Experience Bands:** `Students & Interns`, `Fresh Graduates`, `Early Career`, `Professional`, `Experienced`, `Leadership`.
- **AI-Native Expectation Levels:** `AI User`, `AI Practitioner`, `AI Builder`, `AI Specialist`, `AI Researcher`, `AI Product Leader`, `AI Systems Leader`.
- **Functional Disciplines:** 26 specialized tracks (AI Systems, LLMs, DevOps, Red Teaming, Sales, Finance, HR, TPM, etc.).

#### 🎓 Flagship 12-Month Rotational Industry Trainee Program
Prominently highlighted at the top of the Early Careers section:
- **Paid Residency:** Monthly stipend **up to ₹1 Lakh / Month** (`₹1,000,000 / month`).
- **Structure:** 12-month intensive rotation across AI, software, product, and applied automation tracks under senior industry mentors.
- **Selection Criteria:** Evaluated via college merit / CGPA, technical assessment, and multi-round interviews.
- **Trainee Choice:** Upon 12-month graduation, trainees **choose their target division and full-time role** at WARAN Industries based on performance.

#### 📄 Interactive 4-Tab Job Specification Modal
Clicking **"VIEW FULL SPEC & MILESTONES →"** on any job card opens a deep modal with four tabs:
1. **Overview & Responsibilities:** Role mission, expected business impact, 6–10 detailed responsibilities, required qualifications, and nice-to-haves.
2. **30/90/180/365 Day Milestones:** Concrete performance expectations for the candidate's first month, quarter, half-year, and full year.
3. **Career Pathway & Collaboration:** Clear trajectory (*e.g., Trainee → Engineer → Senior → Staff → Principal*) and key cross-functional team collaborators.
4. **Candidate Signals & Evaluation:** Transparent breakdown of the 8-dimension weighted candidate selection matrix (Capability 20%, Impact 20%, Technical Depth 15%, Execution 15%, etc.).

#### 📝 10-Step Enterprise Candidate Application Platform (`CandidateApplicationFlow.tsx`)
Clicking **"APPLY"** opens a drawer with a 10-step candidate application flow:
1. **01 / Personal Metadata:** Full Name, Email, Phone, Country/City, Portfolio URL.
2. **02 / Professional Experience:** Current Title, Years of Experience, Current Organization, Primary Domain.
3. **03 / Academic Background:** University, Degree, CGPA / Grade Merit, Graduation Year.
4. **04 / Technical & AI Skills Tagger:** Interactive skill selection (Python, PyTorch, RAG, Next.js, Vector DBs, Kubernetes, etc.).
5. **05 / Resume & Portfolio Upload:** PDF / Document resume upload with real-time file size & type validation.
6. **06 / Narrative & Building Motivation:** "Why WARAN?", "What is the most difficult problem you solved?".
7. **07 / Significant Accomplishment:** Deep dive into candidate's highest impact project.
8. **08 / Role-Specific Q&A:** Custom questions tailored to the applied discipline.
9. **09 / Review & Verification:** Complete application preview and legal declaration.
10. **10 / Application Confirmation & Tracking Token:** Generates a unique tracking token (e.g. `WAR-AI-2026-X89K2L`) and offers a PDF receipt download.

---

### 3. 🏢 About Page (`/about`) — Institutional Vision & 3D Atomic Simulation
- **3D Atomic Nucleus & Electron Orbit Simulation (`HelixFallback.tsx`):** Renders a procedural 3D canvas featuring 3 inclined counter-rotating orbital rings (`Space / Time / Matter`) around a central glowing WARAN Core Mark (`public/brand/logo.png`). Glowing gold electrons revolve continuously along elliptical paths with 3D depth scaling.
- **Sequence of Capability:** Transparent breakdown of WARAN's multi-divisional roadmap starting with operational software (**WARAN PRIMAL**) and moving toward physical hardware, biotechnology, capital allocation, and space robotics.

---

### 4. 🌐 Division Subpages (`/divisions/[slug]`)
Access dynamic division subpages via `/divisions/primal`, `/divisions/tech`, `/divisions/sciences`, `/divisions/capital`, `/divisions/exploration`, and `/divisions/space`. Each page features a persistent full-viewport procedural WebGL/Canvas backdrop (`DivisionVisualSystem.tsx`) tailored to its domain.

---

### 5. ✉️ Contact Page (`/contact`) & Golden Social Badges
Features custom metallic gold social badges (`components/ui/GoldenSocialBadges.tsx`):
- **Golden `G` Badge (Gmail):** Direct `mailto:waranindustriesai@gmail.com` link + click-to-copy email functionality.
- **Golden `IN` Badge (LinkedIn):** Direct link to `https://www.linkedin.com/in/waran-industries` + copy link functionality.
- **Enterprise Contact Form (`ContactForm.tsx`):** Real-time client-side validation and serverless submission to `/api/inquiry`.

---

## ⚡ QUICK START & LOCAL DEVELOPMENT GUIDE

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **Package Manager:** npm, yarn, or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/lokeshwaran233-commits/waran-industriesAI.git
cd waran-industriesAI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:3000`**.

### 4. Production Build Verification
To compile the production bundle and verify all static & dynamic pages:
```bash
npm run build
npm run start
```

---

## 🎨 DESIGN SYSTEM & TYPOGRAPHY SPECS

| Token / Element | Font / Value | Usage Description |
| :--- | :--- | :--- |
| **Display Headings** | `Space Grotesk` (Google Font) | Futuristic geometric headers, section titles, hero copy |
| **Body & Interfaces** | `Plus Jakarta Sans` (Google Font) | Crisp, modern executive body text, buttons, form controls |
| **Telemetry / Code** | `JetBrains Mono` (Google Font) | Applied to tracking tokens (`WAR-AI-2026-XXXXXX`), API schemas, and gold badges |
| **Primary Accent Gold** | `#C5A059` (`waran-gold`) | UI focus rings, active HUD markers, badges, glowing borders |
| **Soft Gold** | `#E0C48A` (`waran-goldSoft`) | Subheading highlights, secondary typography accents |
| **Background Dark Ink** | `#0B0C0E` (`waran-ink`) | Full viewport background with subtle radial gradient overlays |

---

## 🔒 CREDIBILITY & FACTUAL DISCIPLINE

WARAN Industries adheres strictly to factual credibility:
- **WARAN PRIMAL** is the **first and current operating division** delivering AI-native software solutions.
- **WARAN TECH, SCIENCES, CAPITAL, EXPLORATION, and SPACE** represent planned future capability phases transparently marked with `[PLANNING]` or `[ACTIVE RESEARCH]` status chips.
- Non-existent revenues, fabricated patents, fake client logos, or false mission claims are strictly prohibited.

---

## 📜 LICENSE & COPYRIGHT

© 2026 **WARAN Industries**. All Rights Reserved.  
Built for long-horizon industrial expansion.
