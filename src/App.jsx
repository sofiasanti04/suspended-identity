import { useState, useEffect } from "react";
import "./style.css";

import GalleryScene from "./scenes/GalleryScene";
import ArchiveScene from "./scenes/ArchiveScene";
import SculptureScene from "./scenes/SculptureScene";
import GalleryArchiveScene from "./scenes/GalleryArchiveScene";

function App() {
  const [scene, setScene] = useState("landing");
  const [selectedBust, setSelectedBust] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(
  window.matchMedia("(orientation: portrait)").matches
);
const [isInstagram, setIsInstagram] = useState(false);

useEffect(() => {
  const media = window.matchMedia("(orientation: portrait)");

  const handleChange = (e) => {
    setIsPortrait(e.matches);
  };

  media.addEventListener("change", handleChange);

  return () => {
    media.removeEventListener("change", handleChange);
  };
}, []);

useEffect(() => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  setIsInstagram(/Instagram/i.test(ua));
}, []);
  
useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  /* ===================== */
  /* MOBILE */
  /* ===================== */
/*
  
  if (isMobile) {
    return (
      <main
        style={{
          width: "100vw",
          height: "100vh",
          background: "#02050c",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "420px" }}>
          <h1
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.8rem",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            SUSPENDED IDENTITY
          </h1>

          <p
            style={{
              color: "#bbbbbb",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            This virtual exhibition has been designed exclusively for desktop viewing.
          </p>

          <p
            style={{
              marginTop: "2rem",
              color: "#777",
            }}
          >
            Please visit using a computer for the complete immersive experience.
          </p>
        </div>
      </main>
    );
  }
    */

  /* ===================== */
  /* GALLERY */
  /* ===================== */

  if (scene === "gallery") {
  if (isMobile && isPortrait) {

    if (isInstagram) {
      return (
    <main
      style={{
        width: "100vw",
        height: "100dvh",
        background: "#02050c",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontFamily: "Cormorant Garamond",
          fontWeight: 400,
          fontSize: "2.3rem",
          letterSpacing: "0.15em",
          marginBottom: "3rem",
        }}
      >
        OPEN IN YOUR BROWSER
      </h1>

      <div
        style={{
          width: "180px",
          border: "1px solid rgba(255,255,255,.18)",
          borderRadius: "22px",
          padding: "18px",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.2rem",
            color: "#d6d6d6",
            fontSize: ".95rem",
            letterSpacing: ".08em",
          }}
        >
          <span>Instagram</span>
          <span
  style={{
    fontSize: "1.3rem",
    animation: "pulseDots 1.8s ease-in-out infinite",
  }}
>
  •••
</span>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.12)",
            paddingTop: "1rem",
            color: "white",
            fontSize: ".95rem",
            letterSpacing: ".06em",
          }}
        >
          Open in Browser
        </div>
      </div>

      <p
        style={{
          maxWidth: "320px",
          color: "#9b9b9b",
          lineHeight: "1.9",
          fontSize: ".95rem",
        }}
      >
        Instagram's built-in browser does not fully support this virtual exhibition.
        <br />
        <br />
        Tap <strong style={{ color: "white" }}>⋯</strong> and select
        <br />
        <strong style={{ color: "white" }}>Open in Browser</strong>.
      </p>
    </main>
  );
}
    return (
      <main
        style={{
          width: "100vw",
          height: "100dvh",
          background: "#02050c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 400,
            fontSize: "2.2rem",
            letterSpacing: "0.12em",
            marginBottom: "3rem",
          }}
        >
          ROTATE YOUR DEVICE
        </h1>

        <div className="rotate-phone">
          📱
        </div>
      </main>
    );
  }

  return (
    <GalleryScene
      onBustClick={(bustName) => {
        setSelectedBust(bustName);
        setScene("archive");
      }}
    />
  );
}
  /* ===================== */
  /* ARCHIVE */
  /* ===================== */

  if (scene === "archive") {
    return (
      <ArchiveScene
        selectedBust={selectedBust}
        onReturn={() => setScene("gallery")}
        onOpenSculpture={() => setScene("sculpture")}
        onOpenGallery={() => setScene("galleryArchive")}
      />
    );
  }

  /* ===================== */
  /* SCULPTURE */
  /* ===================== */

  if (scene === "sculpture") {
    return (
      <SculptureScene
        selectedBust={selectedBust}
        onReturn={() => setScene("archive")}
      />
    );
  }

  /* ===================== */
  /* GALLERY ARCHIVE */
  /* ===================== */

  if (scene === "galleryArchive") {
    return (
      <GalleryArchiveScene
        selectedBust={selectedBust}
        onReturn={() => setScene("archive")}
      />
    );
  }

  /* ===================== */
  /* PROJECT STATEMENT */
  /* ===================== */

  if (scene === "statement") {
    return (
      <main
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "#02050c",
          color: "white",
          padding: "8rem 20vw",
          boxSizing: "border-box",
          overflowY: "auto",
          lineHeight: "1.9",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "4rem",
            fontWeight: 400,
            marginBottom: "1rem",
          }}
        >
          FEMALE ADAPTATION
        </h1>

        <p
          style={{
            color: "#8f8f8f",
            letterSpacing: "0.2rem",
            marginBottom: "5rem",
          }}
        >
          Chapter I of Suspended Identity
        </p>

        <p>
          <i>Female Adaptation</i> combines sculpture and photography to explore the relationship between identity and social conformity, focusing in particular on the female experience within contemporary image culture.
        </p>

        <p>
          The project emerged from the observation that, rather than shaping the systems we create around human complexity and diversity, individuals increasingly find themselves adapting to structures that demand uniformity, performance and constant transformation, creating a growing distance between who we are and who we feel we must become in order to be accepted.
        </p>

        <p>
          The sculptural works materialize this tension through wearable busts that function less as protective shells and more as cultural masks. Their surfaces appear solid yet fragile, marked by fractures, irregularities and transparencies through which traces of an authentic identity remain visible.
        </p>

        <p>
          Photography explores the emotional consequences of this adaptation. Bodies are placed within environments that generate a subtle tension between familiarity and estrangement, presence and absence, belonging and disconnection.
        </p>

        <p>
          The project unfolds across a series of cities that act as chapters of the same investigation. Each city introduces new sculptures, new bodies and new environments while remaining part of a broader reflection on identity, conformity and resistance.
        </p>

        <p>
          At its core, <i>Female Adaptation</i> is not a critique of the individual, but of the social mechanisms that transform uniqueness into deviation and conformity into virtue, encouraging forms of self-erasure in exchange for acceptance and belonging.
        </p>

        <button
          onClick={() => setScene("landing")}
          style={{
            marginTop: "5rem",
            padding: "1rem 2rem",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "white",
            cursor: "pointer",
            letterSpacing: "0.2rem",
          }}
        >
          RETURN TO ENTRANCE
        </button>
      </main>
    );
  }

  /* ===================== */
  /* LANDING */
  /* ===================== */

  return (
    <main className="landing">
      <div className="fog"></div>

      <h1>SUSPENDED IDENTITY</h1>

      <p className="subtitle">
        FEMALE ADAPTATION
      </p>

      <button
        className="enter-button"
        style={{ marginBottom: "0.5rem" }}
        onClick={() => setScene("statement")}
      >
        PROJECT STATEMENT
      </button>

      <button
        className="enter-button"
        onClick={() => setScene("gallery")}
      >
        ENTER THE EXHIBITION
      </button>
    </main>
  );
}

export default App;
