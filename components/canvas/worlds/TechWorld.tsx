"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function TechWorld({ active }: { active: number }) {
  const arm = useRef<Group>(null);
  useFrame((state) => {
    if (!arm.current) return;
    arm.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.35 * active;
    arm.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <group position={[1.6, 0.1, -3.6]}>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.7, 0.85, 0.18, 24]} />
        <meshStandardMaterial color="#2a3038" metalness={0.9} roughness={0.25} />
      </mesh>
      <group ref={arm} position={[0, -0.7, 0]}>
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[0.16, 1.1, 0.16]} />
          <meshStandardMaterial color="#9aa4b2" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0.45, 1.05, 0]} rotation={[0, 0, -0.6]}>
          <boxGeometry args={[0.9, 0.12, 0.12]} />
          <meshStandardMaterial color="#c9cdd3" metalness={0.9} roughness={0.18} />
        </mesh>
        <mesh position={[0.92, 0.78, 0]}>
          <boxGeometry args={[0.22, 0.08, 0.28]} />
          <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} emissive="#C5A059" emissiveIntensity={0.2 * active} />
        </mesh>
      </group>
      <mesh position={[0, 0.2, 0.9]}>
        <torusGeometry args={[0.55, 0.015, 8, 48]} />
        <meshStandardMaterial color="#8fb7d6" metalness={0.7} roughness={0.2} transparent opacity={0.5 + 0.4 * active} />
      </mesh>
    </group>
  );
}
