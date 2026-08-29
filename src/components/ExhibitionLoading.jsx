import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function ExhibitionLoading({ onLoaded }) {
  const { progress, active } = useProgress();
  const [visibleProgress, setVisibleProgress] = useState(0);

  useEffect(() => {
    const target = Math.min(100, Math.round(progress));

    setVisibleProgress((current) => {
      if (target <= current) return current;

      const difference = target - current;
      const step = Math.max(1, Math.ceil(difference / 8));

      return Math.min(target, current + step);
    });
  }, [progress]);

  useEffect(() => {
    if (!active && progress >= 100) {
      const timer = setTimeout(() => {
        onLoaded?.();
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [active, progress, onLoaded]);

  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#02050c",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "2rem",
          fontWeight: 400,
          letterSpacing: "0.18em",
          marginBottom: "2.5rem",
        }}
      >
        ENTERING THE EXHIBITION
      </div>

      <div
        style={{
          width: "180px",
          height: "1px",
          background: "rgba(255,255,255,0.12)",
          position: "relative",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "1px",
            width: `${visibleProgress}%`,
            background: "rgba(255,255,255,0.75)",
            transition: "width 0.25s ease",
          }}
        />
      </div>

      <div
        style={{
          fontFamily: "monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "0.8rem",
        }}
      >
        {String(visibleProgress).padStart(3, "0")}%
      </div>

      <div
        style={{
          fontSize: "0.62rem",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.28)",
          textTransform: "uppercase",
        }}
      >
        preparing the exhibition
      </div>
    </main>
  );
}
