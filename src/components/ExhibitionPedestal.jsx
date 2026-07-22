import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import SculptureModel from "./SculptureModel";
import SculptureLight from "./SculptureLight";

import sculptureSettings from "../data/sculptureSettings";
import lightingSettings from "../data/lightingSettings";

export default function ExhibitionPedestal({
  code,
  position,
  onBustClick
}) {
  const floatRef = useRef();

  useFrame(({ clock }) => {
    if (!floatRef.current) return;

    const t = clock.elapsedTime;

    floatRef.current.position.y =
      1.2 + Math.sin(t * 0.22) * 0.02;

    floatRef.current.rotation.z =
      Math.sin(t * 0.18) * 0.01;
  });

  const sculpture = code ? sculptureSettings[code] : null;
  const light = code ? lightingSettings[code] : null;

  return (
    <group position={position}>

      {/* Piedistallo */}

      <mesh
        position={[0, 0.6, 0]}
        castShadow
        receiveShadow
        onClick={() => onBustClick?.(code)}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />

        <meshStandardMaterial
          color="#0b0b0b"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Scultura oppure placeholder */}

      {sculpture ? (
        <group
          ref={floatRef}
          position={[0, 1.2, 0]}
          onClick={() => onBustClick?.(code)}
        >
          <SculptureModel
            model={code}
            scale={sculpture.scale}
            rotation={sculpture.rotation}
            position={sculpture.position}
          />
        </group>
      ) : (
        <mesh
          position={[0, 1.78, 0]}
          castShadow
          onClick={() => onBustClick?.(code)}
        >
          <sphereGeometry args={[0.58, 64, 64]} />

          <meshStandardMaterial
            color="#d2d2d2"
            roughness={0.45}
            metalness={0.28}
          />
        </mesh>
      )}

      {/* Luce dedicata */}

      {light && (
        <SculptureLight
          position={[
            light.position[0],
            light.position[1],
            light.position[2]
          ]}
          intensity={light.intensity}
          angle={light.angle}
          penumbra={light.penumbra}
          distance={light.distance}
          color={light.color}
        />
      )}

    </group>
  );
}
