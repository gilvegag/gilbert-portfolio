# Case study template

OatFi (`src/content/projects/oatfi.md`) is the reference implementation for
the rich case-study layout. Any project whose frontmatter includes a
non-empty `solutionSections` array automatically gets this layout
(`ProjectLayout.astro`'s `hasRichLayout` check) — leave `solutionSections`
unset and a project falls back to the older, simpler layout instead.

To bring Accuray Radixact or the Accuray Design System up to the same
template, each needs: the fields below in its `.md` file, images dropped in
its `public/images/projects/[slug]/` folder, and one theme entry in
`src/data/project-colors.ts`. Everything else — hero structure, section
order, nav, scroll-reveal, testimonial card, CTA buttons — is shared code
and needs no per-project changes.

## Frontmatter fields

Required for every project (rich or simple layout):

| Field | Type | Notes |
|---|---|---|
| `title` | string | Used as the page `<h1>` (word-by-word reveal) and browser tab title |
| `description` | string, ≤160 chars | Meta description; also the simple-layout fallback subhead |
| `company` | string | Shown in the hero `dl` row |
| `companyUrl` | string, optional | When set, the company name becomes a link to it (opens in a new tab, small arrow icon after the text). Omit for a company with no public site worth linking |
| `role` | string | Shown in the hero `dl` row |
| `industry` | string | Shown in the hero `dl` row |
| `timeframe` | string | Shown in the hero `dl` row |
| `skills` | string[] | Only rendered by the simple layout (badge row) |
| `thumbnail` | path | Fallback home-card image if vertical/landscape variants aren't set |
| `cardTag` | string | Badge on the home card AND the hero tag badge (replaces the old hero paragraph) |
| `cardHighlight` | string | Home card info line (Zap icon) |
| `cardImpact` | string | Home card info line (TrendingUp icon) |
| `sortOrder` | number | 1 = first on home page |
| `draft` | boolean | `true` hides it from the build |

Optional, home-card image handling:

| Field | Type | Notes |
|---|---|---|
| `thumbnailVertical` | path | Desktop card image (square frame) |
| `thumbnailLandscape` | path | Mobile card image |
| `thumbnailFit` | `"contain" \| "cover-right"` | Default `"contain"` |
| `thumbnailAspect` | string | e.g. `"2782/1494"`, only matters for `"contain"` |

Optional, rich layout only — set none of these and the project keeps the
simple layout:

| Field | Type | Notes |
|---|---|---|
| `heroImage` | path | Right-side hero image (wider column) |
| `heroImageRounded` | boolean | Default `true` (rounded corners, matching every other image on the site). Set `false` for a project whose hero shot should read as a flush screenshot instead — Accuray Radixact uses this |
| `heroLogo` | path | Small logo above the `<h1>`, natural aspect ratio |
| `problem` | object | `{ intro, points?: string[], closing?, challenges?: string[], stakes? }` — renders as intro paragraph → optional bullet list → closing paragraph → optional numbered "Key challenges" sub-list → accent-bordered "stakes" callout. Section labeled "The Problem". Only `intro` is required — `points`, `closing`, `challenges`, `stakes` are all independent, use whichever the content actually has |
| `approachItems` | array | `{ icon: "users" \| "search" \| "message-square" \| "star", title, description }[]` — 2-col icon grid. Section labeled "Approach". Fully optional — omit the field and the section (and its nav item) just don't render, no need to force-fit content into it |
| `solutionSections` | array | `{ heading, body, image? or images?: string[], imagePosition: "right" \| "below", link?: { label, href }, visual?: "diagram" \| "pills" \| "ppt-carousel", beforeAfter?: { before, after } }[]` — presence of this field is what turns on the rich layout. Multiple `images` on one section triggers the sticky-scroll treatment (text pins, images scroll past). `link` renders a small arrow-link below the body — use it for a section that points to another page (e.g. linking to another case study already on this site — use the internal `/work/[slug]` path, not an external URL, when one exists). `visual` swaps the image slot for a bespoke component instead of an image, still sized to fit the normal `imagePosition: "right"` column (every one of these is built with `w-full min-w-0` specifically so it doesn't blow out the grid width — any new one needs the same) — `"diagram"` renders `SystemDiagram.astro` (two logo cards: Storybook, and Figma + Claude), `"pills"` renders `CommunityPillsMarquee.astro` (the animated pill marquee, copied from dannyckm.com), `"ppt-carousel"` renders `PptCarousel.astro` (continuous vertical filmstrip through `public/images/projects/accuray-design-system/ppt/slide-01.jpg` … `slide-10.jpg`, same marquee technique as `"pills"` but on the Y axis via the `marquee-up` keyframe, so each slide gets the full column width rather than being shrunk to fit side-by-side; pauses on `prefers-reduced-motion`). All are one-off, hardcoded-content components — add a new enum value and a new component file if a future case study needs its own bespoke visual, don't try to generalize these. `beforeAfter` is independent of `visual`/`image` — it renders `BeforeAfterSlider.astro` (draggable comparison, Pointer Events so mouse and touch both work) as an *additional* full-width block below the normal text+image row, not a replacement for it — this is how "A shared foundation..." on Accuray Radixact shows a draggable before/after alongside its regular section image. Section labeled "Solutions" |
| `highlights` | string[] | Bullet list on the purple closing section. Wrap key phrases in `*asterisks*` to render them in the accent color, e.g. `"Closed *10+ enterprise* deals..."`. Section labeled "Impact" |
| `testimonial` | object | `{ quote, author, role, avatar?, linkedin? }` — rendered as a card on the purple closing section. When `linkedin` is set, the avatar + name + role become a link to it (hover underlines the name) — leave it unset for a testimonial with no public profile to link, like OatFi's |
| `ctaHeading` | string | Lead-in line above the LinkedIn / copy-email buttons on the purple closing section. Renders in `var(--cta-foreground)` at `text-2xl font-semibold` — see the theme entry below for why that's a separate token from `foreground` |

`heroContext` still exists in the schema but is unused by the current hero
markup (replaced by the `cardTag` badge) — leave it out for new projects.

## Theme entry (`src/data/project-colors.ts`)

Add one entry to `projectThemes`, keyed by the project's slug (the `.md`
filename). This drives the hero, the site header/footer (via `themeVars` on
`BaseLayout`), and the purple closing section — everything except the
middle content zone, which always follows the site's own light/dark toggle.

```ts
"accuray-radiotherapy": {
  background: "#______",       // brand color, hex or oklch
  foreground: "oklch(0.98 0 0)",
  card: "#______",             // testimonial-card bg, a touch darker/lighter than background
  cardForeground: "oklch(0.98 0 0)",
  secondary: "oklch(1 0 0 / 12%)",
  secondaryForeground: "oklch(0.98 0 0)",
  muted: "oklch(1 0 0 / 10%)",
  mutedForeground: "oklch(0.88 0.03 ___)",  // match the hue angle of the brand color
  border: "oklch(1 0 0 / 18%)",
  accent: "oklch(0.85 0.06 ___)",           // light accent for icons/bullets/links, same hue
  accentForeground: "oklch(0.2 0.1 ___)",
  ring: "oklch(0.85 0.06 ___)",
  ctaForeground: "oklch(0.98 0 0)",         // optional, see below — almost never needed
},
```

Only `background` and `card` need real per-project color decisions — the
rest are hue-matched derivatives of those two (see the OatFi entry for a
worked example: hue 300 throughout).

**Pick a background dark enough that light text works — don't darken the
text to compensate.** Every color above assumes light text/accents on a
*dark* brand background — true for OatFi's purple and Radixact's navy.
Accuray Design System's original blue (`#2590C6`) was too bright for that:
white text topped out around 3.6:1 against it (below the 4.5:1 body-text
minimum), and contrast against a mid-brightness background is capped in
both directions, so no amount of lightening the text closes that gap. The
tempting fix — darken `mutedForeground` instead, since dark text against a
mid-bright background *does* pass — technically works but reads as
inconsistent with the other two case studies and loses the "light text on
a rich brand color" identity the whole template is built around. Don't do
that: pick a **darker shade of the same hue** instead, verify actual contrast in
a real browser rather than eyeballing it (draw both colors on a `<canvas>`,
read the pixels back with `getImageData`, and compute WCAG relative
luminance — `getComputedStyle` alone won't resolve `oklch()`/`color-mix()`
values to sRGB for you), and keep every text token in the light family like
the other two themes.
Design System's background moved from `#2590C6` to `#1B4F7A` for exactly
this reason. `ctaForeground` exists as an escape hatch for a background you
genuinely can't darken further, but reach for a darker background first.

## Images

Drop files in `public/images/projects/[slug]/` and reference them with
paths starting `/images/projects/[slug]/...`. No fixed naming convention is
enforced by the schema — OatFi uses `01_desktop image oatfi.png`,
`02_prototype.png`, etc., numbered in the order they appear on the page,
plus `logo.png` (hero logo) and `paola.png` (testimonial avatar). Not
optimized/resized — that's a known v2 task (see TODO.md).

## Content format

When you hand over content for a case study, plain text is fine — no need
to write YAML yourself. Structure it loosely as: hero blurb, the problem
(with the 3-ish bullet points and a closing "stakes" line), your approach
(3-4 short items), each solution/section with which image(s) go where, the
impact bullets (flag which phrases should be emphasized), and the
testimonial quote + who it's from. I'll map it into the fields above.
