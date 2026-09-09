"use client";

import { useMemo, useState } from "react";
import {
  aiNativeLevels,
  careerDisciplines,
  careerRoles,
  experienceFilters,
  JobRole,
  AINativeLevel,
} from "@/content/careers";
import { CandidateApplicationFlow } from "./CandidateApplicationFlow";
import { cn } from "@/lib/cn";

export function CareersExplorer() {
  const [search, setSearch] = useState("");
  const [selectedExperience, setSelectedExperience] = useState<string>("All");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [selectedAiLevel, setSelectedAiLevel] = useState<string>("All");
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [applyingRole, setApplyingRole] = useState<JobRole | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "milestones" | "growth" | "evaluation">("overview");

  // Natural Language Search Parsing & Multi-Dimensional Filtering
  const filteredRoles = useMemo(() => {
    return careerRoles.filter((role) => {
      // Experience match
      if (
        selectedExperience !== "All" &&
        role.experienceLevel !== selectedExperience
      ) {
        return false;
      }

      // Discipline match
      if (
        selectedDisciplines.length > 0 &&
        !selectedDisciplines.includes(role.discipline)
      ) {
        return false;
      }

      // AI Level match
      if (
        selectedAiLevel !== "All" &&
        role.aiNativeExpectation !== selectedAiLevel
      ) {
        return false;
      }

      // Search match (natural language support e.g. "AI product roles 3-6 years")
      if (search.trim()) {
        const query = search.toLowerCase();
        const titleMatch = role.title.toLowerCase().includes(query);
        const descMatch = role.shortDescription.toLowerCase().includes(query);
        const techMatch = role.technologies.some((t) =>
          t.toLowerCase().includes(query)
        );
        const deptMatch = role.department.toLowerCase().includes(query);
        const discMatch = role.discipline.toLowerCase().includes(query);
        const aiLevelMatch = role.aiNativeExpectation.toLowerCase().includes(query);
        const subFuncMatch = role.subFunction.toLowerCase().includes(query);

        // Check experience range match e.g. "3-5 years" or "3 years"
        const expMatch = query.includes("year") && (
          query.includes(`${role.minExpYears}`) || query.includes(`${role.maxExpYears}`)
        );

        return (
          titleMatch ||
          descMatch ||
          techMatch ||
          deptMatch ||
          discMatch ||
          aiLevelMatch ||
          subFuncMatch ||
          expMatch
        );
      }

      return true;
    });
  }, [search, selectedExperience, selectedDisciplines, selectedAiLevel]);

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc)
        ? prev.filter((d) => d !== disc)
        : [...prev, disc]
    );
  };

  return (
    <section id="roles" className="scroll-mt-24">
      {/* SECTION HEADER */}
      <div className="border-b border-white/10 pb-8">
        <p className="micro text-waran-gold">06 / FRONTIER CAREER SEARCH ENGINE</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.05em] text-waran-paper md:text-5xl">
          ENTERPRISE OPPORTUNITY MATRIX.
        </h2>
        <p className="measure mt-3 text-sm leading-7 text-waran-paper/70">
          Filter through 26 Google/Meta/OpenAI-tier functional specializations across AI engineering, research, product, cloud infrastructure, sales, and operations.
        </p>
      </div>

      {/* SEARCH BAR & NATURAL LANGUAGE PRESETS */}
      <div className="mt-8 space-y-3">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search roles, technologies, or natural queries (e.g., 'Show me AI product roles 3-6 years', 'Python', 'DevOps')..."
              className="w-full border border-white/15 bg-[#0a0c10] px-5 py-3.5 font-sans text-sm text-waran-paper placeholder:text-waran-paper/40 focus:border-waran-gold focus:outline-none rounded-xs"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-xs text-waran-paper/50 hover:text-waran-gold font-semibold"
              >
                CLEAR
              </button>
            )}
          </div>
          <div className="flex items-center justify-between border border-white/10 bg-[#0a0c10] px-5 py-3.5 font-sans text-xs text-waran-paper/70 font-medium">
            <span>MATCHED OPENINGS:</span>
            <span className="ml-3 text-waran-gold font-bold">{filteredRoles.length} / {careerRoles.length}</span>
          </div>
        </div>

        {/* QUICK SEARCH PRESETS */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-sans text-xs text-waran-paper/60">
          <span className="text-waran-gold font-semibold">TRY SEARCH:</span>
          {[
            "AI Product Roles",
            "DevOps 4-8 years",
            "Graduate Program",
            "Python & Vector DBs",
            "Enterprise Sales",
            "Remote",
          ].map((preset) => (
            <button
              key={preset}
              onClick={() => setSearch(preset)}
              className="border border-white/10 bg-[#0d1017] px-3 py-1 text-[11px] font-medium hover:border-waran-gold/50 hover:text-waran-gold transition-all rounded-xs"
            >
              &ldquo;{preset}&rdquo;
            </button>
          ))}
        </div>
      </div>

      {/* EXPERIENCE & AI EXPECTATION FILTERS */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* EXPERIENCE LEVEL FILTER */}
        <div className="space-y-3">
          <p className="micro text-waran-paper/50">EXPERIENCE BAND</p>
          <div className="flex flex-wrap gap-2">
            {experienceFilters.map((exp) => {
              const isActive = selectedExperience === exp;
              return (
                <button
                  key={exp}
                  onClick={() => setSelectedExperience(exp)}
                  className={cn(
                    "px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 border rounded-xs",
                    isActive
                      ? "border-waran-gold bg-waran-gold/15 text-waran-gold shadow-[0_0_12px_rgba(197,160,89,0.25)]"
                      : "border-white/10 bg-[#0a0c10] text-waran-paper/60 hover:border-white/30 hover:text-waran-paper"
                  )}
                >
                  {exp.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* AI NATIVE EXPECTATION LEVEL FILTER */}
        <div className="space-y-3">
          <p className="micro text-waran-paper/50">AI-NATIVE EXPECTATION LEVEL</p>
          <div className="flex flex-wrap gap-2">
            {["All", ...aiNativeLevels].map((lvl) => {
              const isActive = selectedAiLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedAiLevel(lvl)}
                  className={cn(
                    "px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 border rounded-xs",
                    isActive
                      ? "border-waran-gold bg-waran-gold/15 text-waran-gold shadow-[0_0_12px_rgba(197,160,89,0.25)]"
                      : "border-white/10 bg-[#0a0c10] text-waran-paper/60 hover:border-white/30 hover:text-waran-paper"
                  )}
                >
                  {lvl.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DISCIPLINES MULTI-SELECT */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center justify-between">
          <p className="micro text-waran-paper/50">FUNCTIONAL DISCIPLINES ({careerDisciplines.length})</p>
          {selectedDisciplines.length > 0 && (
            <button
              onClick={() => setSelectedDisciplines([])}
              className="font-mono text-xs text-waran-gold hover:underline"
            >
              RESET DISCIPLINES ({selectedDisciplines.length})
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar border border-white/5 p-3 bg-[#080a0f]">
          {careerDisciplines.map((disc) => {
            const isSelected = selectedDisciplines.includes(disc);
            return (
              <button
                key={disc}
                onClick={() => toggleDiscipline(disc)}
                className={cn(
                  "px-3 py-1 font-mono text-[11px] tracking-wider transition-all border rounded-xs",
                  isSelected
                    ? "border-waran-gold bg-waran-gold/20 text-waran-gold font-bold"
                    : "border-white/10 bg-[#0c0f16] text-waran-paper/50 hover:border-white/30 hover:text-waran-paper"
                )}
              >
                {isSelected ? "✓ " : "+ "}{disc}
              </button>
            );
          })}
        </div>
      </div>

      {/* JOB ROLE GRID */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRoles.length === 0 ? (
          <div className="col-span-full border border-dashed border-white/15 bg-[#0a0c10] p-12 text-center">
            <p className="font-mono text-sm text-waran-paper/50">NO MATCHING OPENINGS FOUND.</p>
            <p className="mt-2 text-xs text-waran-paper/40">Try adjusting your search keywords, experience level, or discipline filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedExperience("All");
                setSelectedDisciplines([]);
                setSelectedAiLevel("All");
              }}
              className="mt-6 border border-waran-gold bg-waran-gold/10 px-4 py-2 font-mono text-xs text-waran-gold hover:bg-waran-gold hover:text-black transition-all"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          filteredRoles.map((role) => (
            <div
              key={role.id}
              className={cn(
                "group relative border bg-[#0a0c12] p-6 flex flex-col justify-between transition-all duration-300 hover:border-waran-gold/60 rounded-xs",
                role.isEarlyCareer ? "border-waran-gold/40 shadow-[0_0_20px_rgba(197,160,89,0.08)]" : "border-white/10"
              )}
            >
              <div>
                {/* CARD TOP BADGES */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px]">
                  <span className="border border-waran-gold/40 bg-waran-gold/10 px-2 py-0.5 text-waran-gold font-semibold uppercase">
                    {role.department}
                  </span>
                  <span className="border border-white/10 bg-black/40 px-2 py-0.5 text-waran-paper/60">
                    {role.workMode}
                  </span>
                </div>

                {/* ROLE TITLE */}
                <h3 className="mt-4 font-display text-2xl text-waran-paper group-hover:text-waran-gold transition-colors leading-tight">
                  {role.title}
                </h3>

                {/* METADATA SUBROW */}
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-waran-paper/50">
                  <span>{role.experienceLevel} ({role.minExpYears}–{role.maxExpYears} yrs)</span>
                  <span>•</span>
                  <span>{role.employmentType}</span>
                </div>

                {/* AI EXPECTATION TAG */}
                <div className="mt-3 inline-block border border-waran-gold/30 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-waran-gold font-bold">
                  AI EXPECTATION: {role.aiNativeExpectation}
                </div>

                <p className="mt-3 text-xs leading-6 text-waran-paper/70 line-clamp-3">
                  {role.shortDescription}
                </p>

                {/* TECH STACK TAGS */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="border border-white/10 bg-[#06070a] px-2 py-0.5 font-mono text-[10px] text-waran-paper/60">
                      {tech}
                    </span>
                  ))}
                  {role.technologies.length > 4 && (
                    <span className="font-mono text-[10px] text-waran-paper/40 self-center">
                      +{role.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* CARD FOOTER ACTIONS */}
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedRole(role)}
                  className="font-mono text-xs text-waran-gold hover:underline flex items-center gap-1 font-semibold"
                >
                  VIEW FULL SPEC & MILESTONES →
                </button>
                <button
                  onClick={() => setApplyingRole(role)}
                  className="border border-waran-gold bg-waran-gold px-3 py-1.5 font-mono text-xs text-black font-bold hover:bg-waran-gold/90 transition-all shadow-[0_0_10px_rgba(197,160,89,0.2)]"
                >
                  APPLY
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* EXPANDED ROLE DETAIL SPEC MODAL */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-waran-gold/50 bg-[#090b10] p-6 md:p-10 shadow-[0_0_50px_rgba(197,160,89,0.2)] rounded-xs custom-scrollbar">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute right-6 top-6 border border-white/20 px-3 py-1 font-mono text-xs text-waran-paper/60 hover:border-waran-gold hover:text-waran-gold"
            >
              CLOSE [ESC]
            </button>

            {/* MODAL HEADER */}
            <div className="pr-16">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-waran-gold font-bold">
                <span>{selectedRole.department}</span>
                <span>•</span>
                <span>{selectedRole.subFunction}</span>
                <span>•</span>
                <span>{selectedRole.seniority}</span>
              </div>

              <h2 className="mt-3 font-display text-3xl text-waran-paper md:text-5xl">
                {selectedRole.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-waran-paper/70">
                <div>LOCATION: <span className="text-waran-paper">{selectedRole.location}</span></div>
                <div>EXPERIENCE: <span className="text-waran-paper">{selectedRole.minExpYears}–{selectedRole.maxExpYears} Years</span></div>
                <div>TYPE: <span className="text-waran-paper">{selectedRole.employmentType}</span></div>
                <div>AI EXPECTATION: <span className="text-waran-gold font-bold">{selectedRole.aiNativeExpectation}</span></div>
              </div>
            </div>

            {/* TAB NAVIGATION IN SPEC MODAL */}
            <div className="mt-8 flex border-b border-white/10 font-mono text-xs">
              {[
                { id: "overview", label: "OVERVIEW & RESPONSIBILITIES" },
                { id: "milestones", label: "30/90/180/365 MILESTONES" },
                { id: "growth", label: "CAREER PATHWAY & COLLABORATION" },
                { id: "evaluation", label: "CANDIDATE SIGNALS & EVALUATION" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "px-4 py-2 border-b-2 font-semibold transition-all",
                    activeTab === tab.id
                      ? "border-waran-gold text-waran-gold bg-waran-gold/10"
                      : "border-transparent text-waran-paper/60 hover:text-waran-paper"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div className="mt-6 space-y-6">
              {activeTab === "overview" && (
                <>
                  <div>
                    <h4 className="font-mono text-xs text-waran-gold">ROLE MISSION</h4>
                    <p className="mt-2 text-sm leading-7 text-waran-paper/85 font-medium">{selectedRole.mission}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-waran-gold">EXPECTED IMPACT</h4>
                    <p className="mt-2 text-sm leading-7 text-waran-paper/80">{selectedRole.impactSummary}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-waran-gold">KEY RESPONSIBILITIES</h4>
                    <ul className="mt-3 space-y-2 text-sm text-waran-paper/75">
                      {selectedRole.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-waran-gold font-mono">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-waran-gold">REQUIRED QUALIFICATIONS</h4>
                    <ul className="mt-3 space-y-2 text-sm text-waran-paper/75">
                      {selectedRole.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-waran-gold font-mono">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedRole.niceToHave.length > 0 && (
                    <div>
                      <h4 className="font-mono text-xs text-waran-gold/70">PREFERRED / NICE TO HAVE</h4>
                      <ul className="mt-3 space-y-2 text-sm text-waran-paper/60">
                        {selectedRole.niceToHave.map((nth, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="font-mono">+</span>
                            <span>{nth}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {activeTab === "milestones" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="border border-white/10 bg-[#0c0f16] p-4">
                    <span className="font-mono text-xs text-waran-gold">FIRST 30 DAYS</span>
                    <p className="mt-2 text-xs leading-6 text-waran-paper/80">{selectedRole.successMilestones.m30}</p>
                  </div>
                  <div className="border border-white/10 bg-[#0c0f16] p-4">
                    <span className="font-mono text-xs text-waran-gold">FIRST 90 DAYS</span>
                    <p className="mt-2 text-xs leading-6 text-waran-paper/80">{selectedRole.successMilestones.m90}</p>
                  </div>
                  <div className="border border-white/10 bg-[#0c0f16] p-4">
                    <span className="font-mono text-xs text-waran-gold">FIRST 180 DAYS</span>
                    <p className="mt-2 text-xs leading-6 text-waran-paper/80">{selectedRole.successMilestones.m180}</p>
                  </div>
                  <div className="border border-white/10 bg-[#0c0f16] p-4">
                    <span className="font-mono text-xs text-waran-gold">365 DAYS (1 YEAR)</span>
                    <p className="mt-2 text-xs leading-6 text-waran-paper/80">{selectedRole.successMilestones.m365}</p>
                  </div>
                </div>
              )}

              {activeTab === "growth" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-waran-gold">CAREER GROWTH PATHWAY</h4>
                    <p className="mt-2 font-mono text-sm text-waran-paper bg-[#0c0f16] p-4 border border-waran-gold/30">
                      {selectedRole.growthPathway}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-waran-gold">KEY COLLABORATION MAP</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedRole.collaborationMap.map((collab) => (
                        <span key={collab} className="border border-white/15 bg-[#0c0f16] px-3 py-1 font-mono text-xs text-waran-paper/80">
                          {collab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "evaluation" && (
                <div className="space-y-4">
                  <p className="text-xs text-waran-paper/70">
                    At WARAN Industries, we evaluate candidates based on demonstrated capability and structured evidence rather than credentials alone:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 font-mono text-xs">
                    <div className="border border-white/10 bg-[#0c0f16] p-3">
                      <span className="text-waran-gold font-bold">RELEVANT CAPABILITY (20%)</span>
                      <p className="mt-1 text-waran-paper/60">Direct engineering/product execution ability.</p>
                    </div>
                    <div className="border border-white/10 bg-[#0c0f16] p-3">
                      <span className="text-waran-gold font-bold">DEMONSTRATED IMPACT (20%)</span>
                      <p className="mt-1 text-waran-paper/60">Proven production track record.</p>
                    </div>
                    <div className="border border-white/10 bg-[#0c0f16] p-3">
                      <span className="text-waran-gold font-bold">TECHNICAL DEPTH (15%)</span>
                      <p className="mt-1 text-waran-paper/60">First-principles systems understanding.</p>
                    </div>
                    <div className="border border-white/10 bg-[#0c0f16] p-3">
                      <span className="text-waran-gold font-bold">EXECUTION VELOCITY (15%)</span>
                      <p className="mt-1 text-waran-paper/60">Speed of shipping quality code & specs.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="mt-8 border-t border-white/10 pt-6 flex justify-between items-center">
              <button
                onClick={() => setSelectedRole(null)}
                className="font-mono text-xs text-waran-paper/60 hover:text-waran-paper"
              >
                RETURN TO LISTINGS
              </button>
              <button
                onClick={() => {
                  const roleToApply = selectedRole;
                  setSelectedRole(null);
                  setApplyingRole(roleToApply);
                }}
                className="border border-waran-gold bg-waran-gold px-6 py-3 font-mono text-xs text-black font-bold hover:bg-waran-gold/90 transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)]"
              >
                APPLY FOR THIS ROLE NOW →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CANDIDATE APPLICATION FLOW DRAWER */}
      {applyingRole && (
        <CandidateApplicationFlow
          role={applyingRole}
          onClose={() => setApplyingRole(null)}
        />
      )}
    </section>
  );
}
