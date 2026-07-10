"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { LegalSection } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

type LegalPageClientProps = {
  kind: "privacy" | "terms"
}

export const LegalPageClient = ({ kind }: LegalPageClientProps) => {
  const t = useTranslations(`legal.${kind}`)
  const tCommon = useTranslations("common")
  const locale = useLocale()
  const sections = t.raw("sections") as LegalSection[]

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
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-start gap-2 mb-10">
            <Link
              href={enterprisePath(locale)}
              className="inline-flex flex items-center gap-1 text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {tCommon("backToHome")}
            </Link>
            <SectionTag accent>{t("tag")}</SectionTag>
          </div>

          <RevealText
            as="h1"
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-3"
          >
            {t("title")}
          </RevealText>
          <p className="text-sm text-black/40 mb-12">
            {tCommon("lastUpdated")}: {t("updated")}
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-light mb-4">{section.heading}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-sm text-black/55 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-black/55 leading-relaxed pl-4 border-l border-black/10"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  )
}
