"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

type Link = { label: string; href: string };

export default function Navbar({
  logoText,
  subtitle,
  links,
  ctaLabel,
  onCtaClick,
}: {
  logoText: string;
  subtitle?: string;
  links: Link[];
  ctaLabel: string;
  onCtaClick?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-20">
      {/* Content passing underneath dissolves into the bar instead of clipping hard. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full h-10 transition-opacity duration-300 ease-standard"
        style={{
          opacity: scrolled ? 1 : 0,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div
        className={`relative flex flex-wrap items-center justify-between gap-3 border-b px-8 py-4 transition-all duration-400 ease-standard ${
          scrolled
            ? "border-sm-cream-dark/80 bg-sm-cream/75 shadow-[0_8px_24px_-12px_rgba(38,33,29,0.25)] backdrop-blur-xl"
            : "border-transparent bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-sm-gold">{logoText}</span>
            {subtitle && <span className="text-[10px] tracking-widest text-sm-ink-light">{subtitle}</span>}
          </div>
        </div>
        <nav className="flex flex-wrap gap-7">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="whitespace-nowrap text-sm text-sm-ink no-underline transition-colors hover:text-sm-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button variant="dark" size="sm" icon="none" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
