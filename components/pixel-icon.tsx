"use client"

import { useEffect, useRef } from "react"

// 12×12-ish pixel canvas icons themed for AttoLabs:
 // engineering, global delivery, industries, growth.
// Accent matches enterprise theme (#fb4d40).

type IconType = "platform" | "agents" | "workflow" | "integrations" | "pricing"

export type PixelIconType = IconType

interface PixelIconProps {
  type: IconType
  size?: number
  accent?: string
}

const DEFAULT_ACCENT = "#fb4d40"

const hexToRgb = (hex: string): [number, number, number] => {
  const cleaned = hex.replace("#", "")
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned
  const n = Number.parseInt(full, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const ink = (alpha: number) => `rgba(17,17,17,${alpha})`
const tint = (rgb: [number, number, number], alpha: number) =>
  `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`

// ── platform: wind turbine (AttoLabs signature) ───────────────────────────────
const drawPlatform = (
  ctx: CanvasRenderingContext2D,
  W: number,
  t: number,
  accent: [number, number, number]
) => {
  const ps = Math.max(2, Math.floor(W / 12))
  const snap = (v: number) => Math.round(v / ps) * ps

  // Tower base — centered, rising from bottom
  const towerW = ps
  const towerX = snap(W / 2 - towerW / 2)
  const hubY = snap(W * 0.38)
  const towerBottom = snap(W - ps * 1.2)
  const towerH = towerBottom - hubY

  for (let row = 0; row < Math.floor(towerH / ps); row++) {
    const progress = row / Math.max(1, Math.floor(towerH / ps))
    ctx.fillStyle = ink(0.2 + progress * 0.45)
    ctx.fillRect(towerX, hubY + row * ps, towerW, ps - 1)
  }

  // Base footing
  ctx.fillStyle = ink(0.35)
  ctx.fillRect(towerX - ps, towerBottom - ps * 0.2, towerW + ps * 2, ps)

  // Hub
  const hubSize = ps * 1.35
  const hubX = snap(W / 2 - hubSize / 2)
  ctx.fillStyle = tint(accent, 0.9)
  ctx.fillRect(hubX, hubY - hubSize / 2, hubSize, hubSize)

  // Three blades rotating around hub
  const bladeLen = W * 0.32
  const bladeSteps = 5
  const spin = t * 0.0022

  for (let b = 0; b < 3; b++) {
    const angle = spin + (b * Math.PI * 2) / 3
    for (let s = 1; s <= bladeSteps; s++) {
      const dist = (s / bladeSteps) * bladeLen
      const bx = W / 2 + Math.cos(angle) * dist
      const by = hubY + Math.sin(angle) * dist
      const alpha = 0.25 + 0.55 * (s / bladeSteps)
      const size = s < bladeSteps ? ps : ps * 1.15
      ctx.fillStyle = s === bladeSteps ? tint(accent, alpha) : ink(alpha)
      ctx.fillRect(snap(bx) - size / 2, snap(by) - size / 2, size, size)
    }
  }
}

// ── agents: pixel code brackets </> (engineering craft) ──────────────────────
const CODE_FRAMES: number[][][] = [
  [
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
  ],
  [
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
  ],
  [
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
  ],
  [
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
  ],
]

const drawAgents = (
  ctx: CanvasRenderingContext2D,
  W: number,
  t: number,
  accent: [number, number, number]
) => {
  const fps = 5
  const frameIdx = Math.floor(t / (1000 / fps)) % CODE_FRAMES.length
  const frame = CODE_FRAMES[frameIdx]
  const rows = frame.length
  const cols = frame[0].length
  const ps = Math.floor(W / cols)
  const offX = Math.floor((W - cols * ps) / 2)
  const offY = Math.floor((W - rows * ps) / 2)
  const cursorOn = Math.sin(t * 0.01) > 0

  frame.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (!cell) return
      const isSlash = c >= 3 && c <= 5
      const opacity = 0.45 + 0.45 * ((Math.sin(t * 0.002 + r * 0.4) + 1) / 2)
      ctx.fillStyle = isSlash ? tint(accent, opacity) : ink(opacity)
      ctx.fillRect(offX + c * ps, offY + r * ps, ps - 1, ps - 1)
    })
  })

  if (cursorOn) {
    ctx.fillStyle = tint(accent, 0.85)
    ctx.fillRect(offX + cols * ps - ps, offY + (rows - 1) * ps, ps - 1, ps - 1)
  }
}

