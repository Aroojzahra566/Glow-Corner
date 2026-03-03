"use client";

import { useState } from "react";
import {
  AnnouncementBar,
  Nav,
  Footer,
  ProductCard,
  FadeInSection,
} from "@/components";
import { products } from "@/lib/products";

const categories = ["All", "Cleanser", "Serum", "Moisturizer", "Eye care", "Mask"];
const skinTypes = ["All", "All skin types", "Dry, Normal"];

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [skinType, setSkinType] = useState("All");

  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSkin = skinType === "All" || p.skinType === skinType;
    return matchCategory && matchSkin;
  });

  return (
    <>
      <AnnouncementBar />
      <Nav />

      <main className="min-h-screen bg-[#F5E8E2]">
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD] py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-4xl font-semibold text-[#916B61] md:text-5xl">
                Shop Our Collection
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-[#916B61]/90">
                Gentle, effective skincare for every step of your routine.
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-10 flex flex-wrap items-center gap-4 rounded-2xl bg-[#FEF9F6] p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-[#916B61]">Category:</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-full border border-[#E8C9BD] bg-[#FEF9F6] px-4 py-2 text-sm text-[#916B61] focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-[#916B61]">Skin type:</span>
                <select
                  value={skinType}
                  onChange={(e) => setSkinType(e.target.value)}
                  className="rounded-full border border-[#E8C9BD] bg-[#FEF9F6] px-4 py-2 text-sm text-[#916B61] focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
                >
                  {skinTypes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </FadeInSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <FadeInSection key={product.slug} delay={i * 60}>
                <ProductCard
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  benefit={product.benefit}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                />
              </FadeInSection>
            ))}
            {/* Placeholder(s) so the last row always has 3 containers — text/headings only, no image */}
            {filtered.length > 0 &&
              Array.from({ length: (3 - (filtered.length % 3)) % 3 }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="flex min-h-[380px] flex-col rounded-2xl bg-[#F7EBE5] p-6 shadow-sm"
                >
                  <h3 className="mb-2 font-medium text-[#C79A8B]">More Coming Soon</h3>
                  <p className="flex-1 text-sm text-[#916B61]/80">
                    We&apos;re crafting new products to help you glow. Stay tuned.
                  </p>
                </div>
              ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-[#916B61]/80">
              No products match your filters. Try adjusting your selection.
            </p>
          )}

          <FadeInSection className="mt-12 text-center">
            <button
              type="button"
              className="rounded-full border-2 border-[#C79A8B] px-8 py-3 text-[#916B61] transition-all hover:bg-[#C79A8B]/10 hover:shadow-md"
            >
              Load More
            </button>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
