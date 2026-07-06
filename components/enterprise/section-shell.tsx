"use client"

import React from "react"
import { PixelIcon, type PixelIconType } from "@/components/pixel-icon"
import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"

type SectionShellProps = {
  id?: string
  tag: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  bordered?: boolean
  centered?: boolean
  accent?: boolean
  pixelIcon?: PixelIconType
}

export const SectionShell = ({
  id,
  tag,
  title,
  description,
  children,
  className = "",
  bordered = true,
  centered = false,
  accent = false,
  pixelIcon,
}: SectionShellProps) => (
  <section
    id={id}
    className={`py-32 px-6 md:px-12 lg:px-20 ${bordered ? "border-t border-black/[0.06]" : ""} ${className}`}
  >
    <div className="max-w-6xl mx-auto">
      <div
        className={`mb-16 ${
          centered
            ? "flex flex-col items-center text-center"
            : description
              ? "flex flex-col md:flex-row md:items-end md:justify-between gap-8"
              : ""
        }`}
      >
        <div className={centered ? "flex flex-col items-center" : ""}>
          {pixelIcon && (
            <ScrollFadeIn scale className={centered ? "" : "mb-0"}>
              <PixelIcon type={pixelIcon} size={40} />
            </ScrollFadeIn>
          )}
          <div className={pixelIcon ? "mt-4" : ""}>
            <SectionTag accent={accent}>{tag}</SectionTag>
          </div>
          <RevealText className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            {title}
          </RevealText>
        </div>
        {description && (
          <RevealLines
            delay={150}
            className={`text-sm text-black/45 leading-relaxed max-w-xs ${centered ? "text-center mx-auto" : ""}`}
          >
            {description}
          </RevealLines>
        )}
      </div>
      {children}
    </div>
  </section>
)
