import Image from "next/image";
import Link from "next/link";
import {
  AnnouncementBar,
  BrandHeader,
  Nav,
  Footer,
  Button,
  FadeInSection,
  PhilosophyCarousel,
} from "@/components";

const categories = [
  {
    name: "Acne Care",
    href: "/blog?category=acne",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: "Dry Skin",
    href: "/blog?category=dry",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: "Anti-Aging",
    href: "/blog?category=anti-aging",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Sensitive Skin",
    href: "/blog?category=sensitive",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function BlogPage() {
  return (
    <>
      <AnnouncementBar />
      <BrandHeader />
      <Nav />

      <main className="min-h-screen bg-[#F5E8E2]">
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD] py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-4xl font-semibold text-[#916B61] md:text-5xl">
                Glow Tips & Skincare Advice
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-[#916B61]/90">
                Simple, trusted advice for healthier, happier skin.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="border-b border-[#E8C9BD]/50 bg-[#F7EBE5] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="mb-8 text-center text-xl font-semibold text-[#916B61]">
                Popular Categories
              </h2>
            </FadeInSection>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {categories.map((cat, i) => (
                <FadeInSection key={cat.name} delay={i * 60}>
                  <Link
                    href={cat.href}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-[#b38080]/30 bg-[#FEF9F6] p-6 text-center shadow-sm transition-all duration-300 hover:border-[#C79A8B]/60 hover:bg-[#E8C9BD]/40 hover:shadow-md"
                  >
                    <span className="text-[#916B61] transition-colors group-hover:text-[#7a5a52]">
                      {cat.icon}
                    </span>
                    <span className="font-medium text-[#916B61] group-hover:text-[#7a5a52]">
                      {cat.name}
                    </span>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Acne Care — text left, image right */}
        <section className="border-b border-[#E8C9BD]/50 bg-[#F7EBE5] py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <FadeInSection className="order-2 lg:order-1">
                <h2 className="mb-4 text-2xl font-semibold text-[#916B61] md:text-3xl">
                  Acne Care
                </h2>
                <p className="leading-relaxed text-[#916B61]/90">
                  Acne-prone skin needs gentle balance, not harsh treatment. At Glow Corner, we
                  believe in calming the skin while reducing breakouts slowly and safely. The right
                  routine should focus on deep cleansing, lightweight hydration, and ingredients
                  that help control excess oil without stripping your skin. Consistency and
                  patience are the key to clearer, healthier-looking skin.
                </p>
              </FadeInSection>
              <FadeInSection delay={100} className="order-1 lg:order-2">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative aspect-[4/5] min-h-[200px] w-full overflow-hidden rounded-2xl border-2 border-[#b38080]/40">
                    <Image
                      src="/acne skin.jpg"
                      alt="Acne care and clearer skin"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 24rem"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#916B61]/90 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
                      Dermatologist Tested
                    </span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Dry Skin Care — image left, text right */}
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD]/30 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <FadeInSection className="order-1">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative aspect-[4/5] min-h-[200px] w-full overflow-hidden rounded-2xl border-2 border-[#b38080]/40">
                    <Image
                      src="/dry skin.jpg"
                      alt="Dry skin hydration and care"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 24rem"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#916B61]/90 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
                      Deep Hydration
                    </span>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection delay={100} className="order-2">
                <h2 className="mb-4 text-2xl font-semibold text-[#916B61] md:text-3xl">
                  Dry Skin Care
                </h2>
                <p className="leading-relaxed text-[#916B61]/90">
                  Dry skin requires deep hydration and long-lasting moisture support. Instead of
                  heavy layers, focus on nourishing formulas that restore softness and protect your
                  skin barrier. Ingredients like hyaluronic acid and natural extracts can help
                  maintain smoothness and comfort throughout the day. With the right care, dry skin
                  can feel supple, healthy, and naturally glowing.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Anti-Aging — text left, image right */}
        <section className="border-b border-[#E8C9BD]/50 bg-[#F7EBE5] py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <FadeInSection className="order-2 lg:order-1">
                <h2 className="mb-4 text-2xl font-semibold text-[#916B61] md:text-3xl">
                  Anti-Aging Skin Care
                </h2>
                <p className="leading-relaxed text-[#916B61]/90">
                  Healthy, youthful-looking skin is about protection and care over time.
                  Anti-aging routines should focus on hydration, brightening ingredients, and daily
                  sun protection. Gentle active ingredients can improve skin texture and reduce the
                  appearance of fine lines without causing irritation. A simple and consistent
                  routine helps maintain a smooth and radiant look.
                </p>
              </FadeInSection>
              <FadeInSection delay={100} className="order-1 lg:order-2">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative aspect-[4/5] min-h-[200px] w-full overflow-hidden rounded-2xl border-2 border-[#b38080]/40">
                    <Image
                      src="/anti aging.jpg"
                      alt="Anti-aging skincare and radiant skin"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 24rem"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#916B61]/90 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
                      Glow Boost
                    </span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Sensitive Skin Care — image left, text right */}
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD]/30 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <FadeInSection className="order-1">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative aspect-[4/5] min-h-[200px] w-full overflow-hidden rounded-2xl border-2 border-[#b38080]/40">
                    <Image
                      src="/sensitive skin.jpg"
                      alt="Sensitive skin comfort and care"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 24rem"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#916B61]/90 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
                      Gentle Care
                    </span>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection delay={100} className="order-2">
                <h2 className="mb-4 text-2xl font-semibold text-[#916B61] md:text-3xl">
                  Sensitive Skin Care
                </h2>
                <p className="leading-relaxed text-[#916B61]/90">
                  Sensitive skin needs extra comfort and protection. Gentle formulas without harsh
                  ingredients can help reduce redness and irritation. A calm routine with soothing
                  elements like aloe vera and mild cleansers can strengthen the skin barrier over
                  time. The goal is to support your skin&apos;s natural balance and keep it feeling
                  peaceful and healthy.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Expert Advice */}
        <section className="border-y border-[#E8C9BD]/50 bg-[#E8C9BD]/60 py-14">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
            <FadeInSection className="flex-1 text-center lg:text-left">
              <blockquote className="text-xl font-medium leading-relaxed text-[#916B61] md:text-2xl">
                &ldquo;Our philosophy is simple — gentle care creates lasting glow.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-[#916B61]/80">
                — Glow Corner
              </p>
            </FadeInSection>
            <FadeInSection delay={100} className="shrink-0">
              <PhilosophyCarousel />
            </FadeInSection>
          </div>
        </section>

        {/* Blog Newsletter */}
        <section className="border-t border-[#E8C9BD]/50 bg-[#F7EBE5] py-16">
          <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="mb-2 text-2xl font-semibold text-[#916B61]">
                Get Weekly Glow Tips in Your Inbox
              </h2>
              <p className="mb-8 text-[#916B61]/80">
                Gentle advice, new posts, and exclusive tips — delivered with care.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full border border-[#E8C9BD] bg-white px-5 py-3 text-[#916B61] placeholder-[#916B61]/50 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className="rounded-full px-8">
                  Subscribe
                </Button>
              </form>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
