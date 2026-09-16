"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "link";

const variantClasses: Record<Variant, string> = {
  primary: "bg-sm-gold text-white border border-sm-gold hover:bg-sm-gold-dark",
  dark: "bg-sm-ink text-white border border-sm-ink hover:bg-black",
  outline: "bg-transparent text-sm-ink border border-sm-cream-dark hover:bg-sm-cream",
  link: "bg-transparent text-sm-ink border-none p-0 hover:underline",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: "md" | "sm";
  icon?: "arrow" | "none";
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  size = "md",
  icon = "arrow",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const isLink = variant === "link";
  const sizeClasses = size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm";

  return (
    <button
      {...props}
      className={`group inline-flex cursor-pointer items-center gap-2 font-semibold transition-transform duration-150 ease-standard hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 disabled:cursor-default disabled:opacity-50 ${
        isLink ? "" : "rounded-pill " + sizeClasses
      } ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon === "arrow" && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform duration-150 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
