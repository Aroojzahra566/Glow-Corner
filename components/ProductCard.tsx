"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { useToast } from "./Toast";

type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  benefit: string;
  imageSrc: string;
  imageAlt: string;
};

export function ProductCard({
  slug,
  name,
  price,
  benefit,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  const { addToast } = useToast();

  const handleAddToCart = () => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("glow-cart");
        const cart: { id: string; name: string; price: string; quantity: number; imageSrc: string; imageAlt: string }[] = stored ? JSON.parse(stored) : [];
        const existing = cart.find((i) => i.id === slug);
        if (existing) existing.quantity += 1;
        else cart.push({ id: slug, name, price, quantity: 1, imageSrc, imageAlt });
        localStorage.setItem("glow-cart", JSON.stringify(cart));
      } catch (_) {}
    }
    addToast("Product added to cart successfully", "success");
  };

  return (
    <div className="group flex min-h-[380px] flex-col overflow-hidden rounded-2xl bg-[#F7EBE5] shadow-sm transition-all duration-300 hover:shadow-lg">
      <Link href={`/shop/${slug}`} className="block flex-shrink-0 overflow-hidden rounded-t-2xl">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex min-h-[180px] flex-1 flex-col p-4">
        <h3 className="mb-1 font-medium text-[#C79A8B]">{name}</h3>
        <p className="mb-2 text-lg font-semibold text-[#916B61]">{price}</p>
        <p className="mb-4 flex-1 text-sm text-[#916B61]/80">{benefit}</p>
        <Button variant="outline" className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
