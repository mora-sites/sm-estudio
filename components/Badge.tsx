import type { ReactNode } from "react";

type Level = "ADV" | "BEG" | "INT" | "AVAN" | "INIC" | "TODOS";

const levelClasses: Record<Level, string> = {
  ADV: "bg-sm-gold-light text-sm-gold-dark",
  AVAN: "bg-sm-gold-light text-sm-gold-dark",
  BEG: "bg-sm-cream-dark text-sm-ink",
  INIC: "bg-sm-cream-dark text-sm-ink",
  INT: "bg-sm-gold-light text-sm-gold-dark",
  TODOS: "bg-sm-gold-light text-sm-gold-dark",
};

type BadgeProps = {
  variant?: "level" | "offer";
  level?: Level | string;
  children?: ReactNode;
};

export default function Badge({ variant = "level", level = "ADV", children }: BadgeProps) {
  if (variant === "level") {
    const cls = levelClasses[level as Level] ?? levelClasses.ADV;
    return (
      <span className={`inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold tracking-wide ${cls}`}>{level}</span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-sm-cream-dark py-1.5 pl-1 pr-1.5 text-sm text-sm-ink">
      <span className="rounded-pill bg-sm-gold px-2.5 py-1 text-xs font-semibold tracking-wide text-white">{level}</span>
      {children}
    </span>
  );
}
