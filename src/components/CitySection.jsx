import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import SculptureModel from "./SculptureModel";
import SculptureLight from "./SculptureLight";

import sculptureSettings from "../data/sculptureSettings";
import lightingSettings from "../data/lightingSettings";

/* ========================================= */
/* OPERA O PLACEHOLDER */
/* ========================================= */

function SculptureOrSphere({
  archiveCode,
  side,
  onBustClick
}) {

  const floatRef = useRef();

  useFrame(({ clock }) => {
    if (!floatRef.current) return;

    const t = clock.elapsedTime;

    floatRef.current.position.y =
      1.2 + Math.sin(t * 0.22 + side) * 0.02;

    floatRef.current.rotation.z =
      Math.sin(t * 0.18 + side) * 0.01;
  });

  const settings = sculptureSettings[archiveCode];
  const hasModel = settings !== undefined;
  if (hasModel) {
    return (
      <group
  ref={floatRef}
  position={[side, 1.2, 0]}
  onClick={() => onBustClick(archiveCode)}
>
        <SculptureModel
          model={archiveCode}
          scale={settings.scale}
          rotation={settings.rotation}
          position={settings.position}
        />
      </group>
    );
  }

  return (
    <mesh
      position={[side, 1.78, 0]}
      castShadow
      onClick={() => onBustClick(archiveCode)}
    >
      <sphereGeometry args={[0.58, 64, 64]} />

      <meshStandardMaterial
        color="#d2d2d2"
        roughness={0.45}
        metalness={0.28}
      />
    </mesh>
  );
}

/* ========================================= */
/* LUCI */
/* ========================================= */

function SculptureLighting({
  archiveCode,
  side
}) {
  const settings = lightingSettings[archiveCode];

  if (!settings) return null;

  return (
    <SculptureLight
      position={[
        side + settings.position[0],
        settings.position[1],
        settings.position[2]
      ]}
      intensity={settings.intensity}
      angle={settings.angle}
      penumbra={settings.penumbra}
      distance={settings.distance}
      color={settings.color}
    />
  );
}

/* ========================================= */
/* CITY SECTION */
/* ========================================= */

export default function CitySection({
  city,
  subtitle,
  position,
  scale = 1,
  archiveCode1,
  archiveCode2,
  onBustClick
}) {
  return (
    <group position={position} scale={scale}>

      {/* ===================== */}
      {/* TESTI */}
      {/* ===================== */}

      <Text
        position={[0, 4, 0]}
        fontSize={0.42}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {city}
      </Text>

      <Text
        position={[0, 3.5, 0]}
        fontSize={0.11}
        color="#d5d5d5"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text>

      {/* ===================== */}
      {/* PIEDISTALLO SINISTRO */}
      {/* ===================== */}

      <mesh
        position={[-1.2, 0.6, 0]}
        castShadow
        receiveShadow
        onClick={() => onBustClick(archiveCode1)}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />

        <meshStandardMaterial
          color="#0b0b0b"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* ===================== */}
      {/* PIEDISTALLO DESTRO */}
      {/* ===================== */}

      <mesh
        position={[1.2, 0.6, 0]}
        castShadow
        receiveShadow
        onClick={() => onBustClick(archiveCode2)}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />

        <meshStandardMaterial
          color="#0b0b0b"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* ===================== */}
      {/* OPERE */}
      {/* ===================== */}

      <SculptureOrSphere
        archiveCode={archiveCode1}
        side={-1.2}
        onBustClick={onBustClick}
      />

      <SculptureOrSphere
        archiveCode={archiveCode2}
        side={1.2}
        onBustClick={onBustClick}
      />

      {/* ===================== */}
      {/* LUCI */}
      {/* ===================== */}

      <SculptureLighting
        archiveCode={archiveCode1}
        side={-1.2}
      />

      <SculptureLighting
        archiveCode={archiveCode2}
        side={1.2}
      />

    </group>
  );
}
