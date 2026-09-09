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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="flex items-start justify-between px-5 py-5 md:px-8">
        <Link
          href="/"
          className="pointer-events-auto group flex items-center gap-4 text-waran-paper"
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
          <WaranMark gold className="h-12 w-12 transition-transform duration-500 group-hover:scale-105" />
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.2em] font-semibold">WARAN</span>
            <span className="micro text-[10px] text-waran-gold/90">
              {pathname === "/" ? `WARAN / ${chapter}` : `WARAN / ${chapter}`}
            </span>
          </span>
        </Link>

        <nav className="pointer-events-auto hidden items-center gap-7 text-[11px] tracking-[0.22em] text-waran-paper/70 md:flex">
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
              className={cn("transition-colors hover:text-waran-gold", pathname === item.href && "text-waran-gold")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="pointer-events-auto micro text-[10px] text-waran-paper md:hidden"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {pathname === "/" && current ? (
        <div className="pointer-events-none px-5 md:px-8">
          <div className="h-px w-full bg-white/10">
            <div
              className="h-px bg-waran-gold transition-[width] duration-150"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <p className="mt-2 hidden font-mono text-[10px] tracking-[0.32em] text-waran-paper/45 md:block">
            {current.chapter}
          </p>
        </div>
      ) : null}

      {menuOpen ? (
        <div className="pointer-events-auto mx-5 mt-2 border border-white/10 bg-[#0b0c0e]/95 p-6 backdrop-blur md:hidden">
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
