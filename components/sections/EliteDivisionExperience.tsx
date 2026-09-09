"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { divisions } from "@/content/divisions";
import { illuminationCopy, relatedByDivision } from "@/content/flywheel";
import { StatusChip } from "@/components/ui/StatusChip";
import { cn } from "@/lib/cn";
import { useWaranStore } from "@/lib/store";
import type { DivisionSlug } from "@/content/types";

// High-fidelity procedural canvas for division visual worlds
function ProceduralCanvas({ slug, hovered, active }: { slug: DivisionSlug; hovered: boolean; active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    // PRIMAL particles
    const primalParticles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    // SCIENCES Molecular bio-nodes
    const bioNodes = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // CAPITAL Quant Trading Candles & Order Book Streams
    const quantCandles = Array.from({ length: 22 }, (_, i) => ({
      x: i * 22 + 15,
      baseY: height * 0.55,
      height: 20 + Math.random() * 65,
      wickTop: 8 + Math.random() * 20,
      wickBottom: 8 + Math.random() * 20,
      isGreen: Math.random() > 0.4,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const quantTicks = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.8 + Math.random() * 1.5,
      alpha: Math.random(),
    }));

    // SPACE Cosmic Dust Particles & Satellite Orbits
    const spaceStars = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: 0.02 + Math.random() * 0.03,
    }));

    const render = () => {
      time += hovered ? 0.025 : 0.012;
      ctx.clearRect(0, 0, width, height);

      if (slug === "primal") {
        // PRIMAL: Neural Grid & Data Lattice
        ctx.fillStyle = "rgba(197, 160, 89, 0.03)";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = hovered ? "rgba(197, 160, 89, 0.38)" : "rgba(197, 160, 89, 0.16)";
        ctx.lineWidth = 1;
        for (let i = 0; i < primalParticles.length; i++) {
          const p1 = primalParticles[i];
          p1.x += p1.vx * (hovered ? 1.8 : 1);
          p1.y += p1.vy * (hovered ? 1.8 : 1);

          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;

          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
          ctx.fillStyle = hovered ? "#E0C48A" : "#C5A059";
          ctx.fill();

          for (let j = i + 1; j < primalParticles.length; j++) {
            const p2 = primalParticles[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      } else if (slug === "tech") {
        // TECH: Robotic Arm Schematics & Holographic Target Mapping
        const cx = width * 0.7;
        const cy = height * 0.5;

        const arm1Angle = Math.sin(time * 0.5) * 0.3 + 0.5;
        const j1x = cx - 90;
        const j1y = cy + 60;
        const j2x = j1x + Math.cos(arm1Angle) * 90;
        const j2y = j1y - Math.sin(arm1Angle) * 90;

        const arm2Angle = arm1Angle - Math.cos(time * 0.7) * 0.4;
        const j3x = j2x + Math.cos(arm2Angle) * 70;
        const j3y = j2y - Math.sin(arm2Angle) * 70;

        ctx.strokeStyle = hovered ? "rgba(154, 164, 178, 0.7)" : "rgba(154, 164, 178, 0.35)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(j1x, j1y);
        ctx.lineTo(j2x, j2y);
        ctx.lineTo(j3x, j3y);
        ctx.stroke();

        [
          { x: j1x, y: j1y, r: 8 },
          { x: j2x, y: j2y, r: 6 },
          { x: j3x, y: j3y, r: 4 },
        ].map((j) => {
          ctx.beginPath();
          ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
          ctx.fillStyle = "#C5A059";
          ctx.fill();
        });

        ctx.strokeStyle = hovered ? "rgba(58, 110, 165, 0.6)" : "rgba(58, 110, 165, 0.25)";
        ctx.lineWidth = 1;

        ctx.save();
        ctx.translate(j3x, j3y);
        ctx.rotate(time * 0.4);

        ctx.beginPath();
        ctx.arc(0, 0, 35, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(0, 0, 55, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        ctx.strokeStyle = "rgba(197, 160, 89, 0.3)";
        ctx.beginPath();
        ctx.moveTo(j3x - 60, j3y + Math.sin(time * 2) * 40);
        ctx.lineTo(j3x + 60, j3y + Math.sin(time * 2) * 40);
        ctx.stroke();
      } else if (slug === "sciences") {
        // SCIENCES: GLOWING DNA DOUBLE HELIX
        ctx.save();

        const helixCenterX = width * 0.75;
        const helixLength = height * 0.9;
        const startY = (height - helixLength) / 2;
        const numPairs = 24;

        for (let i = 0; i < numPairs; i++) {
          const t = i * 0.35 + time * 1.2;
          const y = startY + (i / numPairs) * helixLength;
          const radius = 55;

          const x1 = helixCenterX + Math.sin(t) * radius;
          const x2 = helixCenterX + Math.sin(t + Math.PI) * radius;
          const z1 = Math.cos(t);

          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = z1 > 0 ? "rgba(127, 165, 138, 0.45)" : "rgba(127, 165, 138, 0.15)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc((x1 + x2) / 2, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#C5A059";
          ctx.fill();
        }

        ctx.shadowBlur = hovered ? 12 : 6;
        ctx.shadowColor = "#7FA58A";

        ctx.strokeStyle = "#7FA58A";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const progress = i / 60;
          const y = startY + progress * helixLength;
          const t = (progress * numPairs) * 0.35 + time * 1.2;
          const x = helixCenterX + Math.sin(t) * 55;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.shadowColor = "#C5A059";
        ctx.strokeStyle = "#C5A059";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const progress = i / 60;
          const y = startY + progress * helixLength;
          const t = (progress * numPairs) * 0.35 + time * 1.2 + Math.PI;
          const x = helixCenterX + Math.sin(t) * 55;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.restore();

        bioNodes.forEach((node) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r + Math.sin(time * 2 + node.pulse), 0, Math.PI * 2);
          ctx.fillStyle = hovered ? "rgba(127, 165, 138, 0.7)" : "rgba(127, 165, 138, 0.3)";
          ctx.fill();
        });
      } else if (slug === "capital") {
        // CAPITAL: QUANT TRADING REAL-TIME ENGINE WITH ORDER BOOK PULSES & GLOW
        ctx.save();

        // Background Order Execution Grid Lines
        ctx.strokeStyle = "rgba(197, 160, 89, 0.1)";
        ctx.lineWidth = 0.5;
        for (let y = 30; y < height; y += 25) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Live Algorithmic Trend Line with Glow
        ctx.shadowBlur = hovered ? 15 : 8;
        ctx.shadowColor = "#C5A059";
        ctx.strokeStyle = "#C5A059";
        ctx.lineWidth = 2;

        ctx.beginPath();
        for (let x = 0; x < width; x += 12) {
          const y = height * 0.5 + Math.sin(x * 0.02 + time * 2) * 28 + Math.cos(x * 0.04 - time) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Dynamic High-Frequency Trading Candlesticks
        quantCandles.forEach((c) => {
          const pulse = Math.sin(time * 3 + c.pulsePhase) * 6;
          const candleH = c.height + pulse;
          const topY = c.baseY - candleH / 2;
          const bottomY = c.baseY + candleH / 2;

          // Wick
          ctx.shadowBlur = 0;
          ctx.strokeStyle = c.isGreen ? "rgba(127, 165, 138, 0.6)" : "rgba(197, 160, 89, 0.6)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(c.x + 4, topY - c.wickTop);
          ctx.lineTo(c.x + 4, bottomY + c.wickBottom);
          ctx.stroke();

          // Body with Execution Glow
          ctx.fillStyle = c.isGreen
            ? hovered ? "rgba(127, 165, 138, 0.85)" : "rgba(127, 165, 138, 0.45)"
            : hovered ? "rgba(197, 160, 89, 0.85)" : "rgba(197, 160, 89, 0.45)";
          ctx.fillRect(c.x, topY, 8, candleH);
        });

        // Fast-moving Execution Ticks
        quantTicks.forEach((t) => {
          t.x += t.speed * (hovered ? 2 : 1);
          if (t.x > width) t.x = 0;

          ctx.fillStyle = "#E0C48A";
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#E0C48A";
          ctx.fillRect(t.x, t.y, 12, 1.5);
        });

        ctx.restore();
      } else if (slug === "exploration") {
        // EXPLORATION: Topographic Terrain Wave Lines
        ctx.strokeStyle = hovered ? "rgba(215, 163, 90, 0.4)" : "rgba(215, 163, 90, 0.18)";
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          const baseOffset = i * 30;
          for (let x = 0; x < width; x += 15) {
            const y = height - 50 - baseOffset + Math.sin(x * 0.01 + i + time * 0.5) * 20;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (slug === "space") {
        // SPACE: OTHERWORLDLY COSMIC NEBULA, ORBITAL RINGS & PLANETARY ATMOSPHERE GLOW
        ctx.save();

        // Atmospheric Cosmic Glow Field
        const spaceGrad = ctx.createRadialGradient(width * 0.5, height * 0.8, 40, width * 0.5, height * 0.8, width * 0.7);
        spaceGrad.addColorStop(0, "rgba(58, 110, 165, 0.18)");
        spaceGrad.addColorStop(0.5, "rgba(143, 183, 214, 0.06)");
        spaceGrad.addColorStop(1, "rgba(5, 5, 8, 0)");
        ctx.fillStyle = spaceGrad;
        ctx.fillRect(0, 0, width, height);

        // Twinkling Starfield
        spaceStars.forEach((s) => {
          s.alpha += Math.sin(time * s.twinkleSpeed * 10) * 0.01;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, Math.min(1, s.alpha))})`;
          ctx.fill();
        });

        // Elliptical Orbital Vector Pathways
        ctx.strokeStyle = hovered ? "rgba(143, 183, 214, 0.45)" : "rgba(143, 183, 214, 0.2)";
        ctx.lineWidth = 1.2;

        ctx.save();
        ctx.translate(width * 0.5, height * 0.65);
        ctx.rotate(-Math.PI / 6);

        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.45, height * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([6, 12]);
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.55, height * 0.38, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbiting Probe / Autonomous Craft Node
        const probeAngle = time * 0.6;
        const probeX = Math.cos(probeAngle) * (width * 0.45);
        const probeY = Math.sin(probeAngle) * (height * 0.3);

        ctx.shadowBlur = 12;
        ctx.shadowColor = "#8FB7D6";
        ctx.fillStyle = "#E0C48A";
        ctx.beginPath();
        ctx.arc(probeX, probeY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Massive Otherworldly Horizon Rim
        ctx.shadowBlur = hovered ? 25 : 12;
        ctx.shadowColor = "#8FB7D6";
        ctx.strokeStyle = hovered ? "rgba(143, 183, 214, 0.85)" : "rgba(143, 183, 214, 0.4)";
        ctx.lineWidth = 2.5;

        ctx.beginPath();
        ctx.arc(width / 2, height + 420, 520, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgba(10, 18, 30, 0.4)";
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [slug, hovered, active]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-80 transition-opacity duration-700 group-hover:opacity-100" />;
}

export function EliteDivisionExperience() {
  const hovered = useWaranStore((s) => s.hoveredDivision);
  const setHovered = useWaranStore((s) => s.setHoveredDivision);
  const setFlywheel = useWaranStore((s) => s.setFlywheelFocus);

  const active = hovered ?? "primal";
  const related = relatedByDivision[active];

  return (
    <section id="divisions" className="relative z-30 overflow-hidden border-t border-white/10 bg-[#060709] px-6 py-16 md:px-12">
      {/* Background Orbital Pathway Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="30%" x2="90%" y2="70%" stroke="#C5A059" strokeWidth="1" strokeDasharray="8 12" />
          <line x1="90%" y1="30%" x2="10%" y2="70%" stroke="#3A6EA5" strokeWidth="1" strokeDasharray="6 10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="micro text-waran-gold">WARAN ARCHITECTURE</p>
            <h2 className="mt-2 font-display text-4xl tracking-[-0.06em] text-waran-paper md:text-6xl">
              One System. Six Dimensions.
            </h2>
          </div>
          <p className="measure text-xs leading-6 text-waran-paper/60 md:text-right">
            Discover all 6 interconnected divisions across software, robotics, biology, capital, earth exploration and space.
          </p>
        </div>

        {/* HIGH-DENSITY COMPACT 2-ROW X 3-COLUMN COMPOSITION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {divisions.map((division) => {
            const isHovered = hovered === division.slug;
            const isRelated = related.includes(division.slug);
            const isLit = !hovered || isHovered || isRelated;

            const colSpan =
              division.slug === "primal"
                ? "md:col-span-7 min-h-[250px]"
                : division.slug === "tech"
                ? "md:col-span-5 min-h-[250px]"
                : division.slug === "sciences"
                ? "md:col-span-5 min-h-[260px]"
                : division.slug === "capital"
                ? "md:col-span-7 min-h-[260px]"
                : division.slug === "exploration"
                ? "md:col-span-6 min-h-[260px]"
                : "md:col-span-6 min-h-[260px]";

            return (
              <Link
                key={division.slug}
                href={`/divisions/${division.slug}`}
                onMouseEnter={() => {
                  setHovered(division.slug);
                  setFlywheel(division.slug);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setFlywheel(null);
                }}
                onFocus={() => {
                  setHovered(division.slug);
                  setFlywheel(division.slug);
                }}
                onBlur={() => {
                  setHovered(null);
                  setFlywheel(null);
                }}
                className={cn(
                  "group relative overflow-hidden rounded-sm border border-white/10 bg-[#0a0c10]/75 p-6 transition-all duration-500 backdrop-blur-md flex flex-col justify-between",
                  colSpan,
                  isLit ? "opacity-100" : "opacity-35 scale-[0.99]",
                  isHovered && "border-waran-gold/80 bg-[#0f1218] shadow-xl -translate-y-1 z-20",
                )}
              >
                {/* Procedural WebGL/Canvas Animation Layer */}
                <ProceduralCanvas slug={division.slug} hovered={isHovered} active={isLit} />

                {/* Content Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-waran-paper/50">{division.code}</span>
                  <StatusChip status={division.status} label={division.statusLabel} />
                </div>

                {/* Content Body */}
                <div className="relative z-10 mt-8">
                  <p className="micro text-waran-gold/90">{division.kicker}</p>
                  <h3 className="mt-1 font-display text-3xl tracking-[-0.04em] text-waran-paper md:text-4xl">
                    {division.shortName}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-waran-paper/75 line-clamp-2">
                    {division.headline}
                  </p>
                </div>

                {/* Hover CTA Indicator */}
                <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] tracking-[0.2em] text-waran-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>DISCOVER</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* System Logic Banner */}
        <div className="mt-8 rounded-sm border border-white/10 bg-[#0b0d12]/90 p-4 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="micro text-waran-gold flex-shrink-0">SYSTEM CONNECTION</p>
          <p className="text-xs text-waran-paper/80">{illuminationCopy[active]}</p>
        </div>
      </div>
    </section>
  );
}
