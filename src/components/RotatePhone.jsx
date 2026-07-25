export default function RotatePhone() {
  return (
    <>
      <style>{`
        @keyframes phoneRotate {
          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(90deg);
          }
        }

        @keyframes arrowFade {
          0%,100% {
            opacity: .35;
          }

          50% {
            opacity: 1;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          {/* Arrow */}
          <path
            d="M35 28
               C35 12 85 12 85 38"
            stroke="rgba(255,255,255,.65)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            style={{
              animation: "arrowFade 2.2s ease-in-out infinite",
            }}
          />

          <path
            d="M79 34 L85 38 L81 45"
            stroke="rgba(255,255,255,.65)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              animation: "arrowFade 2.2s ease-in-out infinite",
            }}
          />

          {/* Phone */}
          <g
            style={{
              transformOrigin: "60px 70px",
              animation: "phoneRotate 2.2s ease-in-out infinite",
            }}
          >
            <rect
              x="45"
              y="42"
              width="30"
              height="52"
              rx="6"
              stroke="white"
              strokeWidth="2"
            />

            <circle
              cx="60"
              cy="88"
              r="1.8"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </>
  );
}
