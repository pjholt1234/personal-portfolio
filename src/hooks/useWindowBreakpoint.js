import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowBreakpoint() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );
  const [breakpoint, setBreakpoint] = useState("md");

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { width, height } = windowDimensions;

    if (width <= 576) {
      setBreakpoint("xsm");
    } else if (width <= 768) {
      setBreakpoint("sm");
    } else if (width <= 992) {
      setBreakpoint("md");
    } else if (width <= 1200) {
      setBreakpoint("lg");
    } else if (width > 1200) {
      setBreakpoint("xlg");
    } else {
      setBreakpoint("md");
    }
  }, [windowDimensions]);

  return breakpoint;
}
