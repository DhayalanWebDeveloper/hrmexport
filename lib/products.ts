// Single source of truth for the Products dropdown, category / variety / cut pages,
// and generateStaticParams in app/[slug]/page.tsx.

export type ProductCut = {
  slug: string;
  name: string;
  image: string;
  description?: string;
};

export type ProductVariety = {
  slug: string;
  name: string;
  image: string;
  description: string;
  cuts: ProductCut[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  image: string;
  description: string;
  varieties: ProductVariety[];
};

// Descriptions for the 6 core products
const DESC_TURMERIC = "Premium quality Indian turmeric, known for its high curcumin content, vibrant color, and medicinal properties. Sourced directly from local farmers and processed under hygienic conditions.";
const DESC_RICE = "Finest quality long-grain rice, aged to perfection to ensure superior aroma, fluffy texture, and exquisite taste. Perfect for daily meals and special occasions.";
const DESC_COUNTRY_SUGAR = "Our Country Sugar (Nattu Sakkarai) is a natural, unrefined sweetener made from pure sugarcane juice. It is rich in minerals and free from harmful chemicals, offering a healthy alternative to white sugar.";
const DESC_MILLETS = "Nutritious and gluten-free Indian millets, including Foxtail, Finger, and Pearl varieties. Packed with fiber and essential nutrients, our millets are a powerhouse of health for modern diets.";
const DESC_MAIZE = "High-grade yellow maize, cultivated with care to ensure the best yield and nutritional value. Suitable for human consumption as well as industrial and agricultural uses.";
const DESC_CATTLE_FEED = "Balanced and nutritious cattle feed designed to improve the health and productivity of livestock. Formulated with high-quality grains and essential vitamins/minerals.";

// ---------- Product Varieties ----------
const VARIETY_TURMERIC: ProductVariety = {
  slug: "turmeric",
  name: "Turmeric",
  image: "/assets/images/products/turmeric.png",
  description: DESC_TURMERIC,
  cuts: [],
};

const VARIETY_RICE: ProductVariety = {
  slug: "rice",
  name: "Rice",
  image: "/assets/images/products/rice.png",
  description: DESC_RICE,
  cuts: [],
};

const VARIETY_COUNTRY_SUGAR: ProductVariety = {
  slug: "country-sugar",
  name: "Country Sugar",
  image: "/assets/images/products/country-sugar.png",
  description: DESC_COUNTRY_SUGAR,
  cuts: [],
};

const VARIETY_MILLETS: ProductVariety = {
  slug: "millets",
  name: "Millets",
  image: "/assets/images/products/millets.png",
  description: DESC_MILLETS,
  cuts: [],
};

const VARIETY_MAIZE: ProductVariety = {
  slug: "maize",
  name: "Maize",
  image: "/assets/images/products/maize.png",
  description: DESC_MAIZE,
  cuts: [],
};

const VARIETY_CATTLE_FEED: ProductVariety = {
  slug: "cattle-feed",
  name: "Cattle Feed",
  image: "/assets/images/products/cattle-feed.png",
  description: DESC_CATTLE_FEED,
  cuts: [],
};

// ---------- Categories ----------
export const productCategories: ProductCategory[] = [
  {
    slug: "our-products",
    name: "Our Products",
    image: "/assets/images/products/rice.png",
    description: "Discover our premium selection of agricultural products, sourced with care and delivered with a commitment to quality and sustainability.",
    varieties: [
      VARIETY_TURMERIC,
      VARIETY_RICE,
      VARIETY_COUNTRY_SUGAR,
      VARIETY_MILLETS,
      VARIETY_MAIZE,
      VARIETY_CATTLE_FEED,
    ],
  },
];

// ---------- Helpers ----------
export function getAllSlugs(): string[] {
  const slugs: string[] = [];
  for (const cat of productCategories) {
    slugs.push(cat.slug);
    for (const v of cat.varieties) {
      slugs.push(v.slug);
      for (const c of v.cuts) {
        slugs.push(c.slug);
      }
    }
  }
  return Array.from(new Set(slugs));
}

export type FindBySlugResult =
  | { type: "category"; data: ProductCategory }
  | { type: "variety"; data: ProductVariety; category: ProductCategory }
  | {
      type: "cut";
      data: ProductCut;
      variety: ProductVariety;
      category: ProductCategory;
    }
  | null;

export function findBySlug(slug: string): FindBySlugResult {
  for (const cat of productCategories) {
    if (cat.slug === slug) {
      return { type: "category", data: cat };
    }
  }
  for (const cat of productCategories) {
    for (const v of cat.varieties) {
      if (v.slug === slug) {
        return { type: "variety", data: v, category: cat };
      }
    }
  }
  for (const cat of productCategories) {
    for (const v of cat.varieties) {
      for (const c of v.cuts) {
        if (c.slug === slug) {
          return { type: "cut", data: c, variety: v, category: cat };
        }
      }
    }
  }
  return null;
}

