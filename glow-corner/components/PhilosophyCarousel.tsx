"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { src: "/about image 2.jpg", alt: "Skincare and gentle care" },
  { src: "/glowy women.jpg", alt: "Natural glow" },
  { src: "/12345.jpg", alt: "Skincare ritual" },
];

export function PhilosophyCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-56 w-72 overflow-hidden rounded-2xl border-2 border-[#b38080]/40 bg-[#F7EBE5] sm:h-64 sm:w-80">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 18rem, 20rem"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#916B61]" : "w-2 bg-[#916B61]/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
