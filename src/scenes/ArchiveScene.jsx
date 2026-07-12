import archiveData from "../data/archiveData";

export default function ArchiveScene({
  selectedBust,
  onReturn,
  onOpenSculpture,
  onOpenGallery
}) {
  const artwork = archiveData[selectedBust];

if (!artwork) {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#02050c",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      Nessun archivio trovato per: {String(selectedBust)}
    </main>
  );
}

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#02050c",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      <p
        style={{
          color: "#7f7f7f",
          letterSpacing: "0.5rem",
          fontSize: "0.8rem",
          marginBottom: "1rem"
        }}
      >
        ARCHIVE ENTRY
      </p>

      <h1
        style={{
          fontFamily: "Cormorant Garamond",
          fontSize: "4rem",
          fontWeight: 400,
          letterSpacing: "0.2rem",
          marginBottom: "2rem"
        }}
      >
        {artwork.code}
      </h1>

      <p
        style={{
          color: "#b8b8b8",
          letterSpacing: "0.25rem",
          marginBottom: "0.5rem"
        }}
      >
        {artwork.city}
      </p>

      <p
        style={{
          color: "#8f8f8f",
          letterSpacing: "0.25rem",
          marginBottom: "4rem"
        }}
      >
        {artwork.year}
      </p>

      <button
        onClick={onOpenSculpture}
        style={{
          width: "320px",
          padding: "1rem",
          marginBottom: "1.5rem",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          letterSpacing: "0.35rem",
          cursor: "pointer"
        }}
      >
        SCULPTURE
      </button>

      <button
        onClick={onOpenGallery}
        style={{
          width: "320px",
          padding: "1rem",
          marginBottom: "5rem",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          letterSpacing: "0.35rem",
          cursor: "pointer"
        }}
      >
        GALLERY
      </button>

      <button
        onClick={onReturn}
        style={{
          background: "transparent",
          border: "none",
          color: "#7f7f7f",
          letterSpacing: "0.2rem",
          cursor: "pointer"
        }}
      >
        RETURN TO EXHIBITION
      </button>
    </main>
  );
}
