export default function CopyrightScene({
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
          COPYRIGHT
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "4.5rem",
            fontWeight: 400,
            margin: 0,
          }}
        >
          COPYRIGHT
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
              01 — COPYRIGHT NOTICE
            </h2>

            <p>
              Unless otherwise stated, all photographs, sculptures,
              artworks, texts, images, graphics and other original
              materials presented on this website are the work and
              intellectual property of Sofia Santi.
            </p>

            <p>
              All rights are reserved.
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
              02 — PHOTOGRAPHIC WORKS
            </h2>

            <p>
              The photographic works presented on this website are
              protected by applicable copyright and intellectual property
              laws.
            </p>

            <p>
              Their reproduction, publication, distribution, modification
              or commercial use is not permitted without prior written
              permission from the artist.
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
              03 — SCULPTURAL WORKS
            </h2>

            <p>
              The sculptures and physical artworks presented on this
              website are original works by Sofia Santi.
            </p>

            <p>
              Images, reproductions or other representations of these works
              may not be reproduced, distributed or used commercially
              without prior written permission from the artist.
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
              04 — WEBSITE CONTENT
            </h2>

            <p>
              Texts, layouts, graphics and other original materials created
              specifically for this website are also protected by
              applicable intellectual property laws.
            </p>

            <p>
              No part of this website may be reproduced or redistributed
              without prior permission, except where permitted by
              applicable law.
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
              05 — UNAUTHORISED USE
            </h2>

            <p>
              Unauthorised copying, downloading, reproduction, alteration,
              publication or commercial use of the works and materials
              presented on this website is prohibited.
            </p>

            <p>
              This includes using photographs or artworks for advertising,
              promotional materials, commercial projects, publications or
              other forms of distribution without permission.
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
              06 — PERMISSIONS &amp; LICENSING
            </h2>

            <p>
              Requests to reproduce, publish, exhibit, license or otherwise
              use any work presented on this website may be submitted
              directly to the artist.
            </p>

            <p>
              Permission must be obtained before any authorised use takes
              place. Specific licensing terms may apply depending on the
              intended use.
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
              07 — THIRD-PARTY CONTENT
            </h2>

            <p>
              Where third-party content or references appear on this
              website, the rights of the respective owners remain
              unaffected.
            </p>

            <p>
              External platforms and services are subject to their own
              copyright and intellectual property policies.
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
              08 — CONTACT
            </h2>

            <p>
              For permission requests, licensing enquiries or questions
              regarding the use of any work presented on this website,
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
