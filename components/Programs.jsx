"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { PROGRAMS } from "@/constants";

export default function Programs() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".prog-card", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="w-full bg-bg px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-volt">
              What we offer
            </span>
            <h2 className="display max-w-xl text-[clamp(2.2rem,5vw,4.5rem)] text-ink">
              Four ways to play.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            From first serve to national stage — a path for every ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="prog-card group relative flex h-[62vh] min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-line p-6"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 transition-opacity duration-500 group-hover:from-black/90" />

              <div className="relative flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                  {p.index}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:border-volt group-hover:bg-volt group-hover:text-black">
                  →
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white lg:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:max-h-32 group-hover:opacity-100">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
