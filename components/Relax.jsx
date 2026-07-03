"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { RELAX } from "@/constants";

const [line1, line2] = RELAX.title.split("\n");

export default function Relax() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".relax-tile", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".relax-grid", start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="w-full bg-bg px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-volt">
              {RELAX.kicker}
            </span>
            <h2 className="display text-[clamp(2.2rem,5vw,4.5rem)] text-ink">
              {line1}
              <br />
              <span className="text-muted">{line2}</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {RELAX.body}
          </p>
        </div>

        {/* Bento */}
        <div className="relax-grid grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[15rem] lg:gap-4">
          {/* Sports Bar — feature */}
          <FeatureTile
            className="relax-tile col-span-2 row-span-2 min-h-[340px] md:min-h-0"
            data={RELAX.bar}
            sizes="(max-width:768px) 100vw, 50vw"
            priority
          />

          {/* Food 1 — wide */}
          <FoodTile
            className="relax-tile col-span-2 min-h-[200px] md:min-h-0"
            item={RELAX.food[0]}
          />

          {/* Food 2 + drinks */}
          <FoodTile
            className="relax-tile col-span-1 min-h-[160px] md:min-h-0"
            item={RELAX.food[1]}
          />
          <FoodTile
            className="relax-tile col-span-1 min-h-[160px] md:min-h-0"
            item={RELAX.food[2]}
          />

          {/* Wellness — feature */}
          <FeatureTile
            className="relax-tile col-span-2 min-h-[240px] md:min-h-0"
            data={RELAX.wellness}
            sizes="(max-width:768px) 100vw, 50vw"
          />

          {/* Inside the bar — wide */}
          <FoodTile
            className="relax-tile col-span-2 min-h-[200px] md:min-h-0"
            item={RELAX.food[3]}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureTile({ data, className, sizes, priority }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={data.image}
        alt={data.title}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <h3 className="text-2xl font-semibold text-white lg:text-3xl">
          {data.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

function FoodTile({ item, className }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={item.src}
        alt={item.label || "Sportsbar"}
        fill
        sizes="(max-width:768px) 50vw, 25vw"
        className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {item.label && (
        <span className="absolute bottom-4 left-4 translate-y-2 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {item.label}
        </span>
      )}
    </div>
  );
}
