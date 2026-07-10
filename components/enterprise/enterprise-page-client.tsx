"use client"

import { useCallback, useEffect, useState } from "react"
import { IntroAnimation, HERO_REVEAL_MS } from "@/components/intro-animation"
import { PixelIcon } from "@/components/pixel-icon"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { HeroSection } from "@/components/enterprise/hero-section"
import { ClientsStripSection } from "@/components/enterprise/clients-strip-section"
import { ProblemSolutionSection } from "@/components/enterprise/problem-solution-section"
import { SolutionsGridSection } from "@/components/enterprise/solutions-grid-section"
import { IndustriesWhyUsSection } from "@/components/enterprise/industries-why-us-section"
import { ProjectsShowcaseSection } from "@/components/enterprise/projects-showcase-section"
import { TechStackSection } from "@/components/enterprise/tech-stack-section"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import AboutUsSection from "@/components/21dev/about-us"
import { TestimonialsSection } from "@/components/21dev/Testimonials/use"
import { enterprisePath } from "@/lib/attolabs/content"
import { SECTION_CONTACT_IMAGE } from "@/lib/attolabs/shared"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

export const EnterprisePageClient = () => {
  const t = useTranslations("contact")
  const locale = useLocale()
  const [heroReady, setHeroReady] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), HERO_REVEAL_MS)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) setSubmitted(true)
  }

  return (
    <div
      className="enterprise-theme min-h-screen font-sans antialiased"
      style={{
        ...enterpriseThemeStyle,
        backgroundColor: enterpriseTheme.bg,
        color: enterpriseTheme.text,
      }}
    >
      <IntroAnimation onDone={handleIntroDone} />
      <EnterpriseNav />
      <HeroSection heroReady={heroReady} videoReady={videoReady} />
      <ClientsStripSection />
      <ProblemSolutionSection />
      <SolutionsGridSection />
      <IndustriesWhyUsSection />
      <ProjectsShowcaseSection />
      <TestimonialsSection />
      <TechStackSection />
      <AboutUsSection />
      <section
        id="contact"
        className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden"
      >
        <img
          src={SECTION_CONTACT_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-center pointer-events-none select-none"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgb(245,244,240) 0%, rgba(245,244,240,0.92) 18%, rgba(245,244,240,0.55) 35%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <ScrollFadeIn scale className="flex justify-center mb-4">
            <PixelIcon type="pricing" size={40} />
          </ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 whitespace-pre-line">
            {t("headline")}
          </h2>
          <p className="text-sm text-black/45 leading-relaxed mb-10">
            {t("subheadline")}
          </p>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 max-w-md mx-auto text-left"
            >
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors"
              />
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide font-medium"
              >
                {t("submitLabel")}
              </button>
              <p className="text-xs text-black/35 text-center pt-2">
                {t("privacyPrefix")}{" "}
                <a
                  href={enterprisePath(locale, t("privacyHref"))}
                  className="underline hover:text-[var(--enterprise-accent)]"
                >
                  {t("privacyLabel")}
                </a>
              </p>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("successMessage")}
            </div>
          )}
        </div>
      </section>
      <EnterpriseFooter />
    </div>
  )
}
