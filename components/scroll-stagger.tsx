"use client"

import React from "react"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

type ScrollStaggerProps = {
  children: React.ReactNode
  className?: string
  staggerMs?: number
  threshold?: number
  direction?: "up" | "left" | "right"
}

export const ScrollStagger = ({
  children,
  className = "",
  staggerMs = 80,
  threshold = 0.15,
  direction = "up",
}: ScrollStaggerProps) => {
  const items = React.Children.toArray(children)

  return (
    <div className={className}>
      {items.map((child, index) => (
        <ScrollFadeIn
          key={index}
          delay={index * staggerMs}
          threshold={threshold}
          direction={direction}
        >
          {child}
        </ScrollFadeIn>
      ))}
    </div>
  )
}
