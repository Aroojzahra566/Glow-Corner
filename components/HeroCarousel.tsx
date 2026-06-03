"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroCarousel() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden rounded-b-2xl border-2 border-[#b38080] border-t-0 bg-[#E8C9BD] md:min-h-[78vh]">
      <div className="absolute inset-0 bg-[#E8C9BD]">
        <Image
          src="/banner_glow.jpg"
          alt="Woman with naturally glowing skin"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#2d2522]/45" aria-hidden />
      </div>

      <div className="relative flex min-h-[72vh] items-center justify-center md:min-h-[78vh]">
        <div className="max-w-xl px-6 text-center md:px-10 lg:px-14">
          <h1 className="mb-3 text-3xl font-semibold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] md:text-4xl lg:text-5xl">
            5 Secrets to Naturally Glowing Skin
          </h1>
          <p className="mb-6 text-base text-[#F5E8E2] drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)] md:text-lg">
            Simple habits that transform your skin gently.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-[#b38080] px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9a6b6b] hover:shadow-xl hover:shadow-[#b38080]/40"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
