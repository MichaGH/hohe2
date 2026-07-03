"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Wires Lenis smooth scrolling into GSAP's ticker so ScrollTrigger stays
 * perfectly in sync with the eased scroll position.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);
    if (typeof window !== "undefined") window.__lenis = lenis;

    const onRaf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    // Let pinned/measured triggers settle after layout + fonts.
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(onRaf);
      lenis.destroy();
    };
  }, []);

  return children;
}
