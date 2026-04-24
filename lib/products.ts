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

// Shared descriptions
const DESC_1121 =
  "1121 Basmati Rice has extra-long slender grains with the highest known kernel elongation ratio, a strong aroma, and more than 4x cooked-rice volume expansion.";
const DESC_1718 =
  "1718 is an improved version of the iconic Pusa 1121, offering resistance to bacterial leaf blight, higher yield, and faster ripening without sacrificing the classic basmati character.";
const DESC_1509 =
  "1509 Basmati Rice has the longest grain of any basmati (up to 8.5 mm), great grain elongation on cooking, fluffy non-sticky texture and a pleasant aroma.";
const DESC_1401 =
  "1401 is an improved aromatic hybrid basmati variety with an average grain length of 7.3 mm, early maturity, high yield, fine taste and a mouth-watering aroma.";
const DESC_PUSA =
  "Pusa Basmati is a premium long-grain Indian basmati renowned for its aromatic fragrance, delicate flavor and excellent cooking characteristics.";
const DESC_TRADITIONAL =
  "Traditional Basmati Rice is considered the most authentic premium basmati, with grains that almost double in length on cooking and emerge non-sticky, fragrant and separate.";
const DESC_BEHROUZ =
  "Behrouz Basmati Rice is a premium long-grain, naturally aged basmati hand-picked for superior aroma and taste — the signature of our Behrouz brand.";
const DESC_BASMATI =
  "Classic Indian Basmati Rice, aged to perfection for exceptional aroma, extra-long grains and a delicate nutty flavor that suits every cuisine.";

const DESC_SUGANDHA =
  "Sugandha Rice is a highly aromatic non-basmati variety prized for its slender grains, delicious taste and high nutritional value in daily meals.";
const DESC_SHARBATI =
  "Sharbati Rice is a premium non-basmati variety offering long, slender grains, a subtle aroma and an excellent fluffy texture on cooking.";
const DESC_PR11 =
  "PR11 Rice is a popular medium-long-grain non-basmati variety grown widely in Punjab, known for its consistent quality and value.";
const DESC_PR14 =
  "PR 14 Rice is a reliable high-yielding non-basmati variety with firm grains and a neutral flavor that works well in everyday cooking.";
const DESC_PARMAL =
  "Parmal Rice is a staple non-basmati Indian rice with medium grains, excellent yield and great all-purpose cooking performance.";
const DESC_SONA =
  "Sona Masoori is a lightweight, aromatic medium-grain rice popular in South Indian cuisine for its mild flavor and easy digestibility.";

const DESC_PRF_STEAM =
  "Pesticide Residue Free Steam Rice is parboiled under steam from paddy grown without synthetic pesticides, preserving nutrition and ensuring a safe, clean grain.";
const DESC_PRF_SELLA =
  "Pesticide Residue Free Sella Rice is parboiled long-grain rice cultivated without synthetic pesticide residues, delivering a safe, firm and separate grain.";
const DESC_PRF_GOLDEN =
  "Pesticide Residue Free Golden Sella Rice is golden-hued parboiled rice grown under residue-free protocols for a safe, flavourful grain.";
const DESC_PRF_RAW =
  "Pesticide Residue Free Raw Rice is unparboiled long-grain rice grown without synthetic pesticide residues — a clean, natural choice.";

// ---------- Indian Basmati Rice ----------
const VARIETY_1121: ProductVariety = {
  slug: "1121-basmati-rice",
  name: "1121 Basmati Rice",
  image: "/storage/images/65117322264bb.jpg",
  description: DESC_1121,
  cuts: [
    {
      slug: "1121-raw-basmati-rice",
      name: "1121 Raw Basmati Rice",
      image: "/storage/images/65117322264bb.jpg",
    },
    {
      slug: "1121-golden-sella-basmati-rice",
      name: "1121 Golden Sella Basmati Rice",
      image: "/storage/images/6511734ce445f.jpg",
    },
    {
      slug: "1121-sella-basmati-rice",
      name: "1121 Sella Basmati Rice",
      image: "/storage/images/651aa40da0874.jpg",
    },
    {
      slug: "1121-steam-basmati-rice",
      name: "1121 Steam Basmati Rice",
      image: "/storage/images/6777a90a97126.jpg",
    },
  ],
};

