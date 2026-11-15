import { useEffect, useState } from "react";
import useResponsive from "../hooks/useResponsive";

import gallery01 from "../assets/gallery/FA-001/fa001_gallery_01.avif";
import gallery02 from "../assets/gallery/FA-001/fa001_gallery_02.avif";
import gallery03 from "../assets/gallery/FA-001/fa001_gallery_03.avif";
import gallery04 from "../assets/gallery/FA-001/fa001_gallery_04.avif";
import gallery05 from "../assets/gallery/FA-001/fa001_gallery_05.avif";

import gallery201 from "../assets/gallery/FA-002/fa002_gallery_01.avif";
import gallery202 from "../assets/gallery/FA-002/fa002_gallery_02.avif";
import gallery203 from "../assets/gallery/FA-002/fa002_gallery_03.avif";
import gallery204 from "../assets/gallery/FA-002/fa002_gallery_04.avif";
import gallery205 from "../assets/gallery/FA-002/fa002_gallery_05.avif";

import gallery301 from "../assets/gallery/FA-003/fa003_gallery_01.avif";
import gallery302 from "../assets/gallery/FA-003/fa003_gallery_02.avif";
import gallery303 from "../assets/gallery/FA-003/fa003_gallery_03.avif";
import gallery304 from "../assets/gallery/FA-003/fa003_gallery_04.avif";

import gallery401 from "../assets/gallery/FA-004/fa004_gallery_01.avif";
import gallery402 from "../assets/gallery/FA-004/fa004_gallery_02.avif";
import gallery403 from "../assets/gallery/FA-004/fa004_gallery_03.avif";

import gallery501 from "../assets/gallery/FA-005/fa005_gallery_01.avif";
import gallery502 from "../assets/gallery/FA-005/fa005_gallery_02.avif";
import gallery503 from "../assets/gallery/FA-005/fa005_gallery_03.avif";
import gallery504 from "../assets/gallery/FA-005/fa005_gallery_04.avif";

import gallery601 from "../assets/gallery/FA-006/fa006_gallery_01.avif";
import gallery602 from "../assets/gallery/FA-006/fa006_gallery_02.avif";
import gallery603 from "../assets/gallery/FA-006/fa006_gallery_03.avif";
import gallery604 from "../assets/gallery/FA-006/fa006_gallery_04.avif";
import gallery605 from "../assets/gallery/FA-006/fa006_gallery_05.avif";
import gallery606 from "../assets/gallery/FA-006/fa006_gallery_06.avif";

import gallery701 from "../assets/gallery/FA-007/fa007_gallery_01.avif";
import gallery702 from "../assets/gallery/FA-007/fa007_gallery_02.avif";
import gallery703 from "../assets/gallery/FA-007/fa007_gallery_03.avif";
import gallery704 from "../assets/gallery/FA-007/fa007_gallery_04.avif";
import gallery705 from "../assets/gallery/FA-007/fa007_gallery_05.avif";

import gallery801 from "../assets/gallery/FA-008/fa008_gallery_01.avif";
import gallery802 from "../assets/gallery/FA-008/fa008_gallery_02.avif";
import gallery803 from "../assets/gallery/FA-008/fa008_gallery_03.avif";
import gallery804 from "../assets/gallery/FA-008/fa008_gallery_04.avif";
import gallery805 from "../assets/gallery/FA-008/fa008_gallery_05.avif";

