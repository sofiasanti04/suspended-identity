import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


export default function GallerySpotLight({
  position,
  intensity,
  angle,
  distance,
  color
}) {
  const light = useRef();
  const target = useRef(new THREE.Object3D());


  useFrame(() => {
    if (!light.current) return;


    // Punta sempre il centro del piedistallo
    target.current.position.set(
      position[0],
      1.8,
      position[2]
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
  angle={angle}
  penumbra={1}
  distance={distance}
  decay={2}
  color={color}
  castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
  shadow-bias={-0.0001}
  shadow-normalBias={0.02}
  shadow-radius={8}
/>
    </>
  );
}
