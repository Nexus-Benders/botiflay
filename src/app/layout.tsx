import Navbar from "@/_components/navbar/navbar";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/_components/sections/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Botiflay",
  description: "CRAFTING PREMIUM DESIGNS & DEVELOPMENT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${spaceGrotesk.variable} ${inter.variable} ${manrope.variable} antialiased relative`}
      >
        <div className="h-dvh bg-[url('/assets/hero-bg.png')] bg-cover bg-center bg-no-repeat ">
          {children}
        </div>
      </body>
    </html>
  );
}
