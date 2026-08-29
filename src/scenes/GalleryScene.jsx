import * as THREE from "three";


import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Environment,
  useProgress
} from "@react-three/drei";

import {
  EffectComposer,
  Bloom,
  Vignette
} from "@react-three/postprocessing";


import { useRef, useState, useEffect } from "react";

import useResponsive from "../hooks/useResponsive";

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
  // DAVANTI
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
  code: "FA-004",
  position: [-6.8, 0, 0.5],
},

  // ==========================
  // CENTRO
  // ==========================

  {
  code: "FA-005",
  position: [-0.4, 0, 5],
},

  {
  code: "FA-003",
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
},
  
{
    code: "FA-003",
    position: [1.3, 6.2, 0.8],
    intensity: 32,
    enabled: true,
    angle: 0.28,
    distance: 18,
    color: "#fffaf2"
  },

  {
  code: "FA-004",
  position: [-6.8, 6.8, 0.5],
  intensity: 20,
  enabled: true,
  angle: 0.28,
  distance: 18,
  color: "#fffaf2"
},

  {
  code: "FA-005",
  position: [-0.3, 6.3, 5],
  intensity: 30,
  enabled: true,
  angle: 0.28,
  distance: 18,
  color: "#fffaf2"
},

];

const FILL_LIGHT_LAYOUT = [
  {
    code: "FA-001",
    position: [-3.0, 2.5, 11],
    target: [-2.9, 1.8, 8.4],
    intensity: 4,
    enabled: true,
    angle: 0.6,
    distance: 5,
    color: "#fff8ef"
  },

  {
  code: "FA-001",
  position: [2.0, 1.3, 11],
  target: [-2.9, 1.2, 8.4],
  intensity: 2.0,
  enabled: true,
  angle: 0.7,
  distance: 5,
  color: "#fff8ef"
},

  {
    code: "FA-002",
    position: [3.4, 1, 12],
    target: [3.2, 1.8, 9],
    intensity: 4,
    enabled: true,
    angle: 0.6,
    distance: 5,
    color: "#fff8ef"
  },

  {
  code: "FA-002",
  position: [3.5, 4.2, 11],
  target: [3.2, 1.3, 9],
  intensity: 7,
  enabled: true,
  angle: 0.8,
  distance: 5,
  color: "#fff8ef"
},

  {
    code: "FA-003",
    position: [1.3, 0.35, 0.8],
    target: [1.3, 1.8, 0.8],
    intensity: 4,
    enabled: true,
    angle: 0.6,
    distance: 5,
    color: "#fff8ef"
  },

  
  {
  code: "FA-003",
  position: [1.3, 3.0, 2.8],
  target: [1.3, 1.5, 0.8],
  intensity: 5,
  enabled: true,
  angle: 0.7,
  distance: 5,
  color: "#fff8ef"
},

{
  code: "FA-004",
  position: [-6.8, 3.5, 5],
  target: [-7.0, 3.2, 2.0],
  intensity: 20,
  enabled: true,
  angle: 0.3,
  distance: 8,
  color: "#fff8ef"
},

{
  code: "FA-005",
  position: [-0.3, 3.5, 8],
  target: [-0.1, 1.25, -2.2],
  intensity: 14,
  enabled: true,
  angle: 0.8,
  distance: 8,
  color: "#fff8ef"
},

];

