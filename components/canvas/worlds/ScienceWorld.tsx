"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";

export function ScienceWorld({ active }: { active: number }) {
  const helix = useRef<Group>(null);
  const beads = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 40; i++) {
      const t = i * 0.32;
      pts.push(new THREE.Vector3(Math.cos(t) * 0.55, i * 0.08 - 1.4, Math.sin(t) * 0.55));
      pts.push(new THREE.Vector3(Math.cos(t + Math.PI) * 0.55, i * 0.08 - 1.4, Math.sin(t + Math.PI) * 0.55));
    }
    return pts;
  }, []);

  useFrame((_, delta) => {
    if (helix.current) helix.current.rotation.y += delta * 0.22 * (0.25 + active);
  });

  return (
    <group ref={helix} position={[-1.8, 0.4, -4]}>
      {beads.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color={i % 2 ? "#7FA58A" : "#d7e4dc"}
            emissive={i % 2 ? "#7FA58A" : "#1b2a22"}
            emissiveIntensity={0.25 + active * 0.5}
          />
        </mesh>
      ))}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 3.2, 8]} />
        <meshStandardMaterial color="#C5A059" metalness={0.6} roughness={0.3} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}
