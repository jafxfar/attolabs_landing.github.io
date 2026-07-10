"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { ProjectItem } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

type ProjectDetailPageClientProps = {
  project: ProjectItem
}

export const ProjectDetailPageClient = ({ project }: ProjectDetailPageClientProps) => {
  const tCommon = useTranslations("common")
  const locale = useLocale()

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

      <main className="pt-28 pb-16">
        <div className="relative w-full h-[42vh] min-h-[280px] max-h-[480px]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f4f0] via-[#f5f4f0]/40 to-transparent" />
        </div>

        <div className="px-6 md:px-12 lg:px-20 -mt-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href={enterprisePath(locale, "/projects")}
              className="inline-flex items-center gap-2 text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {tCommon("backToProjects")}
            </Link>

            <SectionTag accent>{project.industry}</SectionTag>
            <RevealText
              as="h1"
              className="text-3xl md:text-5xl font-light tracking-tight leading-[1.05] mt-5 mb-4"
            >
              {project.title}
            </RevealText>
            <p className="text-sm text-black/40 mb-6">{project.client}</p>
            <p className="text-base text-black/55 leading-relaxed mb-16 max-w-3xl">
              {project.description}
            </p>

            <section className="mb-16">
              <h2 className="text-2xl font-light mb-6">{tCommon("goals")}</h2>
              <ul className="space-y-3">
                {project.goals.map((goal) => (
                  <li
                    key={goal}
                    className="text-sm text-black/55 leading-relaxed pl-4 border-l border-black/10"
                  >
                    {goal}
                  </li>
                ))}
              </ul>
            </section>

            {project.solutions.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-light mb-8">{tCommon("solutions")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.solutions.map((solution) => (
                    <div key={solution.title} className="border-t border-black/[0.06] pt-5">
                      <h3 className="text-lg font-light mb-2">{solution.title}</h3>
                      <p className="text-sm text-black/45 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.results.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-light mb-8">{tCommon("results")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result) => (
                    <div key={result.title} className="border-t border-black/[0.06] pt-5">
                      <h3 className="text-lg font-light mb-2">{result.title}</h3>
                      <p className="text-sm text-black/45 leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  )
}
