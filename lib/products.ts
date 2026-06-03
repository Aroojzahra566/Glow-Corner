export type Product = {
  slug: string;
  name: string;
  price: string;
  benefit: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  skinType: string;
  description: string;
  ingredients: string[];
  howToUse: string;
  benefits: string[];
  rating: number;
};

export const products: Product[] = [
  {
    slug: "gentle-cleanser",
    name: "Gentle Glow Cleanser",
    price: "$28",
    benefit: "Soft cleanse without stripping. Leaves skin balanced.",
    imageSrc: "/cleanser.jpg",
    imageAlt: "Gentle Glow Cleanser bottle",
    category: "Cleanser",
    skinType: "All skin types",
    description:
      "Our Gentle Glow Cleanser removes impurities and makeup without stripping your skin's natural moisture. Enriched with chamomile and aloe for a calm, balanced feel.",
    ingredients: ["Chamomile extract", "Aloe vera", "Glycerin", "Jojoba oil", "Vitamin E"],
    howToUse:
      "Apply to damp skin, massage gently in circular motions, then rinse with lukewarm water. Use morning and evening.",
    benefits: [
      "Removes impurities without stripping",
      "Soothes and calms skin",
      "Leaves skin soft and balanced",
      "Suitable for daily use",
    ],
    rating: 5,
  },
  {
    slug: "hydrating-serum",
    name: "Hydrating Glow Serum",
    price: "$42",
    benefit: "Lightweight hydration. Plump, dewy skin.",
    imageSrc: "/serum.jpg",
    imageAlt: "Hydrating Glow Serum",
    category: "Serum",
    skinType: "All skin types",
    description:
      "A lightweight serum that delivers intense hydration with hyaluronic acid and botanical extracts. Skin looks plump, dewy, and radiant.",
    ingredients: ["Hyaluronic acid", "Green tea", "Niacinamide", "Cucumber extract"],
    howToUse:
      "After cleansing, apply 2–3 drops to face and neck. Follow with moisturizer. Use morning and/or evening.",
    benefits: [
      "Deep hydration without heaviness",
      "Plumps fine lines",
      "Adds a natural glow",
      "Absorbs quickly",
    ],
    rating: 5,
  },
  {
    slug: "night-cream",
    name: "Overnight Repair Cream",
    price: "$48",
    benefit: "Restore and renew while you sleep.",
    imageSrc: "/repair_cream.jpg",
    imageAlt: "Overnight Repair Cream",
    category: "Moisturizer",
    skinType: "Dry, Normal",
    description:
      "Rich yet non-greasy overnight cream that supports skin's natural repair process. Wake up to softer, smoother, more radiant skin.",
    ingredients: ["Shea butter", "Ceramides", "Retinol", "Lavender oil", "Peptide complex"],
    howToUse:
      "Apply to clean skin in the evening. Allow to absorb before bed. Use as the final step in your routine.",
    benefits: [
      "Supports overnight repair",
      "Intense moisture for dry skin",
      "Smooths texture",
      "Calming scent",
    ],
    rating: 5,
  },
  {
    slug: "daily-moisturizer",
    name: "Daily Glow Moisturizer",
    price: "$36",
    benefit: "Lightweight daily moisture with a soft finish.",
    imageSrc: "/1.jpg",
    imageAlt: "Daily Glow Moisturizer",
    category: "Moisturizer",
    skinType: "All skin types",
    description:
      "A light, fast-absorbing moisturizer that keeps skin hydrated all day. Perfect under makeup or alone for a natural glow.",
    ingredients: ["Squalane", "Rose water", "Vitamin C", "Allantoin"],
    howToUse:
      "Apply to face and neck after serum. Use morning and evening. Can be worn under SPF and makeup.",
    benefits: [
      "Lightweight, non-greasy",
      "All-day hydration",
      "Brightens over time",
      "Works under makeup",
    ],
    rating: 5,
  },
  {
    slug: "eye-cream",
    name: "Soothing Eye Cream",
    price: "$32",
    benefit: "Gentle care for the delicate eye area.",
    imageSrc: "/4.jpg",
    imageAlt: "Soothing Eye Cream",
    category: "Eye care",
    skinType: "All skin types",
    description:
      "A gentle eye cream that hydrates and soothes the delicate eye area. Reduces the look of puffiness and fine lines.",
    ingredients: ["Caffeine", "Cucumber", "Peptide", "Chamomile"],
    howToUse:
      "Apply a small amount around the eye area with your ring finger. Use morning and evening.",
    benefits: [
      "Reduces puffiness",
      "Hydrates delicate skin",
      "Softens fine lines",
      "Gentle formula",
    ],
    rating: 5,
  },
  {
    slug: "face-mask",
    name: "Calm & Glow Mask",
    price: "$26",
    benefit: "Weekly treat for a refreshed, glowing complexion.",
    imageSrc: "/5.jpg",
    imageAlt: "Calm & Glow Mask",
    category: "Mask",
    skinType: "All skin types",
    description:
      "A weekly mask that calms irritation and adds radiance. Leave on for 10–15 minutes for best results.",
    ingredients: ["Oat extract", "Honey", "Kaolin", "Calendula"],
    howToUse:
      "Apply a thin layer to clean, dry skin. Leave on 10–15 minutes. Rinse with warm water. Use 1–2 times per week.",
    benefits: [
      "Calms stressed skin",
      "Adds instant glow",
      "Gentle exfoliation",
      "Soothing and refreshing",
    ],
    rating: 5,
  },
  {
    slug: "vitamin-c-serum",
    name: "Brightening Vitamin C Serum",
    price: "$38",
    benefit: "Even tone and a radiant glow with every use.",
    imageSrc: "/6.jpg",
    imageAlt: "Brightening Vitamin C Serum",
    category: "Serum",
    skinType: "All skin types",
    description:
      "A lightweight vitamin C serum that brightens and evens skin tone while protecting against environmental stress.",
    ingredients: ["Vitamin C", "Ferulic acid", "Vitamin E", "Hyaluronic acid"],
    howToUse:
      "Apply 3–5 drops to clean skin in the morning. Follow with moisturizer and SPF.",
    benefits: [
      "Brightens dull skin",
      "Evens skin tone",
      "Antioxidant protection",
      "Lightweight texture",
    ],
    rating: 5,
  },
  {
    slug: "balancing-toner",
    name: "Balancing Glow Toner",
    price: "$24",
    benefit: "Refreshes and preps skin without stripping.",
    imageSrc: "/7.jpg",
    imageAlt: "Balancing Glow Toner",
    category: "Cleanser",
    skinType: "All skin types",
    description:
      "A gentle toner that balances pH and preps skin for the next steps in your routine.",
    ingredients: ["Rose water", "Witch hazel", "Aloe", "Green tea"],
    howToUse:
      "Apply to a cotton pad and sweep over face after cleansing. Or pat into skin with hands.",
    benefits: [
      "Balances pH",
      "Refreshes skin",
      "Prepares for serum and moisturizer",
      "Soothing formula",
    ],
    rating: 5,
  },
  {
    slug: "lip-balm",
    name: "Nourishing Lip Balm Duo",
    price: "$18",
    benefit: "Soft, smooth lips with natural moisture.",
    imageSrc: "/8.jpg",
    imageAlt: "Nourishing Lip Balm Duo",
    category: "Lip care",
    skinType: "All skin types",
    description:
      "Two nourishing lip balms with shea butter and natural oils for soft, protected lips.",
    ingredients: ["Shea butter", "Beeswax", "Jojoba oil", "Vitamin E"],
    howToUse:
      "Apply to lips as needed throughout the day or night.",
    benefits: [
      "Long-lasting moisture",
      "No sticky feel",
      "Natural ingredients",
      "Portable duo",
    ],
    rating: 5,
  },
  {
    slug: "face-oil",
    name: "Glow Face Oil",
    price: "$44",
    benefit: "Luxurious finish for a dewy, healthy look.",
    imageSrc: "/1.jpg",
    imageAlt: "Glow Face Oil",
    category: "Serum",
    skinType: "Dry, Normal",
    description:
      "A blend of precious oils that nourishes and gives skin a soft, luminous finish.",
    ingredients: ["Jojoba", "Argan", "Rosehip", "Marula", "Vitamin E"],
    howToUse:
      "Warm 2–3 drops in palms and press into skin as the last step of your routine.",
    benefits: [
      "Deep nourishment",
      "Non-greasy finish",
      "Adds radiance",
      "Suitable for evening",
    ],
    rating: 5,
  },
  {
    slug: "exfoliating-cream",
    name: "Gentle Exfoliating Cream",
    price: "$30",
    benefit: "Smooth texture without harsh scrubbing.",
    imageSrc: "/4.jpg",
    imageAlt: "Gentle Exfoliating Cream",
    category: "Cleanser",
    skinType: "All skin types",
    description:
      "A gentle exfoliating cream that buffs away dead skin cells for a smoother, brighter complexion.",
    ingredients: ["Lactic acid", "Oat flour", "Chamomile", "Aloe"],
    howToUse:
      "Apply to damp skin 1–2 times per week. Massage gently, then rinse. Follow with moisturizer.",
    benefits: [
      "Gentle exfoliation",
      "Smoother texture",
      "Brighter appearance",
      "No harsh granules",
    ],
    rating: 5,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
