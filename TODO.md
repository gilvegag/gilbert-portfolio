# TODO

Parking lot for anything out of scope for v1. See CLAUDE.md for the full
scope discipline rule.

## Needs your input
- `astro.config.mjs` `site` is currently a placeholder
  (`https://gilberthvg.github.io`) — confirm your actual GitHub username/org
  so the Pages URL and canonical tags are correct.
- `accuray-radiotherapy.md` and `accuray-design-system.md` are now live in
  `src/content/projects/`, migrated from the old root `content/projects/`
  drafts (frontmatter converted to the canonical schema; body prose kept
  as-authored). The old root `content/projects/accuray.md`,
  `design-system.md`, and `oatfi_old.md` are now stale duplicates of that
  migrated content — safe to delete once you've confirmed the new files
  read correctly.
- Each project now only has one real thumbnail image (no separate hero
  shot yet): `oatfi_thumbnail_vertical/landscape.png`,
  `accuray-design-system/design-system-thumbnail.png`, and
  `accuray-radiotherapy/accuray_main_thumbnail.png` are all wired as both
  `thumbnail` and `heroImage`. Swap in dedicated hero images for the case
  study detail pages when you have them. Still missing entirely: a home
  page profile photo (`public/images/home/profile.jpg`).
- New optional schema fields added to support per-project thumbnail
  treatment: `thumbnailFit` (`"contain"` | `"cover-right"`) and
  `thumbnailAspect` (e.g. `"3840/2148"`, the image's own ratio — used so
  the mobile thumbnail fits without any letterbox gap). Set these when
  adding future case studies.
- Color tokens in `src/styles/global.css` are a v1 placeholder (neutral
  grayscale + a blue accent), loosely grounded in the real dark background
  of gilvega.framer.website (`rgb(12,12,12)`). Per the brief, revisit once
  content is solid.
- No "experience" timeline content was available to migrate onto `/about`
  (Framer site only exposes bio + skills at the moment) — add if you want
  a formal job history section.

- OatFi's case study page now uses a richer layout (Figma: "Case 2026",
  node 44:1786) driven by new optional frontmatter fields on the projects
  collection (`heroContext`, `keyChallenges`, `approachItems`,
  `solutionSections`). Only OatFi has these set — other projects keep the
  original simpler layout automatically (`ProjectLayout.astro` branches on
  whether `solutionSections` is present). Missing images, currently showing
  "Image coming soon" placeholders — add these to
  `public/images/projects/oatfi/` and wire them into `oatfi.md`:
  - hero mockup (referenced as `heroImage`, currently unset)
  - `02_prototype` (Prototypes that could sell)
  - `04_partners` and `05_docs` (Three experiences, one foundation — this
    section supports multiple stacked images via `solutionSections[].images`,
    only `03_metrics.png` is wired in so far)
  - `07_design system` (A shared design system for efficient delivery)

## Explicit non-goals for v1 (from website-brief.md)
- Writing/blog section
- Resume page
- Contact form (mailto: link is fine)
- Custom domain
- Analytics
- Image optimization pass