const photographs = {
  "FA-001": [
    {
  image: gallery01,
  title: "FEMALE ADAPTATION 01",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
  edition: 3,
  available: 3,
},

    {
      image: gallery02,
      title: "FEMALE ADAPTATION 02",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery03,
      title: "FEMALE ADAPTATION 03",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery04,
      title: "FEMALE ADAPTATION 04",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery05,
      title: "FEMALE ADAPTATION 05",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },
  ],

 "FA-002": [

  {
  image: gallery201,
  title: "FEMALE ADAPTATION 06",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
  edition: 3,
  available: 3,
},

{
  image: gallery202,
  title: "FEMALE ADAPTATION 07",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
  edition: 3,
  available: 3,
},

{
  image: gallery203,
  title: "FEMALE ADAPTATION 08",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
  edition: 3,
  available: 3,
},

{
  image: gallery204,
  title: "FEMALE ADAPTATION 09",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
  edition: 3,
  available: 3,
},

{
  image: gallery205,
  title: "FEMALE ADAPTATION 10",
  year: 2026,
  medium: "Archival Pigment Print",
  sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
  edition: 3,
  available: 3,
},
],

  "FA-003": [
    {
      image: gallery301,
      title: "FEMALE ADAPTATION 11",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery302,
      title: "FEMALE ADAPTATION 12",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery303,
      title: "FEMALE ADAPTATION 13",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery304,
      title: "FEMALE ADAPTATION 14",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },
  ],

    "FA-004": [

    {
      image: gallery401,
      title: "FEMALE ADAPTATION 16",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery402,
      title: "FEMALE ADAPTATION 17",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery403,
      title: "FEMALE ADAPTATION 18",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

  ],

    "FA-005": [

    {
      image: gallery501,
      title: "FEMALE ADAPTATION 19",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery502,
      title: "FEMALE ADAPTATION 20",
      year: 2026,
      medium: "Archival Pigment Print",
     sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery503,
      title: "FEMALE ADAPTATION 21",
      year: 2026,
      medium: "Archival Pigment Print",
      sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

    {
      image: gallery504,
      title: "FEMALE ADAPTATION 22",
      year: 2026,
      medium: "Archival Pigment Print",
     sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
      edition: 3,
      available: 3,
    },

  ],

  "FA-006": [
  {
    image: gallery601,
    title: "FEMALE ADAPTATION 23",
    year: 2026,
    medium: "Archival Pigment Print",
    sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
    edition: 3,
    available: 3,
  },
  {
    image: gallery602,
    title: "FEMALE ADAPTATION 24",
    year: 2026,
    medium: "Archival Pigment Print",
    sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],
    edition: 3,
    available: 3,
  },
  {
    image: gallery603,
    title: "FEMALE ADAPTATION 25",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery604,
    title: "FEMALE ADAPTATION 26",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery605,
    title: "FEMALE ADAPTATION 27",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery606,
    title: "FEMALE ADAPTATION 28",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
],


"FA-007": [
  {
    image: gallery701,
    title: "FEMALE ADAPTATION 29",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery702,
    title: "FEMALE ADAPTATION 30",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery703,
    title: "FEMALE ADAPTATION 31",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery704,
    title: "FEMALE ADAPTATION 32",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery705,
    title: "FEMALE ADAPTATION 33",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
],


"FA-008": [
  {
    image: gallery801,
    title: "FEMALE ADAPTATION 34",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery802,
    title: "FEMALE ADAPTATION 35",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery803,
    title: "FEMALE ADAPTATION 36",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery804,
    title: "FEMALE ADAPTATION 37",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
  {
    image: gallery805,
    title: "FEMALE ADAPTATION 38",
    year: 2026,
    medium: "Archival Pigment Print",
sizes: [
  { label: "30 × 45 cm", price: 85 },
  { label: "40 × 60 cm", price: 130 },
  { label: "70 × 100 cm", price: 240 },
  { label: "100 × 150 cm", price: 350 },
],    edition: 3,
    available: 3,
  },
],


};

export default function GalleryArchiveScene({
  selectedBust,
  onReturn,
  initialImageIndex = 0,
  favorites = [],
  onToggleFavorite,
  addToCart,
  onOpenCart,
}) {

const [currentImage, setCurrentImage] = useState(initialImageIndex);
const [fullscreen, setFullscreen] = useState(false);
const [showInfo, setShowInfo] = useState(false);
const [showExplore, setShowExplore] = useState(false);
const {
  isMobile,
} = useResponsive();

  const photographsList = photographs[selectedBust] || [];

const currentPhoto = photographsList[currentImage];
const [selectedSize, setSelectedSize] = useState(0);
const [addedToCart, setAddedToCart] = useState(false);

  const images = photographsList.map((photo) => photo.image);

  useEffect(() => {
  setCurrentImage(initialImageIndex);
}, [selectedBust, initialImageIndex]);

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

if (showExplore) {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        background: "#02050c",
        color: "white",
        padding: isMobile ? "28px 24px 50px" : "55px 6vw",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={() => {
          setShowExplore(false);
          setShowInfo(false);
        }}
        style={{
          ...buttonStyle,
          padding: "12px 0",
          border: "none",
          fontSize: ".8rem",
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        ← BACK TO PRINT
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? "2.5rem" : "6vw",
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {/* PHOTOGRAPH */}

        <div
          style={{
            width: isMobile ? "100%" : "52%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: isMobile ? "relative" : "sticky",
            top: isMobile ? "auto" : "30px",
          }}
        >
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            onClick={() => setFullscreen(true)}
            style={{
              width: "100%",
              maxHeight: isMobile ? "65vh" : "78vh",
              objectFit: "contain",
              cursor: "zoom-in",
            }}
          />

          <h2
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 400,
              fontSize: "2rem",
              marginTop: "1.5rem",
              textAlign: "center",
            }}
          >
            {currentPhoto.title}
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              marginTop: ".5rem",
            }}
          >
            <button onClick={previousImage} style={buttonStyle}>
              ◀
            </button>

            <span>
              {currentImage + 1} / {photographsList.length}
            </span>

            <button onClick={nextImage} style={buttonStyle}>
              ▶
            </button>
          </div>
        </div>

        {/* PRINT OPTIONS AND SERVICES */}

        <div
          style={{
            width: isMobile ? "100%" : "min(100%, 520px)",
            flex: isMobile ? "none" : "1",
            fontSize: ".95rem",
            lineHeight: 1.8,
          }}
        >
          <p
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "1.5rem",
              margin: "0 0 1rem",
              letterSpacing: ".08rem",
            }}
          >
            PRINT SIZE
          </p>

          <p style={{ color: "#aaa" }}>
            Select your preferred print size.
          </p>

          {currentPhoto.sizes.map((size, index) => (
            <button
              key={size.label}
              onClick={() => setSelectedSize(index)}
              style={{
                width: "100%",
                padding: "14px 0",
                display: "flex",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,.15)",
                color: selectedSize === index ? "#fff" : "#999",
                cursor: "pointer",
                textAlign: "left",
                font: "inherit",
              }}
            >
              {selectedSize === index ? "✓ " : ""}
              {size.label}
            </button>
          ))}

          <div
            style={{
              marginTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,.15)",
              paddingTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "1.3rem",
                margin: 0,
              }}
            >
              PAPER
            </p>
            <p style={{ color: "#aaa" }}>
              Paper type to be confirmed.
            </p>
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              fontSize: "1.5rem",
              fontFamily: "Cormorant Garamond",
            }}
          >
            €{currentPhoto.sizes[selectedSize].price}
          </p>

          <button
            style={{ ...buttonStyle, width: "100%" }}
            onClick={() => {
              addToCart({
                type: "photo",
                code: selectedBust,
                index: currentImage,
                title: currentPhoto.title,
                image: currentPhoto.image,
                size: currentPhoto.sizes[selectedSize].label,
                price: currentPhoto.sizes[selectedSize].price,
              });

              setAddedToCart(true);
              setTimeout(() => setAddedToCart(false), 2000);
            }}
          >
            {addedToCart ? "ADDED TO CART ✓" : "ADD TO CART"}
          </button>

