"use client"

import React from "react"
import { useInView } from "@/hooks/use-in-view"

type ScrollFadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  scale?: boolean
  direction?: "up" | "left" | "right"
}

const getTransform = (
  inView: boolean,
  scale: boolean,
  direction: "up" | "left" | "right"
) => {
  if (inView) {
    return scale ? "translateY(0) scale(1)" : "translateY(0) translateX(0)"
  }

  if (direction === "left") return "translateX(-24px)"
  if (direction === "right") return "translateX(24px)"
  return scale ? "translateY(20px) scale(0.95)" : "translateY(20px)"
}

export const ScrollFadeIn = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  scale = false,
  direction = "up",
}: ScrollFadeInProps) => {
  const { ref, inView } = useInView(threshold)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        filter: inView ? "blur(0px)" : "blur(16px)",
        transform: getTransform(inView, scale, direction),
        transition: inView
          ? `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
             filter 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
             transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  )
}
