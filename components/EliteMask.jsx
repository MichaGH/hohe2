"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ELITE } from "@/constants";

// The ELITE artwork is 1960 x 1080. The animation zooms the SVG's viewBox from
// a tiny window sitting inside the middle "I" (so the whole viewport is inside a
// cut-out letter, showing only the video) out to the full artwork (the complete
// black mask on screen). Animating the viewBox — instead of transform:scale —
// keeps the SVG element viewport-sized, so the browser never has to rasterise a
// giant scaled SVG. That is what was hanging Chrome.
const VB_START = { x: 940, y: 500, w: 66, h: 40 }; // inside the middle "I"
const VB_END = { x: 0, y: 0, w: 1960, h: 1080 }; // full mask

const MASK_PATH =
  "M0,0V1080H1960V0ZM643.41,643.86H426.69V396.18h214.2v59.4H506.25v34.2h115.2v56.88H506.25v37.8H643.41Zm249.84,0H686.61V396.18h79.56V580.5H893.25Zm116.63,0H930.32V396.18h79.56Zm280.44-184.32h-81V643.86h-79.56V459.54H1048.4V396.18h241.92Zm253.07,184.32H1326.67V396.18h214.2v59.4H1406.23v34.2h115.2v56.88h-115.2v37.8h137.16Z";

export default function EliteMask() {
  const root = useRef(null);
  const svgRef = useRef(null);

  useGSAP(
    () => {
      const vb = { ...VB_START };
      const applyVB = () =>
        svgRef.current?.setAttribute(
          "viewBox",
          `${vb.x} ${vb.y} ${vb.w} ${vb.h}`
        );
      applyVB();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=220%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(
        vb,
        {
          x: VB_END.x,
          y: VB_END.y,
          w: VB_END.w,
          h: VB_END.h,
          ease: "none",
          duration: 1,
          onUpdate: applyVB,
        },
        0
      )
        .to(".elite-over", { opacity: 0, ease: "power1.out", duration: 0.22 }, 0)
        .fromTo(
          ".elite-under",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.18 },
          0.8
        );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Media revealed through the ELITE cut-out */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/court-top.avif"
        >
          <source src="/videos/spinnig_racket_on_ground.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Line shown while we're still zoomed inside the letter */}
      <div className="elite-over absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-[11px] uppercase tracking-[0.4em] text-volt">
          {ELITE.overline}
        </span>
        <p className="max-w-md px-6 font-serif text-2xl italic text-white/80">
          What separates the good from the unforgettable.
        </p>
      </div>

      {/* The black ELITE mask (black frame, letters knocked out). The viewBox is
          driven by the scroll timeline above. */}
      <svg
        ref={svgRef}
        className="absolute inset-0 z-10 h-full w-full"
        viewBox={`${VB_START.x} ${VB_START.y} ${VB_START.w} ${VB_START.h}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path fill="#000" d={MASK_PATH} />
      </svg>

      {/* Payoff line, revealed once the whole wordmark is on screen */}
      <div className="elite-under absolute inset-x-0 bottom-[12%] z-30 flex flex-col items-center gap-3 px-6 text-center opacity-0">
        <p className="text-lg font-semibold tracking-tight text-white lg:text-xl">
          {ELITE.under}
        </p>
        <p className="max-w-md text-sm text-white/65">{ELITE.sub}</p>
      </div>
    </section>
  );
}
