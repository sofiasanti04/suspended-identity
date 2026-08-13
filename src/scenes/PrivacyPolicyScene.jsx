export default function PrivacyPolicyScene({
  onReturn,
}) {
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
            e.currentTarget.style.transform =
              "translateX(-4px)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateX(0)";
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
          PRIVACY
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "4.5rem",
            fontWeight: 400,
            margin: 0,
          }}
        >
          PRIVACY POLICY
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

          <p
            style={{
              color: "#8f8f8f",
              fontSize: "0.85rem",
            }}
          >
            Last updated: August 2026
          </p>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              01 — DATA CONTROLLER
            </h2>

            <p>
              Sofia Santi
              <br />
              Email: sofiasantiphoto@gmail.com
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              02 — INFORMATION WE COLLECT
            </h2>

            <p>
              This website does not provide user accounts, registration
              forms, newsletter subscriptions or online payment systems.
            </p>

            <p>
              Personal information may be provided voluntarily when a
              visitor chooses to contact the artist by email.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              03 — HOW PERSONAL DATA IS USED
            </h2>

            <p>
              Information received by email may be used to:
            </p>

            <ul>
              <li>respond to enquiries;</li>
              <li>discuss sculpture or photographic commissions;</li>
              <li>respond to acquisition requests;</li>
              <li>provide information requested by the visitor.</li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              04 — EMAIL COMMUNICATION
            </h2>

            <p>
              When a visitor chooses to contact Sofia Santi through the
              website, their email application is opened and the visitor
              decides what information to send.
            </p>

            <p>
              Any personal information included in the email is processed
              for the purpose of responding to the enquiry and managing
              the related communication.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              05 — COOKIES AND TRACKING
            </h2>

            <p>
              This website does not use advertising cookies, profiling
              cookies, analytics services or tracking technologies for
              marketing purposes.
            </p>

            <p>
              The website may rely on technical services necessary for
              hosting and delivering the website.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              06 — THIRD-PARTY SERVICES
            </h2>

            <p>
              The website is hosted and deployed using Vercel. The source
              code is managed through GitHub.
            </p>

            <p>
              The website also provides a link to Instagram. When a visitor
              chooses to access Instagram, they leave this website and
              become subject to Instagram's own privacy policy and terms.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              07 — DATA RETENTION
            </h2>

            <p>
              Personal data received through email is retained only for as
              long as reasonably necessary to manage the relevant
              communication or request, unless a longer retention period
              is required by law.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              08 — DATA SUBJECT RIGHTS
            </h2>

            <p>
              Where applicable, users have the rights provided by
              applicable data protection law, including the right to
              request access, correction, deletion, restriction of
              processing and, where applicable, data portability or
              objection.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "2rem",
                fontWeight: 400,
                color: "white",
                marginTop: "3rem",
              }}
            >
              09 — CONTACT
            </h2>

            <p>
              For questions regarding the processing of personal data,
              please contact:
            </p>

            <p>
              Sofia Santi
              <br />
              sofiasantiphoto@gmail.com
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
