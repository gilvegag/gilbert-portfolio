import { defineCollection, z } from "astro:content"

const approachIcon = z.enum(["users", "search", "message-square", "star"])

const solutionSection = z.object({
  heading: z.string(),
  body: z.string(),
  image: z.string().startsWith("/images/projects/").optional(),
  images: z.array(z.string().startsWith("/images/projects/")).optional(),
  imagePosition: z.enum(["right", "below"]).default("right"),
})

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
    heroImage: z.string().startsWith("/images/projects/").optional(),
    cardTag: z.string(),
    cardHighlight: z.string(),
    cardImpact: z.string(),
    // Optional rich case-study layout (hero context, challenges, approach,
    // and repeating text/image sections). Only populated where a project
    // has this content — pages without it keep the simpler default layout.
    heroLogo: z.string().startsWith("/images/projects/").optional(),
    heroContext: z.string().optional(),
    problem: z
      .object({
        intro: z.string(),
        points: z.array(z.string()),
        closing: z.string().optional(),
        stakes: z.string().optional(),
      })
      .optional(),
    approachItems: z
      .array(z.object({ icon: approachIcon, title: z.string(), description: z.string() }))
      .optional(),
    solutionSections: z.array(solutionSection).optional(),
    highlights: z.array(z.string()).optional(),
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
        avatar: z.string().startsWith("/images/projects/").optional(),
      })
      .optional(),
    ctaHeading: z.string().optional(),
    type: z.enum(["professional", "experiment"]).default("professional"),
    sortOrder: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { projects }
