
export default function CartScene({
  cart = [],
  onReturn,
  onRemoveItem,
}) {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <main
  style={{
    width: "100%",
    height: "100dvh",
    overflowY: "auto",
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
    background: "#02050c",
    color: "#e8e4dc",
    padding: "clamp(28px, 6vw, 80px)",
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",
  }}
>
      <button
        onClick={onReturn}
        style={{
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,.7)",
          fontSize: "1rem",
          cursor: "pointer",
          letterSpacing: ".12rem",
          marginBottom: "3rem",
        }}
      >
        ← RETURN TO GALLERY
      </button>

      <h1
        style={{
          fontFamily: "Cormorant Garamond",
          fontSize: "3.5rem",
          fontWeight: 400,
          marginBottom: "3rem",
        }}
      >
        YOUR SELECTION
      </h1>

      {cart.length === 0 ? (
        <p
          style={{
            color: "#999",
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          Your cart is currently empty.
        </p>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  paddingBottom: "2rem",
                  borderBottom:
                    "1px solid rgba(255,255,255,.15)",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "150px",
                    height: "120px",
                    objectFit: "contain",
                    background: "#000",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontFamily: "Cormorant Garamond",
                      fontSize: "1.7rem",
                      fontWeight: 400,
                      margin: "0 0 .7rem",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p style={{ color: "#aaa" }}>
                    {item.size}
                  </p>

                  <p>€ {item.price}</p>

                  <button
                    onClick={() =>
                      onRemoveItem(item.id)
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#999",
                      textDecoration: "underline",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop:
                "1px solid rgba(255,255,255,.25)",
              textAlign: "right",
            }}
          >
            <p
              style={{
                color: "#aaa",
                letterSpacing: ".15rem",
              }}
            >
              TOTAL
            </p>

            <p
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2.5rem",
                margin: 0,
              }}
            >
              € {total.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </main>
  );
}
