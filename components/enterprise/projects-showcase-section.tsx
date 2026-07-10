"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectShowcaseCard } from "@/components/enterprise/project-showcase-card"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { ProjectItem } from "@/lib/attolabs/types"
import { useLocale, useTranslations } from "next-intl"

export const ProjectsShowcaseSection = () => {
  const t = useTranslations("projects")
  const locale = useLocale()
  const items = t.raw("items") as ProjectItem[]

  const projects = items.slice(0, 3).map((item) => ({
    id: item.id,
    tags: [item.industry],
    subtitle: item.description,
    title: item.title,
    coverImage: item.coverImage,
    mockupImage: item.coverImage,
    highlights: [{ label: "Industry", value: item.industry }],
    href: enterprisePath(locale, `/projects/${item.slug}`),
  }))

  return (
    <section id="case-studies" className="border-t border-black/[0.06] overflow-x-hidden">
      <div className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto mb-4">
          <ScrollFadeIn scale>
            <PixelIcon type="workflow" size={40} />
          </ScrollFadeIn>
          <div className="mt-4">
            <SectionTag accent>{t("tag")}</SectionTag>
          </div>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] mt-6"
          >
            {t("title")}
          </RevealText>
        </div>
      </div>

      {projects.map((project, index) => (
        <ProjectShowcaseCard key={project.id} project={project} index={index} />
      ))}

      <div className="pb-24 px-9 pt-4 md:px-12 lg:px-20">
        <ScrollFadeIn delay={200} className="max-w-7xl mx-auto flex justify-center gap-4">
          <Link
            href={enterprisePath(locale, "/projects")}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide font-light"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
