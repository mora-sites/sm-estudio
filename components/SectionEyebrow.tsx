import type { ReactNode } from "react";

export default function SectionEyebrow({ icon = "✦", children }: { icon?: string; children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sm-gold">
      <span aria-hidden="true">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
