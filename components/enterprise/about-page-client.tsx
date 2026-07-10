"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { AboutValue, OfficeItem } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

export const AboutPageClient = () => {
  const t = useTranslations("aboutPage")
  const tCommon = useTranslations("common")
  const locale = useLocale()
  const stats = t.raw("stats") as { value: string; label: string }[]
  const values = t.raw("values") as AboutValue[]
  const branches = t.raw("branches") as OfficeItem[]

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
        <div className="max-w-6xl mx-auto">
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
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-6 max-w-4xl"
          >
            {t("title")}
          </RevealText>
          <p className="text-base text-black/50 leading-relaxed max-w-3xl mb-16">
            {t("lead")}
          </p>

          <div className="grid grid-cols-3 gap-6 mb-20 border-y border-black/[0.06] py-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-5xl font-light tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-widest uppercase text-black/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-light mb-4">{t("impactTitle")}</h2>
            <p className="text-sm text-black/50 leading-relaxed max-w-3xl">
              {t("impactBody")}
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-light mb-10">{t("valuesTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((value) => (
                <div key={value.number} className="border-t border-black/[0.06] pt-6">
                  <span className="text-[11px] tracking-widest text-black/30 mb-3 block">
                    {value.number}
                  </span>
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-sm text-black/45 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light mb-10">{t("branchesTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch) => (
                <div key={branch.country} className="border-t border-black/[0.06] pt-5">
                  <h3 className="text-xs tracking-widest uppercase text-black/35 mb-3">
                    {branch.country}
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed mb-3">
                    {branch.address}
                  </p>
                  <div className="space-y-1">
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                    <a
                      href={`mailto:${branch.email}`}
                      className="block text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <EnterpriseFooter hideOffices />
    </div>
  )
}
