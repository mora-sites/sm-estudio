import Button from "./Button";

type CTABannerProps = {
  variant?: "panel" | "inline";
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel: string;
  onClick?: () => void;
  className?: string;
};

export default function CTABanner({
  variant = "panel",
  eyebrow,
  title,
  description,
  ctaLabel,
  onClick,
  className,
}: CTABannerProps) {
  if (variant === "inline") {
    return (
      <div
        className={`flex flex-col justify-center gap-5 rounded-lg bg-sm-gold p-10 ${className ?? ""}`}
      >
        {eyebrow && <span className="text-sm font-semibold tracking-wide text-white/85">{eyebrow}</span>}
        <h3 className="m-0 max-w-md font-display text-3xl font-extrabold leading-tight text-white">{title}</h3>
        <div>
          <button
            onClick={onClick}
            className="cursor-pointer rounded-pill bg-sm-ink px-6 py-3 text-sm font-semibold text-white transition-transform duration-150 ease-standard hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-3.5 overflow-hidden rounded-lg bg-sm-ink p-12 text-center">
      <div className="relative z-10 flex flex-col items-center gap-3.5">
        {eyebrow && <span className="text-xs font-semibold uppercase tracking-wide text-sm-gold">{eyebrow}</span>}
        <h3 className="m-0 max-w-xl font-display text-4xl font-extrabold leading-tight text-white">{title}</h3>
        {description && <p className="m-0 max-w-lg text-base text-white/80">{description}</p>}
        <Button variant="primary" onClick={onClick}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
