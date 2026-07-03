import React from "react"

type SectionTagProps = {
  children: React.ReactNode
  accent?: boolean
}

export const SectionTag = ({ children, accent = false }: SectionTagProps) => (
  <span
    className={
      accent
        ? "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-[var(--enterprise-accent,#fb4d40)] bg-[var(--enterprise-accent,#fb4d40)]/10 border border-[var(--enterprise-accent,#fb4d40)]/20"
        : "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]"
    }
  >
    {children}
  </span>
)
