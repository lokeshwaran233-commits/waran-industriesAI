"use client";

import { useEffect, useState } from "react";
import { useWaranStore } from "@/lib/store";

export function SystemCursor() {
  const cursorMode = useWaranStore((s) => s.cursorMode);
  const reducedMotion = useWaranStore((s) => s.reducedMotion);

  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (!mounted || isTouchDevice || reducedMotion || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    >
      {cursorMode === "default" && (
        <div className="h-2 w-2 rounded-full bg-waran-gold/90 shadow-[0_0_8px_#C5A059]" />
      )}

      {cursorMode === "interactive" && (
        <div className="flex items-center gap-1 rounded bg-[#090c12]/90 px-1.5 py-0.5 font-mono text-[10px] text-waran-gold border border-waran-gold/40 shadow-[0_0_12px_rgba(197,160,89,0.25)] backdrop-blur-md">
          <span>[</span>
          <span className="font-bold">+</span>
          <span>]</span>
        </div>
      )}

      {cursorMode === "node" && (
        <div className="flex items-center gap-1 rounded bg-[#090c12]/90 px-1.5 py-0.5 font-mono text-[10px] text-waran-gold border border-waran-gold/50 shadow-[0_0_15px_rgba(197,160,89,0.35)] backdrop-blur-md">
          <span>[</span>
          <span className="h-1.5 w-1.5 rounded-full bg-waran-gold animate-ping" />
          <span>◉</span>
          <span>]</span>
        </div>
      )}
    </div>
  );
}
