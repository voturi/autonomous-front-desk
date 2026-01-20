import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const useCases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    trade: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    outcomes: z.array(z.string()).min(1),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const features = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    benefits: z.array(z.string()).min(1),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const locations = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    highlights: z.array(z.string()).min(1),
    faqs: z.array(z.string()).optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const pricing = defineCollection({
  type: "data",
  schema: z.object({
    tiers: z.array(
      z.object({
        name: z.string(),
        summary: z.string(),
        priceText: z.string(),
        notes: z.string().optional(),
        ctaLabel: z.string().optional(),
      })
    ),
    includes: z.array(z.string()).min(1),
  }),
});

export const collections = {
  blog,
  "use-cases": useCases,
  features,
  locations,
  pricing,
};
