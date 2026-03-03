import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  AnnouncementBar,
  Nav,
  Footer,
  Button,
  FadeInSection,
} from "@/components";

const posts: Record<
  string,
  { title: string; excerpt: string; image: string; imageAlt: string; content: string }
> = {
  "morning-routine": {
    title: "Your Best Morning Skincare Routine",
    excerpt:
      "Start the day with a simple, effective routine that leaves your skin glowing and protected.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd01ed3d059?w=800&q=80",
    imageAlt: "Morning skincare",
    content:
      "A great morning routine sets the tone for the day — and your skin. Start with a gentle cleanser to refresh without stripping. Follow with a lightweight serum for hydration and protection, then lock it in with a moisturizer suited to your skin type. Always finish with SPF to protect against UV damage. Keep it simple: cleanse, treat, moisturize, protect.",
  },
  "hydration-tips": {
    title: "Why Hydration Is Everything",
    excerpt:
      "Learn how proper hydration transforms your skin and which ingredients to look for.",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80",
    imageAlt: "Hydrated skin",
    content:
      "Hydrated skin looks plump, smooth, and radiant. Look for ingredients like hyaluronic acid, glycerin, and aloe to draw and hold moisture. Apply serums and moisturizers to slightly damp skin for better absorption. Drinking enough water supports your skin from within, but topical hydration is essential for that visible glow.",
  },
  "sensitive-skin": {
    title: "Caring for Sensitive Skin",
    excerpt:
      "Gentle tips and product choices for calm, comfortable skin every day.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    imageAlt: "Gentle skincare",
    content:
      "Sensitive skin thrives on simplicity. Choose fragrance-free, minimal-ingredient formulas. Patch test new products and introduce one at a time. Avoid harsh exfoliants and hot water. Look for calming ingredients like chamomile, oat, and centella. Less is more — a gentle cleanse, a soothing serum, and a simple moisturizer can be all you need.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <AnnouncementBar />
      <Nav />

      <main className="min-h-screen bg-[#FEF9F6]">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeInSection>
            <Link
              href="/blog"
              className="mb-8 inline-block text-sm text-[#C79A8B] hover:text-[#916B61]"
            >
              ← Back to Blog
            </Link>
            <h1 className="text-4xl font-semibold text-[#916B61] md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-[#916B61]/80">{post.excerpt}</p>
          </FadeInSection>
          <FadeInSection delay={80}>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-[#F5E8E2]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={120} className="mt-10">
            <p className="leading-relaxed text-[#916B61]/90">{post.content}</p>
            <div className="mt-10">
              <Button href="/blog" variant="outline">
                More Articles
              </Button>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
}
