"use client";

import { useEffect, useRef } from "react";
import type { DivisionSlug } from "@/content/types";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function DivisionVisualSystem({ slug }: { slug: DivisionSlug }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let scrollY = window.scrollY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    let time = 0;

    // PRIMAL Neural Network Nodes
    const primalParticles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 2.5,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 3 + 1.5,
    }));

    // TECH Blueprint Mechanics & Robotic Arm
    const techGears = Array.from({ length: 10 }, (_, i) => ({
      x: (i % 2 === 0 ? width * 0.8 : width * 0.2) + (Math.random() - 0.5) * 120,
      y: 200 + i * 300,
      r: 110 + Math.random() * 90,
      speed: (i % 2 === 0 ? 1 : -1) * (0.05 + Math.random() * 0.04),
    }));

    // SCIENCES DNA Base Pairs & Bio Nodes
    const bioNodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 2.5,
      r: Math.random() * 4 + 2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // CAPITAL Quant Candlesticks & Ticks
    const quantCandles = Array.from({ length: 40 }, (_, i) => ({
      x: (width / 40) * i + 10,
      y: Math.random() * height * 2.5,
      h: 30 + Math.random() * 85,
      isGreen: Math.random() > 0.45,
    }));

    const quantTicks = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 2.5,
      speed: 1.5 + Math.random() * 2.5,
    }));

    // EXPLORATION Contours & Terrain
    const explorationLines = Array.from({ length: 20 }, (_, i) => ({
      y: 100 + i * 140,
      freq: 0.003 + Math.random() * 0.004,
      amp: 35 + Math.random() * 55,
    }));

    // SPACE Starfield & Planetary Horizon
    const spaceStars = Array.from({ length: 250 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 2.5,
      r: Math.random() * 2.2 + 0.6,
      alpha: Math.random() * 0.85 + 0.3,
      twinkleSpeed: 0.02 + Math.random() * 0.04,
    }));

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const targetOffX = (mouseX - width / 2) * 0.04;
      const targetOffY = (mouseY - height / 2) * 0.04;

      if (slug === "primal") {
        // PRIMAL: BRIGHT GOLDEN NEURAL LATTICE SYSTEM
        ctx.fillStyle = "rgba(197, 160, 89, 0.05)";
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = "rgba(197, 160, 89, 0.45)";
        ctx.lineWidth = 1.2;

        for (let i = 0; i < primalParticles.length; i++) {
          const p1 = primalParticles[i];
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height * 2.5) p1.vy *= -1;

          const screenY = p1.y - scrollY * 0.4 + targetOffY;

          if (screenY > -50 && screenY < height + 50) {
            ctx.beginPath();
            ctx.arc(p1.x + targetOffX, screenY, p1.r, 0, Math.PI * 2);
            ctx.fillStyle = "#E0C48A";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#C5A059";
            ctx.fill();

            for (let j = i + 1; j < primalParticles.length; j++) {
              const p2 = primalParticles[j];
              const p2ScreenY = p2.y - scrollY * 0.4 + targetOffY;
              const dist = Math.hypot(p1.x - p2.x, screenY - p2ScreenY);

              if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(p1.x + targetOffX, screenY);
                ctx.lineTo(p2.x + targetOffX, p2ScreenY);
                ctx.stroke();
              }
            }
          }
        }
      } else if (slug === "tech") {
        // TECH: BRIGHT ROBOTIC KINEMATICS & BLUEPRINT GEARS
        ctx.save();

        const cx = width * 0.75 + targetOffX;
        const cy = 380 - scrollY * 0.3 + targetOffY;

        const arm1Angle = Math.sin(time * 0.5) * 0.35 + 0.5;
        const j1x = cx - 130;
        const j1y = cy + 90;
        const j2x = j1x + Math.cos(arm1Angle) * 130;
        const j2y = j1y - Math.sin(arm1Angle) * 130;

        const arm2Angle = arm1Angle - Math.cos(time * 0.7) * 0.45;
        const j3x = j2x + Math.cos(arm2Angle) * 100;
        const j3y = j2y - Math.sin(arm2Angle) * 100;

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#9AA4B2";

        // Robotic Arm Linkages
        ctx.strokeStyle = "rgba(154, 164, 178, 0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(j1x, j1y);
        ctx.lineTo(j2x, j2y);
        ctx.lineTo(j3x, j3y);
        ctx.stroke();

        // Joint Pivots
        [
          { x: j1x, y: j1y, r: 10 },
          { x: j2x, y: j2y, r: 8 },
          { x: j3x, y: j3y, r: 6 },
        ].map((j) => {
          ctx.beginPath();
          ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
          ctx.fillStyle = "#C5A059";
          ctx.fill();
        });

        // Holographic Target Rings
        ctx.shadowColor = "#3A6EA5";
        ctx.strokeStyle = "rgba(58, 110, 165, 0.85)";
        ctx.lineWidth = 1.5;

        ctx.save();
        ctx.translate(j3x, j3y);
        ctx.rotate(time * 0.4);

        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([6, 10]);
        ctx.beginPath();
        ctx.arc(0, 0, 80, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Blueprint background gears
        techGears.forEach((gear) => {
          const screenY = gear.y - scrollY * 0.5 + targetOffY;
          if (screenY > -gear.r && screenY < height + gear.r) {
            ctx.save();
            ctx.translate(gear.x + targetOffX, screenY);
            ctx.rotate(time * gear.speed);

            ctx.beginPath();
            ctx.arc(0, 0, gear.r, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(154, 164, 178, 0.35)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
              ctx.beginPath();
              ctx.moveTo(Math.cos(a) * (gear.r - 15), Math.sin(a) * (gear.r - 15));
              ctx.lineTo(Math.cos(a) * gear.r, Math.sin(a) * gear.r);
              ctx.stroke();
            }
            ctx.restore();
          }
        });

        ctx.restore();
      } else if (slug === "sciences") {
        // SCIENCES: GLOWING HIGH-CONTRAST 3D DOUBLE-HELIX DNA
        ctx.save();

        const helixCenterX = width * 0.78 + targetOffX;
        const helixLength = height * 1.8;
        const startY = -200 - scrollY * 0.2;
        const numPairs = 45;

        for (let i = 0; i < numPairs; i++) {
          const t = i * 0.35 + time * 1.2;
          const y = startY + (i / numPairs) * helixLength;
          const radius = 75;

          const x1 = helixCenterX + Math.sin(t) * radius;
          const x2 = helixCenterX + Math.sin(t + Math.PI) * radius;
          const z1 = Math.cos(t);

          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = z1 > 0 ? "rgba(127, 165, 138, 0.7)" : "rgba(127, 165, 138, 0.3)";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc((x1 + x2) / 2, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#C5A059";
          ctx.fill();
        }

        ctx.shadowBlur = 18;
        ctx.shadowColor = "#7FA58A";
        ctx.strokeStyle = "#7FA58A";
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        for (let i = 0; i <= 90; i++) {
          const progress = i / 90;
          const y = startY + progress * helixLength;
          const t = (progress * numPairs) * 0.35 + time * 1.2;
          const x = helixCenterX + Math.sin(t) * 75;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.shadowColor = "#C5A059";
        ctx.strokeStyle = "#C5A059";
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        for (let i = 0; i <= 90; i++) {
          const progress = i / 90;
          const y = startY + progress * helixLength;
          const t = (progress * numPairs) * 0.35 + time * 1.2 + Math.PI;
          const x = helixCenterX + Math.sin(t) * 75;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.restore();

        bioNodes.forEach((node) => {
          const screenY = node.y - scrollY * 0.3 + targetOffY;
          if (screenY > 0 && screenY < height) {
            ctx.beginPath();
            ctx.arc(node.x + targetOffX, screenY, node.r + Math.sin(time * 2 + node.pulse), 0, Math.PI * 2);
            ctx.fillStyle = "rgba(127, 165, 138, 0.6)";
            ctx.fill();
          }
        });
      } else if (slug === "capital") {
        // CAPITAL: QUANT TRADING ENGINE WITH VIBRANT PRICE TREND WAVE & CANDLESTICKS
        ctx.save();

        ctx.strokeStyle = "rgba(197, 160, 89, 0.18)";
        ctx.lineWidth = 0.8;
        for (let y = 30; y < height; y += 30) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        ctx.shadowBlur = 20;
        ctx.shadowColor = "#C5A059";
        ctx.strokeStyle = "#C5A059";
        ctx.lineWidth = 3;

        ctx.beginPath();
        for (let x = 0; x < width; x += 12) {
          const y = height * 0.45 - scrollY * 0.15 + Math.sin(x * 0.015 + time * 2) * 55 + targetOffY;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        quantCandles.forEach((c) => {
          const screenY = c.y - scrollY * 0.35 + targetOffY;
          if (screenY > 0 && screenY < height) {
            ctx.shadowBlur = 0;
            ctx.fillStyle = c.isGreen ? "rgba(127, 165, 138, 0.85)" : "rgba(197, 160, 89, 0.85)";
            ctx.fillRect(c.x + targetOffX, screenY, 8, c.h);
          }
        });

        quantTicks.forEach((t) => {
          t.x += t.speed;
          if (t.x > width) t.x = 0;
          const screenY = t.y - scrollY * 0.3 + targetOffY;

          if (screenY > 0 && screenY < height) {
            ctx.fillStyle = "#E0C48A";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#E0C48A";
            ctx.fillRect(t.x, screenY, 16, 2);
          }
        });

        ctx.restore();
      } else if (slug === "exploration") {
        // EXPLORATION: Topographic Elevation Contours
        ctx.strokeStyle = "rgba(215, 163, 90, 0.45)";
        ctx.lineWidth = 2;

        explorationLines.forEach((line) => {
          const screenY = line.y - scrollY * 0.35 + targetOffY;
          if (screenY > -50 && screenY < height + 50) {
            ctx.beginPath();
            for (let x = 0; x < width; x += 18) {
              const y = screenY + Math.sin(x * line.freq + time) * line.amp;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
        });
      } else if (slug === "space") {
        // SPACE: COSMIC NEBULA, ORBITAL RINGS & GLOWING PLANETARY RIM
        ctx.save();

        const spaceGrad = ctx.createRadialGradient(width * 0.5, height * 0.75, 50, width * 0.5, height * 0.75, width * 0.9);
        spaceGrad.addColorStop(0, "rgba(58, 110, 165, 0.4)");
        spaceGrad.addColorStop(0.5, "rgba(143, 183, 214, 0.18)");
        spaceGrad.addColorStop(1, "rgba(5, 5, 8, 0)");
        ctx.fillStyle = spaceGrad;
        ctx.fillRect(0, 0, width, height);

        spaceStars.forEach((s) => {
          const screenY = (s.y - scrollY * 0.2) % height;
          s.alpha += Math.sin(time * s.twinkleSpeed * 10) * 0.01;
          ctx.beginPath();
          ctx.arc(s.x + targetOffX, screenY < 0 ? screenY + height : screenY, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.3, Math.min(1, s.alpha))})`;
          ctx.fill();
        });

        ctx.save();
        ctx.translate(width * 0.5 + targetOffX, 380 - scrollY * 0.15 + targetOffY);
        ctx.rotate(-Math.PI / 6);

        ctx.strokeStyle = "rgba(143, 183, 214, 0.55)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.48, height * 0.32, 0, 0, Math.PI * 2);
        ctx.stroke();

        const probeAngle = time * 0.6;
        const probeX = Math.cos(probeAngle) * (width * 0.48);
        const probeY = Math.sin(probeAngle) * (height * 0.32);

        ctx.shadowBlur = 20;
        ctx.shadowColor = "#8FB7D6";
        ctx.fillStyle = "#E0C48A";
        ctx.beginPath();
        ctx.arc(probeX, probeY, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        const planetY = height * 0.85 - scrollY * 0.1 + targetOffY;
        ctx.shadowBlur = 40;
        ctx.shadowColor = "#8FB7D6";
        ctx.beginPath();
        ctx.arc(width / 2, planetY + 800, 1100, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(143, 183, 214, 0.85)";
        ctx.lineWidth = 3.5;
        ctx.stroke();
        ctx.fillStyle = "rgba(13, 27, 42, 0.3)";
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slug, prefersReduced]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#060709]">
      <canvas ref={canvasRef} className="h-full w-full opacity-100 transition-opacity duration-1000" />
    </div>
  );
}
