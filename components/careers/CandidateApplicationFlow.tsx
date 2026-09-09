"use client";

import { useState } from "react";
import { JobRole } from "@/content/careers";
import { cn } from "@/lib/cn";

export function CandidateApplicationFlow({
  role,
  onClose,
}: {
  role: JobRole;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 01: About You
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "India",
    city: "",
    preferredName: "",
    // Step 02: Experience
    expCategory: role.isEarlyCareer ? "Fresh Graduate" : "1–2 years",
    currentRole: "",
    currentCompany: "",
    expDescription: "",
    // Step 03: Education
    institution: "",
    degree: "",
    fieldOfStudy: "",
    gradYear: "2025",
    // Step 04: Skills
    selectedSkills: role.technologies || [],
    customSkill: "",
    // Step 05: Resume
    resumeFileName: "",
    resumeContent: "",
    // Step 06: Story & Motivation
    whyWaran: "",
    whyThisRole: "",
    problemToSolve: "",
    // Step 07: Accomplishments
    accomplishmentTitle: "",
    accomplishmentImpact: "",
    accomplishmentLink: "",
    // Step 08: Role Specific
    roleAns1: "",
    roleAns2: "",
    // Step 09: Links
    linkedin: "",
    github: "",
    portfolio: "",
    // Declaration
    declarationConfirmed: false,
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddSkill = (skill: string) => {
    if (!skill.trim() || formData.selectedSkills.includes(skill)) return;
    setFormData((prev) => ({
      ...prev,
      selectedSkills: [...prev.selectedSkills, skill],
    }));
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSkills: prev.selectedSkills.filter((s) => s !== skill),
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleInputChange("resumeFileName", file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `WAR-AI-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedId(id);
  };

  const totalSteps = 10;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg">
      <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-waran-gold/40 bg-[#08090d] p-6 shadow-[0_0_50px_rgba(0,0,0,0.95)] custom-scrollbar rounded-xs md:p-10">
        {/* TOP APPLICATION HEADER */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-waran-gold uppercase">
              CANDIDATE APPLICATION PLATFORM // STEP {step} OF {totalSteps}
            </span>
            <h2 className="mt-1 font-display text-2xl tracking-tight text-waran-paper md:text-3xl">
              APPLYING FOR: <span className="text-waran-gold">{role.title.toUpperCase()}</span>
            </h2>
            <p className="mt-1 font-mono text-xs text-waran-paper/50">
              {role.discipline} · {role.experienceLevel} · {role.workMode}
            </p>
          </div>

          <button
            onClick={onClose}
            className="border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-waran-paper/60 hover:border-waran-gold hover:text-waran-gold transition-colors"
          >
            ✕ CANCEL
          </button>
        </div>

        {/* PROGRESS STEPPER BAR */}
        {!submittedId && (
          <div className="my-6">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-waran-gold transition-all duration-300 shadow-[0_0_10px_#C5A059]"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[9px] text-waran-paper/40">
              <span>01 ABOUT</span>
              <span>02 EXP</span>
              <span>03 EDU</span>
              <span>04 SKILLS</span>
              <span>05 RESUME</span>
              <span>06 STORY</span>
              <span>07 IMPACT</span>
              <span>08 Q&A</span>
              <span>09 LINKS</span>
              <span>10 REVIEW</span>
            </div>
          </div>
        )}

        {/* SUBMISSION CONFIRMATION STATE */}
        {submittedId ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-waran-gold bg-waran-gold/15 text-2xl text-waran-gold shadow-[0_0_30px_rgba(197,160,89,0.3)]">
              ✓
            </div>
            <h3 className="mt-6 font-display text-4xl tracking-tight text-waran-paper">
              APPLICATION RECEIVED.
            </h3>
            <p className="measure mx-auto mt-4 text-sm text-waran-paper/70">
              Thank you for taking the time to apply to WARAN Industries. Your application has been logged into the candidate database.
            </p>

            <div className="my-8 inline-block border border-waran-gold/50 bg-[#0b0e14] p-6 text-left font-mono text-xs space-y-2">
              <div className="text-waran-gold font-bold">APPLICATION TRACKING TOKEN</div>
              <div className="text-lg text-waran-paper tracking-wider">{submittedId}</div>
              <div className="text-waran-paper/50">STATUS: RECEIVED & QUEUED FOR RECRUITER REVIEW</div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="border border-waran-gold bg-waran-gold/20 px-6 py-3 font-mono text-xs text-waran-gold hover:bg-waran-gold hover:text-black transition-all font-bold"
              >
                RETURN TO CAREERS
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* STEP 01 — ABOUT YOU */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">01 / LET&apos;S START WITH YOU</h3>
                <p className="text-xs text-waran-paper/60">Provide your core contact details.</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">FIRST NAME *</label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Lokesh"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">LAST NAME *</label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Waran"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">EMAIL ADDRESS *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="waran@example.com"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">PHONE NUMBER *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">CITY & COUNTRY *</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Bengaluru, India"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none md:col-span-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 02 — EXPERIENCE */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">02 / YOUR EXPERIENCE</h3>
                <p className="text-xs text-waran-paper/60">How much professional experience do you bring?</p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Student / Intern", "Fresh Graduate (0-1 yr)", "1–2 years", "2–3 years", "3–5 years", "5+ years"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleInputChange("expCategory", cat)}
                      className={cn(
                        "p-3 font-mono text-xs text-center border rounded-xs transition-all",
                        formData.expCategory === cat
                          ? "border-waran-gold bg-waran-gold/20 text-waran-gold font-bold"
                          : "border-white/10 bg-black/40 text-waran-paper/60 hover:border-white/20"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">CURRENT / RECENT ROLE TITLE</label>
                    <input
                      type="text"
                      value={formData.currentRole}
                      onChange={(e) => handleInputChange("currentRole", e.target.value)}
                      placeholder="e.g. Associate Engineer / Student Researcher"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">COMPANY / ORGANIZATION</label>
                    <input
                      type="text"
                      value={formData.currentCompany}
                      onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                      placeholder="e.g. Autonomous Tech Labs"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="micro text-waran-paper/60 mb-1 block">SHORT SUMMARY OF RESPONSIBILITIES</label>
                    <textarea
                      rows={3}
                      value={formData.expDescription}
                      onChange={(e) => handleInputChange("expDescription", e.target.value)}
                      placeholder="Briefly describe key systems, products or workflows you managed..."
                      className="w-full border border-white/15 bg-black/60 p-4 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 03 — EDUCATION */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">03 / YOUR EDUCATION</h3>
                <p className="text-xs text-waran-paper/60">Academic background or self-taught discipline.</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">INSTITUTION / UNIVERSITY</label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      placeholder="e.g. Indian Institute of Technology / Self-Taught"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">DEGREE / CREDENTIAL</label>
                    <input
                      type="text"
                      value={formData.degree}
                      onChange={(e) => handleInputChange("degree", e.target.value)}
                      placeholder="e.g. B.Tech / B.S. / Self-Taught"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">FIELD OF STUDY</label>
                    <input
                      type="text"
                      value={formData.fieldOfStudy}
                      onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                      placeholder="e.g. Computer Science / AI & ML / Physics"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">GRADUATION YEAR</label>
                    <input
                      type="text"
                      value={formData.gradYear}
                      onChange={(e) => handleInputChange("gradYear", e.target.value)}
                      placeholder="2025"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 04 — SKILLS */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">04 / WHAT CAN YOU BUILD?</h3>
                <p className="text-xs text-waran-paper/60">Select or add your technical and practical capabilities.</p>

                <div className="flex flex-wrap gap-2">
                  {formData.selectedSkills.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-2 border border-waran-gold/50 bg-waran-gold/15 px-3 py-1 font-mono text-xs text-waran-gold"
                    >
                      {s}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(s)}
                        className="hover:text-white"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.customSkill}
                    onChange={(e) => handleInputChange("customSkill", e.target.value)}
                    placeholder="Add custom skill (e.g. PyTorch, LangChain, Kubernetes)..."
                    className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      handleAddSkill(formData.customSkill);
                      handleInputChange("customSkill", "");
                    }}
                    className="border border-waran-gold bg-waran-gold/20 px-4 py-2.5 font-mono text-xs text-waran-gold hover:bg-waran-gold hover:text-black transition-colors font-bold"
                  >
                    + ADD
                  </button>
                </div>
              </div>
            )}

            {/* STEP 05 — RESUME */}
            {step === 5 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">05 / YOUR RESUME</h3>
                <p className="text-xs text-waran-paper/60">Upload your PDF resume or provide profile details.</p>

                <div className="border-2 border-dashed border-white/20 bg-[#0a0c10] p-8 text-center rounded-xs hover:border-waran-gold/50 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <p className="font-mono text-sm text-waran-gold font-bold">
                      {formData.resumeFileName ? `✓ SELECTED: ${formData.resumeFileName}` : "CLICK TO UPLOAD RESUME (PDF)"}
                    </p>
                    <p className="mt-2 text-xs text-waran-paper/40">Maximum file size: 10 MB</p>
                  </label>
                </div>
              </div>
            )}

            {/* STEP 06 — STORY & MOTIVATION */}
            {step === 6 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">06 / WHY WARAN?</h3>
                <p className="text-xs text-waran-paper/60">Tell us what drives you and why this role fits your ambitions.</p>

                <div>
                  <label className="micro text-waran-gold mb-1 block">WHY DO YOU WANT TO WORK AT WARAN INDUSTRIES?</label>
                  <textarea
                    rows={3}
                    value={formData.whyWaran}
                    onChange={(e) => handleInputChange("whyWaran", e.target.value)}
                    placeholder="Tell us what draws you to our long-horizon mission..."
                    className="w-full border border-white/15 bg-black/60 p-4 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="micro text-waran-gold mb-1 block">WHAT PROBLEM WOULD YOU LOVE TO WORK ON IF YOU JOINED US?</label>
                  <textarea
                    rows={3}
                    value={formData.problemToSolve}
                    onChange={(e) => handleInputChange("problemToSolve", e.target.value)}
                    placeholder="Describe an industrial, AI, or software bottleneck you are passionate about solving..."
                    className="w-full border border-white/15 bg-black/60 p-4 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 07 — ACCOMPLISHMENTS */}
            {step === 7 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">07 / WHAT HAVE YOU BUILT OR ACCOMPLISHED?</h3>
                <p className="text-xs text-waran-paper/60">Highlight a project, paper, system or experiment you are proud of.</p>

                <div>
                  <label className="micro text-waran-paper/60 mb-1 block">PROJECT / ACCOMPLISHMENT TITLE</label>
                  <input
                    type="text"
                    value={formData.accomplishmentTitle}
                    onChange={(e) => handleInputChange("accomplishmentTitle", e.target.value)}
                    placeholder="e.g. Built an autonomous document intelligence pipeline"
                    className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="micro text-waran-paper/60 mb-1 block">WHAT CHANGED / WHAT WAS THE IMPACT?</label>
                  <textarea
                    rows={3}
                    value={formData.accomplishmentImpact}
                    onChange={(e) => handleInputChange("accomplishmentImpact", e.target.value)}
                    placeholder="Explain what specifically you built and the measurable outcome..."
                    className="w-full border border-white/15 bg-black/60 p-4 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 08 — ROLE QUESTIONS */}
            {step === 8 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">08 / ROLE-SPECIFIC QUESTIONS</h3>
                <p className="text-xs text-waran-paper/60">Demonstrate your problem solving intuition for {role.title}.</p>

                <div>
                  <label className="micro text-waran-gold mb-1 block">
                    DESCRIBE AN ENTERPRISE / AI / SOFTWARE SYSTEM YOU WORKED ON AND ITS HARDEST TECHNICAL BOTTLENECK:
                  </label>
                  <textarea
                    rows={3}
                    value={formData.roleAns1}
                    onChange={(e) => handleInputChange("roleAns1", e.target.value)}
                    placeholder="Walk us through your technical decisions and trade-offs..."
                    className="w-full border border-white/15 bg-black/60 p-4 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 09 — LINKS */}
            {step === 9 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-waran-paper">09 / SHOW US YOUR WORK</h3>
                <p className="text-xs text-waran-paper/60">Provide links to GitHub, LinkedIn, or personal projects.</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">GITHUB / CODE REPO</label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => handleInputChange("github", e.target.value)}
                      placeholder="https://github.com/username"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="micro text-waran-paper/60 mb-1 block">LINKEDIN PROFILE</label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-xs text-waran-paper placeholder:text-waran-paper/30 focus:border-waran-gold focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 10 — REVIEW & SUBMIT */}
            {step === 10 && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl text-waran-paper">10 / REVIEW YOUR APPLICATION</h3>
                <p className="text-xs text-waran-paper/60">Confirm your details before submitting to WARAN Talent Acquisition.</p>

                <div className="border border-white/15 bg-[#0a0c10] p-6 font-mono text-xs space-y-3">
                  <div>
                    <span className="text-waran-gold">CANDIDATE:</span> {formData.firstName} {formData.lastName} ({formData.email})
                  </div>
                  <div>
                    <span className="text-waran-gold">ROLE:</span> {role.title} ({role.discipline})
                  </div>
                  <div>
                    <span className="text-waran-gold">EXPERIENCE:</span> {formData.expCategory}
                  </div>
                  <div>
                    <span className="text-waran-gold">SKILLS:</span> {formData.selectedSkills.join(", ")}
                  </div>
                  <div>
                    <span className="text-waran-gold">RESUME:</span> {formData.resumeFileName || "Not uploaded"}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    required
                    type="checkbox"
                    id="declaration"
                    checked={formData.declarationConfirmed}
                    onChange={(e) => handleInputChange("declarationConfirmed", e.target.checked)}
                    className="h-4 w-4 accent-waran-gold"
                  />
                  <label htmlFor="declaration" className="text-xs text-waran-paper/80 cursor-pointer">
                    I confirm that the information provided in this application is accurate to the best of my knowledge.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.declarationConfirmed}
                  className="w-full border border-waran-gold bg-waran-gold py-4 font-mono text-xs tracking-widest text-black font-bold hover:bg-waran-gold/90 transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] disabled:opacity-50"
                >
                  SUBMIT APPLICATION TO WARAN INDUSTRIES →
                </button>
              </div>
            )}

            {/* STEP NAVIGATION BUTTONS */}
            <div className="flex justify-between border-t border-white/10 pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="border border-white/20 px-6 py-2.5 font-mono text-xs text-waran-paper/70 hover:border-waran-gold hover:text-waran-gold transition-colors"
                >
                  ← PREVIOUS STEP
                </button>
              ) : <div />}

              {step < totalSteps && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="border border-waran-gold bg-waran-gold/20 px-6 py-2.5 font-mono text-xs tracking-wider text-waran-gold hover:bg-waran-gold hover:text-black transition-all font-bold"
                >
                  NEXT STEP →
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
