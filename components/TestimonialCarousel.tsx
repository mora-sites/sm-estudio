"use client";

import { useEffect, useState } from "react";

export type Testimonial = { quote: string; name: string; role: string };

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, reduce, n]);

  const go = (i: number) => setActive(((i % n) + n) % n);
  const half = Math.floor(n / 2);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex min-h-[400px] w-full flex-col overflow-hidden rounded-lg bg-sm-ink py-6"
    >
      <div className="relative flex flex-1 items-center justify-center overflow-hidden" style={{ perspective: 1500 }}>
        {items.map((t, i) => {
          let rel = i - active;
          rel = ((rel % n) + n) % n;
          if (rel > half) rel -= n;
          const dist = Math.abs(rel);
          const dir = Math.sign(rel);
          const visible = dist <= 1;
          const cardStyle =
            dist === 0
              ? { opacity: 1, transform: "translateX(0) translateZ(0) scale(1) rotateY(0deg)", zIndex: 5 }
              : dist === 1
              ? {
                  opacity: 1,
                  transform: `translateX(${dir * 48}%) translateZ(-100px) scale(0.76) rotateY(${dir * -15}deg)`,
                  zIndex: 4,
                }
              : {
                  opacity: 0,
                  transform: `translateX(${dir * 96}%) translateZ(-200px) scale(0.72) rotateY(${dir * -30}deg)`,
                  zIndex: 3,
                };

          return (
            <div
              key={t.name}
              onClick={() => dist !== 0 && go(i)}
              className="absolute flex w-[85%] max-w-[360px] items-center justify-center transition-[transform,opacity] duration-700 ease-standard"
              style={{
                transformStyle: "preserve-3d",
                cursor: dist === 0 ? "default" : "pointer",
                pointerEvents: visible ? "auto" : "none",
                ...cardStyle,
              }}
            >
              <div className="relative flex w-full flex-col gap-4 rounded-lg border border-white/20 bg-white/[0.08] p-6 backdrop-blur-[5px]">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-base text-[#f5c451]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="m-0 text-sm leading-relaxed text-white">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 flex-shrink-0 rounded-full bg-sm-cream-dark" />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-sm-gold">{t.role}</div>
                  </div>
                </div>
                {dist !== 0 && <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/60" />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex w-full items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para testemunho ${i + 1}`}
              onClick={() => go(i)}
              className="flex h-11 w-8 cursor-pointer items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-pill transition-all duration-400 ease-standard ${
                  i === active ? "w-6 bg-gradient-to-r from-sm-gold to-sm-gold/60" : "w-1.5 bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <button
            aria-label="Testemunho anterior"
            onClick={() => go(active - 1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-sm-gold bg-black text-sm-gold transition-transform duration-150 ease-standard hover:scale-105 active:scale-90 active:duration-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Testemunho seguinte"
            onClick={() => go(active + 1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-sm-gold bg-black text-sm-gold transition-transform duration-150 ease-standard hover:scale-105 active:scale-90 active:duration-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
