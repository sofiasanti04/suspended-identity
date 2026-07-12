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
  const fillLight = useRef();
  const target = useRef(new THREE.Object3D());

  useFrame(() => {
    if (!light.current || !fillLight.current) return;

    target.current.position.set(
      position[0],
      1.2,
      0
    );

    light.current.target = target.current;
    fillLight.current.target = target.current;
  });

  return (
    <>
      <primitive object={target.current} />

      {/* Spotlight principale */}
      <spotLight
        ref={light}
        position={position}
        intensity={intensity}
        color={color}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        decay={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-normalBias={0.02}
      />

      {/* Fill Light molto delicata */}
      <spotLight
        ref={fillLight}
        position={[
          position[0] - 1.2,
          position[1] - 0.5,
          position[2] + 0.6
        ]}
        intensity={0.24}
        color="#dce8ff"
        angle={0.45}
        penumbra={1}
        distance={12}
        decay={1}
      />
    </>
  );
}
