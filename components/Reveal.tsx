"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  delay?: number;
  y?: number;
  blur?: number;
  eager?: boolean;
  threshold?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  blur = 8,
  eager = false,
  threshold = 0.2,
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (eager) {
      const t = setTimeout(() => setVisible(true), reduce ? 0 : delay);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), reduce ? 0 : delay);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, delay, threshold, reduce]);

  const b = reduce ? 0 : blur;
  const dur = reduce ? 1 : 900;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        filter: visible ? "blur(0px)" : `blur(${b}px)`,
        transition: `opacity ${dur}ms cubic-bezier(.4,0,.2,1), transform ${dur}ms cubic-bezier(.4,0,.2,1), filter ${dur}ms cubic-bezier(.4,0,.2,1)`,
        willChange: "opacity, transform, filter",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
