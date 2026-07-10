"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { WorkWithUsContact } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

export const WorkWithUsPageClient = () => {
  const t = useTranslations("workWithUsPage")
  const tCommon = useTranslations("common")
  const locale = useLocale()
  const contacts = t.raw("contacts") as WorkWithUsContact[]

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
        <div className="max-w-5xl mx-auto">
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
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-4 max-w-4xl uppercase"
          >
            {t("title")}
          </RevealText>
          <p className="text-sm text-black/45 mb-16">{t("subtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((contact) => (
              <article
                key={contact.email}
                className="border border-black/[0.07] rounded-2xl overflow-hidden bg-[#faf9f7]"
              >
                <div className="relative h-64 w-full bg-black/[0.04]">
                  <Image
                    src={contact.photo}
                    alt={contact.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[11px] tracking-widest uppercase text-black/35 mb-2">
                    {contact.role}
                  </p>
                  <h2 className="text-2xl font-light mb-6">{contact.name}</h2>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm text-black/55 hover:text-[var(--enterprise-accent)] transition-colors mb-2"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="block text-sm text-black/55 hover:text-[var(--enterprise-accent)] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  )
}
