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
      {/* Freccia di ritorno */}

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
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "translateX(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        ←
      </button>

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

      <p
        style={{
          color: "#bdbdbd"
        }}
      >
        Environmental portraits associated with this
        sculpture will appear here.
      </p>
    </main>
  );
}
