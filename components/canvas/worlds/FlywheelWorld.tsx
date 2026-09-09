"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Vector3 } from "three";
import { flywheelLinks, flywheelNodes } from "@/content/flywheel";
import { useWaranStore } from "@/lib/store";

const nodeIndex = Object.fromEntries(flywheelNodes.map((n, i) => [n.id, i]));

export function FlywheelWorld({ active }: { active: number }) {
  const group = useRef<Group>(null);
  const positions = useMemo(() => {
    return flywheelNodes.map((node, i) => {
      const a = (i / flywheelNodes.length) * Math.PI * 2 - Math.PI / 2;
      const r = node.kind === "division" ? 2.35 : 1.55;
      return { x: Math.cos(a) * r, y: Math.sin(a * 2) * 0.18, z: Math.sin(a) * r };
    });
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.08 * (0.2 + active);
  });

  const focus = useWaranStore((s) => s.flywheelFocus);
  const activeDivision = useWaranStore((s) => s.activeDivision);
  const currentFocus = focus ?? activeDivision;

  return (
    <group ref={group} position={[0, 0.5, -2]}>
      {flywheelLinks.map(([a, b], i) => {
        const pa = positions[nodeIndex[a]];
        const pb = positions[nodeIndex[b]];
        const lit = !currentFocus || currentFocus === a || currentFocus === b;
        return (
          <line key={`${a}-${b}-${i}`}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[new Float32Array([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z]), 3]} />
            </bufferGeometry>
            <lineBasicMaterial color={lit ? "#C5A059" : "#3a4250"} transparent opacity={lit ? 0.7 : 0.15} />
          </line>
        );
      })}
      {flywheelNodes.map((node, i) => {
        const pos = positions[i];
        const lit = !currentFocus || currentFocus === node.id || currentFocus === node.slug;
        return (
          <mesh key={node.id} position={[pos.x, pos.y, pos.z]}>
            <sphereGeometry args={[node.kind === "division" ? 0.13 : 0.07, 16, 16]} />
            <meshStandardMaterial
              color={lit ? (node.kind === "division" ? "#C5A059" : "#e8e2d4") : "#2a3038"}
              emissive={lit ? "#C5A059" : "#000"}
              emissiveIntensity={lit ? 0.45 : 0}
              metalness={0.7}
              roughness={0.25}
            />
          </mesh>
        );
      })}
    </group>
  );
}
