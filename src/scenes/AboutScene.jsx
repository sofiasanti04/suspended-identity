export default function AboutScene({
  onReturn,
}) {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
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
          ABOUT
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "4.5rem",
            fontWeight: 400,
            margin: 0,
          }}
        >
          SOFIA SANTI
        </h1>

        <div
          style={{
            marginTop: "4rem",
            maxWidth: "850px",
            lineHeight: 1.8,
            fontSize: "1rem",
            color: "#d5d5d5",
          }}
        >

          <p>
            Sofia Santi (b. 2004) is an Italian photographer and visual
            artist working across photography and sculpture. Her practice
            explores the body, identity and the relationship between the
            individual and society.
          </p>

          <p>
            In 2023, she attended the London Institute of Photography where
            she developed and presented a research exploring the relationship
            between the body, movement and physical space. In 2024, she
            continued her studies at the International Center of Photography
            in New York.
          </p>

          <p>
            Since 2025, her practice has been centred around{" "}
            <i>Suspended Identity</i>, an ongoing research project
            investigating the human condition through the factors that
            influence, alter and sometimes destabilise our sense of self.
          </p>

          <p>
            The project develops through different investigations into the
            relationship between the individual and society, mortality, and
            internal states that can be difficult to recognise or understand,
            even when clinically identified.
          </p>

          <p>
            <i>Female Adaptation</i>, the first part of{" "}
            <i>Suspended Identity</i>, focuses on the female experience within
            contemporary image culture. Through the dialogue between sculpture
            and photography, the project examines conformity, self-perception
            and the gradual distance that can emerge between who we are and
            who we feel we are expected to become.
          </p>

          <p>
            Rather than providing definitive answers, Santi's work uses
            photography and sculpture as a way of questioning how identity
            is formed, altered and sometimes suspended.
          </p>

        </div>
      </div>
    </main>
  );
}
