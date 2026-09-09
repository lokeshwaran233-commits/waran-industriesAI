"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HelixFallback() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 480);
    let height = (canvas.height = 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 480;
      height = canvas.height = 400;
    };

    window.addEventListener("resize", handleResize);

    // Atomic Electron Simulation Data
    const numElectrons = 6;
    const orbits = [
      { radiusX: 160, radiusY: 55, tilt: Math.PI / 4, speed: 0.02, color: "#C5A059" },
      { radiusX: 175, radiusY: 60, tilt: -Math.PI / 4, speed: 0.025, color: "#E0C48A" },
      { radiusX: 190, radiusY: 65, tilt: Math.PI / 12, speed: 0.018, color: "#F4F1EA" },
    ];

    const electrons = Array.from({ length: numElectrons }, (_, i) => ({
      orbitIndex: i % orbits.length,
      angle: (i * Math.PI * 2) / numElectrons,
      size: 4 + (i % 3),
    }));

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      t += 0.015;

      // Draw Orbits & Revolving Electrons
      orbits.forEach((orbit, orbitIdx) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orbit.tilt);

        // Draw Orbital Path Ring
        ctx.beginPath();
        ctx.ellipse(0, 0, orbit.radiusX, orbit.radiusY, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(197, 160, 89, 0.25)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([6, 8]);
        ctx.stroke();

        // Draw Energy Node Pulses along orbit
        ctx.setLineDash([]);
        ctx.restore();

        // Draw Electrons on this orbit
        electrons
          .filter((e) => e.orbitIndex === orbitIdx)
          .forEach((electron) => {
            electron.angle += orbit.speed;

            // 3D Rotated Elliptical Coordinates
            const cosT = Math.cos(orbit.tilt);
            const sinT = Math.sin(orbit.tilt);

            const x0 = orbit.radiusX * Math.cos(electron.angle);
            const y0 = orbit.radiusY * Math.sin(electron.angle);

            const x = centerX + (x0 * cosT - y0 * sinT);
            const y = centerY + (x0 * sinT + y0 * cosT);

            // Depth calculation for 3D illusion
            const depth = Math.sin(electron.angle);
            const scale = 0.7 + (depth + 1) * 0.3; // 0.7 to 1.3
            const alpha = 0.4 + (depth + 1) * 0.3;  // 0.4 to 1.0

            // Electron Glow Trail
            const trailGradient = ctx.createRadialGradient(x, y, 0, x, y, electron.size * 4 * scale);
            trailGradient.addColorStop(0, orbit.color);
            trailGradient.addColorStop(0.4, "rgba(197, 160, 89, 0.4)");
            trailGradient.addColorStop(1, "rgba(197, 160, 89, 0)");

            ctx.beginPath();
            ctx.arc(x, y, electron.size * 4 * scale, 0, Math.PI * 2);
            ctx.fillStyle = trailGradient;
            ctx.globalAlpha = alpha;
            ctx.fill();

            // Bright Core Electron Sphere
            ctx.beginPath();
            ctx.arc(x, y, electron.size * scale, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFFFF";
            ctx.globalAlpha = alpha;
            ctx.shadowColor = "#C5A059";
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1.0;
          });
      });

      // Central Energy Field Particles
      for (let i = 0; i < 8; i++) {
        const pAngle = t * 2 + (i * Math.PI) / 4;
        const pDist = 80 + Math.sin(t * 3 + i) * 15;
        const px = centerX + Math.cos(pAngle) * pDist;
        const py = centerY + Math.sin(pAngle) * pDist;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(197, 160, 89, 0.6)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-8">
      {/* ATMOSPHERIC BACKGROUND LIGHT PULSE */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="h-80 w-80 rounded-full bg-waran-gold/15 blur-3xl animate-pulse" />
      </div>

      {/* 3D ATOMIC SIMULATION CONTAINER */}
      <div className="relative flex items-center justify-center w-full max-w-xl h-[400px]">
        {/* CANVAS PROCEDURAL ELECTRON ORBIT RENDERER */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 pointer-events-none"
        />

        {/* CENTRAL NUCLEUS - CANONICAL GLOWING WARAN LOGO */}
        <div className="relative z-20 flex items-center justify-center p-8 rounded-full border border-waran-gold/40 bg-[#07090e]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(197,160,89,0.35)] group transition-transform duration-500 hover:scale-110 cursor-pointer">
          {/* INNER NUCLEUS BREATHING GLOW RING */}
          <div className="absolute -inset-2 rounded-full border border-waran-gold/30 animate-[spin_30s_linear_infinite]" />
          <div className="absolute -inset-5 rounded-full border border-dashed border-waran-gold/20 animate-[spin_50s_linear_infinite_reverse]" />

          {/* OFFICIAL GLOWING CANONICAL WARAN LOGO */}
          <div className="relative h-32 w-32 md:h-44 md:w-44 transition-all duration-500">
            <Image
              src="/brand/logo.png"
              alt="WARAN Industries Atomic Nucleus Logo"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(197,160,89,0.85)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* TELEMETRY CAPTION */}
      <div className="mt-4 flex items-center gap-3 font-display text-xs text-waran-gold font-bold tracking-[0.25em]">
        <span className="h-2 w-2 rounded-full bg-waran-gold animate-ping" />
        <span className="uppercase">WARAN INDUSTRIES</span>
      </div>
    </div>
  );
}
