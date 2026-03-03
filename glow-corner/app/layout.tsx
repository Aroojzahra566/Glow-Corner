import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Archivo_Black } from "next/font/google";
import { ToastProvider, WelcomeModal } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Glow Corner",
  description:
    "Natural beauty, gentle care, and visible results. Discover our dermatologist-tested, cruelty-free skincare.",
  icons: {
    icon: "/slazzer-preview-7kahy.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${archivoBlack.variable} font-sans antialiased`}
      >
        <ToastProvider>
          <WelcomeModal />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
