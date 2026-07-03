"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export type StackingCardItem = {
  label: string
  title: string
  desc: string
  stats: { v: string; l: string }[]
  img: string
  href?: string
}

const STICKY_TOP = 80
const STICKY_STEP = 16
const SCALE_STEP = 0.04
const OFFSET_STEP = 8

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]">
    {children}
  </span>
)

type StackingCardsProps = {
  items: StackingCardItem[]
}

export const StackingCards = ({ items }: StackingCardsProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [depth, setDepth] = useState<number[]>(items.map(() => 0))

  useEffect(() => {
    const onScroll = () => {
      const nextDepth = items.map((_, i) => {
        let count = 0
        for (let j = i + 1; j < items.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {items.map((item, i) => {
        const d = depth[i]
        const scale = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={item.label}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="sticky mb-4"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              <div className="group relative bg-[#faf9f7] rounded-2xl border border-black/[0.07] overflow-hidden">
                {item.img && (
                  <div className="relative w-full h-52 pointer-events-none md:hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                )}

                {item.img && (
                  <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to right, #faf9f7 0%, transparent 55%)",
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10 p-8">
                  <div className="md:max-w-[60%]">
                    <div className="flex items-start justify-between mb-6">
                      <Tag>{item.label}</Tag>
                    </div>
                    <h3 className="text-xl font-light mb-3">{item.title}</h3>
                    <p className="text-sm text-black/45 leading-relaxed mb-8">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap items-end gap-8 pt-6 border-t border-black/[0.06]">
                    {item.stats.map((stat) => (
                      <div key={stat.l}>
                        <div className="text-2xl font-light">{stat.v}</div>
                        <div className="text-[11px] text-black/35 tracking-widest mt-0.5">{stat.l}</div>
                      </div>
                    ))}
                    {item.href && (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-sm text-black/55 hover:text-black transition-colors group ml-auto"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
