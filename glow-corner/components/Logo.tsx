"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="logo-shimmer font-serif text-2xl font-semibold tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_14px_rgba(184,134,11,0.45)] md:text-3xl"
      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
    >
      Glow Corner
    </Link>
  );
}
