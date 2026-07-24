import { useEffect, useState } from "react";

import gallery01 from "../assets/gallery/FA-001/fa001_gallery_01.avif";
import gallery02 from "../assets/gallery/FA-001/fa001_gallery_02.jpg";
import gallery03 from "../assets/gallery/FA-001/fa001_gallery_03.jpg";
import gallery04 from "../assets/gallery/FA-001/fa001_gallery_04.jpg";
import gallery05 from "../assets/gallery/FA-001/fa001_gallery_05.jpg";

import gallery201 from "../assets/gallery/FA-002/fa002_gallery_01.avif";
import gallery202 from "../assets/gallery/FA-002/fa002_gallery_02.avif";
import gallery203 from "../assets/gallery/FA-002/fa002_gallery_03.avif";
import gallery204 from "../assets/gallery/FA-002/fa002_gallery_04.avif";
import gallery205 from "../assets/gallery/FA-002/fa002_gallery_05.avif";

const photographs = {
  "FA-001": [
    {
  image: gallery01,
  title: "FEMALE ADAPTATION 01",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
  edition: 5,
  available: 5,
},

    {
      image: gallery02,
      title: "FEMALE ADAPTATION 02",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
      edition: 5,
      available: 5,
    },

    {
      image: gallery03,
      title: "FEMALE ADAPTATION 03",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
      edition: 5,
      available: 5,
    },

    {
      image: gallery04,
      title: "FEMALE ADAPTATION 04",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
      edition: 5,
      available: 5,
    },

    {
      image: gallery05,
      title: "FEMALE ADAPTATION 05",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
      edition: 5,
      available: 5,
    },
  ],

 "FA-002": [

  {
  image: gallery201,
  title: "FEMALE ADAPTATION 06",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
  edition: 5,
  available: 5,
},

{
  image: gallery202,
  title: "FEMALE ADAPTATION 07",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
  edition: 5,
  available: 5,
},

{
  image: gallery203,
  title: "FEMALE ADAPTATION 08",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
  edition: 5,
  available: 5,
},

{
  image: gallery204,
  title: "FEMALE ADAPTATION 09",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
  edition: 5,
  available: 5,
},

{
  image: gallery205,
  title: "FEMALE ADAPTATION 10",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: ["40 × 60 cm", "70 × 100 cm", "100 × 150 cm"],
  edition: 5,
  available: 5,
},
],

};

export default function GalleryArchiveScene({
  selectedBust,
  onReturn,
}) {
  const [currentImage, setCurrentImage] = useState(0);
const [fullscreen, setFullscreen] = useState(false);
const [showInfo, setShowInfo] = useState(false);

  const photographsList = photographs[selectedBust] || [];

console.log(selectedBust);

const currentPhoto = photographsList[currentImage];

  const images = photographsList.map((photo) => photo.image);

  useEffect(() => {
    setCurrentImage(0);
  }, [selectedBust]);

  const previousImage = () => {
  setShowInfo(false);

  setCurrentImage((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

  const nextImage = () => {
  setShowInfo(false);

  setCurrentImage((prev) =>
    prev === images.length - 1 ? 0 : prev + 1
  );
};

  useEffect(() => {
    const handleKey = (e) => {
      if (!fullscreen) return;

      if (e.key === "Escape") setFullscreen(false);

      if (e.key === "ArrowLeft") previousImage();

      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [fullscreen, images.length]);

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#02050c",
        color: "white",
        padding: "120px 80px",
        boxSizing: "border-box",
      }}
    >
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
          zIndex: 100,
        }}
      >
        ←
      </button>

      <div
  style={{
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    minHeight: "calc(100vh - 240px)",

    display: "flex",
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    gap: "6rem",
  }}
>

<div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5rem",
  }}
