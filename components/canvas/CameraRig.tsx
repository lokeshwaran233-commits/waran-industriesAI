"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scenes } from "@/content/scenes";
import { useWaranStore } from "@/lib/store";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function CameraRig() {
  const look = useRef(new THREE.Vector3());
  const pos = useRef(new THREE.Vector3());
  const reducedMotion = useWaranStore((s) => s.reducedMotion);

  const anchors = useMemo(
    () =>
      scenes.map((scene) => ({
        start: scene.start,
        end: scene.end,
        position: new THREE.Vector3(...scene.camera.position),
        target: new THREE.Vector3(...scene.camera.target),
        fov: scene.camera.fov,
      })),
    [],
  );

  useFrame((state, delta) => {
    const progress = useWaranStore.getState().progress;
    const current = anchors.find((a) => progress >= a.start && progress < a.end) ?? anchors[anchors.length - 1];
    const next = anchors[Math.min(anchors.indexOf(current) + 1, anchors.length - 1)];
    const local = (progress - current.start) / Math.max(0.0001, current.end - current.start);
    const t = reducedMotion ? 1 : THREE.MathUtils.smootherstep(local, 0, 1);

    pos.current.lerpVectors(current.position, next.position, t * 0.35 + local * 0.15);
    look.current.lerpVectors(current.target, next.target, t * 0.35 + local * 0.15);

    const damp = reducedMotion ? 12 : 6.5;
    state.camera.position.lerp(pos.current, 1 - Math.exp(-damp * delta));
    state.camera.lookAt(look.current);
    if ("fov" in state.camera) {
      const cam = state.camera as THREE.PerspectiveCamera;
      cam.fov = lerp(current.fov, next.fov, t * 0.4);
      cam.updateProjectionMatrix();
    }
  });

  return null;
}
