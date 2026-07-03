"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { HERO } from "@/constants";

const titleWords = HERO.title.split(" ");

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      // --- Intro reveal ---------------------------------------------------
      const chars = gsap.utils.toArray(".hero-char");
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        delay: 0.15,
      });

      tl.from(chars, {
        yPercent: 115,
        duration: 1.3,
        stagger: 0.045,
      })
        .from(
          ".hero-fade",
          { y: 24, opacity: 0, duration: 1.1, stagger: 0.12 },
          "-=0.9"
        )
        .from(
          ".hero-cue",
          { opacity: 0, y: 12, duration: 0.8 },
          "-=0.6"
        );

      // --- Scroll parallax / exit ----------------------------------------
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".hero-content", { yPercent: -22, opacity: 0, ease: "none" }, 0)
        .to(".hero-video", { scale: 1.18, ease: "none" }, 0)
        .to(".hero-scrim", { opacity: 1, ease: "none" }, 0);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Background video */}
      <div className="hero-video absolute inset-0 will-change-transform">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/court-side-artistic.png"
        >
          <source src="/videos/hit.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scrims for legibility + scroll darkening */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="hero-scrim absolute inset-0 bg-black opacity-0" />

      {/* Content */}
      <div className="hero-content relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 lg:px-10 lg:pb-12 lg:pt-32">
        {/* Top meta row */}
        <div className="hero-fade flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/70">
          <span>{HERO.kicker}</span>
          <span className="hidden sm:block">48.25° N — Hohe Warte</span>
        </div>

        {/* Title block */}
        <div className="flex flex-col items-center text-center">
          <h1 className="display text-white">
            {titleWords.map((word, wi) => (
              <span key={wi} className="reveal-line">
                <span className="inline-block">
                  {word.split("").map((ch, ci) => (
                    <span
                      key={ci}
                      className="hero-char inline-block text-[clamp(3.5rem,15vw,15rem)]"
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-fade mt-6 max-w-md font-serif text-lg italic text-white/85 lg:text-2xl">
            {HERO.lead}
          </p>
        </div>

        {/* Scroll cue */}
        <div className="hero-cue flex flex-col items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/60">
          <span>Scroll</span>
          <span className="relative flex h-10 w-px overflow-hidden bg-white/20">
            <span className="scroll-bead absolute inset-x-0 top-0 h-3 bg-volt" />
          </span>
        </div>
      </div>
    </section>
  );
}