const VARIETY_1718: ProductVariety = {
  slug: "1718-basmati-rice",
  name: "1718 Basmati Rice",
  image: "/storage/images/66e6b84372b95.jpg",
  description: DESC_1718,
  cuts: [
    {
      slug: "1718-steam-basmati-rice",
      name: "1718 Steam Basmati Rice",
      image: "/storage/images/66e6b84372b95.jpg",
    },
    {
      slug: "1718-sella-basmati-rice",
      name: "1718 Sella Basmati Rice",
      image: "/storage/images/651173e57373d.jpg",
    },
    {
      slug: "1718-golden-sella-basmati-rice",
      name: "1718 Golden Sella Basmati Rice",
      image: "/storage/images/651173f90bdd1.jpg",
    },
    {
      slug: "1718-raw-basmati-rice",
      name: "1718 Raw Basmati Rice",
      image: "/storage/images/651aa0d391fbd.jpg",
    },
  ],
};

const VARIETY_1509: ProductVariety = {
  slug: "1509-basmati-rice",
  name: "1509 Basmati Rice",
  image: "/storage/images/651aa3dc4cb65.jpg",
  description: DESC_1509,
  cuts: [
    {
      slug: "1509-steam-basmati-rice",
      name: "1509 Steam Basmati Rice",
      image: "/storage/images/651aa3dc4cb65.jpg",
    },
    {
      slug: "1509-raw-basmati-rice",
      name: "1509 Raw Basmati Rice",
      image: "/storage/images/651aa6a7a658f.jpg",
    },
    {
      slug: "1509-sella-basmati-rice",
      name: "1509 Sella Basmati Rice",
      image: "/storage/images/651aa6c509325.jpg",
    },
    {
      slug: "1509-golden-sella-basmati-rice",
      name: "1509 Golden Sella Basmati Rice",
      image: "/storage/images/651aa44441407.jpg",
    },
  ],
};

const VARIETY_1401: ProductVariety = {
  slug: "1401-basmati-rice",
  name: "1401 Basmati Rice",
  image: "/storage/images/67a5f68fc491b.jpg",
  description: DESC_1401,
  cuts: [
    {
      slug: "1401-steam-basmati-rice",
      name: "1401 Steam Basmati Rice",
      image: "/storage/images/67a5f68fc491b.jpg",
    },
    {
      slug: "1401-raw-basmati-rice",
      name: "1401 Raw Basmati Rice",
      image: "/storage/images/650bf63d1dee8.jpg",
    },
    {
      slug: "1401-sella-basmati-rice",
      name: "1401 Sella Basmati Rice",
      image: "/storage/images/651aa61b8129b.jpg",
    },
    {
      slug: "1401-golden-sella-basmati-rice",
      name: "1401 Golden Sella Basmati Rice",
      image: "/storage/images/650bf8a648a6c.jpg",
    },
  ],
};

const VARIETY_PUSA: ProductVariety = {
  slug: "pusa-basmati-rice",
  name: "Pusa Basmati Rice",
  image: "/storage/images/650b1d6f0b8d7.jpg",
  description: DESC_PUSA,
  cuts: [
    {
      slug: "pusa-raw-basmati-rice",
      name: "Pusa Raw Basmati Rice",
      image: "/storage/images/650b1d6f0b8d7.jpg",
    },
    {
      slug: "pusa-steam-basmati-rice",
      name: "Pusa Steam Basmati Rice",
      image: "/storage/images/650bfc272b48a.jpg",
    },
    {
      slug: "pusa-sella-basmati-rice",
      name: "Pusa Sella Basmati Rice",
      image: "/storage/images/650bfd85ec580.jpg",
    },
    {
      slug: "pusa-golden-sella-basmati-rice",
      name: "Pusa Golden Sella Basmati Rice",
      image: "/storage/images/650c01d4611e1.jpg",
    },
  ],
};

