import { useState, useEffect } from "react";

export default function useResponsive() {
  const getViewport = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [viewport, setViewport] = useState(getViewport);

  useEffect(() => {
    const handleResize = () => {
      setViewport(getViewport());
    };

    window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", handleResize);

handleResize();

return () => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("orientationchange", handleResize);
};
  }, []);

  const { width, height } = viewport;

  return {
    width,
    height,

    isMobile: width < 900,

    isMobileLandscape: width < 768 && width >= height,

    isTablet: width >= 768 && width < 1024,

    isDesktop: width >= 1024,

    isPortrait: height > width,

    isLandscape: width >= height,
  };
}
