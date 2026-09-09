"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function ExplorationWorld({ active }: { active: number }) {
  const terrain = useRef<Group>(null);
  useFrame((state) => {
    if (!terrain.current) return;
    terrain.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.15;
    terrain.current.position.y = -1.1 + active * 0.15;
  });

  return (
    <group ref={terrain} position={[0.8, -1.2, -6.4]}>
      <mesh rotation={[-Math.PI / 2.15, 0, 0]}>
        <circleGeometry args={[3.4, 40]} />
        <meshStandardMaterial color="#3a332b" roughness={0.95} metalness={0.05} />
      </mesh>
      {[
        [0.4, 0.35, -0.2, 0.8],
        [-1.1, 0.22, 0.6, 0.55],
        [1.4, 0.18, 0.7, 0.4],
        [-0.2, 0.5, 1.3, 1.1],
      ].map((m, i) => (
        <mesh key={i} position={[m[0], m[1] / 2, m[2]]}>
          <coneGeometry args={[m[3] * 0.7, m[1] * 2, 5]} />
          <meshStandardMaterial color={i === 3 ? "#6d5a46" : "#5a5046"} roughness={1} />
        </mesh>
      ))}
      <mesh position={[0.2, 0.02, 0.1]} rotation={[-Math.PI / 2, 0, 0.4]}>
        <ringGeometry args={[0.9, 0.93, 40]} />
        <meshBasicMaterial color="#C5A059" transparent opacity={0.4 * active} />
      </mesh>
      {[-0.6, 0, 0.6].map((x, i) => (
        <mesh key={x} position={[x, 0.22, 1.4]}>
          <capsuleGeometry args={[0.05, 0.22, 4, 8]} />
          <meshStandardMaterial color={i === 1 ? "#C5A059" : "#d9d3c7"} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}
