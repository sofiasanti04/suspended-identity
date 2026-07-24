import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SculptureLight({
  position,
  intensity,
  color,
  angle,
  penumbra,
  distance
}) {
  const light = useRef();
  const target = useRef(new THREE.Object3D());

  useFrame(() => {
    if (!light.current) return;

    target.current.position.set(
  0,
  0.15,
  0
);

target.current.updateMatrixWorld();

light.current.target = target.current;
  });

  return (
    <>
      <primitive object={target.current} />

      <spotLight
        ref={light}
        position={position}
        intensity={intensity}
        color={color}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        decay={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-normalBias={0.02}
      />
    </>
  );
}
