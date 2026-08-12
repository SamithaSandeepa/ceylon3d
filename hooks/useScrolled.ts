"use client";

import { useState, useEffect } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold.
 * Used primarily by the Navbar for transparent → solid background transition.
 *
 * @param threshold - Scroll offset in pixels before `scrolled` becomes true (default: 50)
 */
export function useScrolled(threshold: number = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