const VARIETY_TRADITIONAL: ProductVariety = {
  slug: "traditional-basmati-rice",
  name: "Traditional Basmati Rice",
  image: "/storage/images/650b1e1430e20.jpg",
  description: DESC_TRADITIONAL,
  cuts: [
    {
      slug: "traditional-raw-basmati-rice",
      name: "Traditional Raw Basmati Rice",
      image: "/storage/images/650b1e1430e20.jpg",
    },
    {
      slug: "traditional-sella-basmati-rice",
      name: "Traditional Sella Basmati Rice",
      image: "/storage/images/650c037739b3e.jpg",
    },
  ],
};

const VARIETY_BEHROUZ: ProductVariety = {
  slug: "behrouz-basmati-rice",
  name: "Behrouz Basmati Rice",
  image: "/storage/images/66e6b24739d3d.png",
  description: DESC_BEHROUZ,
  cuts: [
    {
      slug: "behrouz-basmati-rice-exporter-in-india",
      name: "Behrouz Basmati Rice Exporter in India",
      image: "/storage/images/66e6b24739d3d.png",
    },
  ],
};

const VARIETY_BASMATI: ProductVariety = {
  slug: "basmati-rice",
  name: "Basmati Rice",
  image: "/storage/images/66e844d1b5fa6.jpg",
  description: DESC_BASMATI,
  // The Header's third-level entry under "Basmati Rice" self-references the variety page
  // itself, so we keep this list empty to avoid a duplicate slug collision.
  cuts: [],
};

// ---------- Indian Non Basmati Rice ----------
const VARIETY_SUGANDHA: ProductVariety = {
  slug: "sugandha-rice",
  name: "Sugandha Rice",
  image: "/storage/images/650c0fca8e255.jpg",
  description: DESC_SUGANDHA,
  cuts: [
    {
      slug: "sugandha-raw-rice",
      name: "Sugandha Raw Rice",
      image: "/storage/images/650c0fca8e255.jpg",
    },
    {
      slug: "sugandha-steam-rice",
      name: "Sugandha Steam Rice",
      image: "/storage/images/651d1fa488358.jpg",
    },
    {
      slug: "sugandha-white-sella-rice",
      name: "Sugandha White Sella Rice",
      image: "/storage/images/651d1fd724955.jpg",
    },
    {
      slug: "sugandha-golden-sella-rice",
      name: "Sugandha Golden Sella Rice",
      image: "/storage/images/651d2003e4586.jpg",
    },
  ],
};

const VARIETY_SHARBATI: ProductVariety = {
  slug: "sharbati-rice",
  name: "Sharbati Rice",
  image: "/storage/images/651d20cd31b0a.jpg",
  description: DESC_SHARBATI,
  cuts: [
    {
      slug: "sharbati-raw-rice",
      name: "Sharbati Raw Rice",
      image: "/storage/images/651d20cd31b0a.jpg",
    },
    {
      slug: "sharbati-steam-rice",
      name: "Sharbati Steam Rice",
      image: "/storage/images/650c171eb167a.jpg",
    },
    {
      slug: "sharbati-sella-rice",
      name: "Sharbati Sella Rice",
      image: "/storage/images/651d20efb4b32.jpg",
    },
    {
      slug: "sharbati-golden-sella-rice",
      name: "Sharbati Golden Sella Rice",
      image: "/storage/images/650c1a15aeb84.jpg",
    },
  ],
};

const VARIETY_PR11: ProductVariety = {
  slug: "pr11-rice",
  name: "PR11 Rice",
  image: "/storage/images/650b2054a2666.jpg",
  description: DESC_PR11,
  cuts: [
    {
      slug: "pr11-raw-rice",
      name: "PR11 Raw Rice",
      image: "/storage/images/650b2054a2666.jpg",
    },
    {
      slug: "pr11-steam-rice",
      name: "PR11 Steam Rice",
      image: "/storage/images/650c1dd6f4087.jpg",
    },
    {
      slug: "pr11-sella-rice",
      name: "PR11 Sella Rice",
      image: "/storage/images/650c1fd31e94a.jpg",
    },
    {
      slug: "pr11-golden-sella-rice",
      name: "PR11 Golden Sella Rice",
      image: "/storage/images/650c250fb9eef.jpg",
    },
  ],
};

