"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  Resize,
  Environment,
  Lightformer,
  Float,
  useGLTF,
} from "@react-three/drei";
import { Racket1 } from "@/components/models/Racket1";

function SpinningRacket({ progressRef }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    const p = progressRef?.current ?? 0;
    const g = group.current;
    if (!g) return;

    // Scroll drives a 2.4-turn rotation; a slow idle spin keeps it alive.
    const targetY = -0.5 + p * Math.PI * 2.4 + state.clock.elapsedTime * 0.12;
    g.rotation.y += (targetY - g.rotation.y) * Math.min(1, delta * 6);
    g.rotation.z = -0.15 + Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
    g.rotation.x = 0.1 + p * 0.25;

    // Grows as the section scrolls.
    const s = 3.1 * (0.82 + p * 0.5);
    g.scale.setScalar(s);
  });

  return (
    <group ref={group}>
      <Center>
        <Resize>
          <Racket1 />
        </Resize>
      </Center>
    </group>
  );
}

export default function RacketScene({ progressRef }) {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 7], fov: 32 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} />
      <directionalLight position={[-6, 2, -4]} intensity={1} color="#d8ff2e" />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0} floatIntensity={0.6}>
          <SpinningRacket progressRef={progressRef} />
        </Float>

        <Environment resolution={256} frames={1}>
          <Lightformer
            intensity={2.4}
            position={[0, 4, -6]}
            scale={[12, 12, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={1.6}
            position={[-6, 1, 3]}
            scale={[8, 8, 1]}
            color="#d8ff2e"
          />
          <Lightformer
            intensity={1.2}
            position={[6, -2, 4]}
            scale={[8, 8, 1]}
            color="#8090ff"
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/racket1-transformed.glb");
