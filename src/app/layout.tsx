import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk, Great_Vibes } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
  fallback: ["serif"],
  adjustFontFallback: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Botiflay",
  description: "CRAFTING PREMIUM DESIGNS & DEVELOPMENT",
};

const fontClasses = `${spaceGrotesk.variable} ${inter.variable} ${manrope.variable} ${greatVibes.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${fontClasses} antialiased relative`}>
        <div className="h-dvh bg-[url('/assets/hero-bg.png')] bg-cover bg-center bg-no-repeat ">
          {children}
        </div>
      </body>
    </html>
  );
}
