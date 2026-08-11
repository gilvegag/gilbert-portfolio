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
  }
}
