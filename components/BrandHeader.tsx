"use client";

import Image from "next/image";
import Link from "next/link";

export function BrandHeader() {
  return (
    <div className="bg-[#E8C9BD] py-3 pl-0 pr-4 md:pl-1 md:pr-6 lg:pl-2 lg:pr-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Left: logo + Glow Corner heading */}
        <Link href="/" className="flex shrink-0 items-center gap-2 md:gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/slazzer-preview-7kahy.png"
              alt=""
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
          <h1
            className="text-xl font-normal tracking-wide text-[#916B61] md:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
          >
            Glow Corner
          </h1>
        </Link>

        {/* Center: search bar with icon inside */}
        <div className="flex flex-1 justify-center px-4 md:max-w-xs md:px-6">
          <label htmlFor="header-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#916B61]">
              <SearchIcon />
            </span>
            <input
              id="header-search"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="w-full rounded-full border border-[#916B61]/30 bg-[#FEF9F6] py-2 pl-9 pr-3 text-sm text-[#916B61] placeholder-[#916B61]/50 focus:border-[#916B61] focus:outline-none focus:ring-2 focus:ring-[#916B61]/20"
            />
          </div>
        </div>

        {/* Right: spacer for balance */}
        <div className="flex-1 md:max-w-[120px]" aria-hidden />
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-5.2-5.2M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  );
}
