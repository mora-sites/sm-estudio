import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sm: {
          gold: "#C9973E",
          "gold-dark": "#A6791F",
          "gold-light": "#E9CD86",
          ink: "#2A1D10",
          "ink-light": "#4A3823",
          cream: "#FBF5E7",
          "cream-dark": "#EEE0BE",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        "4xl": "2.5rem",
        "5xl": "3.5rem",
        "6xl": "4.5rem",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,.04)",
        md: "0 8px 24px rgba(0,0,0,.06)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
