# Gilbert Vega — Portfolio Site

## Project overview
Personal portfolio for Gilbert Vega, Senior Product Designer with 12+ years
of experience across B2B SaaS, fintech, healthcare, and design systems.
Migrating from Framer (gilvega.framer.website) to a custom Astro site
based on the itspatmorgan/itspatmorgan.github.io fork.

## Owner
- Name: Gilbert Vega
- Role: Senior Product Designer
- Location: Madrid, Spain
- Contact: gilberthvg@gmail.com
- Current site: https://gilvega.framer.website

## Stack
- Astro v5 with Content Collections (Zod-validated frontmatter)
- Tailwind CSS v4 via `@tailwindcss/vite` (NOT PostCSS)
- shadcn/ui (base-nova style, configured in `components.json`)
- Fonts: Geist Sans (body) + Geist Mono (labels, code)
- Package manager: pnpm 10+
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Site structure (v1)
- `/` — Home: hero, work section (3 project cards), about section
  (bio, skills) — About is a same-page anchor (`/#about`), not a
  separate route
- `/work/[slug]` — Case study detail pages

Out of scope for v1: writing/blog, resume page, contact form, analytics,
custom domain. Park anything else in TODO.md.

## Content collections
- `src/content/projects/` — 3 case studies:
  - `oatfi.md` (fintech, sortOrder 1)
  - `accuray-radiotherapy.md` (healthcare, sortOrder 2)
  - `accuray-design-system.md` (design systems, sortOrder 3)

## Frontmatter schema (unified across all projects)
See `.reference/frontmatter-schema.md` for the canonical spec.
Required: title, description, company, role, industry, timeframe, skills,
thumbnail, heroImage, type, sortOrder, draft.

## Image conventions
Images live in `public/images/projects/[slug]/`:
- `thumbnail.jpg` — 2400×2400 square, home page project cards
- `feature-hero.jpg` — 1920×1080 16:9, project detail page hero
- `feature-[section].jpg` — 1920×1080 16:9, in-body images

Downloaded manually from Framer editor. Not optimized yet — that's a v2 task.

## Conventions
- OKLCH color tokens in `src/styles/global.css`
- Class-based dark mode (`.dark` on `<html>`)
- No emojis in UI
- English content, casual-professional tone
- Metrics stay concrete ("2–4 minutes saved per session", "10+ enterprise
  clients closed") — never soften them

## Do not touch without asking
- `.github/workflows/deploy.yml` (build logic)
- `pnpm-lock.yaml` manually
- The Zod content schema without validating against all 3 markdown files

## Scope discipline
Match the existing Framer site first, then iterate. If you catch yourself
suggesting "while we're at it we could also…", write it in TODO.md instead
and keep moving.
