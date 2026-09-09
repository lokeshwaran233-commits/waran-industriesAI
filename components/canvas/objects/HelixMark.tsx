"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useWaranStore } from "@/lib/store";

// NEUTRON STAR & SOLAR FLARE NUCLEUS COMPONENT
function NeutronSolarCore({ activePulse, onClick }: { activePulse: boolean; onClick: (e: any) => void }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);
  const flareGroupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // 1. Generate Solar Flare Arcs / Magnetic Plasma Prominences
  const flareCurves = useMemo(() => {
    const curves: THREE.CatmullRomCurve3[] = [];
    const count = 6;
    for (let i = 0; i < count; i++) {
      const angle = (i * Math.PI * 2) / count;
      const height = 0.45 + (i % 3) * 0.12;
      const spread = 0.22;

      const p0 = new THREE.Vector3(Math.cos(angle) * 0.15, Math.sin(angle) * 0.15, 0);
      const p1 = new THREE.Vector3(Math.cos(angle) * height, Math.sin(angle) * height, (i % 2 === 0 ? 1 : -1) * spread);
      const p2 = new THREE.Vector3(Math.cos(angle + 0.4) * 0.15, Math.sin(angle + 0.4) * 0.15, 0);

      curves.push(new THREE.CatmullRomCurve3([p0, p1, p2]));
    }
    return curves;
  }, []);

  const flareTubes = useMemo(() => {
    return flareCurves.map((curve) => new THREE.TubeGeometry(curve, 32, 0.012, 8, false));
  }, [flareCurves]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Neutron Core Pulsar Rotation & Scale Breathing
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5;
      const pulseScale = 1 + Math.sin(time * 3) * (activePulse ? 0.35 : 0.06);
      coreRef.current.scale.setScalar(pulseScale);
    }

    // 2. Solar Corona Atmospheric Volume Breathing
    if (coronaRef.current) {
      coronaRef.current.rotation.z -= delta * 0.3;
      const coronaScale = 1 + Math.sin(time * 2.2 + 1) * (activePulse ? 0.4 : 0.08);
      coronaRef.current.scale.setScalar(coronaScale);
    }

    // 3. Counter-rotating Solar Flare Eruptions
    if (flareGroupRef.current) {
      flareGroupRef.current.rotation.z += delta * 0.4;
      flareGroupRef.current.rotation.x = Math.sin(time * 1.5) * 0.2;
    }

    // 4. Intense Incandescent Light Intensity
    if (lightRef.current) {
      lightRef.current.intensity = activePulse
        ? 6.0
        : 2.8 + Math.sin(time * 3.5) * 0.6;
    }
  });

  return (
    <group onClick={onClick}>
      {/* INTENSE NEUTRON LIGHT SOURCE */}
      <pointLight ref={lightRef} color="#FFD700" intensity={2.8} distance={10} />
      <pointLight color="#FFF" intensity={2.0} distance={4} />

      {/* 1. CENTRAL INCANDESCENT NEUTRON CORE */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#FFF7E6"
          metalness={0.1}
          roughness={0.05}
          emissive="#FFC857"
          emissiveIntensity={activePulse ? 3.0 : 1.6}
        />
      </mesh>

      {/* 2. SOLAR CORONA TRANSLUCENT ATMOSPHERIC SPHERE */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshBasicMaterial
          color="#C5A059"
          transparent
          opacity={activePulse ? 0.6 : 0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3. MAGNETIC SOLAR FLARE ARCS / PLASMA LOOPS */}
      <group ref={flareGroupRef}>
        {flareTubes.map((geo, idx) => (
          <mesh key={idx} geometry={geo}>
            <meshStandardMaterial
              color="#FFD073"
              emissive="#FF9900"
              emissiveIntensity={activePulse ? 3.5 : 1.8}
              transparent
              opacity={0.85}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export function HelixMark({ scale = 1.25 }: { scale?: number }) {
  const group = useRef<THREE.Group>(null);
  const strandsGroup = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const coreLightRef = useRef<THREE.PointLight>(null);
  const orbit1 = useRef<THREE.Group>(null);
  const orbit2 = useRef<THREE.Group>(null);
  const orbit3 = useRef<THREE.Group>(null);

  const [activePulse, setActivePulse] = useState(false);

  // Subscribe to Zustand store states
  const hoveredNavSection = useWaranStore((s) => s.hoveredNavSection);
  const progress = useWaranStore((s) => s.progress);
  const exploredSections = useWaranStore((s) => s.exploredSections);

  // 1. Dual Strand Double-Helix Geometry
  const curveA = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * Math.PI * 2.8;
      const r = 0.75 + Math.sin(t * 0.5) * 0.06;
      points.push(new THREE.Vector3(Math.cos(t) * r, (i / 200) * 2.4 - 1.2, Math.sin(t) * r * 0.45));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const curveB = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * Math.PI * 2.8 + Math.PI;
      const r = 0.75 + Math.sin(t * 0.5) * 0.06;
      points.push(new THREE.Vector3(Math.cos(t) * r, (i / 200) * 2.4 - 1.2, Math.sin(t) * r * 0.45));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const tubeA = useMemo(() => new THREE.TubeGeometry(curveA, 180, 0.032, 14, false), [curveA]);
  const tubeB = useMemo(() => new THREE.TubeGeometry(curveB, 180, 0.032, 14, false), [curveB]);

  // Nucleotide Connecting Rungs
  const rungs = useMemo(() => {
    const lines: Array<{ p1: THREE.Vector3; p2: THREE.Vector3 }> = [];
    for (let i = 10; i <= 190; i += 12) {
      const t = (i / 200) * Math.PI * 2.8;
      const y = (i / 200) * 2.4 - 1.2;
      const r = 0.75 + Math.sin(t * 0.5) * 0.06;
      const p1 = new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r * 0.45);
      const p2 = new THREE.Vector3(Math.cos(t + Math.PI) * r, y, Math.sin(t + Math.PI) * r * 0.45);
      lines.push({ p1, p2 });
    }
    return lines;
  }, []);

  // 2. Sparse Floating Ambient Micro-particles
  const particleCount = 120;
  const particles = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const reduced = useWaranStore.getState().reducedMotion;
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    if (group.current) {
      // 1. Organic Y-axis continuous rotation with mouse parallax
      group.current.rotation.y += reduced ? 0 : delta * 0.14;

      // Mouse Parallax displacement (Subtle & Precision)
      const targetParallaxX = pointer.x * 0.35;
      const targetParallaxY = pointer.y * 0.25;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetParallaxY * 0.2, 0.05);
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetParallaxX * 0.4, 0.05);

      // 2. Scroll Journey Transformation (DNA -> System Network)
      // As progress moves 0 -> 0.3, DNA transforms into system architecture
      const scrollSeparation = Math.min(progress * 2.5, 1);
      if (strandsGroup.current) {
        strandsGroup.current.position.z = THREE.MathUtils.lerp(strandsGroup.current.position.z, -scrollSeparation * 1.5, 0.08);
      }
    }

    // 3. Semantic Hover Reactions
    // Hover DIVISIONS -> Strands expand/branch
    const isDivisionsHover = hoveredNavSection === "DIVISIONS";
    const isResearchHover = hoveredNavSection === "RESEARCH";
    const isFrontierHover = hoveredNavSection === "FRONTIER";

    // Counter-rotating Orbital Coordinate Rings
    const orbitScale = isFrontierHover ? 1.45 : 1.0;
    if (orbit1.current) {
      orbit1.current.rotation.z += delta * (isDivisionsHover ? 0.25 : 0.08);
      orbit1.current.scale.setScalar(THREE.MathUtils.lerp(orbit1.current.scale.x, orbitScale, 0.08));
    }
    if (orbit2.current) {
      orbit2.current.rotation.x += delta * (isDivisionsHover ? -0.2 : -0.05);
      orbit2.current.scale.setScalar(THREE.MathUtils.lerp(orbit2.current.scale.x, orbitScale * 1.1, 0.08));
    }
    if (orbit3.current) {
      orbit3.current.rotation.y += delta * (isDivisionsHover ? 0.22 : 0.06);
      orbit3.current.scale.setScalar(THREE.MathUtils.lerp(orbit3.current.scale.x, orbitScale * 1.2, 0.08));
    }

    // Core light & pulse (with Session Memory boost if sections explored)
    const memoryBoost = exploredSections.length > 0 ? 0.3 : 0;
    if (coreRef.current) {
      const pulseScale = 1 + Math.sin(time * 1.5) * (activePulse || isResearchHover ? 0.35 : 0.05) + memoryBoost * 0.1;
      coreRef.current.scale.setScalar(pulseScale);
    }
    if (coreLightRef.current) {
      coreLightRef.current.intensity = activePulse || isResearchHover
        ? 4.5
        : 1.4 + Math.sin(time * 1.5) * 0.3 + memoryBoost * 0.5;
    }
  });

  const handleCoreClick = (e: any) => {
    e.stopPropagation();
    setActivePulse(true);
    setTimeout(() => setActivePulse(false), 2500);
  };

  return (
    <group ref={group} scale={scale}>
      {/* Micro Sparse Ambient Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.025} color="#C5A059" transparent opacity={0.35} sizeAttenuation />
      </points>

      {/* DUAL DNA STRANDS & RUNG STRUCTURE */}
      <group ref={strandsGroup}>
        {/* Strand A: Muted Gold Metallic Material */}
        <mesh geometry={tubeA}>
          <meshStandardMaterial
            color="#C5A059"
            metalness={0.92}
            roughness={0.18}
            emissive="#3a2a10"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* Strand B: Cool Silver Metallic Material */}
        <mesh geometry={tubeB}>
          <meshStandardMaterial
            color="#E8E2D4"
            metalness={0.88}
            roughness={0.22}
            emissive="#1b2028"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Nucleotide Base-Pair Connecting Rungs */}
        {rungs.map((rung, i) => {
          const mid = new THREE.Vector3().addVectors(rung.p1, rung.p2).multiplyScalar(0.5);
          const dist = rung.p1.distanceTo(rung.p2);
          return (
            <mesh key={i} position={mid}>
              <cylinderGeometry args={[0.01, 0.01, dist, 8]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#C5A059" : "#9AA4B2"}
                metalness={0.8}
                roughness={0.3}
                transparent
                opacity={0.6}
              />
            </mesh>
          );
        })}
      </group>

      {/* CENTRAL CORE: HIGH-ENERGY NEUTRON STAR & SOLAR FLARE NUCLEUS */}
      <NeutronSolarCore activePulse={activePulse} onClick={handleCoreClick} />

      {/* ABSTRACT ORBITAL COORDINATE RINGS */}
      <group ref={orbit1} rotation={[Math.PI / 2.2, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.95, 0.006, 8, 90]} />
          <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.2} transparent opacity={0.45} />
        </mesh>
      </group>

      <group ref={orbit2} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[1.25, 0.005, 8, 90]} />
          <meshStandardMaterial color="#9AA4B2" metalness={0.85} roughness={0.25} transparent opacity={0.35} />
        </mesh>
      </group>

      <group ref={orbit3} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[1.55, 0.004, 8, 90]} />
          <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.2} transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}
