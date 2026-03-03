import Image from "next/image";
import {
  AnnouncementBar,
  Nav,
  Footer,
  FadeInSection,
} from "@/components";

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />

      <main className="min-h-screen bg-[#FEF9F6]">
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-4xl font-semibold text-[#916B61] md:text-5xl">
                Our Story
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#916B61]/90">
                Why we created Glow Corner — and what we believe in.
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-6 text-2xl font-semibold text-[#916B61]">
              Natural Beauty, Confidence & Gentle Care
            </h2>
            <p className="mb-6 leading-relaxed text-[#916B61]/90">
              Glow Corner was born from a simple idea: skincare should feel like a moment of calm, not a chore. We believe in natural beauty, built on gentle formulas and honest ingredients. Our mission is to help you feel confident in your skin — soft, glowing, and cared for.
            </p>
            <p className="mb-12 leading-relaxed text-[#916B61]/90">
              Every product is crafted with the same philosophy: effective without aggression, luxurious without excess. We focus on what your skin needs — balance, hydration, and a little bit of radiance.
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h2 className="mb-6 text-2xl font-semibold text-[#916B61]">
              Our Ingredient Philosophy
            </h2>
            <p className="mb-8 leading-relaxed text-[#916B61]/90">
              We choose ingredients that are kind to skin and the planet. Plant-based extracts, dermatologist-tested actives, and no unnecessary fillers. We are committed to cruelty-free, clean formulas that deliver visible results without compromise.
            </p>
            <ul className="mb-12 space-y-3 text-[#916B61]/90">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C79A8B]" />
                Clean, thoughtfully sourced ingredients
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C79A8B]" />
                Dermatologist tested for safety
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C79A8B]" />
                Cruelty-free and never tested on animals
              </li>
            </ul>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#F5E8E2] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80"
                alt="Skincare products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={200} className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold text-[#916B61]">
              Why Trust Glow Corner
            </h2>
            <p className="leading-relaxed text-[#916B61]/90">
              We stand behind every product. Our formulations are developed with experts, tested for efficacy, and made with the same care we would want for our own skin. When you choose Glow Corner, you are choosing a brand that puts your skin — and your peace of mind — first.
            </p>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