const VARIETY_PR14: ProductVariety = {
  slug: "pr-14-rice",
  name: "PR 14 Rice",
  image: "/storage/images/650c2a6c54f5b.jpg",
  description: DESC_PR14,
  cuts: [
    {
      slug: "pr-14-raw-rice",
      name: "PR 14 Raw Rice",
      image: "/storage/images/650c2a6c54f5b.jpg",
    },
    {
      slug: "pr-14-steam-rice",
      name: "PR 14 Steam Rice",
      image: "/storage/images/650c28093ae43.jpg",
    },
    {
      slug: "pr-14-sella-rice",
      name: "PR 14 Sella Rice",
      image: "/storage/images/650c2900388ac.jpg",
    },
    {
      slug: "pr14-golden-sella-rice",
      name: "PR14 Golden Sella Rice",
      image: "/storage/images/650c29de42cbb.jpg",
    },
  ],
};

const VARIETY_PARMAL: ProductVariety = {
  slug: "parmal-rice",
  name: "Parmal Rice",
  image: "/storage/images/650c2f72b82ca.jpg",
  description: DESC_PARMAL,
  cuts: [
    {
      slug: "parmal-raw-rice",
      name: "Parmal Raw Rice",
      image: "/storage/images/650c2f72b82ca.jpg",
    },
    {
      slug: "parmal-steam-rice",
      name: "Parmal Steam Rice",
      image: "/storage/images/650c302170600.jpg",
    },
    {
      slug: "parmal-sella-rice",
      name: "Parmal Sella Rice",
      image: "/storage/images/650c3139b483a.jpg",
    },
    {
      slug: "parmal-golden-sella-rice",
      name: "Parmal Golden Sella Rice",
      image: "/storage/images/650c321aa3ea7.jpg",
    },
  ],
};

const VARIETY_SONA: ProductVariety = {
  slug: "sona-masoori-rice",
  name: "Sona Masoori Rice",
  image: "/storage/images/650c32f498831.jpg",
  description: DESC_SONA,
  cuts: [
    {
      slug: "sona-masoori-raw-rice",
      name: "Sona Masoori Raw Rice",
      image: "/storage/images/650c32f498831.jpg",
    },
    {
      slug: "sona-masoori-steam-rice",
      name: "Sona Masoori Steam Rice",
      image: "/storage/images/650c33abb56ad.jpg",
    },
  ],
};

// ---------- Pesticide Residue Free Rice ----------
const VARIETY_PRF_STEAM: ProductVariety = {
  slug: "pesticide-residue-free-steam-rice",
  name: "Pesticide Residue Free Steam Rice",
  image: "/storage/images/6513008392bf0.jpg",
  description: DESC_PRF_STEAM,
  cuts: [
    {
      slug: "1121-pesticide-residue-free-steam-rice",
      name: "1121 Pesticide Residue Free Steam Rice",
      image: "/storage/images/6513008392bf0.jpg",
    },
    {
      slug: "1509-pesticide-residue-free-steam-rice",
      name: "1509 Pesticide Residue Free Steam Rice",
      image: "/storage/images/65130092ccc6a.jpg",
    },
    {
      slug: "pusa-basmati-pesticide-residue-free-steam-rice",
      name: "Pusa Basmati Pesticide Residue Free Steam Rice",
      image: "/storage/images/651300ad34986.jpg",
    },
    {
      slug: "sharbati-pesticide-residue-free-steam-rice",
      name: "Sharbati Pesticide Residue Free Steam Rice",
      image: "/storage/images/651300ba144c0.jpg",
    },
  ],
};

const VARIETY_PRF_SELLA: ProductVariety = {
  slug: "pesticide-residue-free-sella-rice",
  name: "Pesticide Residue Free Sella Rice",
  image: "/storage/images/65101cc617e41.jpg",
  description: DESC_PRF_SELLA,
  cuts: [
    {
      slug: "1121-pesticide-residue-free-sella-rice",
      name: "1121 Pesticide Residue Free Sella Rice",
      image: "/storage/images/65101cc617e41.jpg",
    },
    {
      slug: "1509-pesticide-residue-free-sella-rice",
      name: "1509 Pesticide Residue Free Sella Rice",
      image: "/storage/images/650fd2802bb82.jpg",
    },
    {
      slug: "pusa-pesticide-residue-free-sella-rice",
      name: "Pusa Pesticide Residue Free Sella Rice",
      image: "/storage/images/650fd4e568135.jpg",
    },
    {
      slug: "sugandha-pesticide-residue-free-sella-rice",
      name: "Sugandha Pesticide Residue Free Sella Rice",
      image: "/storage/images/650fd6b2baed9.jpg",
    },
    {
      slug: "sharbati-pesticide-residue-free-sella-rice",
      name: "Sharbati Pesticide Residue Free Sella Rice",
      image: "/storage/images/650fd80105b79.jpg",
    },
  ],
};

