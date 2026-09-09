"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function GoldenSocialBadges({ showLabels = false }: { showLabels?: boolean }) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(site.contact.email);
    setCopied("email");
    setTimeout(() => setCopied(null), 2000);
    window.location.href = `mailto:${site.contact.email}`;
  };

  return (
    <div className="flex items-center gap-4">
      {/* GOLDEN GMAIL "G" SYMBOL */}
      <a
        href={`mailto:${site.contact.email}`}
        onClick={handleCopyEmail}
        title="Email: waranindustriesai@gmail.com"
        className="group relative flex h-11 w-11 items-center justify-center rounded-sm border border-waran-gold/40 bg-[#0a0c10] transition-all duration-300 hover:border-waran-gold hover:bg-waran-gold/10 hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
      >
        <span className="font-display text-lg font-bold tracking-tighter text-waran-gold transition-transform duration-300 group-hover:scale-110">
          G
        </span>
        {/* Subtle hover tooltip */}
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xs bg-[#0b0d12] px-2 py-1 font-mono text-[10px] tracking-widest text-waran-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 border border-waran-gold/30">
          {copied === "email" ? "COPIED & OPENING..." : "GMAIL"}
        </span>
      </a>

      {/* GOLDEN LINKEDIN "IN" SYMBOL */}
      <a
        href={site.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        title="LinkedIn: waran-industries"
        className="group relative flex h-11 w-11 items-center justify-center rounded-sm border border-waran-gold/40 bg-[#0a0c10] transition-all duration-300 hover:border-waran-gold hover:bg-waran-gold/10 hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
      >
        <span className="font-display text-sm font-bold tracking-widest text-waran-gold transition-transform duration-300 group-hover:scale-110">
          IN
        </span>
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xs bg-[#0b0d12] px-2 py-1 font-mono text-[10px] tracking-widest text-waran-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 border border-waran-gold/30">
          LINKEDIN
        </span>
      </a>

      {showLabels ? (
        <span className="font-mono text-xs tracking-widest text-waran-paper/50 uppercase">
          DIRECT CHANNELS
        </span>
      ) : null}
    </div>
  );
}
