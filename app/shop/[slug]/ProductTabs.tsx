"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { StarRating } from "@/components";

type TabId = "description" | "ingredients" | "reviews";

const tabs: { id: TabId; label: string }[] = [
  { id: "description", label: "Description" },
  { id: "ingredients", label: "Ingredients" },
  { id: "reviews", label: "Reviews" },
];

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<TabId>("description");

  return (
    <div className="rounded-2xl bg-[#FEF9F6] shadow-sm">
      <div className="flex border-b border-[#E8C9BD]/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              active === tab.id
                ? "border-b-2 border-[#C79A8B] text-[#916B61]"
                : "text-[#916B61]/70 hover:text-[#916B61]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 text-[#916B61]/90">
        {active === "description" && (
          <p className="leading-relaxed">{product.description}</p>
        )}
        {active === "ingredients" && (
          <ul className="space-y-2">
            {product.ingredients.map((ing) => (
              <li key={ing} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C79A8B]" />
                {ing}
              </li>
            ))}
          </ul>
        )}
        {active === "reviews" && (
          <div className="space-y-6">
            <div className="rounded-xl bg-[#F5E8E2] p-4">
              <StarRating rating={5} />
              <p className="mt-2 text-sm">
                &ldquo;Gentle and effective. My skin feels so soft.&rdquo;
              </p>
              <p className="mt-1 text-xs text-[#916B61]/70">— Sarah M.</p>
            </div>
            <div className="rounded-xl bg-[#F5E8E2] p-4">
              <StarRating rating={5} />
              <p className="mt-2 text-sm">
                &ldquo;Worth every penny. Will repurchase.&rdquo;
              </p>
              <p className="mt-1 text-xs text-[#916B61]/70">— Emma L.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