>
  {/* COLONNA FOTO */}

  <div
    style={{
      flex: "0 0 55%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={currentPhoto.image}
      alt={currentPhoto.title}
      onClick={() => setFullscreen(true)}
      style={{
        width: "100%",
        maxWidth: "760px",
        maxHeight: "68vh",
        objectFit: "contain",
        cursor: "zoom-in",
        background: "#000",
        boxShadow: "0 20px 80px rgba(0,0,0,.45)",
      }}
    />
  </div>

  {/* COLONNA DESTRA */}

  <div
    style={{
      flex: "0 0 360px",
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
    }}
  >
    <h2
      style={{
        margin: 0,
        fontFamily: "Cormorant Garamond",
        fontSize: "2.3rem",
        fontWeight: 400,
      }}
    >
      {currentPhoto.title}
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <button
        onClick={previousImage}
        style={buttonStyle}
      >
        ◀
      </button>

      <span>
        {currentImage + 1} / {photographsList.length}
      </span>

      <button
        onClick={nextImage}
        style={buttonStyle}
      >
        ▶
      </button>
    </div>

    <button
  style={buttonStyle}
  onClick={() => setShowInfo(!showInfo)}
>
  INFO ABOUT THIS PRINT
</button>

{showInfo && (
  <div
    style={{
      border: "1px solid rgba(255,255,255,.15)",
      padding: "1.5rem",
      fontSize: ".95rem",
      lineHeight: 1.8,

      maxHeight: "260px",
      overflowY: "auto",
    }}
  >
    <p style={{ margin: 0, opacity: .6 }}>
    Year
  </p>

  <p style={{ marginTop: ".25rem" }}>
    {currentPhoto.year}
  </p>

  <p style={{ marginTop: ".25rem" }}>
    {currentPhoto.location}
  </p>

  <p style={{ marginTop: "1.5rem", opacity: .6 }}>
    Medium
  </p>

  <p style={{ marginTop: ".25rem" }}>
    {currentPhoto.medium}
  </p>

<p style={{ marginTop: "1.5rem", opacity: .6 }}>
  Available Sizes
</p>

{currentPhoto.sizes.map((size) => (
  <p
    key={size}
    style={{ margin: "0.2rem 0" }}
  >
    {size}
  </p>
))}

<p style={{ marginTop: "1.5rem", opacity: .6 }}>
  Limited Edition
</p>

<p style={{ marginTop: ".25rem" }}>
  {currentPhoto.edition} Prints Total
</p>

<p style={{ marginTop: "1.5rem", opacity: .6 }}>
  Availability
</p>

<p style={{ marginTop: ".25rem" }}>
  {currentPhoto.available} Available
</p>

<p style={{ marginTop: "1.5rem", opacity: .6 }}>
  Certificate
</p>

<p style={{ marginTop: ".25rem" }}>
  Signed and Numbered
</p>

<p style={{ margin: 0 }}>
  Certificate of Authenticity Included
</p>

  </div>
)}

    <button
  style={buttonStyle}
  onClick={() =>
    (window.location.href =
      `mailto:sofiasantiphoto@gmail.com?subject=Acquire Print - ${encodeURIComponent(currentPhoto.title)}`)
  }
>
  ACQUIRE PRINT
</button>

    <button
      style={buttonStyle}
      onClick={() =>
        (window.location.href =
          "mailto:sofiasantiphoto@gmail.com?subject=Photography Information")
      }
    >
      REQUEST INFORMATION
    </button>
  </div>
</div>

      </div>

      {fullscreen && (
        <div
          onClick={() => setFullscreen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.96)",
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
            style={arrowLeft}
          >
            ‹
          </button>

          <img
            src={images[currentImage]}
            alt=""
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
            style={arrowRight}
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              bottom: "40px",
              color: "#aaa",
              letterSpacing: ".2rem",
            }}
          >
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}

const buttonStyle = {
  padding: "1rem 2rem",
  background: "transparent",
  border: "1px solid rgba(255,255,255,.2)",
  color: "white",
  cursor: "pointer",
  letterSpacing: ".2rem",
};

const arrowLeft = {
  position: "absolute",
  left: "40px",
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "4rem",
  cursor: "pointer",
};

const arrowRight = {
  position: "absolute",
  right: "40px",
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "4rem",
  cursor: "pointer",
};
