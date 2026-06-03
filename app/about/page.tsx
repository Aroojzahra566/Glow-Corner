import Image from "next/image";
import {
  Nav,
  BrandHeader,
  Button,
  Footer,
  FadeInSection,
} from "@/components";

export default function AboutPage() {
  return (
    <>
      <BrandHeader />
      <Nav />

      <main>
        {/* Hero — compact */}
        <section className="relative rounded-2xl border-2 border-[#b38080] bg-[#E8C9BD] py-5 md:py-7">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="mb-2 text-xl font-semibold text-[#916B61] md:text-2xl">
                About Glow Corner
              </h1>
              <p className="max-w-2xl text-sm text-[#916B61]/90 md:text-base">
                We believe in gentle, effective skincare that brings out your natural glow.
                Our products are crafted with clean ingredients and a commitment to
                kindness — to your skin and to the planet.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Story — text left, image container right */}
        <section className="border-t border-[#E8C9BD]/50 bg-[#F7EBE5] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
              <FadeInSection className="order-2 lg:order-1">
                <h2 className="mb-6 text-2xl font-semibold text-[#916B61]">
                  Our Story
                </h2>
                <p className="mb-6 text-[#916B61]/90">
                  Glow Corner was created with one simple belief — skincare should feel
                  gentle, honest, and comforting. We wanted to build a space where beauty
                  is not about perfection, but about confidence and self-care. Every
                  product we create is designed to support your natural glow in the
                  softest way possible.
                </p>

                <h3 className="mb-3 text-lg font-semibold text-[#916B61]">
                  What We Believe In
                </h3>
                <p className="mb-4 text-[#916B61]/90">
                  At Glow Corner, we believe healthy skin begins with simple routines and
                  thoughtful ingredients. Skincare should never feel complicated or harsh.
                  It should feel calm, safe, and effective.
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-5 text-[#916B61]/90">
                  <li>Gentle formulas for everyday use</li>
                  <li>Clean and carefully selected ingredients</li>
                  <li>Products made for real skin, not perfection</li>
                  <li>Focus on long-term glow, not quick fixes</li>
                </ul>

                <p className="mb-4 text-[#916B61]/90">
                  Glow Corner started from a simple idea: skincare should feel good and
                  do good. We blend natural ingredients with proven science to create
                  formulas that are gentle enough for sensitive skin and effective enough
                  to deliver real results.
                </p>
                <p className="text-[#916B61]/90">
                  Every product is dermatologist-tested and cruelty-free. We&apos;re here to
                  help you build a routine that fits your life and reveals your best skin.
                </p>
              </FadeInSection>
              <FadeInSection delay={100} className="order-1 lg:order-2">
                <div className="relative mx-auto w-[88%] max-w-md">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#b38080]/50">
                    <Image
                      src="/glow 2.jpg"
                      alt="Woman with natural glowing skin in warm light"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 88vw, 28vw"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#E8C9BD] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="mb-8 text-center text-2xl font-semibold text-[#916B61]">
                What We Stand For
              </h2>
            </FadeInSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Clean & Natural",
                  desc: "Plant-based, thoughtfully sourced ingredients you can trust.",
                },
                {
                  title: "Gentle & Effective",
                  desc: "Formulas that work without harsh chemicals or irritation.",
                },
                {
                  title: "Cruelty-Free",
                  desc: "Never tested on animals. Kind to skin and to all creatures.",
                },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={i * 80}>
                  <div className="rounded-2xl bg-[#F7EBE5] p-6 shadow-sm">
                    <h3 className="mb-2 font-semibold text-[#916B61]">{item.title}</h3>
                    <p className="text-sm text-[#916B61]/90">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Two-card section — below What We Stand For */}
        <section className="border-t border-[#E8C9BD]/50 bg-[#F7EBE5] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid min-h-[420px] grid-cols-1 gap-6 md:grid-cols-2 md:auto-rows-fr">
              <FadeInSection className="flex justify-center md:justify-start">
                <div className="flex min-h-[420px] w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[#b38080]/30 bg-white shadow-sm">
                  <div className="relative aspect-[4/5] min-h-[240px] w-full shrink-0 overflow-hidden">
                    <Image
                      src="/glow 1.jpg"
                      alt="Serene moment of self-care and glowing skin"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 font-semibold text-[#916B61]">
                      Our Approach
                    </h3>
                    <p className="text-sm text-[#916B61]/90">
                      We focus on clean, plant-based formulas that work in harmony with your skin.
                      Every product is designed to deliver visible results without compromise.
                    </p>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection delay={80} className="flex justify-center md:justify-end">
                <div className="flex min-h-[420px] w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[#b38080]/30 bg-white shadow-sm">
                  <div className="relative aspect-[4/5] min-h-[240px] w-full shrink-0 overflow-hidden">
                    <Image
                      src="/12345.jpg"
                      alt="Fresh, clean skincare ritual"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 font-semibold text-[#916B61]">
                      Our Promise
                    </h3>
                    <p className="text-sm text-[#916B61]/90">
                      Dermatologist-tested and cruelty-free. We stand behind every formula
                      with a commitment to quality and kindness.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Three-card section */}
        <section className="bg-[#E8C9BD] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="mb-6 text-center text-xl font-semibold text-[#916B61]">
                Why Choose Glow Corner
              </h2>
            </FadeInSection>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FadeInSection delay={0}>
                <article className="flex h-[380px] w-full flex-col overflow-hidden rounded-2xl border border-[#b38080]/30 bg-[#F7EBE5] shadow-sm">
                  <div className="relative h-[280px] w-full shrink-0 overflow-hidden">
                    <Image
                      src="/serum.jpg"
                      alt="Serum application for healthy, glowing skin"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <h3 className="mb-1 font-semibold text-[#916B61]">Quality First</h3>
                    <p className="text-sm leading-snug text-[#916B61]/90">
                      Premium ingredients and rigorous testing for safe, effective skincare.
                    </p>
                  </div>
                </article>
              </FadeInSection>
              <FadeInSection delay={80}>
                <article className="flex h-[380px] w-full flex-col overflow-hidden rounded-2xl border border-[#b38080]/30 bg-[#F7EBE5] shadow-sm">
                  <div className="relative h-[280px] w-full shrink-0 overflow-hidden">
                    <Image
                      src="/about image 2.jpg"
                      alt="Skincare product and natural beauty"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <h3 className="mb-1 font-semibold text-[#916B61]">Simple Routine</h3>
                    <p className="text-sm leading-snug text-[#916B61]/90">
                      Easy steps that fit your life. Cleanse, treat, moisturize — done.
                    </p>
                  </div>
                </article>
              </FadeInSection>
              <FadeInSection delay={160}>
                <article className="flex h-[380px] w-full flex-col overflow-hidden rounded-2xl border border-[#b38080]/30 bg-[#F7EBE5] shadow-sm">
                  <div className="relative h-[280px] w-full shrink-0 overflow-hidden">
                    <Image
                      src="/glow 2.jpg"
                      alt="Natural glow and radiant skin"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <h3 className="mb-1 font-semibold text-[#916B61]">Real Results</h3>
                    <p className="text-sm leading-snug text-[#916B61]/90">
                      See and feel the difference. Glowing, healthy skin you can trust.
                    </p>
                  </div>
                </article>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#E8C9BD]/50 bg-[#F7EBE5] py-12">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="mb-4 text-2xl font-semibold text-[#916B61]">
                Ready to start your glow?
              </h2>
              <p className="mb-6 text-[#916B61]/90">
                Explore our collection of gentle, effective skincare.
              </p>
              <Button href="/shop">Shop Now</Button>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
