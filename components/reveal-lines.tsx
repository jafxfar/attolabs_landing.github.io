"use client"

import { useEffect, useRef, useState } from "react"

type RevealLinesProps = {
  children: string
  className?: string
  as?: "p" | "span" | "div"
  stagger?: number
  duration?: number
  delay?: number
  threshold?: number
  splitBy?: "sentence" | "line"
  visible?: boolean
}

export const RevealLines = ({
  children,
  className = "",
  as: Tag = "p",
  stagger = 120,
  duration = 700,
  delay = 0,
  threshold = 0.2,
  splitBy = "sentence",
  visible: visibleProp,
}: RevealLinesProps) => {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const visible = visibleProp ?? inView

  useEffect(() => {
    if (visibleProp !== undefined) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, visibleProp])

  const lines =
    splitBy === "line"
      ? children.split("\n").filter(Boolean)
      : children.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [children]

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => {
        const lineDelay = delay + index * stagger

        return (
          <span
            key={index}
            className="block"
            style={{
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(8px)",
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: visible
                ? `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${lineDelay}ms,
                   filter ${duration}ms cubic-bezier(0.16,1,0.3,1) ${lineDelay}ms,
                   transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${lineDelay}ms`
                : "none",
            }}
          >
            {line}
          </span>
        )
      })}
    </Tag>
  )
}
