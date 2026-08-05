import { useState } from "react";

export default function LandscapeSculptureLayout({
  sculpture,
  selectedImage,
  images,
  fullscreenIndex,
  setFullscreenIndex,
  previousImage,
  nextImage,
  onReturn,
  onAcquire,
  onRequestInfo,
}) {
const [showInfo, setShowInfo] = useState(false);
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#02050c",
        color: "white",
        display: "flex",
        padding: "2rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* SINISTRA */}

      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={onReturn}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        {selectedImage && (
          <img
  src={selectedImage.src}
  alt={selectedImage.label}
  onClick={() =>
    setFullscreenIndex(
      images.findIndex(
        (img) => img.label === selectedImage.label
      )
    )
  }
  style={{
    width: "100%",
    height: "80vh",
    objectFit: "contain",
    cursor: "zoom-in",
  }}
/>
        )}
      </section>

      {/* DESTRA */}

      <section
        style={{
  width: "360px",
  height: "100%",
  paddingLeft: "2rem",
  paddingBottom: "3rem",
  overflowY: "auto",
  boxSizing: "border-box",
}}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 400,
            marginBottom: ".5rem",
          }}
        >
          {sculpture.code}
        </h1>

        <p
          style={{
            color: "#888",
            marginBottom: "2rem",
          }}
        >
          {sculpture.year}
        </p>

       {!showInfo ? (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "2rem",
    }}
  >
    <button
      onClick={() => setShowInfo(true)}
      style={{
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,.35)",
        padding: "14px",
        cursor: "pointer",
        letterSpacing: ".08em",
        fontSize: ".78rem",
        textTransform: "uppercase",
      }}
    >
      INFO ABOUT THIS SCULPTURE
    </button>

    <button
      onClick={onAcquire}
      style={{
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,.35)",
        padding: "14px",
        cursor: "pointer",
        letterSpacing: ".08em",
        fontSize: ".78rem",
        textTransform: "uppercase",
      }}
    >
      ACQUIRE SCULPTURE
    </button>

    <button
      onClick={onRequestInfo}
      style={{
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,.35)",
        padding: "14px",
        cursor: "pointer",
        letterSpacing: ".08em",
        fontSize: ".78rem",
        textTransform: "uppercase",
      }}
    >
      REQUEST INFORMATION
    </button>
  </div>
) : (
  <div
    style={{
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
      lineHeight: 1.6,
    }}
  >
    <div>
      <strong>MATERIALS</strong>
      <br />
      Epoxy Resin · Steel Wire Structure
    </div>

    <div>
      <strong>DIMENSIONS</strong>
      <br />
      117 × 42 × 20 cm
    </div>

    <div>
      <strong>DISPLAY SYSTEM</strong>
      <br />
      Wall Suspended Display
    </div>

    <div>
      <strong>EDITION</strong>
      <br />
      Unique Piece
    </div>

    <div>
      <strong>AVAILABILITY</strong>
      <br />
      Available
    </div>

    <button
      onClick={() => setShowInfo(false)}
      style={{
        marginTop: "1rem",
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,.35)",
        padding: "14px",
        cursor: "pointer",
        letterSpacing: ".08em",
        fontSize: ".78rem",
        textTransform: "uppercase",
      }}
    >
      ← BACK
    </button>
  </div>
)}
      </section>
      {fullscreenIndex !== null && (
  <div
    onClick={() => setFullscreenIndex(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.96)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "40px",
      zIndex: 9999,
    }}
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        previousImage();
      }}
      style={{
        position: "absolute",
        left: "40px",
        fontSize: "4rem",
        background: "transparent",
        border: "none",
        color: "white",
        cursor: "pointer",
      }}
    >
      ‹
    </button>

    <img
      src={images[fullscreenIndex]?.src}
      alt={images[fullscreenIndex]?.label}
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "84vw",
        maxHeight: "76vh",
        objectFit: "contain",
      }}
    />

    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      style={{
        position: "absolute",
        right: "40px",
        fontSize: "4rem",
        background: "transparent",
        border: "none",
        color: "white",
        cursor: "pointer",
      }}
    >
      ›
    </button>

    <div
      style={{
        position: "absolute",
        bottom: "60px",
        color: "#aaa",
        letterSpacing: "0.2rem",
      }}
    >
      {images[fullscreenIndex]?.label} · {fullscreenIndex + 1} / {images.length}
    </div>
  </div>
)}
    </main>
  );
}
