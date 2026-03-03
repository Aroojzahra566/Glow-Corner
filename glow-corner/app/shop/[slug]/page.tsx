import Image from "next/image";
import { notFound } from "next/navigation";
import {
  AnnouncementBar,
  BrandHeader,
  Nav,
  Footer,
  AddToCartButton,
  ProductCard,
  FadeInSection,
  StarRating,
} from "@/components";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductTabs } from "./ProductTabs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { products } = await import("@/lib/products");
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  return (
    <>
      <AnnouncementBar />
      <BrandHeader />
      <Nav />

      <main className="min-h-screen bg-[#FEF9F6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Images */}
            <FadeInSection>
              <div className="space-y-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F5E8E2] shadow-md">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 border-[#E8C9BD] bg-[#F5E8E2]"
                    >
                      <Image
                        src={product.imageSrc}
                        alt={`${product.name} view ${i}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Info */}
            <div>
              <FadeInSection delay={80}>
                <h1 className="text-3xl font-semibold text-[#916B61] md:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-2xl font-semibold text-[#916B61]">
                  {product.price}
                </p>
                <div className="mt-2">
                  <StarRating rating={product.rating} />
                </div>
                <p className="mt-4 text-[#916B61]/90">{product.benefit}</p>
              </FadeInSection>

              <FadeInSection delay={120}>
                <ul className="mt-6 space-y-2">
                  {product.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[#916B61]/90"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C79A8B]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[#916B61]/80">
                  <strong className="text-[#916B61]">How to use:</strong>{" "}
                  {product.howToUse}
                </p>
                <div className="mt-8">
                  <AddToCartButton />
                </div>
              </FadeInSection>
            </div>
          </div>

          {/* Tabs */}
          <FadeInSection className="mt-16" delay={160}>
            <ProductTabs product={product} />
          </FadeInSection>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-[#E8C9BD]/50 pt-16">
              <h2 className="mb-8 text-2xl font-semibold text-[#916B61]">
                You May Also Like
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <FadeInSection key={p.slug} delay={i * 80}>
                    <ProductCard
                      slug={p.slug}
                      name={p.name}
                      price={p.price}
                      benefit={p.benefit}
                      imageSrc={p.imageSrc}
                      imageAlt={p.imageAlt}
                    />
                  </FadeInSection>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
