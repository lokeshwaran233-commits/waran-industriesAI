"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";

export function CapitalWorld({ active }: { active: number }) {
  const ring = useRef<Group>(null);
  const coins = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(a) * 1.8, Math.sin(a) * 1.8, 0);
    });
  }, []);

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * -0.15;
    ring.current.position.z = THREE.MathUtils.lerp(ring.current.position.z, active * -2, 0.05);
  });

  return (
    <group ref={ring} position={[2.4, -0.6, -3]}>
      {coins.map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.PI / 2, 0, (i / 12) * Math.PI * 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.04, 16]} />
          <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      <mesh>
        <torusGeometry args={[1.8, 0.015, 8, 64]} />
        <meshBasicMaterial color="#C5A059" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}
