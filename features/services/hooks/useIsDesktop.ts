"use client";

import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return desktop;
}
