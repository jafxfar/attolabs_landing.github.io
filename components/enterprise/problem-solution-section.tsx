"use client"

import { BentoCard } from "@/components/bento-card"
import { CardImageTop } from "@/components/card-image-top"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import { useTranslations } from "next-intl"

export const ProblemSolutionSection = () => {
  const t = useTranslations("approach")

  return (
    <section id="approach" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto mb-8">
        <ScrollFadeIn scale>
          <PixelIcon type="workflow" size={40} />
        </ScrollFadeIn>
        <div className="mt-4">
          <SectionTag accent>{t("tag")}</SectionTag>
        </div>
        <RevealText className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.05]">
          {t("title")}
        </RevealText>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
        <BentoCard
          className="relative overflow-hidden flex flex-col min-h-[420px] p-0"
          delay={0}
        >
          <CardImageTop
            src="/images/footer.png"
            alt={t("missionTitle")}
          />
          <div className="relative z-10 flex flex-col justify-between flex-1 px-8 pb-8 pt-20 mt-auto">
            <div>
              <RevealText
                as="h3"
                className="text-2xl font-light mb-4 tracking-tight"
              >
                {t("missionTitle")}
              </RevealText>
              <p className="text-sm text-black/55 leading-relaxed">
                {t("missionBody")}
              </p>
            </div>
            <a
              href="#case-studies"
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-[var(--enterprise-accent)]/40 hover:text-black hover:bg-black/[0.03] transition-all tracking-wide"
            >
              {t("cta")}
            </a>
          </div>
        </BentoCard>

        <BentoCard
          className="relative overflow-hidden flex flex-col min-h-[420px] p-0"
          delay={80}
        >
          <CardImageTop
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Org%20Arc%20-%20Upscaled-Sk90jShfu7nltLnhoQbaMJC1YaQKuU.png"
            alt={t("commitmentTitle")}
          />
          <div className="relative z-10 flex flex-col justify-between flex-1 px-8 pb-8 pt-20 mt-auto">
            <div>
              <RevealText as="h3" className="text-2xl font-light mb-4 tracking-tight">
                {t("commitmentTitle")}
              </RevealText>
              <p className="text-sm text-black/55 leading-relaxed">
                {t("commitmentBody")}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide"
            >
              {t("cta")}
            </a>
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
