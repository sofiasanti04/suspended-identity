
import React from "react";

function FavoritesScene({
  favorites = [],
  onReturn,
  onOpenArtwork,
  onRemoveFavorite,
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        background: "#02050c",
        color: "#e8e4dc",
        padding: "clamp(28px, 6vw, 80px)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <button
        onClick={onReturn}
        style={{
          background: "transparent",
          border: 0,
          color: "rgba(232,228,220,.65)",
          cursor: "pointer",
          marginBottom: "44px",
          letterSpacing: ".16em",
        }}
      >
        ← RETURN TO EXHIBITION
      </button>

      <h1
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 400,
          fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
          letterSpacing: ".08em",
        }}
      >
        FAVOURITES
      </h1>

      <p
        style={{
          color: "rgba(232,228,220,.48)",
          fontSize: ".78rem",
          letterSpacing: ".12em",
          marginBottom: "48px",
        }}
      >
        YOUR SELECTED WORKS
      </p>

      {favorites.length === 0 ? (
        <p
          style={{
            color: "rgba(232,228,220,.62)",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "1.45rem",
            fontStyle: "italic",
          }}
        >
          No works have been saved yet.
        </p>
      ) : (
        <div style={{ maxWidth: "900px" }}>
          {favorites.map((item) => (
            <div
              key={`${item.type}-${item.code}-${item.index ?? "work"}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                padding: "22px 0",
                borderBottom: "1px solid rgba(232,228,220,.14)",
              }}
            >
              <button
                onClick={() => onOpenArtwork?.(item)}
                style={{
                  flex: 1,
                  textAlign: "left",
                  background: "transparent",
                  border: 0,
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "rgba(232,228,220,.48)",
                    fontSize: ".66rem",
                    letterSpacing: ".16em",
                    marginBottom: "8px",
                  }}
                >
                  {item.code} · {item.type === "photo" ? "PHOTOGRAPH" : "SCULPTURE"}
                </span>

                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1.5rem",
                  }}
                >
                  {item.title || `Work ${item.code}`}
                </span>

                <span
                  style={{
                    display: "block",
                    color: "rgba(232,228,220,.45)",
                    fontSize: ".7rem",
                    marginTop: "8px",
                  }}
                >
                  OPEN WORK →
                </span>
              </button>

              <button
                onClick={() => onRemoveFavorite?.(item)}
                aria-label="Remove from favourites"
                style={{
                  background: "transparent",
                  border: 0,
                  color: "rgba(232,228,220,.58)",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default FavoritesScene;
