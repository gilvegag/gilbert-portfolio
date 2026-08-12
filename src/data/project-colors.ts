// Per-case-study accent theme. Kept separate from the content schema
// (src/content.config.ts) so this can be extended without touching the
// Zod schema that's validated against every project markdown file.
export interface ProjectTheme {
  background: string
  foreground: string
  card: string
  cardForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  border: string
  accent: string
  accentForeground: string
  ring: string
  // Strong, high-contrast color for prominent callouts (the CTA heading) on
  // the brand background — usually the same as `foreground`, but on a
  // bright background (e.g. design-system's blue) white can't hit real
  // contrast, so this needs to go dark instead. Falls back to `foreground`
  // when unset.
  ctaForeground?: string
}

export const projectThemes: Record<string, ProjectTheme> = {
  oatfi: {
    background: "#341872",
    foreground: "oklch(0.98 0 0)",
    card: "#2F1861",
    cardForeground: "oklch(0.98 0 0)",
    secondary: "oklch(1 0 0 / 12%)",
    secondaryForeground: "oklch(0.98 0 0)",
    muted: "oklch(1 0 0 / 10%)",
    mutedForeground: "oklch(0.88 0.03 300)",
    border: "oklch(1 0 0 / 18%)",
    accent: "oklch(0.85 0.06 300)",
    accentForeground: "oklch(0.2 0.1 300)",
    ring: "oklch(0.85 0.06 300)",
  },
  "accuray-radiotherapy": {
    background: "#0F2A4A",
    foreground: "oklch(0.98 0 0)",
    card: "#0B2138",
    cardForeground: "oklch(0.98 0 0)",
    secondary: "oklch(1 0 0 / 12%)",
    secondaryForeground: "oklch(0.98 0 0)",
    muted: "oklch(1 0 0 / 10%)",
    mutedForeground: "oklch(0.85 0.03 230)",
    border: "oklch(1 0 0 / 18%)",
    accent: "oklch(0.8 0.08 220)",
    accentForeground: "oklch(0.2 0.08 220)",
    ring: "oklch(0.8 0.08 220)",
  },
  "accuray-design-system": {
    background: "#0E5A66",
    foreground: "oklch(0.98 0 0)",
    card: "#0A3D46",
    cardForeground: "oklch(0.98 0 0)",
    secondary: "oklch(1 0 0 / 12%)",
    secondaryForeground: "oklch(0.98 0 0)",
    muted: "oklch(1 0 0 / 10%)",
    mutedForeground: "oklch(0.85 0.05 195)",
    border: "oklch(1 0 0 / 18%)",
    accent: "oklch(0.85 0.08 195)",
    accentForeground: "oklch(0.2 0.06 195)",
    ring: "oklch(0.85 0.08 195)",
  },
}

export function themeToCssVars(theme: ProjectTheme): Record<string, string> {
  return {
    "--background": theme.background,
    "--foreground": theme.foreground,
    "--card": theme.card,
    "--card-foreground": theme.cardForeground,
    "--secondary": theme.secondary,
    "--secondary-foreground": theme.secondaryForeground,
    "--muted": theme.muted,
    "--muted-foreground": theme.mutedForeground,
    "--border": theme.border,
    "--input": theme.border,
    "--accent": theme.accent,
    "--accent-foreground": theme.accentForeground,
    "--ring": theme.ring,
    "--cta-foreground": theme.ctaForeground ?? theme.foreground,
  }
}
