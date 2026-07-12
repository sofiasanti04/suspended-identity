import * as THREE from "three";


import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text
} from "@react-three/drei";


import {
  EffectComposer,
  Bloom,
  Vignette
} from "@react-three/postprocessing";


import { useRef, useState } from "react";


import CitySection from "../components/CitySection";
import CameraMotion from "../components/CameraMotion";


function HintText() {
  const textRef = useRef();


  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.material.opacity =
        0.45 + Math.sin(clock.elapsedTime * 2) * 0.25;
    }
  });


  return (
    <Text
      ref={textRef}
      position={[0, 7, 5]}
      fontSize={0.3}
      color="#9ca5b1"
      anchorX="center"
      anchorY="middle"
      material-transparent
    >
      SELECT A FIGURE TO ENTER THE ARCHIVE
    </Text>
  );
}


export default function GalleryScene({
  onBustClick
}) {


  const [selectedBust, setSelectedBust] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const handleBustClick = (archiveCode) => {


    if (isTransitioning) return;


    setSelectedBust(archiveCode);
    setIsTransitioning(true);


    setTimeout(() => {
      onBustClick(archiveCode);
    }, 800);


  };


  return (
    <Canvas
  shadows={{
    type: "PCFSoftShadowMap"
  }}
  camera={{
  position: [-2.2, 1.65, 19],
  fov: 41
}}
  gl={{
    antialias: true
  }}
  dpr={[1, 2]}
  onCreated={({ gl }) => {
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


<ambientLight
    intensity={0.035}
    color="#dfe8f7"
/>


<hemisphereLight
  skyColor="#d7e6ff"
  groundColor="#171717"
  intensity={0.02}
 />


<directionalLight
  position={[0, 8, -10]}
  intensity={0.15}
  color="#edf4ff"
/>


<directionalLight
  position={[-8, 5, 6]}
  intensity={0.05}
  color="#dce8ff"
/>


      {/* ===================== */}
      {/* TESTO */}
      {/* ===================== */}


      <HintText />


      {/* ===================== */}
      {/* LUCI PER CITTÀ */}
            {/* ===================== */}
      {/* LUCI LONDON */}
      {/* ===================== */}


      {/* Luce diffusa */}
      <pointLight
  position={[-5.5, 5.2, 8]}
  intensity={16}
  distance={13}
  color="#e8efff"
/>


      {/* Spotlight principale */}
      <spotLight
  position={[-5.5, 8.5, 7]}
  intensity={40}
  angle={0.42}
  penumbra={1}
  distance={32}
  color="#fffaf2"
  castShadow
/>


      {/* Rim Light (controluce) */}
      <directionalLight
        position={[-8, 5, 2]}
        intensity={0.08}
        color="#c8dcff"
      />


      {/* PARIS */}


      <pointLight
        position={[-3, 4, 0]}
        intensity={16}
        distance={15}
        color="#efe7dc"
      />


      {/* NEW YORK */}


      <pointLight
        position={[0, 3, -7]}
        intensity={5}
        distance={10}
        color="#b8c8ff"
      />


      {/* BARCELONA */}


      <pointLight
        position={[3.5, 3.5, -1]}
        intensity={8}
        distance={12}
        color="#d8d8ff"
      />


      {/* BERLIN */}


      <pointLight
        position={[5.5, 5, 3]}
        intensity={25}
        distance={18}
        color="#dbe8ff"
      />


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
{/* CITTÀ */}
{/* ===================== */}


<CitySection
  city="LONDON"
  subtitle="AVAILABLE FROM AUGUST 2026"
  position={[-5.5, 0, 6]}
  scale={1.35}
  archiveCode1="SI-LDN-01"
  archiveCode2="SI-LDN-02"
  onBustClick={handleBustClick}
/>


      <CitySection
        city="PARIS"
        subtitle="AVAILABLE FROM NOVEMBER 2026"
        position={[-3, 0, 0]}
        scale={0.8}
        archiveCode1="SI-PAR-01"
        archiveCode2="SI-PAR-02"
        onBustClick={handleBustClick}
      />


      <CitySection
        city="NEW YORK CITY"
        subtitle="COMING SOON"
        position={[0, 0, -7]}
        scale={0.55}
        archiveCode1="SI-NYC-01"
        archiveCode2="SI-NYC-02"
        onBustClick={handleBustClick}
      />


      <CitySection
        city="BARCELONA"
        subtitle="COMING SOON"
        position={[3.5, 0, -1]}
        scale={0.7}
        archiveCode1="SI-BCN-01"
        archiveCode2="SI-BCN-02"
        onBustClick={handleBustClick}
      />


      <CitySection
        city="BERLIN"
        subtitle="AVAILABLE FROM OCTOBER 2026"
        position={[5.5, 0, 3]}
        scale={1}
        archiveCode1="SI-BER-01"
        archiveCode2="SI-BER-02"
        onBustClick={handleBustClick}
      />


            {/* ===================== */}
      {/* POST PROCESSING */}
      {/* ===================== */}


      <EffectComposer>
  <Bloom
    intensity={0.08}
    luminanceThreshold={0.92}
    luminanceSmoothing={0.9}
  />


  <Vignette
    eskil={false}
    offset={0.25}
    darkness={0.15}
  />
</EffectComposer>


{/* <CameraMotion /> */}


<OrbitControls
  target={[0, 1.9, 0]}


  enablePan={false}
  enableRotate={!isTransitioning}
enableZoom={!isTransitioning}


  enableDamping
  dampingFactor={0.08}


  rotateSpeed={0.45}
  zoomSpeed={0.8}


  minDistance={7}
  maxDistance={34}


  minPolarAngle={0.95}
  maxPolarAngle={1.45}


  minAzimuthAngle={-1.2}
  maxAzimuthAngle={1.2}
/>
    </Canvas>
  );
}
