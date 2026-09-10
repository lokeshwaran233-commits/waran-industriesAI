"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { canUseWebGL, detectQuality } from "@/lib/detect";
import { useWaranStore } from "@/lib/store";
import { CameraRig } from "./CameraRig";
import { WorldLayer } from "./WorldLayer";

function Lights() {
  return (
    <>
      <color attach="background" args={["#0B0C0E"]} />
      <fog attach="fog" args={["#0B0C0E", 8, 28]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 4]} intensity={1.35} color="#f3efe6" />
      <directionalLight position={[-6, 2, -4]} intensity={0.4} color="#3A6EA5" />
      <pointLight position={[0, 1.4, 2]} intensity={1.1} color="#C5A059" distance={12} />
    </>
  );
}

export function ExperienceCanvas() {
  const reducedMotion = useWaranStore((s) => s.reducedMotion);
  const quality = useWaranStore((s) => s.quality);
  const webgl = useWaranStore((s) => s.webgl);
  const progress = useWaranStore((s) => s.progress);
  const setQuality = useWaranStore((s) => s.setQuality);
  const setWebgl = useWaranStore((s) => s.setWebgl);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setQuality(detectQuality());
    setWebgl(canUseWebGL());
    setReady(true);
  }, [setQuality, setWebgl]);

  if (!ready || !webgl || reducedMotion) return null;

  const dpr: [number, number] = quality === "cinematic" ? [1, 1.75] : quality === "balanced" ? [1, 1.35] : [1, 1];

  let opacity = 1;
  let pointerEvents: "auto" | "none" = "auto";
  if (progress > 0.88) {
    opacity = Math.max(0, 1 - (progress - 0.88) / 0.08);
    if (progress > 0.95) pointerEvents = "none";
  }

  return (
    <div
      className="canvas-container motion-safe-only fixed inset-0 z-0 transition-opacity duration-300"
      style={{ opacity, pointerEvents }}
    >
      <Canvas
        dpr={dpr}
        gl={{ antialias: quality !== "essential", powerPreference: "high-performance", alpha: false }}
        camera={{ position: [0, 1.2, 8.5], fov: 38, near: 0.1, far: 80 }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Lights />
          <CameraRig />
          <WorldLayer />
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
    </div>
  );
}
