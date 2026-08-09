# Frontmatter schema — projects collection

All 3 case studies use the same fields. The Zod schema in
`src/content.config.ts` should validate against this spec exactly.

## Canonical spec

```yaml
---
title: string                # Project name, e.g. "OatFi"
description: string          # One-sentence pitch, ≤ 140 chars
company: string              # Employer or client
role: string                 # My role on the project
industry: string             # e.g. "Fintech · Embedded Lending"
timeframe: string            # Human-readable range, e.g. "Jul 2022 – Sep 2023"
skills: string[]             # 3–6 tags for the case study
thumbnail: string            # Path: /images/projects/[slug]/thumbnail.jpg
heroImage: string            # Path: /images/projects/[slug]/feature-hero.jpg
type: "professional"         # Reserved for future "experiment" type
sortOrder: number            # 1 = first on home page
draft: boolean               # true = hide from build
---
```

## Zod schema (target for src/content.config.ts)

```ts
import { defineCollection, z } from "astro:content";

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
    heroImage: z.string().startsWith("/images/projects/"),
    type: z.enum(["professional", "experiment"]).default("professional"),
    sortOrder: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
```

## Sample: OatFi

```yaml
---
title: "OatFi"
description: "Turning API-only fintech infrastructure into a product a sales team could sell."
company: "OatFi"
role: "Lead Product Designer (sole designer)"
industry: "Fintech · Embedded Lending"
timeframe: "Jul 2022 – Sep 2023"
skills: ["Product Design", "0→1", "Design Systems", "B2B SaaS", "Prototyping"]
thumbnail: "/images/projects/oatfi/thumbnail.jpg"
heroImage: "/images/projects/oatfi/feature-hero.jpg"
type: "professional"
sortOrder: 1
draft: false
---
```

## Sample: Accuray Radixact

```yaml
---
title: "Accuray Radixact"
description: "Migrating two legacy desktop systems into a single web platform for radiotherapy specialists."
company: "Accuray (via Gorilla Logic)"
role: "Senior Product Designer"
industry: "Healthcare · Radiotherapy"
timeframe: "Dec 2021 – Mar 2026"
skills: ["Complex SaaS Workflows", "Product Discovery", "Accessibility (WCAG)", "UX Research", "Data-Dense UI"]
thumbnail: "/images/projects/accuray-radiotherapy/thumbnail.jpg"
heroImage: "/images/projects/accuray-radiotherapy/feature-hero.jpg"
type: "professional"
sortOrder: 2
draft: false
---
```

## Sample: Accuray Design System

```yaml
---
title: "Accuray Design System"
description: "Built from scratch: tokens, Figma UI Kit, Storybook integration, and an AI-assisted documentation pipeline."
company: "Accuray (via Gorilla Logic)"
role: "Senior Product Designer · Design System Lead"
industry: "Healthcare · Design Systems"
timeframe: "Dec 2021 – Mar 2026"
skills: ["Design Systems at Scale", "Design Tokens", "Storybook", "Accessibility (WCAG)", "AI-Assisted Workflows"]
thumbnail: "/images/projects/accuray-design-system/thumbnail.jpg"
heroImage: "/images/projects/accuray-design-system/feature-hero.jpg"
type: "professional"
sortOrder: 3
draft: false
---
```
