"use client"

import { PixelIcon } from "@/components/pixel-icon"
import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import { StackingCards } from "@/components/stacking-cards"
import { enterpriseStackingSolutions } from "@/lib/enterprise-content"

const stackingItems = enterpriseStackingSolutions.map((solution) => ({
  label: solution.label,
  title: solution.title,
  desc: solution.description,
  stats: solution.stats,
  img: solution.image,
  href: solution.href,
}))

export const SolutionsGridSection = () => (
  <section
    id="solutions"
    className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-x-hidden"
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div>
          <ScrollFadeIn scale>
            <PixelIcon type="agents" size={40} />
          </ScrollFadeIn>
          <div className="mt-4">
            <SectionTag accent>SOLUTIONS</SectionTag>
          </div>
          <RevealText className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            {"Core offerings for\nenterprise decision-makers."}
          </RevealText>
        </div>
        <RevealLines
          delay={150}
          className="text-sm text-black/45 leading-relaxed max-w-xs"
        >
          End-to-end capabilities designed to modernize, integrate, and scale your technology stack.
        </RevealLines>
      </div>

      <StackingCards items={stackingItems} />
    </div>
  </section>
)