function GalleryLoadingOverlay() {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "#030405",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "rgba(255,255,255,0.85)",
        fontFamily: "inherit",
        pointerEvents: "none",
        transition: "opacity 0.6s ease",
      }}
    >
      <div
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.28rem",
          marginBottom: "18px",
        }}
      >
        ENTERING EXHIBITION
      </div>

      <div
        style={{
          width: "120px",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "rgba(255,255,255,0.7)",
            transition: "width 0.25s ease",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "12px",
          fontSize: "0.58rem",
          letterSpacing: "0.15rem",
          color: "rgba(255,255,255,0.38)",
        }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default function GalleryScene({
  onBustClick,
  onOpenCustomBusts,
  onOpenAbout,
  onOpenPrivacyPolicy,
  onOpenTermsConditions,
  onOpenCopyright,
}) {


  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const SCULPTURE_LOAD_ORDER = [
  "FA-001",
  "FA-002",
  "FA-003",
  "FA-004",
  "FA-005",
];

const [loadedSculptures, setLoadedSculptures] = useState([]);
  const {
  isMobile,
  isTablet,
  isDesktop,
  isPortrait,
  isLandscape,
} = useResponsive();

useEffect(() => {
  let cancelled = false;

  const loadSculpturesSequentially = async () => {
    for (const code of SCULPTURE_LOAD_ORDER) {
      if (cancelled) return;

      setLoadedSculptures((current) => {
        if (current.includes(code)) return current;
        return [...current, code];
      });

      await new Promise((resolve) => setTimeout(resolve, 1200));
    }
  };

  loadSculpturesSequentially();

  return () => {
    cancelled = true;
  };
}, []);

let cameraSettings = {
  position: [0, 1.55, 22],
  fov: 42,
};

if (isMobile && isPortrait) {
  cameraSettings = {
    position: [0, 1.55, 14],
    fov: 58,
  };
}

// 📱 Telefono orizzontale
if (isMobile && isLandscape) {
  cameraSettings = {
    position: [0, 1.55, 17],
    fov: 48,
  };
}

// 📲 Tablet
if (isTablet) {
  cameraSettings = {
    position: [0, 1.55, 19],
    fov: 45,
  };
}

console.log({
  isMobile,
  isTablet,
  isPortrait,
  isLandscape,
  cameraSettings,
});

  const handleBustClick = (archiveCode) => {


    if (isTransitioning) return;


  
    setIsTransitioning(true);


    setTimeout(() => {
      onBustClick(archiveCode);
    }, 800);


  };


  return (
  <>
    <GalleryLoadingOverlay />

    <div
    style={{
      width: "100vw",
      height: "100dvh",
      overflow: "hidden",
    }}
  >

    {/* ===================== */}
    {/* MENU */}
    {/* ===================== */}

    <div
      style={{
        position: "fixed",
        top: isMobile ? "20px" : "80px",
        right: isMobile ? "20px" : "80px",
        zIndex: 1000,
      }}
    >
      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        style={{
          width: "46px",
          height: "46px",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(2,5,12,0.55)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "50%",
          color: "rgba(255,255,255,0.9)",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "16px",
          }}
        >
          <span style={{ display: "block", width: "100%", height: "1px", background: "currentColor" }} />
          <span style={{ display: "block", width: "100%", height: "1px", background: "currentColor" }} />
          <span style={{ display: "block", width: "100%", height: "1px", background: "currentColor" }} />
        </span>
      </button>

      <div
        style={{
          position: "absolute",
          top: "58px",
          right: 0,
          width: isMobile ? "min(290px, calc(100vw - 40px))" : "310px",
          padding: "30px 28px 28px",
          maxHeight: isMobile ? "calc(100dvh - 100px)" : "none",
          overflowY: isMobile ? "auto" : "visible",
          boxSizing: "border-box",
          background: "rgba(2,5,12,0.96)",
          border: "1px solid rgba(255,255,255,0.16)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? "visible" : "hidden",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: isMenuOpen ? "auto" : "none",
          transition: "opacity 0.28s ease, transform 0.28s ease, visibility 0.28s ease",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.65rem",
            letterSpacing: "0.32rem",
            marginBottom: "24px",
          }}
        >
          MENU
        </div>

        <nav aria-label="Gallery menu" style={{ display: "flex", flexDirection: "column" }}>
          {["CUSTOM BUSTS", "ABOUT", "INSTAGRAM"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={
              item === "CUSTOM BUSTS"
              ? onOpenCustomBusts
              : item === "ABOUT"
              ? onOpenAbout
              : item === "INSTAGRAM"
              ? () =>
              window.open(
             "https://www.instagram.com/suspendedidentity/",
             "_blank",
             "noopener,noreferrer"
             )
            : undefined
            }
              style={{
                padding: "12px 0",
                textAlign: "left",
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "inherit",
                fontSize: "0.76rem",
                letterSpacing: "0.17rem",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}

          <div
            aria-hidden="true"
            style={{
              height: "1px",
              width: "100%",
              margin: "18px 0 12px",
              background: "rgba(255,255,255,0.14)",
            }}
          />

          {["PRIVACY POLICY", "TERMS & CONDITIONS", "COPYRIGHT"].map((item) => (
  <button
    key={item}
    type="button"
    onClick={
  item === "PRIVACY POLICY"
    ? () => {
        setIsMenuOpen(false);
        onOpenPrivacyPolicy();
      }
    : item === "TERMS & CONDITIONS"
    ? () => {
        setIsMenuOpen(false);
        onOpenTermsConditions();
      }
    : item === "COPYRIGHT"
    ? () => {
        setIsMenuOpen(false);
        onOpenCopyright();
      }
    : undefined
}
    style={{
      padding: "10px 0",
      textAlign: "left",
      background: "transparent",
      border: "none",
      color: "rgba(255,255,255,0.62)",
      fontFamily: "inherit",
      fontSize: "0.68rem",
      letterSpacing: "0.13rem",
      cursor: "pointer",
    }}
  >
    {item}
  </button>
))}
        </nav>
      </div>
    </div>

    <Canvas
    style={{
  width: "100vw",
  height: "100dvh",
  display: "block"
}}
      shadows
      camera={cameraSettings}
      gl={{
        antialias: true
      }}
      dpr={[1, 2]}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;

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


{LIGHT_LAYOUT.map((light, index) => (
  <GallerySpotLight
    key={`${light.code}-spot-${index}`}
    position={light.position}
    intensity={light.enabled ? light.intensity : 0}
    angle={light.angle}
    distance={light.distance}
    color={light.color}
  />
))}

{FILL_LIGHT_LAYOUT.map((light, index) => (
  <PedestalFillLight
    key={`${light.code}-fill-${index}`}
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


{PEDESTAL_LAYOUT.map((pedestal, index) => {
  const shouldLoad =
    !pedestal.code || loadedSculptures.includes(pedestal.code);

  return (
    <ExhibitionPedestal
      key={pedestal.code ?? `pedestal-${index}`}
      code={shouldLoad ? pedestal.code : undefined}
      position={pedestal.position}
      onBustClick={
        shouldLoad && pedestal.code
          ? handleBustClick
          : undefined
      }
    />
  );
})}



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
      </div>
  </>
);
}
