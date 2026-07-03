"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { GALLERY } from "@/constants";

export default function HorizontalGallery() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      const el = track.current;

      gsap.to(el, {
        x: () => -(el.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + (el.scrollWidth - window.innerWidth),
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-bg">
      <div ref={track} className="flex h-full items-center gap-6 pl-6 lg:gap-10 lg:pl-10">
        {/* Intro panel */}
        <div className="flex h-[74vh] w-[80vw] shrink-0 flex-col justify-between py-10 md:w-[42vw]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-volt">
            The courts
          </span>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] text-ink">
            Fourteen courts.
            <br />
            One <span className="font-serif italic text-muted">standard</span>.
          </h2>
          <p className="max-w-xs text-sm text-muted">
            Outdoor clay and covered halls — a court for every season.
          </p>
        </div>

        {/* Image panels */}
        {GALLERY.map((item) => (
          <figure
            key={item.src}
            className="group relative h-[74vh] w-[80vw] shrink-0 overflow-hidden rounded-2xl md:w-[58vw] lg:w-[46vw]"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="60vw"
              className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 lg:p-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-volt">
                  {item.index}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white lg:text-3xl">
                  {item.title}
                </p>
              </div>
              <p className="max-w-[9rem] text-right text-xs text-white/70">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}

        {/* Tail spacer */}
        <div className="h-full w-[10vw] shrink-0" />
      </div>
    </section>
  );
}
