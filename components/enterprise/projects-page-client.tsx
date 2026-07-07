"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { BentoCard } from "@/components/bento-card"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { handleBentoMouseMove } from "@/lib/bento-mouse"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

export const ProjectsPageClient = () => {
  const t = useTranslations("projects")
  const locale = useLocale()
  const items = t.raw("items") as {
    id: string
    title: string
    description: string
    industry: string
    coverImage: string
    href: string
  }[]

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
            href={`/${locale}/enterprise`}
            className="inline-flex items-center gap-2 text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <SectionTag accent>{t("tag")}</SectionTag>
          <RevealText
            as="h1"
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-16"
          >
            {t("title")}
          </RevealText>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-3"
            onMouseMove={handleBentoMouseMove}
          >
            {items.map((project, index) => (
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
                  <h2 className="text-2xl font-light tracking-tight mb-4">{project.title}</h2>
                  <p className="text-sm text-black/45 leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-black/10 text-sm text-black/60 hover:border-[var(--enterprise-accent)]/40 hover:text-black hover:bg-black/[0.04] transition-all tracking-wide"
                  >
                    {t("learnMore")}
                  </a>
                </div>
              </BentoCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={t("viewAllHref")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide font-light"
            >
              {t("viewAll")} — attolabs.eu
            </a>
          </div>
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  )
}
