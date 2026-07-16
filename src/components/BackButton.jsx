export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: "100px",
        left: "100px",

        width: "48px",
        height: "48px",

        background: "transparent",
        border: "none",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        color: "rgba(255,255,255,0.75)",
        fontSize: "1.6rem",
        fontWeight: "300",

        cursor: "pointer",

        zIndex: 9999,

        transition: "all 0.25s ease",

        padding: 0,
        lineHeight: 1
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(-4px)";
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.color = "rgba(255,255,255,0.75)";
      }}
    >
      ←
    </button>
  );
}
