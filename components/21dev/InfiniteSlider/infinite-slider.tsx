"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"

type InfiniteSliderProps = {
  children: ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  reverse?: boolean
  className?: string
}

export const InfiniteSlider = ({
  children,
  gap = 24,
  speed = 40,
  speedOnHover = 20,
  reverse = false,
  className = "",
}: InfiniteSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [setWidth, setSetWidth] = useState(0)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const firstSet = track.children[0] as HTMLElement | undefined
    if (firstSet) setSetWidth(firstSet.offsetWidth + gap)
  }, [gap])

  useEffect(() => {
    measure()
    const observer = new ResizeObserver(measure)
    if (trackRef.current) observer.observe(trackRef.current)
    return () => observer.disconnect()
  }, [measure, children])

  useEffect(() => {
    const animate = () => {
      const currentSpeed = isHovered ? speedOnHover : speed
      const direction = reverse ? 1 : -1
      offsetRef.current += direction * (currentSpeed / 60)

      if (setWidth > 0) {
        if (offsetRef.current <= -setWidth) offsetRef.current += setWidth
        if (offsetRef.current >= setWidth) offsetRef.current -= setWidth
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isHovered, speed, speedOnHover, reverse, setWidth])

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
