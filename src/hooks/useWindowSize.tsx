import { useEffect, useState } from "react";

enum Breakpoints {
  xsm = 400,
  sm = 480,
  md = 900,
  lg = 1024,
  xxl = 1250,
  xxxl = 1536,
  monster = 1930,
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    innerHeight: 0,
    innerWidth: 0,
  });

  const isMonsterScreen = (screenWidth: number) =>
    screenWidth >= Breakpoints.monster;

  const isVeryBigScreen = (screenWidth: number) =>
    screenWidth >= Breakpoints.xxxl && screenWidth <= Breakpoints.monster;
  const isBigScreen = (screenWidth: number) =>
    screenWidth >= Breakpoints.lg && screenWidth <= Breakpoints.xxl;
  const isMediumScreen = (screenWidth: number) =>
    screenWidth >= Breakpoints.md && screenWidth <= Breakpoints.lg;
  const isSmallScreen = (screenWidth: number) =>
    screenWidth >= Breakpoints.sm && screenWidth < Breakpoints.md;
  const isVerySmallScreen = (screenWidth: number) =>
    screenWidth < Breakpoints.sm;

  const checkScreenSize = () => {
    if (isMonsterScreen(windowSize.innerWidth)) return "MONSTER";
    if (isVeryBigScreen(windowSize.innerWidth)) return "VBIG";
    if (isBigScreen(windowSize.innerWidth)) return "BIG";
    if (isMediumScreen(windowSize.innerWidth)) return "MEDIUM";
    if (isSmallScreen(windowSize.innerWidth)) return "SMALL";
    if (isVerySmallScreen(windowSize.innerWidth)) return "VSMALL";
  };

  const [breakpoint, setBreakpoint] = useState(checkScreenSize() || "");

  useEffect(() => {
    setWindowSize(getWindowSize());
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isMonsterScreen(windowSize.innerWidth)) setBreakpoint("MONSTER");
    if (isVeryBigScreen(windowSize.innerWidth)) setBreakpoint("VBIG");
    if (isBigScreen(windowSize.innerWidth)) setBreakpoint("BIG");
    if (isMediumScreen(windowSize.innerWidth)) setBreakpoint("MEDIUM");
    if (isSmallScreen(windowSize.innerWidth)) setBreakpoint("SMALL");
    if (isVerySmallScreen(windowSize.innerWidth)) setBreakpoint("VSMALL");
  }, [windowSize.innerWidth]);

  return { breakpoint, windowSize };
};

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
