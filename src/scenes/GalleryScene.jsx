import * as THREE from "three";


import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Environment
} from "@react-three/drei";


import {
  EffectComposer,
  Bloom,
  Vignette
} from "@react-three/postprocessing";


import { useRef, useState } from "react";

import ExhibitionPedestal from "../components/ExhibitionPedestal";
import GallerySpotLight from "../components/GallerySpotLight";
import PedestalFillLight from "../components/PedestalFillLight";
import GalleryRoomLights from "../components/GalleryRoomLights";
import GalleryPostProcessing from "../components/GalleryPostProcessing";

function HintText() {
  const textRef = useRef();


  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.material.opacity =
        0.45 + Math.sin(clock.elapsedTime * 2) * 0.25;
    }
  });


  return (
    <>
  <Text
    ref={textRef}
    position={[0, 6.5, 5]}
    fontSize={0.34}
    color="#cfcfcf"
    anchorX="center"
    anchorY="middle"
    material-transparent
  >
    EXPLORE
  </Text>

  <Text
    position={[0, 6.1, 5]}
    fontSize={0.16}
    color="#7d828a"
    anchorX="center"
    anchorY="middle"
    material-transparent
  >
    click and drag
  </Text>
</>
  );
}

const PEDESTAL_LAYOUT = [
  // ==========================
  // OPERE PRINCIPALI
  // ==========================

  {
    code: "FA-001",
    position: [-2.9, 0, 8.4],
  },

  {
    code: "FA-002",
    position: [3.2, 0, 9],
  },

  // ==========================
  // SINISTRA
  // ==========================

  {
    position: [-8.5, 0, 5],
  },

  {
    position: [-6.8, 0, 0.5],
  },

  // ==========================
  // CENTRO
  // ==========================

  {
    position: [-0.4, 0, 5],
  },

  {
    position: [1.3, 0, 0.8],
  },

  // ==========================
  // DESTRA
  // ==========================

  {
    position: [6.1, 0, 4.6],
  },

  {
    position: [9.5, 0, 0.8],
  },

  // ==========================
  // FONDO
  // ==========================

  {
   position: [-3, 0, -2.8],
  },

  {
    position: [4.0, 0, -3.5],
  },
];

const LIGHT_LAYOUT = [
  {
  code: "FA-001",
  position: [-2.9, 6.2, 8.5],
  intensity: 55,
  enabled: true,
  angle: 0.28,
  distance: 18,
  color: "#fffaf2"
},


  {
  code: "FA-002",
  position: [3.2, 6.2, 9],
  intensity: 55,
  enabled: true,
  angle: 0.28,
  distance: 18,
  color: "#fffaf2"
}
];

const FILL_LIGHT_LAYOUT = [
  {
    code: "FA-001",
    position: [-2.9, 0.35, 8.4],
    target: [-2.9, 1.8, 8.4],
    intensity: 4,
    enabled: true,
    angle: 0.6,
    distance: 5,
    color: "#fff8ef"
  },

  {
    code: "FA-002",
    position: [3.2, 0.35, 9],
    target: [3.2, 1.8, 9],
    intensity: 4,
    enabled: true,
    angle: 0.6,
    distance: 5,
    color: "#fff8ef"
  }
];

export default function GalleryScene({
  onBustClick
}) {


  const [isTransitioning, setIsTransitioning] = useState(false);


  const handleBustClick = (archiveCode) => {


    if (isTransitioning) return;


  
    setIsTransitioning(true);


    setTimeout(() => {
      onBustClick(archiveCode);
    }, 800);


  };


  return (
    <Canvas
  shadows
  camera={{
    position: [0, 1.55, 22],
    fov: 42
  }}
  gl={{
    antialias: true
  }}
  dpr={[1, 2]}
  onCreated={({ gl }) => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;

    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 0.82;
  }}
>
      {/* ===================== */}
      {/* ATMOSFERA */}
      {/* ===================== */}


      <color attach="background" args={["#030405"]} />
<fog attach="fog" args={["#030405", 14, 55]} />


      {/* ===================== */}
{/* LUCE GENERALE */}
{/* ===================== */}

<GalleryRoomLights />


      {/* ===================== */}
{/* TESTO */}
{/* ===================== */}

<HintText />

{/* ===================== */}
{/* LUCI ESPOSITIVE */}
{/* ===================== */}


{/* FA-001 */}


{LIGHT_LAYOUT.map((light) => (
  <GallerySpotLight
    key={light.code}
    position={light.position}
    intensity={light.enabled ? light.intensity : 0}
    angle={light.angle}
    distance={light.distance}
    color={light.color}
  />
))}

{FILL_LIGHT_LAYOUT.map((light) => (
  <PedestalFillLight
    key={light.code}
    position={light.position}
    target={light.target}
    intensity={light.enabled ? light.intensity : 0}
    angle={light.angle}
    distance={light.distance}
    color={light.color}
  />
))}

           {/* ===================== */}
{/* PAVIMENTO */}
{/* ===================== */}

<mesh
  rotation={[-Math.PI / 2, 0, 0]}
  receiveShadow
>
  <planeGeometry args={[400, 400]} />

  <meshStandardMaterial
    color="#050505"
    roughness={1}
    metalness={0}
    envMapIntensity={0}
  />
</mesh>

{/* ===================== */}
{/* EXHIBITION */}
{/* ===================== */}


{PEDESTAL_LAYOUT.map((pedestal, index) => (
  <ExhibitionPedestal
    key={pedestal.code ?? `pedestal-${index}`}
    code={pedestal.code}
    position={pedestal.position}
    onBustClick={
      pedestal.code ? handleBustClick : undefined
    }
  />
))}



            {/* ===================== */}
      {/* POST PROCESSING */}
      {/* ===================== */}


      <GalleryPostProcessing />


{/* <CameraMotion /> */}


<OrbitControls
  target={[0, 1.4, 2]}

  enablePan={false}
  enableRotate={!isTransitioning}
enableZoom={!isTransitioning}


  enableDamping
  dampingFactor={0.08}


  rotateSpeed={0.45}
  zoomSpeed={0.8}


  minDistance={6}
maxDistance={28}

  minPolarAngle={0.95}
  maxPolarAngle={1.45}


  minAzimuthAngle={-1.2}
  maxAzimuthAngle={1.2}
/>
    </Canvas>
  );
}
