import { useEffect, useState } from "react";

export default function TransitionManager({
  active,
  duration = 800,
  onComplete,
  children
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [active, duration, onComplete]);

  return (
    <>
      {children}

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          opacity: visible ? 1 : 0,
          transition: `opacity ${duration}ms ease`,
          pointerEvents: "none",
          zIndex: 9999
        }}
      />
    </>
  );
}
