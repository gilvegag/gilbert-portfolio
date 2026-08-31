// Content for the "Craft" piece — the fourth home card and /craft page.
// Deliberately NOT a `projects` collection entry: this is a curated visual
// showcase, not a case study, so it skips the Problem/Approach/Solutions/
// Impact structure entirely (see src/pages/craft.astro).
import type { ProjectTheme } from "@/data/project-colors"

// Same neutral dark as the site's dark mode — matches the home section
// exactly so the craft page feels like a natural extension of the site
// rather than a branded sub-page.
export const craftTheme: ProjectTheme = {
  background: "oklch(0.205 0 0)",
  foreground: "oklch(0.96 0 0)",
  card: "oklch(0.228 0 0)",
  cardForeground: "oklch(0.96 0 0)",
  secondary: "oklch(0.288 0 0)",
  secondaryForeground: "oklch(0.9 0 0)",
  muted: "oklch(0.288 0 0)",
  mutedForeground: "oklch(0.75 0 0)",
  border: "oklch(1 0 0 / 10%)",
  accent: "oklch(0.68 0.15 258)",
  accentForeground: "oklch(0.14 0 0)",
  ring: "oklch(0.68 0.15 258)",
  gradientLight: "oklch(0.288 0 0)",
}

export interface CraftImage {
  src: string
  alt: string
  // Drives layout only: "mobile" shots tile in a small grid, "desktop"
  // shots get a full-width row of their own.
  orientation: "mobile" | "desktop"
}

export interface CraftVideo {
  src: string
  // Described to screen readers, since an autoplaying silent loop carries
  // no other accessible text.
  label: string
}

export interface BeforeAfterPair {
  before: string
  after: string
  alt?: string
}

export interface CraftPiece {
  name: string
  kind: string
  note: string
  // Path to the favicon image shown in the browser tab chrome
  favicon?: string
  video?: CraftVideo
  beforeAfterPairs?: BeforeAfterPair[]
  images: CraftImage[]
  // All mobile images shown side-by-side (no carousel)
  phoneSpread?: boolean
  // Desktop + mobile images shown side-by-side in one view
  sideBySide?: boolean
  // CSS background-image value for the panel visual area
  panelBg?: string
}

// One clear statement that visual quality is part of the product practice
// (the whole point of this card existing).
export const craftStatement =
  "Craft that earns its place"

export const craftIntro =
  "Short projects where I built or rebuilt the visual identity from scratch, translating brand into web. Type choices, color systems, layout decisions, all the things that make a product feel cohesive and intentional instead of assembled from defaults."

export const craftPieces: CraftPiece[] = [
  {
    name: "Therapp",
    kind: "Physical therapy platform",
    favicon: "/images/projects/visual/therapp/fav.png",
    note: "Exercise library and patient flows. Dense, image-led cards that stay scannable, on a warm purple system tuned to read at a glance mid-session.",
    panelBg: "linear-gradient(to right, #3A2E5C, #1E1438)",
    video: {
      src: "/images/projects/visual/therapp_website.mp4",
      label: "Therapp product promo — screen recording of the physical therapy platform",
    },
    beforeAfterPairs: [
      {
        before: "/images/projects/visual/therapp/before.png",
        after: "/images/projects/visual/therapp/after.png",
        alt: "Therapp UI redesign — exercise library screen",
      },
      {
        before: "/images/projects/visual/therapp/before02.png",
        after: "/images/projects/visual/therapp/after02.png",
        alt: "Therapp UI redesign — session flow screen",
      },
    ],
    images: [],
  },
  {
    name: "Bond",
    kind: "Aesthetics booking app",
    favicon: "/images/projects/visual/Bond/fav.png",
    note: "Booking flow built on full-bleed photography and mono type, where a two-color system and typographic scale carry the entire product with almost no chrome.",
    panelBg: "linear-gradient(to right, #2A1E14, #100B07)",
    phoneSpread: true,
    images: [
      {
        src: "/images/projects/visual/Bond/bond-splash.png",
        alt: "Bond splash screen with a vertical logotype on electric blue",
        orientation: "mobile",
      },
      {
        src: "/images/projects/visual/Bond/bond-login.png",
        alt: "Bond sign-in screen with form fields set over full-bleed portrait photography",
        orientation: "mobile",
      },
      {
        src: "/images/projects/visual/Bond/bond-schedule.png",
        alt: "Bond appointment scheduling screen with date, time, and location selection",
        orientation: "mobile",
      },
    ],
  },
  {
    name: "Verizon",
    kind: "Consumer web and mobile",
    favicon: "/images/projects/visual/verizonfav.png",
    note: "Offers, plan management, and self-serve data flows designed inside an enterprise design system, where the constraint is working within the system rather than around it.",
    panelBg: "linear-gradient(to right, #2A1A1A, #150C0C)",
    sideBySide: true,
    images: [
      {
        src: "/images/home/carousel/03top.png",
        alt: "Verizon My Verizon offers page with a device carousel and offer cards",
        orientation: "desktop",
      },
      {
        src: "/images/home/carousel/04top.png",
        alt: "Verizon PopData mobile onboarding screen explaining pay-per-session data",
        orientation: "mobile",
      },
    ],
  },
  {
    name: "Academia Nauta",
    kind: "B2B learning platform",
    favicon: "/images/projects/visual/Nauta/fav.png",
    note: "Marketing surface and product dashboard sharing one type and color system, so the promise on the landing page and the product behind the login read as the same thing.",
    panelBg: "linear-gradient(to right, #253580, #1A2657)",
    video: {
      src: "/images/projects/visual/Nauta/Website Promo - Nauta.mp4",
      label: "Academia Nauta website promo — screen recording of the B2B learning platform",
    },
    images: [],
  },
]

// Flat list used by the home card's mosaic strip, ordered for visual
// rhythm (alternating portrait/landscape) rather than by piece.
export const craftMosaic: CraftImage[] = [
  craftPieces[1].images[0], // Bond — splash
  craftPieces[2].images[0], // Verizon — desktop
  craftPieces[1].images[1], // Bond — login
  craftPieces[1].images[2], // Bond — scheduling
]