// ── workflow: delivery pipeline (brief → build → ship) ───────────────────────
const drawWorkflow = (
  ctx: CanvasRenderingContext2D,
  W: number,
  t: number,
  accent: [number, number, number]
) => {
  const ps = Math.floor(W / 12)
  const stages = 3
  const box = ps * 2.2
  const gap = ps * 1.4
  const total = stages * box + (stages - 1) * gap
  const offX = (W - total) / 2
  const cy = W / 2
  const period = 2400
  const phase = (t % period) / period

  for (let i = 0; i < stages; i++) {
    const x = offX + i * (box + gap)
    const y = cy - box / 2
    const active = phase > i / stages && phase < (i + 1.15) / stages
    const lit = active || phase > (i + 0.2) / stages

    ctx.fillStyle = ink(0.12)
    ctx.fillRect(x, y, box, box)

    if (lit) {
      const a = active ? 0.85 : 0.35
      ctx.fillStyle = tint(accent, a)
      ctx.fillRect(x + 1, y + 1, box - 2, box - 2)
    }

    if (i < stages - 1) {
      const lx = x + box
      const ly = cy - ps / 2
      const flow = (phase * stages - i + 1) % 1
      const steps = 3
      for (let s = 0; s < steps; s++) {
        const p = (s + flow) / steps
        ctx.fillStyle = ink(0.15 + 0.35 * (1 - Math.abs(p - 0.5) * 2))
        ctx.fillRect(lx + p * gap - ps / 2, ly, ps * 0.7, ps * 0.7)
      }
    }
  }
}

// ── integrations: industry constellation ─────────────────────────────────────
const drawIntegrations = (
  ctx: CanvasRenderingContext2D,
  W: number,
  t: number,
  accent: [number, number, number]
) => {
  const cols = 4
  const rows = 3
  const ps = Math.floor(W / (cols + 1.5))
  const gap = 3
  const offX = Math.floor((W - cols * (ps + gap)) / 2)
  const offY = Math.floor((W - rows * (ps + gap)) / 2)
  const total = cols * rows
  const wave = t * 0.0009

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c
      const phase = (idx / total) * Math.PI * 2
      const alpha = 0.12 + 0.7 * ((Math.sin(wave + phase) + 1) / 2)
      const x = offX + c * (ps + gap)
      const y = offY + r * (ps + gap)
      const useAccent = (r + c) % 2 === 0
      ctx.fillStyle = useAccent ? tint(accent, alpha * 0.9) : ink(alpha)
      ctx.fillRect(x, y, ps, ps)
    }
  }
}

// ── pricing: impact / growth signal ──────────────────────────────────────────
const drawPricing = (
  ctx: CanvasRenderingContext2D,
  W: number,
  t: number,
  accent: [number, number, number]
) => {
  const ps = Math.floor(W / 12)
  const bars = 4
  const bw = ps * 1.6
  const gap = ps * 0.7
  const total = bars * bw + (bars - 1) * gap
  const offX = Math.floor((W - total) / 2)
  const maxH = W * 0.72
  const heights = [0.35, 0.55, 0.78, 0.62]
  const wave = Math.sin(t * 0.0016) * 0.1

  heights.forEach((h, i) => {
    const animated = Math.max(0.12, h + wave * (i % 2 === 0 ? 1 : -1))
    const bh = animated * maxH
    const x = offX + i * (bw + gap)
    const y = W - bh - ps
    const rowCount = Math.floor(bh / ps)

    for (let row = 0; row < rowCount; row++) {
      const progress = 1 - row / rowCount
      const alpha = 0.18 + progress * 0.7
      const isTop = row < 2
      ctx.fillStyle = isTop ? tint(accent, alpha) : ink(alpha * 0.85)
      ctx.fillRect(x, y + row * ps, bw, ps - 1)
    }
  })
}

export const PixelIcon = ({
  type,
  size = 40,
  accent = DEFAULT_ACCENT,
}: PixelIconProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const accentRgb = hexToRgb(accent)

    const draw = (t: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = size * dpr
      canvas.height = size * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, size, size)
      ctx.imageSmoothingEnabled = false

      switch (type) {
        case "platform":
          drawPlatform(ctx, size, t, accentRgb)
          break
        case "agents":
          drawAgents(ctx, size, t, accentRgb)
          break
        case "workflow":
          drawWorkflow(ctx, size, t, accentRgb)
          break
        case "integrations":
          drawIntegrations(ctx, size, t, accentRgb)
          break
        case "pricing":
          drawPricing(ctx, size, t, accentRgb)
          break
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [type, size, accent])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        imageRendering: "pixelated",
        display: "block",
        flexShrink: 0,
      }}
    />
  )
}
