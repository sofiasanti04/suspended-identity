export default function TermsConditionsScene({
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
          TERMS
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "4.5rem",
            fontWeight: 400,
            margin: 0,
          }}
        >
          TERMS &amp; CONDITIONS
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
              01 — USE OF THE WEBSITE
            </h2>

            <p>
              This website presents the artistic practice, photographic
              works and sculptural works of Sofia Santi.
            </p>

            <p>
              By accessing and using this website, visitors agree to use
              the website for lawful purposes and in a way that does not
              infringe the rights of the artist or other users.
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
              02 — INTELLECTUAL PROPERTY
            </h2>

            <p>
              Unless otherwise stated, all photographs, sculptures,
              artworks, texts, images, graphics and other original
              materials presented on this website are the intellectual
              property of Sofia Santi.
            </p>

            <p>
              The content of this website may not be copied, reproduced,
              distributed, modified, published or commercially used without
              prior written permission from the artist.
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
              03 — USE OF IMAGES AND ARTWORKS
            </h2>

            <p>
              Images of artworks and photographs displayed on this website
              are provided for viewing and informational purposes only.
            </p>

            <p>
              Downloading, reproducing, altering, publishing or
              redistributing these materials without permission is not
              permitted.
            </p>

            <p>
              Requests concerning licensing, publication, exhibition,
              reproduction or other authorised uses may be made by
              contacting the artist directly.
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
              04 — PURCHASES AND COMMISSIONS
            </h2>

            <p>
              This website does not currently provide an online checkout or
              direct payment system.
            </p>

            <p>
              Enquiries regarding the purchase of artworks, sculpture
              commissions or other collaborations are handled directly
              with the artist.
            </p>

            <p>
              Any agreement concerning the sale, commission, licensing or
              delivery of an artwork will be subject to the specific terms
              agreed between the parties.
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
              05 — EXTERNAL LINKS
            </h2>

            <p>
              This website may contain links to external websites and
              platforms, including Instagram.
            </p>

            <p>
              Sofia Santi is not responsible for the content, availability
              or privacy practices of external websites. Visitors who
              follow external links are subject to the terms and policies
              of those websites.
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
              06 — WEBSITE CONTENT
            </h2>

            <p>
              Reasonable care is taken to ensure that the information
              presented on this website is accurate and up to date.
              However, artistic works, availability and other information
              may change without prior notice.
            </p>

            <p>
              The artist reserves the right to modify, remove or update
              website content at any time.
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
              07 — LIMITATION OF LIABILITY
            </h2>

            <p>
              To the extent permitted by applicable law, Sofia Santi shall
              not be responsible for temporary interruptions,
              unavailability of the website, technical errors or issues
              arising from third-party services.
            </p>

            <p>
              Nothing in these Terms &amp; Conditions is intended to exclude
              or limit any liability that cannot lawfully be excluded or
              limited.
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
              08 — CHANGES TO THESE TERMS
            </h2>

            <p>
              These Terms &amp; Conditions may be updated from time to time
              to reflect changes to the website, the artist's practice or
              applicable requirements.
            </p>

            <p>
              The updated version will be published on this page with a
              revised date.
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
              For questions regarding these Terms &amp; Conditions,
              permissions or the use of content from this website, please
              contact:
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
