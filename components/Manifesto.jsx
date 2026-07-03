"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MANIFESTO } from "@/constants";

const tokens = MANIFESTO.split(" ").map((w) => ({
  text: w.replace(/\*/g, ""),
  accent: w.includes("*"),
}));

export default function Manifesto() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".mani-word",
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=180%",
            scrub: true,
            pin: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-bg px-6 lg:px-10"
    >
      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.3em] text-faint lg:left-10">
        Manifest
      </span>

      <p className="mx-auto max-w-5xl text-center text-[clamp(1.9rem,5vw,4.5rem)] font-medium leading-[1.12] tracking-tight">
        {tokens.map((t, i) => (
          <span
            key={i}
            className={`mani-word inline-block ${
              t.accent ? "font-serif italic text-volt" : "text-ink"
            }`}
          >
            {t.text}
            {" "}
          </span>
        ))}
      </p>

      <span className="absolute bottom-8 left-1/2 h-8 w-px -translate-x-1/2 bg-line" />
    </section>
  );
}
