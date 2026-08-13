import { useState } from "react";

export default function CustomBustsScene({
  onReturn,
}) {
  const [showMaterials, setShowMaterials] = useState(false);

  return (
    <main
      style={{
        width: "100vw",
        height: "100dvh",
        background: "#02050c",
        color: "white",
        padding: "100px 8vw 80px",
        boxSizing: "border-box",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <button
  onClick={onReturn}
  style={{
    marginTop: "3rem",
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
    transition: "0.25s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateX(-4px)";
    e.currentTarget.style.color = "#ffffff";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateX(0)";
    e.currentTarget.style.color =
      "rgba(255,255,255,0.7)";
  }}
>
  ←
</button>

        <p
          style={{
            color: "#8f8f8f",
            letterSpacing: "0.35rem",
            fontSize: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          COMMISSIONS
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "4.5rem",
            fontWeight: 400,
            margin: 0,
          }}
        >
          CUSTOM BUSTS
        </h1>

        <p
          style={{
            marginTop: "1rem",
            fontFamily: "Cormorant Garamond",
            fontSize: "1.5rem",
            color: "#b5b5b5",
          }}
        >
          Commission a bust created specifically for you.
        </p>

        <div
          style={{
            marginTop: "4rem",
            lineHeight: 1.8,
            fontSize: "1rem",
            color: "#d5d5d5",
          }}
        >
          <p>
            Custom busts are created as individual commissions,
            developed through a collaborative process between the
            client and the artist.
          </p>

          <p>
            Each piece begins with an idea, a reference or a
            specific need, which is then developed into a unique
            sculptural work through consultation, experimentation
            and prototyping.
          </p>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              01 — CONSULTATION
            </p>

            <p>
              Every commission begins with a conversation. You can
              share your idea, references, requirements or simply
              describe what you have in mind. Consultation can take
              place by email or, when necessary, through a call.
            </p>

            <p>
              You do not need to know which material or construction
              method is best for your idea. These choices are part
              of the development process and will be discussed
              during the consultation.
            </p>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              02 — DEVELOPMENT
            </p>

            <p>
              Dimensions, proportions, materials, colours and
              finishes are discussed together. Based on your brief,
              preliminary concepts and prototypes are developed
              specifically for the commission before construction
              begins.
            </p>

            <p>
              Every commission is developed individually, and no
              piece is produced before the concept and main
              specifications have been discussed and agreed upon.
            </p>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              03 — MATERIALS
            </p>

            <p>
              Materials may include wire, water-based resins such
              as Plasto Forma, epoxy resin, fibreglass tape and
              other materials selected according to the
              requirements of each piece. Different materials can
              also be combined to achieve specific structural,
              visual or textural effects.
            </p>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              04 — DIMENSIONS
            </p>

            <p
              style={{
                color: "#777",
                letterSpacing: "0.2rem",
                fontSize: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              STANDARD SIZES
            </p>

            <p>
              XS · S · M · L · XL
            </p>

            <p>
              Standard sizes follow a range of established
              proportions, similar to clothing sizes. The overall
              length and extent of the bust can also be discussed
              according to the desired result.
            </p>

            <p
              style={{
                color: "#777",
                letterSpacing: "0.2rem",
                fontSize: "0.75rem",
                marginTop: "2rem",
                marginBottom: "0.5rem",
              }}
            >
              CUSTOM DIMENSIONS
            </p>

            <p>
              Custom dimensions are available for commissions that
              require specific measurements or proportions. These
              can be developed according to the individual body,
              requirements or concept of the commission.
            </p>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              05 — COLOUR & FINISH
            </p>

            <p>
              Each bust can be developed in a single colour or
              through a combination of colours, depending on the
              desired result. Surface treatments and finishes can
              also be discussed as part of the development process.
            </p>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              06 — PEDESTAL
            </p>

            <p>
              A matching pedestal can also be commissioned
              alongside the bust. Standard or custom dimensions
              are available, with materials, colours and finishes
              developed to complement the sculpture.
            </p>

            <p>
              The pedestal can be developed as an integral part of
              the commission or as a separate element, and can be
              designed either as a freestanding piece for placement
              on a surface or as a wall-mounted element.
            </p>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              07 — PRICING
            </p>

            <p
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "1.7rem",
                color: "white",
              }}
            >
              Commissions start from €300.
            </p>

            <p>
              Final pricing depends on the dimensions, materials,
              complexity, colour treatment and development time
              required for each individual piece.
            </p>

            <p>
              The price reflects not only the materials and
              production, but also the creative development,
              prototyping and time dedicated to each commission.
            </p>
          </section>

          <section
            style={{
              marginTop: "5rem",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p
              style={{
                color: "#777",
                letterSpacing: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              START A COMMISSION
            </p>

            <p>
              If you have an idea for a custom bust, get in touch
              and tell me what you have in mind. You can include
              references, approximate dimensions, materials or
              colours you are considering, or simply describe the
              idea you would like to develop.
            </p>

            <p>
              We will discuss the project together before any work
              begins.
            </p>

            <button
              style={{
                marginTop: "2rem",
                padding: "1rem 2rem",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                cursor: "pointer",
                letterSpacing: "0.2rem",
              }}
              onClick={() =>
                (window.location.href =
                  "mailto:sofiasantiphoto@gmail.com?subject=Custom Bust Commission")
              }
            >
              START A COMMISSION
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

