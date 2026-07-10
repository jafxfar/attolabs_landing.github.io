"use client"

import { PixelIcon } from "@/components/pixel-icon"
import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import { StackingCards } from "@/components/stacking-cards"
import { enterprisePath } from "@/lib/attolabs/content"
import { SERVICE_IMAGES } from "@/lib/attolabs/shared"
import { useLocale, useTranslations } from "next-intl"

export const SolutionsGridSection = () => {
  const t = useTranslations("services")
  const locale = useLocale()
  const items = t.raw("items") as {
    id: string
    name: string
    industriesCount: number
    projectsCount: number
    href: string
  }[]

  const stackingItems = items.map((service) => ({
    id: service.id,
    label: service.name.split(" ")[0]?.toUpperCase() ?? "SERVICE",
    title: service.name,
    desc: `${service.industriesCount} industries · ${service.projectsCount} projects`,
    stats: [
      { v: String(service.industriesCount), l: "industries" },
      { v: String(service.projectsCount), l: "projects" },
    ],
    img: SERVICE_IMAGES[service.id] ?? SERVICE_IMAGES["custom-software"],
    href: enterprisePath(locale, service.href),
  }))

  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <ScrollFadeIn scale>
              <PixelIcon type="agents" size={40} />
            </ScrollFadeIn>
            <div className="mt-4">
              <SectionTag accent>{t("tag")}</SectionTag>
            </div>
            <RevealText className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
              {t("title")}
            </RevealText>
          </div>
          <RevealLines
            delay={150}
            className="text-sm text-black/45 leading-relaxed max-w-xs"
          >
            {t("subtitle")}
          </RevealLines>
        </div>

        <StackingCards items={stackingItems.slice(0, 6)} />
      </div>
    </section>
  )
}
