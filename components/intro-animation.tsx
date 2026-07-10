"use client"

import { useEffect, useState } from "react"

import { ATTOLABS_IMAGES } from "@/lib/attolabs/shared"

const LETTERS = ["A", "T", "T", "O", "L", "A", "B", "S"]
const ICON_SRC = ATTOLABS_IMAGES.logoIcon
const ICON_SLOT_RATIO = 1.15

const LETTER_IN_STAGGER  = 90    // ms between each letter appearing
const LETTER_IN_DUR      = 700   // duration of each letter appear transition
const HOLD_DURATION      = 300   // hold fully visible before exit
const LETTERS_IN_TOTAL   = LETTER_IN_STAGGER * LETTERS.length + LETTER_IN_DUR + HOLD_DURATION

const LETTER_OUT_STAGGER = 55    // ms between each letter disappearing
const LETTER_OUT_DUR     = 450   // duration of each letter fade out
const LETTERS_OUT_TOTAL  = LETTER_OUT_STAGGER * LETTERS.length + LETTER_OUT_DUR

const CURTAIN_DELAY      = LETTERS_IN_TOTAL + 100
const CURTAIN_DURATION   = 1300  // matches the CSS transition on the curtain div
const ANIM_TOTAL         = CURTAIN_DELAY + LETTERS_OUT_TOTAL + 1400

const SLOT_COUNT = LETTERS.length + ICON_SLOT_RATIO
const BASE_SIZE = `calc((100vw - 80px) / ${SLOT_COUNT})`

// Exported: moment the curtain finishes retracting — when the bg is fully visible
export const INTRO_DURATION_MS = CURTAIN_DELAY + CURTAIN_DURATION
// Exported: ms before curtain fully done to start hero animations (overlap for smoothness)
export const HERO_REVEAL_MS = CURTAIN_DELAY + CURTAIN_DURATION - 150

type Phase = "idle" | "in" | "out" | "done"

type IntroAnimationProps = {
  onDone: () => void
  iconSrc?: string
  showIcon?: boolean
}

const getRevealStyle = (phase: Phase, inDelay: number, outDelay: number) => {
  const isIdle = phase === "idle"
  const isIn = phase === "in"
  const isOut = phase === "out"

  const opacity = isIdle ? 0 : isIn ? 1 : 0
  const blur = isIdle ? 36 : isIn ? 0 : 24
  const translateY = isIdle ? 48 : isIn ? 0 : -20

  const transition = isOut
    ? `opacity ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
       filter  ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
       transform ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms`
    : isIn
    ? `opacity ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
       filter  ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
       transform ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms`
    : "none"

  return {
    opacity,
    filter: `blur(${blur}px)`,
    transform: `translateY(${translateY}px)`,
    transition,
    willChange: "opacity, filter, transform" as const,
  }
}

export function IntroAnimation({
  onDone,
  iconSrc = ICON_SRC,
  showIcon = true,
}: IntroAnimationProps) {
  const [phase, setPhase] = useState<Phase>("idle")
  const [curtainUp, setCurtainUp] = useState(false)

  useEffect(() => {
    // Tiny delay so the browser has painted before we start transitioning
    const t0 = setTimeout(() => setPhase("in"), 80)
    const t1 = setTimeout(() => setPhase("out"), LETTERS_IN_TOTAL)
    const t2 = setTimeout(() => setCurtainUp(true), CURTAIN_DELAY)
    const t3 = setTimeout(() => onDone(), HERO_REVEAL_MS)
    const t4 = setTimeout(() => setPhase("done"), ANIM_TOTAL)

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onDone])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">

      {/* Gradient curtain — retracts upward, revealing mountains from bottom */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          bottom: curtainUp ? "100%" : "0%",
          transition: curtainUp ? "bottom 1.3s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
          background: "#f5f4f1",
        }}
      />

      {/* Brand mark + ATTOLABS letters */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center" style={{ gap: "0.2em" }}>
          {showIcon && (
            <div
              className="shrink-0 select-none"
              style={{
                width: `calc(${BASE_SIZE} * ${ICON_SLOT_RATIO})`,
                height: `calc(${BASE_SIZE} * ${ICON_SLOT_RATIO})`,
                ...getRevealStyle(phase, 0, LETTERS.length * LETTER_OUT_STAGGER),
              }}
              aria-hidden="true"
            >
              <img
                src={iconSrc}
                alt=""
                draggable={false}
                className="h-full w-full"
              />
            </div>
          )}

          {LETTERS.map((letter, i) => {
            const slotIndex = showIcon ? i + 1 : i
            const inDelay = slotIndex * LETTER_IN_STAGGER
            const outDelay = slotIndex * LETTER_OUT_STAGGER

            return (
              <span
                key={i}
                className="font-sans font-bold text-[#fb4d40] leading-none select-none"
                style={{
                  fontSize: BASE_SIZE,
                  letterSpacing: "0.05em",
                  ...getRevealStyle(phase, inDelay, outDelay),
                }}
              >
                {letter}
              </span>
            )
          })}
        </div>
      </div>

    </div>
  )
}
