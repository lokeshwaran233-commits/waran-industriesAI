"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";
import { useWaranStore } from "@/lib/store";

export function SpaceWorld({ active }: { active: number }) {
  const system = useRef<Group>(null);
  const rover = useRef<Group>(null);
  const quality = useWaranStore((s) => s.quality);
  const starCount = quality === "cinematic" ? 900 : quality === "balanced" ? 420 : 160;

  const stars = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 18 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [starCount]);

  useFrame((state) => {
    if (system.current) {
      system.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
    if (rover.current) {
      rover.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.02 + 0.1;
      rover.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={system}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[stars, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#ffffff" transparent opacity={0.6 * active} sizeAttenuation />
      </points>

      <group position={[0, -2, -12]} scale={active}>
        <mesh>
          <sphereGeometry args={[4, 64, 64]} />
          <meshStandardMaterial color="#1a1a1a" roughness={1} metalness={0} />
        </mesh>
        <group ref={rover} position={[0, 4.1, 0]}>
          <mesh>
            <boxGeometry args={[0.4, 0.2, 0.6]} />
            <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.2, 0.2]}>
            <boxGeometry args={[0.05, 0.3, 0.05]} />
            <meshStandardMaterial color="#C5A059" />
          </mesh>
        </group>
      </group>
    </group>
  );
}
