"use client";

import { FormEvent, useMemo, useState } from "react";

const interests = [
  { value: "primal", label: "WARAN PRIMAL / build" },
  { value: "tech", label: "WARAN TECH / research" },
  { value: "sciences", label: "WARAN SCIENCES / research" },
  { value: "capital", label: "WARAN CAPITAL" },
  { value: "exploration", label: "WARAN EXPLORATION" },
  { value: "space", label: "WARAN SPACE" },
  { value: "partner", label: "Partnership" },
];

export function ContactForm({ defaultInterest }: { defaultInterest: string }) {
  const initial = useMemo(
    () => (interests.some((i) => i.value === defaultInterest) ? defaultInterest : "primal"),
    [defaultInterest],
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to send");
      setStatus("sent");
      setMessage("Received. A human at WARAN will read this.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <label className="block">
        <span className="micro text-waran-paper/45">Name</span>
        <input
          required
          name="name"
          autoComplete="name"
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-waran-gold"
        />
      </label>
      <label className="block">
        <span className="micro text-waran-paper/45">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-waran-gold"
        />
      </label>
      <label className="block">
        <span className="micro text-waran-paper/45">Organization</span>
        <input
          name="organization"
          autoComplete="organization"
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-waran-gold"
        />
      </label>
      <label className="block">
        <span className="micro text-waran-paper/45">Interest</span>
        <select
          name="interest"
          defaultValue={initial}
          className="mt-2 w-full border border-white/15 bg-[#0b0c0e] px-4 py-3 text-sm outline-none focus:border-waran-gold"
        >
          {interests.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="micro text-waran-paper/45">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          minLength={20}
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-waran-gold"
        />
      </label>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-waran-gold px-6 py-3 text-[11px] tracking-[0.28em] text-waran-gold hover:bg-waran-gold hover:text-waran-ink disabled:opacity-50"
      >
        {status === "sending" ? "Sending" : "Send to WARAN"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-300" : "text-waran-goldSoft"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
