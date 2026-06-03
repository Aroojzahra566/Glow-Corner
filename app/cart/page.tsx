"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnnouncementBar,
  BrandHeader,
  Nav,
  Footer,
  FadeInSection,
  Button,
} from "@/components";

type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("glow-cart");
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        setItems(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      setItems([]);
    }
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => {
    const num = parseFloat(i.price.replace(/[^0-9.]/g, ""));
    return sum + num * i.quantity;
  }, 0);

  const removeItem = (id: string) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    localStorage.setItem("glow-cart", JSON.stringify(next));
  };

  const updateQuantity = (id: string, delta: number) => {
    const next = items
      .map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
      .filter((i) => i.quantity > 0);
    setItems(next);
    localStorage.setItem("glow-cart", JSON.stringify(next));
  };

  return (
    <>
      <AnnouncementBar />
      <BrandHeader />
      <Nav />

      <main className="min-h-screen bg-[#F5E8E2]">
        <section className="border-b border-[#E8C9BD]/50 bg-[#E8C9BD] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-3xl font-semibold text-[#916B61] md:text-4xl">
                Your Cart
              </h1>
              <p className="mt-2 text-[#916B61]/90">
                {itemCount === 0
                  ? "Your cart is empty"
                  : `${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart`}
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="overflow-hidden rounded-2xl border border-[#b38080]/30 bg-[#FEF9F6] shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E8C9BD]/60 bg-[#E8C9BD]/30">
                      <th className="px-4 py-4 font-semibold text-[#916B61]">Product</th>
                      <th className="px-4 py-4 font-semibold text-[#916B61]">Price</th>
                      <th className="px-4 py-4 font-semibold text-[#916B61]">Quantity</th>
                      <th className="px-4 py-4 font-semibold text-[#916B61]">Total</th>
                      <th className="w-12 px-4 py-4" aria-label="Remove" />
                    </tr>
                  </thead>
                  <tbody>
                    {items.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-4 py-12 text-center text-[#916B61]/80">
                          No items in your cart yet.{" "}
                          <Link href="/shop" className="font-medium text-[#C79A8B] underline hover:no-underline">
                            Continue shopping
                          </Link>
                        </td>
                      </tr>
                    ) : (
                      items.map((item) => {
                        const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                        const lineTotal = priceNum * item.quantity;
                        return (
                          <tr
                            key={item.id}
                            className="border-b border-[#E8C9BD]/40 transition-colors hover:bg-[#F7EBE5]/50"
                          >
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#E8C9BD]/30">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="56px"
                                  />
                                </div>
                                <span className="font-medium text-[#916B61]">{item.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-[#916B61]">{item.price}</td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b38080]/50 text-[#916B61] hover:bg-[#E8C9BD]/40"
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                <span className="min-w-[2rem] text-center font-medium text-[#916B61]">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b38080]/50 text-[#916B61] hover:bg-[#E8C9BD]/40"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="px-4 py-4 font-medium text-[#916B61]">
                              ${lineTotal.toFixed(2)}
                            </td>
                            <td className="px-4 py-4">
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="rounded-full p-1.5 text-[#916B61]/70 hover:bg-[#E8C9BD]/40 hover:text-[#916B61]"
                                aria-label={`Remove ${item.name}`}
                              >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {items.length > 0 && (
                <div className="flex flex-col gap-4 border-t border-[#E8C9BD]/50 bg-[#F7EBE5]/50 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-[#916B61]">
                    Subtotal: ${subtotal.toFixed(2)}
                  </p>
                  <div className="flex gap-3">
                    <Button href="/shop" variant="outline">
                      Continue Shopping
                    </Button>
                    <Button>Proceed to Checkout</Button>
                  </div>
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
