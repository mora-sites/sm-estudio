import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./icons";

type Column = { heading: string; links: (string | { label: string; href: string })[] };

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/estudio.simonemelgaco/", Icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/351915964238", Icon: WhatsappIcon },
  { label: "Facebook", href: "#contact", Icon: FacebookIcon },
];

export default function Footer({
  brand,
  tagline,
  copyright,
  columns,
}: {
  brand: string;
  tagline: string;
  copyright: string;
  columns: Column[];
}) {
  return (
    <div id="footer" className="border-t border-sm-cream-dark">
      <div className="flex flex-wrap gap-12 px-8 py-12 pb-7">
        <div className="flex min-w-[200px] flex-col gap-2.5">
          <span className="font-display text-lg font-bold text-sm-gold">{brand}</span>
          <p className="m-0 max-w-[220px] text-sm text-sm-ink">{tagline}</p>
          <div className="mt-1.5 flex gap-2.5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-sm-cream-dark text-sm-gold no-underline transition-colors hover:bg-sm-cream"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-sm-ink-light">{col.heading}</span>
            {col.links.map((l) => {
              const label = typeof l === "string" ? l : l.label;
              const href = typeof l === "string" ? "#" + l.toLowerCase().replace(/\s+/g, "-") : l.href;
              return (
                <a key={href + label} href={href} className="text-sm text-sm-ink no-underline">
                  {label}
                </a>
              );
            })}
          </div>
        ))}
      </div>
      {copyright && (
        <div className="border-t border-sm-cream-dark px-8 py-4 text-center text-xs text-sm-ink-light">{copyright}</div>
      )}
    </div>
  );
}
