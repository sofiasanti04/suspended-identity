import { useEffect, useState } from "react";

export default function FadeOverlay({ active }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (active) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [active]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        opacity,
        pointerEvents: "none",
        transition: "opacity 800ms ease-in-out",
        zIndex: 9999
      }}
    />
  );
}
