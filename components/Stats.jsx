"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { STATS } from "@/constants";

export default function Stats() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Count-up
      gsap.utils.toArray(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("de-DE");
          },
        });
      });

      // Reveal rows
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="w-full border-y border-line bg-bg px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-xl text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
            Über ein Jahrhundert gewachsen.
          </h2>
          <p className="max-w-sm text-sm text-muted">
            Zahlen erzählen nur einen Teil der Geschichte — aber einen guten.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="stat-item flex flex-col gap-3 border-t border-line pt-6"
            >
              <div className="flex items-baseline text-ink">
                <span
                  className="stat-num display text-[clamp(3rem,7vw,6rem)]"
                  data-value={s.value}
                >
                  0
                </span>
                {s.suffix && (
                  <span className="display text-[clamp(2rem,4vw,3.5rem)] text-volt">
                    {s.suffix}
                  </span>
                )}
              </div>
              <span className="text-sm uppercase tracking-[0.15em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
