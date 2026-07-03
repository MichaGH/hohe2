"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { FACILITY } from "@/constants";

export default function Facility() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.to(".fac-img", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".fac-copy > *", {
        y: 36,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 55%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex h-[92vh] w-full items-end overflow-hidden bg-bg"
    >
      <div className="fac-img absolute inset-x-0 -inset-y-[12%] will-change-transform">
        <Image
          src={FACILITY.image}
          alt="Hohe Warte grounds"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50" />

      <div className="fac-copy relative z-10 flex w-full flex-col gap-6 p-6 lg:p-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-volt">
          {FACILITY.kicker}
        </span>
        <h2 className="display max-w-4xl text-[clamp(2.6rem,7vw,6.5rem)] text-white">
          {FACILITY.title}
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-white/80">
          {FACILITY.body}
        </p>
      </div>
    </section>
  );
}
