"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          className="group relative z-10 flex items-baseline gap-2"
          onMouseEnter={() => setOpenIndex(null)}
        >
          <span className="text-[15px] font-semibold uppercase tracking-[0.28em] text-ink">
            Hohe Warte
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-volt sm:block" />
        </Link>

        {/* Links */}
        <ul
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenIndex(null)}
        >
          {NAV_LINKS.map((link, i) => {
            const hasChildren = !!link.children?.length;
            return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenIndex(hasChildren ? i : null)}
              >
                <Link
                  href={link.href}
                  className="group relative flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-muted transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                  {hasChildren && (
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 10 10"
                      className={`translate-y-px transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M1 3l4 4 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-volt transition-transform duration-300 group-hover:scale-x-100" />
                </Link>

                {hasChildren && (
                  <div
                    className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      openIndex === i
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-line bg-bg-soft/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-ink"
                        >
                          {child.label}
                          <span className="translate-x-0 text-volt opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/club/become-a-member"
          className="group relative hidden overflow-hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-bg transition-colors duration-300 hover:text-bg lg:inline-flex"
        >
          <span className="relative z-10">Mitglied werden</span>
          <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-volt transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
        </Link>

        {/* Compact label for < lg (desktop-first, minimal) */}
        <span className="text-xs uppercase tracking-[0.2em] text-muted lg:hidden">
          Menü
        </span>
      </nav>
    </header>
  );
}