{/* SPECIAL CONSIDERATION */}

<div
  style={{
    marginTop: "1rem",
    paddingTop: 0,
    paddingBottom: "1rem",
    lineHeight: 1.7,
  }}
>
  <p style={{ color: "#aaa", marginBottom: ".75rem" }}>
    A special consideration for collectors acquiring multiple
    photographic prints.
  </p>

  <p>2 prints — 5%</p>
  <p>3 prints — 10%</p>
  <p>4 or more prints — 15%</p>
</div>

          {/* CUSTOM FRAMING */}

          <div
            style={{
              marginTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,.15)",
              paddingTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "1.3rem",
                margin: 0,
              }}
            >
              CUSTOM FRAMING
            </p>

            <div style={{ color: "#aaa" }}>
              <p>
                A frame developed specifically for the selected photograph,
                in dialogue with the visual language and concept of the project.
              </p>

              <p>
                Materials may include wood, epoxy resin, water-based resin,
                wire or combinations of these materials.
              </p>

              <p>
                Each frame is individually developed through a collaborative
                process, taking into consideration the collector's personal
                taste, aesthetic preferences and the characteristics of the
                selected photograph.
              </p>

              <p style={{ color: "white", marginTop: "1.5rem" }}>
                01 — PERSONAL CONSULTATION
              </p>
              <p>
                A conversation to explore your ideas, preferences and the
                relationship between the photograph and its frame.
              </p>

              <p style={{ color: "white" }}>
                02 — DESIGN DEVELOPMENT
              </p>
              <p>
                Dimensions, materials, colours and finishes are developed
                specifically for the selected artwork.
              </p>

              <p style={{ color: "white" }}>
                03 — CREATION PROCESS
              </p>
              <p>
                You will receive updates throughout the development and
                creation of your custom frame.
              </p>

              <p style={{ color: "white" }}>
                04 — INDIVIDUAL QUOTATION
              </p>
              <p>
                Each project is quoted individually according to its
                dimensions, materials, complexity and development time.
                Consultation and updates are included in the process.
              </p>
            </div>

            <button
              style={{
                ...buttonStyle,
                width: "100%",
                marginTop: "1rem",
                fontSize: ".75rem",
                lineHeight: 1.6,
              }}
              onClick={() =>
                (window.location.href =
                  `mailto:sofiasantiphoto@gmail.com?subject=${encodeURIComponent(
                    `Custom Framing — ${currentPhoto.title}`
                  )}&body=${encodeURIComponent(
                    `Hello,\n\nI would like to discuss a custom frame for ${currentPhoto.title} and request a quotation.\n\nI would be happy to share my ideas and preferences.\n\nThank you.`
                  )}`)
              }
            >
              DISCUSS YOUR CUSTOM FRAME & REQUEST A QUOTE
            </button>
          </div>

          {/* ARTWORK SELECTION CONSULTATION */}

          <div
            style={{
              marginTop: "3rem",
              borderTop: "1px solid rgba(255,255,255,.15)",
              paddingTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "1.3rem",
                margin: 0,
              }}
            >
              ARTWORK SELECTION CONSULTATION
            </p>

            <div style={{ color: "#aaa" }}>
              <p>
                Not sure which photograph would best suit your space or collection?
                You can request a personal consultation to explore the photographs
                that may best complement your interior, the atmosphere of a
                particular environment or an existing collection.
              </p>

              <p>
                Whether you are considering a single photograph or a selection
                of multiple works, we can discuss possible combinations,
                visual relationships and placement.
              </p>
            </div>

            <button
              style={{
                ...buttonStyle,
                width: "100%",
                marginTop: "1rem",
                fontSize: ".75rem",
                lineHeight: 1.6,
              }}
              onClick={() =>
                (window.location.href =
                  `mailto:sofiasantiphoto@gmail.com?subject=${encodeURIComponent(
                    `Artwork Selection Consultation — ${currentPhoto.title}`
                  )}&body=${encodeURIComponent(
                    `Hello,\n\nI would like to request a personal consultation about selecting photographic artworks.\n\nThank you.`
                  )}`)
              }
            >
              REQUEST A PERSONAL CONSULTATION
            </button>
          </div>

          
        </div>
      </div>

      {/* FULLSCREEN IMAGE */}

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
  if (isMobile) {
  return (
    <main
      style={{
  position: "fixed",
  inset: 0,
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",

  background: "#02050c",
  color: "white",
}}
    >
      <div
        style={{
          position: "relative",
          padding: "90px 24px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <button
          onClick={onReturn}
          style={{
            alignSelf: "flex-start",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,.7)",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          ←
        </button>

<button
  onClick={() =>
    onToggleFavorite({
      type: "photo",
      code: selectedBust,
      index: currentImage,
      title: currentPhoto.title,
    })
  }
  style={{
    position: "absolute",
    top: "20px",
    right: "24px",
    width: "42px",
    height: "42px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: "50%",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: 1000,
  }}
>
  {favorites.some(
    (item) =>
      item.type === "photo" &&
      item.code === selectedBust &&
      item.index === currentImage
  )
    ? "♥"
    : "♡"}
</button>

<button
  onClick={onOpenCart}
  aria-label="Open cart"
  style={{
    position: "absolute",
    top: "20px",
    right: "76px",
    width: "42px",
    height: "42px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
  }}
>
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8h14l1 13H4L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
</button>

        <img
          src={currentPhoto.image}
          alt={currentPhoto.title}
          onClick={() => setFullscreen(true)}
          style={{
            width: "100%",
            maxWidth: "420px",
            objectFit: "contain",
            cursor: "zoom-in",
          }}
        />
        <h2
  style={{
    margin: 0,
    textAlign: "center",
    fontFamily: "Cormorant Garamond",
    fontSize: "2rem",
    fontWeight: 400,
  }}
>
  {currentPhoto.title}
</h2>

<div
  style={{
    width: "100%",
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
  style={{
    ...buttonStyle,
    width: "100%",
  }}
  onClick={() => setShowInfo(!showInfo)}
>
  INFO ABOUT THIS PRINT
</button>
{showInfo && (
  <div
    style={{
      width: "100%",
      border: "1px solid rgba(255,255,255,.15)",
      padding: "1.5rem",
      boxSizing: "border-box",
      fontSize: "1rem",
      lineHeight: 1.7,
      maxHeight: "65vh",
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
  style={{
    ...buttonStyle,
    width: "100%",
  }}
  onClick={() => {
    setShowInfo(false);
    setShowExplore(!showExplore);
  }}
>
  EXPLORE THIS PRINT
</button>

{showExplore && (
  <div
    style={{
      width: "100%",
      border: "1px solid rgba(255,255,255,.15)",
      padding: "1.5rem",
      boxSizing: "border-box",
      fontSize: "1rem",
      lineHeight: 1.7,
    }}
  >
    <p
      style={{
        margin: 0,
        fontFamily: "Cormorant Garamond",
        fontSize: "1.3rem",
        letterSpacing: ".08rem",
      }}
    >
      PRINT SIZE
    </p>

    <p style={{ color: "#aaa" }}>
      Select your preferred print size.
    </p>
    {currentPhoto.sizes.map((size, index) => (
  <button
    key={size.label}
    onClick={() => setSelectedSize(index)}
    style={{
      width: "100%",
      padding: "14px 0",
      display: "flex",
      justifyContent: "space-between",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,.15)",
      color: selectedSize === index ? "#ffffff" : "#999999",
      cursor: "pointer",
      textAlign: "left",
      font: "inherit",
    }}
  >
    <span>
      {selectedSize === index ? "✓ " : ""}
      {size.label}
    </span>
  </button>
))}
<div
  style={{
    marginTop: "2rem",
    borderTop: "1px solid rgba(255,255,255,.15)",
    paddingTop: "1.5rem",
  }}
>
  <p
    style={{
      margin: 0,
      fontFamily: "Cormorant Garamond",
      fontSize: "1.3rem",
      letterSpacing: ".08rem",
    }}
  >
    PAPER
  </p>

  <p style={{ color: "#aaa" }}>
    Paper type to be confirmed.
  </p>
</div>
<p
  style={{
    marginTop: "1.5rem",
    marginBottom: ".5rem",
    textAlign: "center",
    fontSize: "1.3rem",
    fontFamily: "Cormorant Garamond",
  }}
>
  €{currentPhoto.sizes[selectedSize].price}
</p>
<button
  style={{
    ...buttonStyle,
    width: "100%",
  }}
  onClick={() => {
  addToCart({
    type: "photo",
    code: selectedBust,
    index: currentImage,
    title: currentPhoto.title,
    image: currentPhoto.image,
    size: currentPhoto.sizes[selectedSize].label,
    price: currentPhoto.sizes[selectedSize].price,
  });

  setAddedToCart(true);

  setTimeout(() => {
    setAddedToCart(false);
  }, 2000);
}}
>
{addedToCart ? "ADDED TO CART ✓" : "ADD TO CART"}</button>
  <div
  style={{
    marginTop: "2.5rem",
    borderTop: "1px solid rgba(255,255,255,.15)",
    paddingTop: "1.5rem",
  }}
>
  <p
    style={{
      margin: 0,
      fontFamily: "Cormorant Garamond",
      fontSize: "1.3rem",
      letterSpacing: ".08rem",
    }}
  >
    CUSTOM FRAMING
  </p>

  <div style={{ color: "#aaa", lineHeight: 1.7 }}>
  <p>
    A frame developed specifically for the selected photograph,
    in dialogue with the visual language and concept of the project.
  </p>

  <p>
    Materials may include wood, epoxy resin, water-based resin,
    wire or combinations of these materials.
  </p>

  <p>
    Each frame is individually developed through a collaborative
    process, taking into consideration the collector's personal
    taste, aesthetic preferences and the characteristics of the
    selected photograph.
  </p>

  <p style={{ color: "white", marginTop: "1.5rem" }}>
    01 — PERSONAL CONSULTATION
  </p>
  <p>
    A conversation to explore your ideas, preferences and the
    relationship between the photograph and its frame.
  </p>

  <p style={{ color: "white" }}>
    02 — DESIGN DEVELOPMENT
  </p>
  <p>
    Dimensions, materials, colours and finishes are developed
    specifically for the selected artwork.
  </p>

  <p style={{ color: "white" }}>
    03 — CREATION PROCESS
  </p>
  <p>
    You will receive updates throughout the development and
    creation of your custom frame.
  </p>

    <p style={{ color: "white" }}>
    04 — INDIVIDUAL QUOTATION
  </p>
  <p>
    Each project is quoted individually according to its
    dimensions, materials, complexity and development time.
    Consultation and updates are included in the process.
  </p>

  <button
    style={{
      ...buttonStyle,
      width: "100%",
      marginTop: "1rem",
      fontSize: ".75rem",
      lineHeight: 1.6,
    }}
    onClick={() =>
      (window.location.href =
        `mailto:sofiasantiphoto@gmail.com?subject=${encodeURIComponent(
          `Custom Framing — ${currentPhoto.title}`
        )}&body=${encodeURIComponent(
          `Hello,\n\nI would like to discuss a custom frame for ${currentPhoto.title} and request a quotation.\n\nI would be happy to share my ideas and preferences.\n\nThank you.`
        )}`)
    }
  >
    DISCUSS YOUR CUSTOM FRAME & REQUEST A QUOTE
  </button>
  </div>
  </div>
  </div>
)}

<button
  style={{
    ...buttonStyle,
    width: "100%",
  }}
  onClick={() =>
    (window.location.href =
      "mailto:sofiasantiphoto@gmail.com?subject=Photography Information")
  }
>
  REQUEST INFORMATION
</button>
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

<button
  onClick={() =>
    onToggleFavorite({
      type: "photo",
      code: selectedBust,
      index: currentImage,
      title: currentPhoto.title,
    })
  }
  style={{
    position: "fixed",
    top: "120px",
    right: "120px",
    width: "42px",
    height: "42px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: "50%",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: 1000,
  }}
>
  {favorites.some(
    (item) =>
      item.type === "photo" &&
      item.code === selectedBust &&
      item.index === currentImage
  )
    ? "♥"
    : "♡"}
</button>

<button
  onClick={onOpenCart}
  aria-label="Open cart"
  style={{
    position: "fixed",
    top: "120px",
    right: "176px",
    width: "42px",
    height: "42px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
  }}
>
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8h14l1 13H4L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
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
      flex: "0 0 460px",
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

      maxHeight: "380px",
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
  onClick={() => {
    setShowInfo(false);
    setShowExplore(!showExplore);
  }}
>
  EXPLORE THIS PRINT
</button>

{showExplore && (
  <div
    style={{
      border: "1px solid rgba(255,255,255,.15)",
      padding: "1.5rem",
      fontSize: ".95rem",
      lineHeight: 1.8,
      maxHeight: "65vh",
      overflowY: "auto",
    }}
  >
    <p style={{ margin: 0, fontFamily: "Cormorant Garamond", fontSize: "1.3rem" }}>
      PRINT SIZE
    </p>

    <p style={{ color: "#aaa" }}>
      Select your preferred print size.
    </p>

    {currentPhoto.sizes.map((size, index) => (
      <button
        key={size.label}
        onClick={() => setSelectedSize(index)}
        style={{
          width: "100%",
          padding: "14px 0",
          display: "flex",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(255,255,255,.15)",
          color: selectedSize === index ? "#fff" : "#999",
          cursor: "pointer",
          textAlign: "left",
          font: "inherit",
        }}
      >
        {selectedSize === index ? "✓ " : ""}
        {size.label}
      </button>
    ))}

    <div style={{ marginTop: "2rem", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "1.5rem" }}>
      <p style={{ margin: 0, fontFamily: "Cormorant Garamond", fontSize: "1.3rem" }}>
        PAPER
      </p>
      <p style={{ color: "#aaa" }}>
        Paper type to be confirmed.
      </p>
    </div>

    <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "1.3rem", fontFamily: "Cormorant Garamond" }}>
      €{currentPhoto.sizes[selectedSize].price}
    </p>

    <button
      style={{ ...buttonStyle, width: "100%" }}
      onClick={() => {
        addToCart({
          type: "photo",
          code: selectedBust,
          index: currentImage,
          title: currentPhoto.title,
          image: currentPhoto.image,
          size: currentPhoto.sizes[selectedSize].label,
          price: currentPhoto.sizes[selectedSize].price,
        });

        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
      }}
    >
      {addedToCart ? "ADDED TO CART ✓" : "ADD TO CART"}
    </button>

    <div style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "1.5rem" }}>
      <p style={{ margin: 0, fontFamily: "Cormorant Garamond", fontSize: "1.3rem" }}>
        CUSTOM FRAMING
      </p>

      <div style={{ color: "#aaa" }}>
        <p>
          A frame developed specifically for the selected photograph,
          in dialogue with the visual language and concept of the project.
        </p>
        <p>
          Materials may include wood, epoxy resin, water-based resin,
          wire or combinations of these materials.
        </p>
        <p>
          Each frame is individually developed through a collaborative
          process, taking into consideration the collector's personal
          taste, aesthetic preferences and the characteristics of the
          selected photograph.
        </p>

        <p style={{ color: "white", marginTop: "1.5rem" }}>
          01 — PERSONAL CONSULTATION
        </p>
        <p>
          A conversation to explore your ideas, preferences and the
          relationship between the photograph and its frame.
        </p>

        <p style={{ color: "white" }}>02 — DESIGN DEVELOPMENT</p>
        <p>
          Dimensions, materials, colours and finishes are developed
          specifically for the selected artwork.
        </p>

        <p style={{ color: "white" }}>03 — CREATION PROCESS</p>
        <p>
          You will receive updates throughout the development and
          creation of your custom frame.
        </p>

        <p style={{ color: "white" }}>04 — INDIVIDUAL QUOTATION</p>
        <p>
          Each project is quoted individually according to its
          dimensions, materials, complexity and development time.
          Consultation and updates are included in the process.
        </p>
      </div>

      <button
        style={{ ...buttonStyle, width: "100%", marginTop: "1rem", fontSize: ".75rem", lineHeight: 1.6 }}
        onClick={() =>
          (window.location.href =
            `mailto:sofiasantiphoto@gmail.com?subject=${encodeURIComponent(
              `Custom Framing — ${currentPhoto.title}`
            )}&body=${encodeURIComponent(
              `Hello,\n\nI would like to discuss a custom frame for ${currentPhoto.title} and request a quotation.\n\nI would be happy to share my ideas and preferences.\n\nThank you.`
            )}`)
        }
      >
        DISCUSS YOUR CUSTOM FRAME & REQUEST A QUOTE
      </button>
    </div>

    <div style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "1.5rem" }}>
      <p style={{ margin: 0, fontFamily: "Cormorant Garamond", fontSize: "1.3rem" }}>
        ARTWORK SELECTION CONSULTATION
      </p>

      <div style={{ color: "#aaa" }}>
        <p>
          Not sure which photograph would best suit your space or collection?
          You can request a personal consultation to explore the photographs
          that may best complement your interior, the atmosphere of a
          particular environment or an existing collection.
        </p>
        <p>
          Whether you are considering a single photograph or a selection
          of multiple works, we can discuss possible combinations,
          visual relationships and placement.
        </p>
      </div>

      <button
        style={{ ...buttonStyle, width: "100%", marginTop: "1rem", fontSize: ".75rem", lineHeight: 1.6 }}
        onClick={() =>
          (window.location.href =
            `mailto:sofiasantiphoto@gmail.com?subject=${encodeURIComponent(
              `Artwork Selection Consultation — ${currentPhoto.title}`
            )}&body=${encodeURIComponent(
              `Hello,\n\nI would like to request a personal consultation about selecting photographic artworks.\n\nThank you.`
            )}`)
        }
      >
        REQUEST A PERSONAL CONSULTATION
      </button>
    </div>

    <div style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "1.5rem" }}>
      <p style={{ margin: 0, fontFamily: "Cormorant Garamond", fontSize: "1.3rem" }}>
        A SPECIAL CONSIDERATION
      </p>

      <p style={{ color: "#aaa" }}>
        A special consideration for collectors acquiring multiple photographic prints.
      </p>
      <p>2 prints — 5%</p>
      <p>3 prints — 10%</p>
      <p>4 or more prints — 15%</p>
    </div>
  </div>
)}
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
</div>
</div>
    </main>
  );
}""
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
