"use client";

import { useState } from "react";

export type FAQ = { question: string; answer: string };

export default function Accordion({ items, defaultOpen = 0 }: { items: FAQ[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-colors duration-200 ease-standard ${
              isOpen ? "border-sm-gold/40 bg-sm-cream" : "border-sm-cream-dark bg-transparent"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-medium text-sm-ink">{it.question}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`flex-shrink-0 text-sm-gold transition-transform duration-200 ease-standard ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-standard"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="m-0 max-w-xl px-6 pb-5 text-sm leading-relaxed text-sm-ink">{it.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
