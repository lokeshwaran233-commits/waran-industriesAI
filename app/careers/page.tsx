import type { Metadata } from "next";
import Link from "next/link";
import { CareersExplorer } from "@/components/careers/CareersExplorer";
import { candidateSignals, evaluationFramework } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers — Frontier AI Enterprise Architecture",
  description:
    "Join WARAN Industries in building intelligent products, advanced AI systems, and scalable enterprise platforms. Explore openings across 26 specialized functional divisions.",
};

export default function CareersPage() {
  return (
    <article className="relative px-6 pb-28 pt-28 md:px-12">
      {/* BACKGROUND ATMOSPHERIC GRADIENT */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-waran-gold/5 via-[#060709] to-[#040507]" />

      {/* 01 - HERO SECTION */}
      <section className="border-b border-white/10 pb-20 pt-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="micro text-waran-gold">01 / WARAN CAREERS ARCHITECTURE</p>
          <span className="border border-waran-gold/30 bg-waran-gold/10 px-3 py-1 font-sans text-[11px] font-semibold tracking-wider text-waran-gold uppercase rounded-xs">
            FRONTIER AI ENTERPRISE TALENT FRAMEWORK
          </span>
        </div>

        <h1 className="mt-6 max-w-5xl font-display text-5xl tracking-[-0.05em] text-waran-paper md:text-8xl font-bold leading-[0.98]">
          BUILD WHAT COMES NEXT.
        </h1>

        <p className="mt-8 max-w-3xl font-display text-xl tracking-tight text-waran-goldSoft/90 md:text-2xl font-medium">
          Join WARAN Industries to build intelligent products, advanced AI systems, and scalable platforms designed for a rapidly changing world.
        </p>

        <p className="measure mt-6 text-sm leading-8 text-waran-paper/75 md:text-base">
          We do not operate a conventional corporate job board. WARAN Industries is structured around 26 specialized technical, scientific, product, commercial, operational, and governance functions operating at Google, Meta, OpenAI, and Anthropic-tier talent standards.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#roles"
            className="border border-waran-gold bg-waran-gold/15 px-7 py-3.5 font-sans text-xs tracking-wider text-waran-gold hover:bg-waran-gold hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.2)] rounded-xs font-bold uppercase"
          >
            EXPLORE OPPORTUNITIES →
          </a>
          <a
            href="#philosophy"
            className="border border-white/15 bg-[#0a0c10]/80 px-7 py-3.5 font-sans text-xs tracking-wider text-waran-paper/80 hover:border-waran-gold hover:text-waran-gold transition-all duration-300 rounded-xs font-semibold uppercase"
          >
            TALENT PHILOSOPHY
          </a>
          <a
            href="#general-application"
            className="border border-white/10 bg-black/40 px-7 py-3.5 font-sans text-xs tracking-wider text-waran-paper/50 hover:text-waran-paper transition-all duration-300 rounded-xs font-medium uppercase"
          >
            SUBMIT PROFILE
          </a>
        </div>
      </section>

      {/* 02 - TALENT PHILOSOPHY & GOOGLE/META SIGNALS */}
      <section id="philosophy" className="scroll-mt-24 border-b border-white/10 py-20">
        <p className="micro text-waran-gold">02 / TALENT PHILOSOPHY & EVALUATION SIGNALS</p>

        <div className="mt-4 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl tracking-[-0.04em] text-waran-paper md:text-5xl font-bold">
              DEMONSTRATED IMPACT OVER CREDENTIALS.
            </h2>
            <p className="mt-6 text-sm leading-7 text-waran-paper/75">
              Experience is a guideline, not an automatic qualification. A candidate with exceptional demonstrated impact, systems thinking, and building velocity qualifies above nominal experience bands.
            </p>
            <div className="mt-6 inline-block border border-waran-gold/30 bg-waran-gold/10 px-4 py-2 font-sans text-xs font-semibold text-waran-gold tracking-wide rounded-xs">
              HIRING PRINCIPLE: OUTPUT &amp; SYSTEMS RIGOR &gt; RESUME LENGTH
            </div>
          </div>

          {/* CANDIDATE EVALUATION SIGNALS GRID */}
          <div className="grid gap-3 sm:grid-cols-2">
            {candidateSignals.map((signal) => (
              <div key={signal.name} className="border border-white/10 bg-[#0a0c10]/80 p-5 rounded-xs">
                <span className="font-sans text-xs text-waran-gold font-bold tracking-wide uppercase">{signal.name}</span>
                <p className="mt-1.5 text-xs leading-6 text-waran-paper/70">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - FLAGSHIP 12-MONTH TRAINEE PROGRAM SPOTLIGHT */}
      <section className="border-b border-white/10 py-20">
        <p className="micro text-waran-gold">03 / EARLY CAREERS & TRAINEE PROGRAM</p>

        <div className="mt-6 border border-waran-gold/50 bg-[#0a0d14] p-8 md:p-12 shadow-[0_0_30px_rgba(197,160,89,0.15)] rounded-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="border border-waran-gold bg-waran-gold/20 px-3 py-1 font-sans text-[11px] tracking-wider text-waran-gold font-bold uppercase rounded-xs">
              ★ FLAGSHIP PAID PROGRAM · STIPEND UP TO ₹1 LAKH / MONTH
            </span>
            <span className="font-sans text-xs text-waran-paper/60 font-medium">
              SELECTION: MERIT / CGPA + ASSESSMENT + INTERVIEWS
            </span>
          </div>

          <h3 className="mt-4 font-display text-3xl tracking-tight text-waran-paper md:text-5xl font-bold">
            12-Month Rotational Industry Trainee & Future Leader
          </h3>

          <p className="mt-4 measure text-sm leading-7 text-waran-paper/85">
            Study, work, and innovate with hands-on mentorship from industry leads and senior WARAN engineers. Receive a paid monthly stipend of <strong className="text-waran-gold">up to ₹1 Lakh / Month</strong> (`₹1,000,000 / month`) while rotating through AI, software, product, and automation divisions. Upon 12-month completion, choose your preferred career path and lock in your full-time role at WARAN Industries.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-4 font-sans text-xs text-waran-paper/75 border-t border-white/10 pt-6">
            <div>
              <span className="text-waran-gold block font-bold tracking-wide uppercase">STUDY & WORK</span>
              <span className="mt-1 block text-waran-paper/60">Work on production bottlenecks with mentors.</span>
            </div>
            <div>
              <span className="text-waran-gold block font-bold tracking-wide uppercase">UP TO ₹1 LAKH / MO</span>
              <span className="mt-1 block text-waran-paper/60">Paid monthly stipend during residency.</span>
            </div>
            <div>
              <span className="text-waran-gold block font-bold tracking-wide uppercase">CHOOSE YOUR PATH</span>
              <span className="mt-1 block text-waran-paper/60">Select your full-time role upon graduation.</span>
            </div>
            <div>
              <span className="text-waran-gold block font-bold tracking-wide uppercase">MERIT SELECTION</span>
              <span className="mt-1 block text-waran-paper/60">Screening via CGPA, assessment & interviews.</span>
            </div>
          </div>

          <a
            href="#roles"
            className="mt-8 inline-block border border-waran-gold bg-waran-gold px-7 py-3.5 font-sans text-xs tracking-wider text-black font-bold hover:bg-waran-gold/90 transition-all shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-xs uppercase"
          >
            APPLY FOR 12-MONTH TRAINEE PROGRAM (STIPEND UP TO ₹1L/MO) →
          </a>
        </div>
      </section>

      {/* 04 - CANDIDATE EVALUATION MATRIX (WEIGHTED) */}
      <section className="border-b border-white/10 py-20">
        <p className="micro text-waran-gold">04 / APPLICATION EVALUATION FRAMEWORK</p>

        <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-waran-paper md:text-5xl font-bold">
          WEIGHTED SELECTION MATRIX.
        </h2>

        <p className="measure mt-3 text-sm leading-7 text-waran-paper/75">
          Every candidate application is evaluated using structured evidence across 8 core dimensions. AI tools assist in organizing evidence, but final hiring decisions remain 100% human-led.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {evaluationFramework.map((item) => (
            <div key={item.dimension} className="border border-white/10 bg-[#0a0c10] p-5 rounded-xs">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs text-waran-gold font-bold tracking-wide">{item.dimension}</span>
                <span className="border border-waran-gold/40 bg-waran-gold/10 px-2.5 py-0.5 font-sans text-[11px] font-bold text-waran-gold rounded-xs">
                  {item.weight}
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-waran-paper/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 - INTERACTIVE CAREER SEARCH ENGINE */}
      <div className="py-20">
        <CareersExplorer />
      </div>

      {/* 06 - GENERAL APPLICATION CTA */}
      <section id="general-application" className="scroll-mt-24 py-20">
        <div className="border border-waran-gold/40 bg-[#0a0c14] p-10 md:p-14 backdrop-blur-md rounded-xs">
          <div className="max-w-3xl">
            <p className="micro text-waran-gold">UNSOLICITED PROFILE SUBMISSION</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-waran-paper md:text-6xl font-bold">
              DON&apos;T SEE YOUR SPECIFIC ROLE?
            </h2>
            <p className="mt-4 text-sm leading-7 text-waran-paper/80">
              We build teams around high-impact problems, not rigid job descriptions. If your skills can advance frontier AI software, distributed infrastructure, product design, or business expansion, submit your portfolio directly.
            </p>
            <div className="mt-8 font-sans text-xs text-waran-paper/90">
              Direct Executive Recruiter Contact:{" "}
              <a href="mailto:waranindustriesai@gmail.com" className="text-waran-gold hover:underline font-bold">
                waranindustriesai@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
