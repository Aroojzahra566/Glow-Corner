import Image from "next/image";
import {
  AnnouncementBar,
  Nav,
  BrandHeader,
  Button,
  TrustCard,
  ProductCard,
  Footer,
  FadeInSection,
  StarRating,
  HeroCarousel,
} from "@/components";

const trustItems = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Natural Ingredients",
    description: "Clean, plant-based formulas for gentle care.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Dermatologist Tested",
    description: "Approved by skin experts for safety and efficacy.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Cruelty-Free",
    description: "Never tested on animals. Kind to all.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Visible Results",
    description: "Real transformations you can see and feel.",
  },
];

const featuredProducts = [
  {
    slug: "gentle-cleanser",
    name: "Gentle Glow Cleanser",
    price: "$28",
    benefit: "Soft cleanse without stripping. Leaves skin balanced.",
    imageSrc: "/cleanser.jpg",
    imageAlt: "Gentle Glow Cleanser bottle",
  },
  {
    slug: "hydrating-serum",
    name: "Hydrating Glow Serum",
    price: "$42",
    benefit: "Lightweight hydration. Plump, dewy skin.",
    imageSrc: "/serum.jpg",
    imageAlt: "Hydrating Glow Serum",
  },
  {
    slug: "night-cream",
    name: "Overnight Repair Cream",
    price: "$48",
    benefit: "Restore and renew while you sleep.",
    imageSrc: "/repair_cream.jpg",
    imageAlt: "Overnight Repair Cream",
  },
];

const routineSteps = [
  {
    step: "1",
    title: "Cleanse",
    description: "Start with our Gentle Glow Cleanser to remove impurities without stripping natural oils.",
  },
  {
    step: "2",
    title: "Treat",
    description: "Apply serum or treatment to target concerns and boost radiance.",
  },
  {
    step: "3",
    title: "Moisturize",
    description: "Lock in moisture with a cream suited to your skin type for a soft, glowing finish.",
  },
];

const testimonials = [
  {
    quote: "My skin has never looked better. The products feel luxurious and actually deliver.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    quote: "Gentle, effective, and the packaging is beautiful. Will repurchase forever.",
    author: "Emma L.",
    rating: 5,
  },
  {
    quote: "Finally found a routine that doesn't irritate my sensitive skin. So grateful.",
    author: "Jess K.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <BrandHeader />
      <Nav />

      {/* Hero carousel — just below navbar */}
      <HeroCarousel />

      {/* Soft, Healthy Glow — main hero message */}
      <section className="relative rounded-2xl border-2 border-[#b38080] bg-[#E8C9BD] py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <FadeInSection className="order-2 md:order-1">
            <h1 className="mb-3 text-2xl font-semibold leading-tight text-[#916B61] md:text-3xl">
              Soft, Healthy Glow Starts Here
            </h1>
            <p className="mb-6 max-w-md text-base text-[#916B61]/90">
              Premium skincare crafted with natural ingredients. Gentle formulas that reveal your best skin — calm, glowing, and cared for.
            </p>
            <Button href="/shop">Get Started</Button>
          </FadeInSection>
          <FadeInSection delay={150} className="order-1 md:order-2">
            <div className="relative mx-auto max-w-sm aspect-[4/5] overflow-hidden rounded-2xl border-2 border-[#b38080] shadow-xl">
              <Image
                src="/glowy_women.jpg"
                alt="Woman applying serum for a soft, healthy glow"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-[#E8C9BD]/50 bg-[#F7EBE5] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80}>
                <TrustCard {...item} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#F7EBE5] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-1 text-center text-2xl font-semibold text-[#916B61]">
              Featured Products
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-sm text-[#916B61]/80">
              Discover our bestsellers for a simple, effective routine.
            </p>
          </FadeInSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <FadeInSection key={product.slug} delay={i * 100}>
                <ProductCard {...product} />
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={300} className="mt-8 text-center">
            <Button href="/shop" variant="outline">
              View All Products
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Skincare Routine */}
      <section id="routine" className="bg-[#E8C9BD] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-1 text-center text-2xl font-semibold text-[#916B61]">
              Your Simple Skincare Routine
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-sm text-[#916B61]/80">
              Three steps to glowing, healthy skin.
            </p>
          </FadeInSection>
          <div className="grid gap-5 md:grid-cols-3">
            {routineSteps.map((item, i) => (
              <FadeInSection key={item.step} delay={i * 120}>
                <div className="flex min-h-[220px] flex-col rounded-2xl bg-[#F7EBE5] p-6 text-center shadow-sm">
                  <span className="mb-3 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C79A8B] text-base font-semibold text-white">
                    {item.step}
                  </span>
                  <h3 className="mb-2 font-semibold text-[#916B61]">{item.title}</h3>
                  <p className="flex-1 text-sm text-[#916B61]/80">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E8C9BD] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-8 text-center text-2xl font-semibold text-[#916B61]">
              What Our Community Says
            </h2>
          </FadeInSection>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.author} delay={i * 100}>
                <div className="flex min-h-[220px] flex-col rounded-2xl bg-[#F7EBE5] p-6 shadow-sm">
                  <StarRating rating={t.rating} />
                  <p className="mt-3 flex-1 text-sm text-[#916B61]/90">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 font-medium text-[#916B61]">— {t.author}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-[#E8C9BD]/50 bg-[#F7EBE5] py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-2 text-2xl font-semibold text-[#916B61]">
              Join the Glow Community
            </h2>
            <p className="mb-8 text-[#916B61]/80">
              Tips, new launches, and exclusive offers — delivered gently to your inbox.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full border border-[#E8C9BD] bg-[#F7EBE5] px-5 py-3 text-[#916B61] placeholder-[#916B61]/50 focus:border-[#C79A8B] focus:outline-none focus:ring-2 focus:ring-[#C79A8B]/30"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
