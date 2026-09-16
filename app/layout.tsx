import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700", "800"] });
const display = Inter({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sm-estudio.vercel.app";
const TITLE = "SM_Estúdio - Yoga, Pilates e Yoga Kids em Águas Santas, Maia";
const DESCRIPTION =
  "Estúdio de Yoga, Pilates e Yoga Kids em Águas Santas, Maia. Movimento que equilibra, respiração que transforma.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["yoga Águas Santas", "pilates Maia", "yoga kids", "yoga nidra", "estúdio de yoga Porto"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "SM_Estúdio",
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
