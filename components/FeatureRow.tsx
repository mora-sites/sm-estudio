export type Feature = {
  index: string;
  icon: string;
  title: string;
  description: string;
};

// `progress` is 0→1: how close this card is to the vertical center of the
// viewport right now. Driven continuously by WhyTrain's scroll listener, not
// a one-time reveal — cards dim back down once scrolled past, same as the
// reference site's "one card lit at a time" feel.
export default function FeatureRow({ index, icon, title, description, progress = 0 }: Feature & { progress?: number }) {
  const p = Math.min(1, Math.max(0, progress));
  const bg = `rgba(255,255,255,${(0.12 + p * 0.88).toFixed(3)})`;
  const shadow =
    p > 0.08
      ? `0 ${Math.round(6 + p * 18)}px ${Math.round(20 + p * 28)}px rgba(38,33,29,${(0.05 + p * 0.12).toFixed(3)})`
      : "none";
  const textOpacity = (0.4 + p * 0.6).toFixed(3);
  const accent = p > 0.5 ? "text-sm-gold" : "text-sm-ink-light";

  return (
    <div
      className="flex items-start gap-5 rounded-[28px] px-7 py-6 transition-[background-color,box-shadow,transform] duration-150 ease-out"
      style={{
        backgroundColor: bg,
        boxShadow: shadow,
        transform: `scale(${(0.97 + p * 0.03).toFixed(3)}) translateY(${Math.round((1 - p) * 10)}px)`,
      }}
    >
      <span className="min-w-11 shrink-0 text-3xl font-extrabold text-sm-ink" style={{ opacity: textOpacity }}>
        {index}
      </span>
      <div className="flex flex-col gap-1.5" style={{ opacity: textOpacity }}>
        <div className="flex items-center gap-2 text-lg font-semibold text-sm-ink">
          <span aria-hidden="true" className={accent}>
            {icon}
          </span>
          <span>{title}</span>
        </div>
        <p className="m-0 max-w-md text-sm leading-relaxed text-sm-ink">{description}</p>
      </div>
    </div>
  );
}
