export default function GalleryArchiveScene({
  selectedBust,
  onReturn
}) {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#02050c",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <p
        style={{
          color: "#8f8f8f",
          letterSpacing: "0.4rem",
          marginBottom: "1rem"
        }}
      >
        GALLERY
      </p>

      <h1
        style={{
          fontFamily: "Cormorant Garamond",
          fontSize: "4rem",
          fontWeight: 400,
          marginBottom: "2rem"
        }}
      >
        {selectedBust}
      </h1>

      <p style={{ color: "#bdbdbd" }}>
        Environmental portraits associated with this
        sculpture will appear here.
      </p>

      <button
        onClick={onReturn}
        style={{
          marginTop: "4rem",
          padding: "1rem 2rem",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          cursor: "pointer"
        }}
      >
        RETURN TO ARCHIVE
      </button>
    </main>
  );
}
