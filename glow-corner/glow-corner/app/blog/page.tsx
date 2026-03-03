import Image from "next/image";
import Link from "next/link";
import {
  AnnouncementBar,
  Nav,
  Footer,
  Button,
  FadeInSection,
} from "@/components";

const posts = [
  {
    slug: "morning-routine",
    title: "Your Best Morning Skincare Routine",
    excerpt:
      "Start the day with a simple, effective routine that leaves your skin glowing and protected.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd01ed3d059?w=600&q=80",
    imageAlt: "Morning skincare",
  },
  {
    slug: "hydration-tips",
    title: "Why Hydration Is Everything",
    excerpt:
      "Learn how proper hydration transforms your skin and which ingredients to look for.",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80",
    imageAlt: "Hydrated skin",
  },
  {
    slug: "sensitive-skin",
    title: "Caring for Sensitive Skin",
    excerpt:
      "Gentle tips and product choices for calm, comfortable skin every day.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    imageAlt: "Gentle skincare",
  },
];

export default function BlogPage() {
  return (
    <>
      <AnnouncementBar />
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

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeInSection key={post.slug} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl bg-[#FEF9F6] shadow-sm transition-all duration-300 hover:shadow-lg">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-t-2xl">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-semibold text-[#916B61]">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-sm text-[#916B61]/80">{post.excerpt}</p>
                    <Button href={`/blog/${post.slug}`} variant="outline">
                      Read More
                    </Button>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
