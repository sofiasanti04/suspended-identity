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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
  { label: "100 × 150 cm", price: 390 },
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
      fontSize: ".95rem",
      lineHeight: 1.8,
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

    {currentPhoto.sizes.map((size, index) => (
  <button
    key={size.label}
    onClick={() => setSelectedSize(index)}
    style={{
      width: "100%",
      padding: "12px 0",
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
    <span>€ {size.price}</span>
  </button>
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

{currentPhoto.sizes.map((size, index) => (
  <button
    key={size.label}
    onClick={() => setSelectedSize(index)}
    style={{
      width: "100%",
      padding: "12px 0",
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
    <span>€ {size.price}</span>
  </button>
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
