"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ELITE } from "@/constants";

// Start scale: large enough that the viewport sits fully inside one cut-out
// letter (only the video shows). We then zoom OUT to the full-screen wordmark.
const START_SCALE = 28;

export default function EliteMask() {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=240%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Zoom out: huge (inside a letter) -> 1 (normal full-screen ELITE mask).
      tl.fromTo(
        ".elite-mask",
        { scale: START_SCALE },
        { scale: 1, ease: "expo.out", duration: 1 },
        0
      )
        // Line over the video fades as we start pulling back.
        .to(".elite-over", { opacity: 0, duration: 0.12 }, 0)
        // Subtle settle on the footage.
        .fromTo(
          ".elite-media",
          { scale: 1.12 },
          { scale: 1, ease: "none", duration: 1 },
          0
        )
        // Payoff line appears once the wordmark has formed.
        .fromTo(
          ".elite-under",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.16 },
          0.82
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
      <div className="elite-media absolute inset-0 will-change-transform">
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
        <div className="absolute inset-0 bg-black/35" />
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

      {/* The black ELITE mask — zooms OUT from the z-axis down to full screen.
          A solid black div masked by the ELITE artwork: the black frame is
          opaque (mask alpha = 1) so black shows; the letters are transparent
          (alpha = 0) so they punch holes revealing the video behind.
          mask-size: 100% 100% sizes the mask explicitly, avoiding the
          unreliable intrinsic-size behaviour of SVGs with `cover`. */}
      <div
        className="elite-mask absolute inset-0 z-10 origin-center bg-black will-change-transform"
        style={{
          WebkitMaskImage: "url(/images/elite-mask.svg)",
          maskImage: "url(/images/elite-mask.svg)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
        aria-hidden
      />

      {/* Payoff line, revealed once the whole wordmark is on screen */}
      <div className="elite-under absolute inset-x-0 bottom-[14%] z-30 flex flex-col items-center gap-3 px-6 text-center opacity-0">
        <p className="text-lg font-semibold tracking-tight text-white lg:text-xl">
          {ELITE.under}
        </p>
        <p className="max-w-md text-sm text-white/65">{ELITE.sub}</p>
      </div>
    </section>
  );
}
