import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PedestalFillLight({
  position,
  target,
  intensity,
  angle,
  distance,
  color
}) {
  const light = useRef();
  const targetRef = useRef(new THREE.Object3D());

  useFrame(() => {
    if (!light.current) return;

    targetRef.current.position.set(
      target[0],
      target[1],
      target[2]
    );

    targetRef.current.updateMatrixWorld();
    light.current.target = targetRef.current;
  });

  return (
    <>
      <primitive object={targetRef.current} />

      <spotLight
        ref={light}
        position={position}
        intensity={intensity}
        angle={angle}
        distance={distance}
        decay={2}
        penumbra={1}
        color={color}
        castShadow={false}
      />
    </>
  );
}
