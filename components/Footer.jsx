"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { CTA, NAV_LINKS, SITE } from "@/constants";

const ctaLines = CTA.title.split("\n");

export default function Footer() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cta-line", {
        yPercent: 110,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root }
  );

  return (
    <footer
      ref={root}
      className="relative w-full overflow-hidden bg-bg px-6 pb-10 pt-24 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* CTA */}
        <div className="flex flex-col gap-10 border-b border-line pb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-volt">
            {CTA.overline}
          </span>
          <h2 className="display text-[clamp(3rem,11vw,10rem)] text-ink">
            {ctaLines.map((l, i) => (
              <span key={i} className="reveal-line">
                <span className="cta-line inline-block">{l}</span>
              </span>
            ))}
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href={CTA.primary.href}
              className="group relative overflow-hidden rounded-full bg-ink px-8 py-4 text-sm font-semibold text-bg"
            >
              <span className="relative z-10">{CTA.primary.label}</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-volt transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
            </Link>
            <Link
              href={CTA.secondary.href}
              className="rounded-full border border-line px-8 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:border-volt hover:text-volt"
            >
              {CTA.secondary.label}
            </Link>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-ink">
                Hohe Warte
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
            </div>
            <p className="max-w-xs text-sm text-muted">
              {SITE.name} Tennis — {SITE.location}. Wo Disziplin zur Kunst wird.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 w-fit border-b border-line pb-1 text-sm text-ink transition-colors hover:border-volt hover:text-volt"
            >
              {SITE.email}
            </a>
          </div>

          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
            <div key={link.href} className="flex flex-col gap-3">
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-faint transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
              {link.children?.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-xs text-faint md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Hohe Warte Tennis. Alle Rechte vorbehalten.</span>
          <span className="uppercase tracking-[0.2em]">Wien — 48.25° N</span>
        </div>
      </div>
    </footer>
  );
}
