import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    company: z.string(),
    role: z.string(),
    industry: z.string(),
    timeframe: z.string(),
    skills: z.array(z.string()).min(1),
    thumbnail: z.string().startsWith("/images/projects/"),
    thumbnailVertical: z.string().startsWith("/images/projects/").optional(),
    thumbnailLandscape: z.string().startsWith("/images/projects/").optional(),
    thumbnailFit: z.enum(["contain", "cover-right"]).default("contain"),
    thumbnailAspect: z.string().default("16/9"),
    heroImage: z.string().startsWith("/images/projects/"),
    type: z.enum(["professional", "experiment"]).default("professional"),
    sortOrder: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { projects }
