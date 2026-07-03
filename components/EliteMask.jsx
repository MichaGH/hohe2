"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ELITE } from "@/constants";

// Start scale: large enough that the viewport sits fully inside one cut-out
// letter (only the video shows). We then zoom OUT to the full-screen wordmark,
// which reads like the black mask dropping in from above.
const START_SCALE = 26;

export default function EliteMask() {
  const root = useRef(null);

  useGSAP(
    () => {
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

      tl.fromTo(
        ".elite-mask",
        { scale: START_SCALE },
        { scale: 1, ease: "power2.out", duration: 1 },
        0
      )
        .to(".elite-over", { opacity: 0, ease: "power1.out", duration: 0.18 }, 0)
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

      {/* The black ELITE mask (black frame + transparent letters). Zooming this
          <img> out from a huge scale to 1 is the reference technique. */}
      <div className="elite-mask absolute inset-0 z-10 origin-center will-change-transform">
        <img
          src="/images/elite-mask.svg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

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
