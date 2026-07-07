"use client"

import { BentoCard } from "@/components/bento-card"
import { CardImageTop } from "@/components/card-image-top"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import { handleBentoMouseMove } from "@/lib/bento-mouse"
import { INDUSTRY_IMAGES } from "@/lib/attolabs/shared"
import { useTranslations } from "next-intl"

export const IndustriesWhyUsSection = () => {
  const t = useTranslations("industries")
  const items = t.raw("items") as {
    id: string
    name: string
    servicesCount: number
    projectsCount: number
    href: string
  }[]

  return (
    <section
      id="industries"
      className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <ScrollFadeIn scale>
            <PixelIcon type="integrations" size={40} />
          </ScrollFadeIn>
          <div className="mt-4">
            <SectionTag accent>{t("tag")}</SectionTag>
          </div>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl font-light tracking-tight leading-[1.05] mt-6"
          >
            {t("title")}
          </RevealText>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          onMouseMove={handleBentoMouseMove}
        >
          {items.map((industry, index) => (
            <BentoCard
              key={industry.id}
              className="relative overflow-hidden flex flex-col min-h-[240px] p-0"
              delay={index * 60}
            >
              <CardImageTop
                src={INDUSTRY_IMAGES[industry.id] ?? INDUSTRY_IMAGES.banking}
                alt={industry.name}
                heightClass="h-32 md:h-36"
              />
              <div className="relative z-10 flex flex-col flex-1 p-6 pt-14">
                <RevealText as="h3" className="text-lg font-light mb-2">
                  {industry.name}
                </RevealText>
                <p className="text-sm text-black/45 leading-relaxed">
                  {industry.servicesCount} services · {industry.projectsCount} projects
                </p>
                <a
                  href={industry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 text-xs tracking-widest uppercase text-[var(--enterprise-accent)] hover:opacity-80 transition-opacity"
                >
                  View projects
                </a>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
