import { useState } from "react";
export default function DesktopSculptureLayout({
  sculpture,
  selectedImage,
  setSelectedImage,
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
        justifyContent: "center",
        alignItems: "center",

        overflow: "hidden",
      }}
    >
      <div
  style={{
    width: "1350px",

    display: "grid",
    gridTemplateColumns: "40px 720px 360px",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "24px",
  }}
>
    <button
  onClick={onReturn}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateX(-4px)";
    e.currentTarget.style.color = "#ffffff";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateX(0)";
    e.currentTarget.style.color = "rgba(255,255,255,0.75)";
  }}
  style={{
    alignSelf: "start",
justifySelf: "end",

marginTop: "120px",
    background: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.75)",
    fontSize: "2rem",
    cursor: "pointer",
    transition: "0.25s",
  }}
>
  ←
</button>

        {/* IMMAGINE */}

        <div
          style={{
            flex: 1,

            display: "flex",
            justifyContent: "center",
          }}
        >
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
      maxWidth: "760px",
      maxHeight: "82vh",
      objectFit: "contain",

      cursor: "zoom-in",
    }}
  />
)}
        </div>

        {/* INFO */}

        <div
  style={{
    width: "360px",
    height: "82vh",
    display: "flex",
    flexDirection: "column",

      marginTop: "120px",
  }}
>
          <h1
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "4rem",
              fontWeight: 400,
            }}
          >
            {sculpture.code}
          </h1>

          <p>{sculpture.year}</p>
          <div
  style={{
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  }}
>
  <button
  onClick={() => setShowInfo(!showInfo)}
  style={buttonStyle}
>
  INFO ABOUT THIS SCULPTURE
</button>

<button
  onClick={onAcquire}
  style={buttonStyle}
>
  ACQUIRE SCULPTURE
</button>

<button
  onClick={onRequestInfo}
  style={buttonStyle}
>
  REQUEST INFORMATION
</button>
</div>
{showInfo && (
  <div
    style={{
      marginTop: "40px",
      flex: 1,
      overflowY: "auto",
      paddingRight: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }}
  >
    <Section
      title="Materials"
      value={sculpture.materials}
    />

    <Section
      title="Dimensions"
      value={sculpture.dimensions}
    />

    <Section
      title="Display System"
      value={sculpture.displaySystem}
    />

    <Section
      title="Edition"
      value={sculpture.edition}
    />

    <Section
      title="Availability"
      value={sculpture.status}
    />
  </div>
)}
        </div>
      </div>

      
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
      alignItems: "center",

      zIndex: 9999,
    }}
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        previousImage();
      }}
      style={arrowStyleLeft}
    >
      ‹
    </button>

    <img
      src={images[fullscreenIndex]?.src}
      alt={images[fullscreenIndex]?.label}
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "92vw",
        maxHeight: "92vh",
        objectFit: "contain",
      }}
    />

    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      style={arrowStyleRight}
    >
      ›
    </button>

    <div
      style={{
        position: "absolute",
        bottom: "40px",

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
const buttonStyle = {
  width: "100%",
  padding: "18px",

  background: "transparent",

  border: "1px solid rgba(255,255,255,0.18)",

  color: "white",

  letterSpacing: "0.18rem",

  fontSize: "0.82rem",

  cursor: "pointer",

  transition: "0.25s",
};
const arrowStyleLeft = {
  position: "absolute",
  left: "40px",

  fontSize: "4rem",

  background: "transparent",
  border: "none",

  color: "white",

  cursor: "pointer",
};

const arrowStyleRight = {
  position: "absolute",
  right: "40px",

  fontSize: "4rem",

  background: "transparent",
  border: "none",

  color: "white",

  cursor: "pointer",
};
function Section({ title, value }) {
  return (
    <div
      style={{
        marginBottom: "1.8rem",
      }}
    >
      <p
        style={{
          color: "#777",
          letterSpacing: "0.22rem",
          fontSize: "0.75rem",
          marginBottom: "0.5rem",
        }}
      >
        {title.toUpperCase()}
      </p>

      <p
        style={{
          color: "#d5d5d5",
          lineHeight: 1.6,
        }}
      >
        {value}
      </p>
    </div>
  );
}
