"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEyebrow from "./SectionEyebrow";
import FeatureRow, { type Feature } from "./FeatureRow";

// Same mechanism as gsap's scroll-scrubbed "dimmer" pattern: a ScrollTrigger per
// item, scrubbed against scroll instead of driven by a scroll-event/rAF loop.
// Each item's own progress (0 at rest -> 1 when its center crosses the viewport
// center -> back to 0) comes straight from ScrollTrigger, so it stays in lockstep
// with the scrollbar with no manual getBoundingClientRect polling.
export default function WhyTrain({ features }: { features: Feature[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState<number[]>(() => features.map(() => 0));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = refs.current.map((el, i) => {
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: "center center+=35%",
        end: "center center-=35%",
        scrub: 0.3,
        onUpdate: (self) => {
          const p = 1 - Math.abs(self.progress * 2 - 1);
          setProgress((prev) => {
            if (Math.abs((prev[i] ?? 0) - p) < 0.01) return prev;
            const next = [...prev];
            next[i] = p;
            return next;
          });
        },
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, [features.length]);

  return (
    <div className="grid grid-cols-1 items-start gap-12 px-6 py-16 md:grid-cols-2 md:gap-12 md:px-12 md:py-16">
      <div className="md:sticky md:top-1/2 md:-translate-y-1/2">
        <SectionEyebrow icon="⛭">A Nossa Filosofia</SectionEyebrow>
        <h2 className="my-5 font-display text-4xl font-extrabold leading-tight text-sm-ink">
          Movimento que equilibra.
          <br />
          Respiração que transforma.
        </h2>
        <p className="max-w-sm text-base text-sm-ink">
          Cinco princípios orientam cada aula e cada pessoa que atravessa a nossa porta.
        </p>
      </div>
      <div className="flex flex-col gap-16">
        {features.map((f, i) => (
          <div
            key={f.index}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
          >
            <FeatureRow {...f} progress={progress[i] ?? 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
