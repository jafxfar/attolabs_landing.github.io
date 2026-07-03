import type { CSSProperties } from "react"

export const enterpriseTheme = {
  accent: "#fb4d40",
  accentHover: "#e84438",
  bg: "#F5F4F0",
  surface: "#F0EEE8",
  text: "#111",
} as const

export const enterpriseThemeStyle: CSSProperties = {
  "--enterprise-accent": enterpriseTheme.accent,
  "--enterprise-accent-hover": enterpriseTheme.accentHover,
} as CSSProperties
