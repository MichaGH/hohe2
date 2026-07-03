"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";
import { RACKET_SECTION } from "@/constants";

// Three.js must stay off the server.
const RacketScene = dynamic(() => import("@/components/RacketScene"), {
  ssr: false,
});

export default function RacketShowcase() {
  const root = useRef(null);
  const progress = useRef(0);
  const [active, setActive] = useState(0);
  const words = RACKET_SECTION.words;

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "+=220%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          progress.current = self.progress;
          const idx = Math.min(
            words.length - 1,
            Math.floor(self.progress * words.length)
          );
          setActive((prev) => (prev === idx ? prev : idx));
        },
      });
    },
    { scope: root }
  );

  const [line1, line2] = RACKET_SECTION.title.split("\n");

  return (
    <section
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-bg"
    >
      {/* 3D canvas fills the section */}
      <RacketScene progressRef={progress} />

      {/* radial vignette so text stays readable over the model */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55))]" />

      {/* Overlay copy */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between px-6 py-24 lg:px-10 lg:py-28">
        {/* top */}
        <div className="flex items-start justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-volt">
            {RACKET_SECTION.kicker}
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-faint">
            Fig. 02
          </span>
        </div>

        {/* middle-left title */}
        <h2 className="display max-w-2xl text-[clamp(2.2rem,6vw,5.5rem)] text-ink">
          {line1}
          <br />
          <span className="text-muted">{line2}</span>
        </h2>

        {/* bottom row: word list + body */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-col gap-1">
            {words.map((w, i) => (
              <li
                key={w}
                className={`text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold leading-tight tracking-tight transition-all duration-500 ${
                  active === i
                    ? "translate-x-0 text-volt opacity-100"
                    : "-translate-x-1 text-faint opacity-45"
                }`}
              >
                <span className="mr-3 align-middle text-xs tracking-normal text-muted">
                  0{i + 1}
                </span>
                {w}
              </li>
            ))}
          </ul>

          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
            {RACKET_SECTION.body}
          </p>
        </div>
      </div>
    </section>
  );
}
