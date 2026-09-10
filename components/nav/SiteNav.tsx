"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WaranMark } from "@/components/brand/WaranMark";
import { site } from "@/content/site";
import { scenes } from "@/content/scenes";
import { cn } from "@/lib/cn";
import { useWaranStore } from "@/lib/store";

const frontierLabel: Record<string, string> = {
  signal: "WARAN",
  question: "WARAN",
  primal: "PRIMAL",
  tech: "TECH",
  sciences: "SCIENCES",
  capital: "CAPITAL",
  exploration: "EXPLORATION",
  machine: "EXPLORATION",
  space: "SPACE",
  system: "SYSTEM",
  future: "FUTURE",
  cta: "ENTER",
};

export function SiteNav() {
  const pathname = usePathname();
  const sceneId = useWaranStore((s) => s.sceneId);
  const progress = useWaranStore((s) => s.progress);
  const menuOpen = useWaranStore((s) => s.menuOpen);
  const setMenuOpen = useWaranStore((s) => s.setMenuOpen);
  const setCursorMode = useWaranStore((s) => s.setCursorMode);
  const setHoveredNavSection = useWaranStore((s) => s.setHoveredNavSection);
  const markSectionExplored = useWaranStore((s) => s.markSectionExplored);
  const current = scenes.find((s) => s.id === sceneId);
  const chapter = pathname === "/" ? frontierLabel[sceneId] : pathname.split("/").filter(Boolean).at(-1)?.toUpperCase();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#06070a]/90 via-[#06070a]/50 to-transparent pb-4">
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="pointer-events-auto group flex items-center gap-3 text-waran-paper"
          onMouseEnter={() => {
            setCursorMode("interactive");
            setHoveredNavSection("SIGNAL");
          }}
          onMouseLeave={() => {
            setCursorMode("default");
            setHoveredNavSection(null);
          }}
          onClick={() => {
            setMenuOpen(false);
            markSectionExplored("SIGNAL");
          }}
        >
          <WaranMark gold className="h-10 w-10 transition-transform duration-500 group-hover:scale-105" />
          <span className="leading-none">
            <span className="block font-display text-lg tracking-[0.2em] font-bold">WARAN</span>
            <span className="micro text-[9px] text-waran-gold/90">
              {pathname === "/" ? `WARAN / ${chapter}` : `WARAN / ${chapter}`}
            </span>
          </span>
        </Link>

        <nav className="pointer-events-auto hidden items-center gap-6 rounded-full border border-white/10 bg-[#090b10]/80 px-6 py-2 backdrop-blur-md text-[11px] tracking-[0.22em] text-waran-paper/70 md:flex shadow-lg">
          {site.navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => {
                setCursorMode("node");
                setHoveredNavSection(item.label.toUpperCase());
              }}
              onMouseLeave={() => {
                setCursorMode("default");
                setHoveredNavSection(null);
              }}
              onClick={(e) => {
                markSectionExplored(item.label.toUpperCase());
                if (item.href.includes("#")) {
                  const targetId = item.href.split("#")[1];
                  const el = document.getElementById(targetId);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className={cn("transition-colors hover:text-waran-gold", pathname === item.href && "text-waran-gold font-semibold")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="pointer-events-auto micro text-[10px] text-waran-paper md:hidden border border-white/10 bg-[#090b10]/90 px-3 py-1.5 rounded-sm"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {pathname === "/" && current ? (
        <div className="pointer-events-none px-5 md:px-8">
          <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-waran-gold transition-[width] duration-150 shadow-[0_0_8px_#C5A059]"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      ) : null}

      {menuOpen ? (
        <div className="pointer-events-auto mx-5 mt-2 border border-white/10 bg-[#0b0c0e]/95 p-6 backdrop-blur md:hidden rounded-lg shadow-2xl">
          <div className="flex flex-col gap-4 text-sm tracking-[0.2em]">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
