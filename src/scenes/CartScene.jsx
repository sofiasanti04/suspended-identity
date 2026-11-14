
export default function CartScene({
  cart = [],
  onReturn,
  onRemoveItem,
}) {
  const photoItems = cart.filter(
  (item) => item.type === "photo"
);

const photoCount = photoItems.length;

const subtotal = cart.reduce(
  (sum, item) => sum + Number(item.price || 0),
  0
);

const photoSubtotal = photoItems.reduce(
  (sum, item) => sum + Number(item.price || 0),
  0
);

const discountRate =
  photoCount >= 4 ? 0.15 :
  photoCount === 3 ? 0.10 :
  photoCount === 2 ? 0.05 :
  0;

const discount = Math.round(
  photoSubtotal * discountRate * 100
) / 100;

const total = subtotal - discount;

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
    borderTop: "1px solid rgba(255,255,255,.25)",
    maxWidth: "420px",
    marginLeft: "auto",
  }}
>
  {photoCount >= 2 && (
    <div style={{ marginBottom: "2rem", textAlign: "left" }}>
      <p
        style={{
          fontFamily: "Cormorant Garamond",
          fontSize: "1.5rem",
          marginBottom: ".5rem",
        }}
      >
        A SPECIAL CONSIDERATION
      </p>

      <p style={{ color: "#aaa", lineHeight: 1.7 }}>
        A special consideration for collectors acquiring
        multiple photographic prints.
      </p>
    </div>
  )}

  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <p style={{ color: "#aaa" }}>SUBTOTAL</p>
    <p>€ {subtotal.toFixed(2)}</p>
  </div>

  {discount > 0 && (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p style={{ color: "#aaa" }}>
        COLLECTOR'S CONSIDERATION ({discountRate * 100}%)
      </p>
      <p style={{ color: "#c8bda8" }}>
        − € {discount.toFixed(2)}
      </p>
    </div>
  )}

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid rgba(255,255,255,.15)",
      marginTop: "1.5rem",
      paddingTop: "1rem",
    }}
  >
    <p style={{ letterSpacing: ".15rem" }}>TOTAL</p>

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
          </div>
        </>
      )}
    </main>
  );
}
