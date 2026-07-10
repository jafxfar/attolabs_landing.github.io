"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { BentoCard } from "@/components/bento-card"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { handleBentoMouseMove } from "@/lib/bento-mouse"
import { enterprisePath } from "@/lib/attolabs/content"
import type { ProjectItem } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

export const ProjectsPageClient = () => {
  const t = useTranslations("projects")
  const tCommon = useTranslations("common")
  const tServices = useTranslations("services")
  const tIndustries = useTranslations("industries")
  const locale = useLocale()
  const searchParams = useSearchParams()

  const serviceFilter = searchParams.get("service")
  const industryFilter = searchParams.get("industry")

  const items = t.raw("items") as ProjectItem[]
  const services = tServices.raw("items") as { id: string; name: string }[]
  const industries = tIndustries.raw("items") as { id: string; name: string }[]

  const filtered = useMemo(() => {
    return items.filter((project) => {
      if (serviceFilter && !project.serviceIds.includes(serviceFilter)) return false
      if (industryFilter && !project.industryIds.includes(industryFilter)) return false
      return true
    })
  }, [items, serviceFilter, industryFilter])

  const hasFilters = Boolean(serviceFilter || industryFilter)

  return (
    <div
      className="enterprise-theme min-h-screen font-sans antialiased overflow-x-hidden"
      style={{
        ...enterpriseThemeStyle,
        backgroundColor: enterpriseTheme.bg,
        color: enterpriseTheme.text,
      }}
    >
      <EnterpriseNav />

      <main className="pt-28 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Link
            href={enterprisePath(locale)}
            className="inline-flex items-center gap-2 text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {tCommon("backToHome")}
          </Link>

          <SectionTag accent>{t("tag")}</SectionTag>
          <RevealText
            as="h1"
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-8"
          >
            {t("title")}
          </RevealText>

          <div className="flex flex-col gap-4 mb-12">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[11px] tracking-widest uppercase text-black/35 mr-2">
                {t("filterService")}
              </span>
              <Link
                href={enterprisePath(locale, "/projects")}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  !serviceFilter
                    ? "border-[var(--enterprise-accent)]/40 bg-[var(--enterprise-accent)]/5 text-black"
                    : "border-black/10 text-black/50 hover:border-black/20"
                }`}
              >
                {tCommon("filterAll")}
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={enterprisePath(
                    locale,
                    `/projects?service=${service.id}${industryFilter ? `&industry=${industryFilter}` : ""}`
                  )}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                    serviceFilter === service.id
                      ? "border-[var(--enterprise-accent)]/40 bg-[var(--enterprise-accent)]/5 text-black"
                      : "border-black/10 text-black/50 hover:border-black/20"
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[11px] tracking-widest uppercase text-black/35 mr-2">
                {t("filterIndustry")}
              </span>
              <Link
                href={enterprisePath(
                  locale,
                  serviceFilter ? `/projects?service=${serviceFilter}` : "/projects"
                )}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  !industryFilter
                    ? "border-[var(--enterprise-accent)]/40 bg-[var(--enterprise-accent)]/5 text-black"
                    : "border-black/10 text-black/50 hover:border-black/20"
                }`}
              >
                {tCommon("filterAll")}
              </Link>
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={enterprisePath(
                    locale,
                    `/projects?industry=${industry.id}${serviceFilter ? `&service=${serviceFilter}` : ""}`
                  )}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                    industryFilter === industry.id
                      ? "border-[var(--enterprise-accent)]/40 bg-[var(--enterprise-accent)]/5 text-black"
                      : "border-black/10 text-black/50 hover:border-black/20"
                  }`}
                >
                  {industry.name}
                </Link>
              ))}
            </div>
            {hasFilters && (
              <Link
                href={enterprisePath(locale, "/projects")}
                className="text-xs text-[var(--enterprise-accent)] hover:opacity-80 w-fit"
              >
                {tCommon("clearFilters")}
              </Link>
            )}
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-black/45 py-16 text-center">{t("empty")}</p>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
              onMouseMove={handleBentoMouseMove}
            >
              {filtered.map((project, index) => (
                <BentoCard
                  key={project.id}
                  className="relative overflow-hidden flex flex-col min-h-[420px] p-0"
                  delay={index * 80}
                >
                  <div className="relative h-48 md:h-56 w-full">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <span className="text-[10px] tracking-widest uppercase text-[var(--enterprise-accent)]/60 block mb-2">
                      {project.industry}
                    </span>
                    <h2 className="text-2xl font-light tracking-tight mb-4">
                      {project.title}
                    </h2>
                    <p className="text-sm text-black/45 leading-relaxed flex-1 mb-6">
                      {project.description}
                    </p>
                    <Link
                      href={enterprisePath(locale, `/projects/${project.slug}`)}
                      className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-black/10 text-sm text-black/60 hover:border-[var(--enterprise-accent)]/40 hover:text-black hover:bg-black/[0.04] transition-all tracking-wide"
                    >
                      {t("learnMore")}
                    </Link>
                  </div>
                </BentoCard>
              ))}
            </div>
          )}
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  )
}
