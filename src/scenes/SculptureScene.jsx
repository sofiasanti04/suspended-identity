import { useState, useEffect } from "react";
import archiveData from "../data/archiveData";

const sculptureImages = import.meta.glob(
  "../assets/sculptures/*/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default"
  }
);

export default function SculptureScene({
  selectedBust,
  onReturn
}) {
  const sculpture = archiveData[selectedBust];

  const imageLabels = {
    front: "FRONT",
    "three-quarters": "THREE QUARTERS",
    "side-1": "SIDE I",
    "side-2": "SIDE II",
    back: "BACK",

    "pedestal-1": "PEDESTAL I",
    "pedestal-2": "PEDESTAL II",

    "belt-detail-1": "BELT DETAIL I",
    "belt-detail-2": "BELT DETAIL II",

    detail: "HEAD DETAIL",
    "side-detail-1": "BODY DETAIL I",
    "side-detail-2": "BODY DETAIL II"
  };

  const order = {
    FRONT: 0,
    "THREE QUARTERS": 1,
    "SIDE I": 2,
    "SIDE II": 3,
    BACK: 4,
    "PEDESTAL I": 5,
    "PEDESTAL II": 6,
    "BELT DETAIL I": 7,
    "BELT DETAIL II": 8,
    "HEAD DETAIL": 9,
    "BODY DETAIL I": 10,
    "BODY DETAIL II": 11
  };

  const images = Object.entries(sculptureImages)
    .filter(([path]) =>
      path.includes(`/sculptures/${selectedBust}/`)
    )
    .map(([path, src]) => {
      const filename = path
        .split("/")
        .pop()
        .replace(/\.(jpg|jpeg|png)$/i, "");

      return {
        label:
          imageLabels[filename] ||
          filename.toUpperCase(),
        src
      };
    })
    .sort(
      (a, b) =>
        order[a.label] - order[b.label]
    );

  const [selectedImage, setSelectedImage] =
    useState(null);

  useEffect(() => {
    if (images.length > 0) {
      const frontImage = images.find(
        (img) => img.label === "FRONT"
      );

      setSelectedImage(
        frontImage || images[0]
      );
    }
  }, [selectedBust]);

  const [fullscreenIndex, setFullscreenIndex] =
    useState(null);

  const previousImage = () => {
    setFullscreenIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  const nextImage = () => {
    setFullscreenIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullscreenIndex === null) return;

      if (e.key === "Escape") {
        setFullscreenIndex(null);
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [fullscreenIndex]);

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#02050c",
        color: "white",
        padding: "5rem",
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5rem",
          alignItems: "flex-start"
        }}
      >
        {/* COLONNA SINISTRA */}

        <div
          style={{
            flex: 1
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              onClick={() =>
                setFullscreenIndex(
                  images.findIndex(
                    (img) =>
                      img.label ===
                      selectedImage.label
                  )
                )
              }
              style={{
                width: "100%",
                height: "620px",
                objectFit: "contain",
                background: "#000",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                cursor: "zoom-in"
              }}
            />
          )}

          {/* MINIATURE */}

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1.5rem",
              marginBottom: "6rem",
              overflowX: "auto",
              paddingBottom: "1rem"
            }}
          >
            {images.map((image) => (
              <div
                key={image.label}
                onClick={() =>
                  setSelectedImage(image)
                }
                style={{
                  minWidth: "90px",
                  height: "100px",
                  background: "#0b0b0b",
                  border:
                    selectedImage?.label ===
                    image.label
                      ? "1px solid rgba(255,255,255,0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                  flexShrink: 0,
                  overflow: "hidden"
                }}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* COLONNA DESTRA */}

        <div
          style={{
            width: "420px",
            position: "sticky",
            top: "5rem",
            alignSelf: "flex-start"
          }}
        >
          <p
            style={{
              color: "#9f9f9f",
              letterSpacing: "0.4rem",
              marginBottom: "1rem"
            }}
          >
            SCULPTURE
          </p>

          <h1
            style={{
              fontFamily:
                "Cormorant Garamond",
              fontSize: "4rem",
              fontWeight: 400,
              marginBottom: "1rem"
            }}
          >
            {sculpture.code}
          </h1>

          <p
            style={{
              color: "#8f8f8f",
              marginBottom: "4rem"
            }}
          >
            {sculpture.city} · {sculpture.year}
          </p>

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

          <button
            onClick={() =>
              window.location.href =
                `mailto:sofiasantiphoto@gmail.com?subject=Acquisition Request — ${sculpture.code}`
            }
            style={{
              ...buttonStyle,
              border:
                "1px solid rgba(255,255,255,0.45)"
            }}
          >
            ACQUIRE SCULPTURE
          </button>

          <button
            onClick={() =>
              window.location.href =
                `mailto:sofiasantiphoto@gmail.com?subject=Information Request — ${sculpture.code}`
            }
            style={buttonStyle}
          >
            REQUEST INFORMATION
          </button>

         <button
  onClick={onReturn}
  style={{
    position: "fixed",
    top: "120px",
    left: "120px",

    width: "48px",
    height: "48px",

    background: "transparent",
    border: "none",

    color: "rgba(255,255,255,0.7)",
    fontSize: "2rem",

    cursor: "pointer",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 9999,

    transition: "0.25s"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateX(-4px)";
    e.currentTarget.style.color = "#ffffff";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateX(0)";
    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
  }}
>
  ←
</button>
        </div>
      </div>

      {/* FULLSCREEN */}

      {fullscreenIndex !== null && (
        <div
          onClick={() =>
            setFullscreenIndex(null)
          }
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background:
              "rgba(0,0,0,0.96)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
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
            src={
              images[fullscreenIndex]?.src
            }
            alt={
              images[fullscreenIndex]?.label
            }
            onClick={(e) =>
              e.stopPropagation()
            }
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
              objectFit: "contain"
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
              letterSpacing: "0.2rem"
            }}
          >
            {
              images[fullscreenIndex]
                ?.label
            }{" "}
            ·{" "}
            {fullscreenIndex + 1} /{" "}
            {images.length}
          </div>
        </div>
      )}
    </main>
  );
}

function Section({
  title,
  value
}) {
  return (
    <div
      style={{
        marginBottom: "2rem"
      }}
    >
      <p
        style={{
          color: "#777",
          letterSpacing: "0.25rem",
          marginBottom: "0.5rem",
          fontSize: "0.75rem"
        }}
      >
        {title.toUpperCase()}
      </p>

      <p
        style={{
          color: "#d5d5d5"
        }}
      >
        {value}
      </p>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "1rem",
  background: "transparent",
  border:
    "1px solid rgba(255,255,255,0.18)",
  color: "white",
  cursor: "pointer",
  marginTop: "1rem",
  letterSpacing: "0.2rem"
};

const arrowStyleLeft = {
  position: "absolute",
  left: "40px",
  fontSize: "4rem",
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer"
};

const arrowStyleRight = {
  position: "absolute",
  right: "40px",
  fontSize: "4rem",
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer"
};
