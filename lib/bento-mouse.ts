import type { MouseEvent } from "react"

export const handleBentoMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
  el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
}
