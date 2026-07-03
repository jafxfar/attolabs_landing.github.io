"use client"

import { BentoCard } from "@/components/bento-card"
import { CardImageTop } from "@/components/card-image-top"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { handleBentoMouseMove } from "@/lib/bento-mouse"
import { enterpriseIndustries } from "@/lib/enterprise-content"

const featuredIndustries = enterpriseIndustries.slice(0, 4)

export const IndustriesWhyUsSection = () => (
  <section
    id="industries"
    className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]"
  >
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <SectionTag accent>Industries</SectionTag>
        <RevealText
          as="h2"
          className="text-3xl md:text-4xl font-light tracking-tight leading-[1.05] mt-6"
        >
          Industries Served
        </RevealText>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        onMouseMove={handleBentoMouseMove}
      >
        {featuredIndustries.map((industry, index) => (
          <BentoCard
            key={industry.id}
            className="relative overflow-hidden flex flex-col min-h-[280px] p-0"
            delay={index * 60}
          >
            <CardImageTop
              src={industry.image}
              alt={industry.name}
              heightClass="h-36 md:h-40"
            />
            <div className="relative z-10 flex flex-col flex-1 p-6 pt-16">
              <RevealText as="h3" className="text-lg font-light mb-2">
                {industry.name}
              </RevealText>
              <p className="text-sm text-black/45 leading-relaxed line-clamp-3">
                {industry.problem}
              </p>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>
)
