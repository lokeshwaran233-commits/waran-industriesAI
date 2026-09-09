"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { MathUtils } from "three";
import { useWaranStore } from "@/lib/store";

export function PrimalWorld({ active }: { active: number }) {
  const group = useRef<Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const a = (i / 28) * Math.PI * 2;
        const r = 1.4 + (i % 4) * 0.28;
        return { x: Math.cos(a) * r, y: (i % 5) * 0.22 - 0.5, z: Math.sin(a) * r * 0.7 };
      }),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
    group.current.position.y = MathUtils.lerp(group.current.position.y, active * 0.2, 0.08);
  });

  const quality = useWaranStore((s) => s.quality);
  const count = quality === "essential" ? 12 : nodes.length;

  return (
    <group ref={group} position={[0, 0.2, -2.4]}>
      {nodes.slice(0, count).map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <octahedronGeometry args={[0.07, 0]} />
          <meshStandardMaterial
            color={i % 5 === 0 ? "#C5A059" : "#d9deea"}
            emissive={i % 5 === 0 ? "#C5A059" : "#223044"}
            emissiveIntensity={0.35 + active * 0.4}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>
      ))}
      {nodes.slice(0, count - 1).map((p, i) => {
        const next = nodes[(i + 3) % count];
        return (
          <line key={`l-${i}`}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[new Float32Array([p.x, p.y, p.z, next.x, next.y, next.z]), 3]} />
            </bufferGeometry>
            <lineBasicMaterial color="#C5A059" transparent opacity={0.18 + active * 0.25} />
          </line>
        );
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
        <ringGeometry args={[1.7, 1.74, 64]} />
        <meshBasicMaterial color="#C5A059" transparent opacity={0.35 * active} side={2} />
      </mesh>
    </group>
  );
}