const VARIETY_PRF_GOLDEN: ProductVariety = {
  slug: "pesticide-residue-free-golden-sella-rice",
  name: "Pesticide Residue Free Golden Sella Rice",
  image: "/storage/images/650fda15812d9.jpg",
  description: DESC_PRF_GOLDEN,
  cuts: [
    {
      slug: "1121-pesticide-residue-free-golden-sella-rice",
      name: "1121 Pesticide Residue Free Golden Sella Rice",
      image: "/storage/images/650fda15812d9.jpg",
    },
    {
      slug: "1509-pesticide-residue-free-golden-sella-rice",
      name: "1509 Pesticide Residue Free Golden Sella Rice",
      image: "/storage/images/650fdac5ceea2.jpg",
    },
    {
      slug: "sugandha-pesticide-residue-free-golden-sella-rice",
      name: "Sugandha Pesticide Residue Free Golden Sella Rice",
      image: "/storage/images/650fdb645ceb1.jpg",
    },
  ],
};

const VARIETY_PRF_RAW: ProductVariety = {
  slug: "pesticide-residue-free-raw-rice",
  name: "Pesticide Residue Free Raw Rice",
  image: "/storage/images/65130052840b1.jpg",
  description: DESC_PRF_RAW,
  cuts: [
    {
      slug: "1401-pesticide-residue-free-raw-rice",
      name: "1401 Pesticide Residue Free Raw Rice",
      image: "/storage/images/65130052840b1.jpg",
    },
    {
      slug: "pusa-pesticide-residue-free-raw-rice",
      name: "Pusa Pesticide Residue Free Raw Rice",
      image: "/storage/images/6513006536c18.jpg",
    },
  ],
};

// ---------- Categories ----------
export const productCategories: ProductCategory[] = [
  {
    slug: "indian-basmati-rice",
    name: "Indian Basmati Rice",
    image: "/storage/images/65117322264bb.jpg",
    description:
      "HRM Exports offers the finest Indian Basmati rice — renowned for its exceptional aroma, delicate long grains and exquisite flavor, sourced from select farmers and aged to perfection.",
    varieties: [
      VARIETY_1121,
      VARIETY_1718,
      VARIETY_1509,
      VARIETY_1401,
      VARIETY_PUSA,
      VARIETY_TRADITIONAL,
      VARIETY_BEHROUZ,
      VARIETY_BASMATI,
    ],
  },
  {
    slug: "indian-non-basmati-rice",
    name: "Indian Non Basmati Rice",
    image: "/storage/images/650c0fca8e255.jpg",
    description:
      "An exceptional range of Indian non-Basmati rice sourced from the lush fields of India — diverse varieties meticulously selected and processed to the highest standards of purity and taste.",
    varieties: [
      VARIETY_SUGANDHA,
      VARIETY_SHARBATI,
      VARIETY_PR11,
      VARIETY_PR14,
      VARIETY_PARMAL,
      VARIETY_SONA,
    ],
  },
  {
    slug: "pesticide-residue-free-rice",
    name: "Pesticide Residue Free Rice",
    image: "/storage/images/6513008392bf0.jpg",
    description:
      "A premium selection of rice cultivated using organic and sustainable farming practices — no synthetic pesticides, no harmful chemical residues, just safe and environmentally friendly grain.",
    varieties: [
      VARIETY_PRF_STEAM,
      VARIETY_PRF_SELLA,
      VARIETY_PRF_GOLDEN,
      VARIETY_PRF_RAW,
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
  // Deduplicate in case a cut slug equals a variety slug.
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
