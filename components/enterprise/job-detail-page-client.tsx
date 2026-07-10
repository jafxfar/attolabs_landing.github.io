"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { JobItem } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

type JobDetailPageClientProps = {
  job: JobItem
}

export const JobDetailPageClient = ({ job }: JobDetailPageClientProps) => {
  const t = useTranslations("jobsPage")
  const tCommon = useTranslations("common")
  const tContact = useTranslations("contact")
  const locale = useLocale()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email) setSubmitted(true)
  }

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
          <Link
            href={enterprisePath(locale, "/jobs")}
            className="inline-flex items-center gap-2 text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {tCommon("backToJobs")}
          </Link>

          <SectionTag accent>{job.department}</SectionTag>
          <RevealText
            as="h1"
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-6"
          >
            {job.title}
          </RevealText>

          <div className="flex flex-wrap gap-4 text-sm text-black/45 mb-12">
            <span>
              {tCommon("location")}: {job.locations.join(", ")}
            </span>
            <span>
              {tCommon("jobType")}: {job.type}
            </span>
            <span>{job.schedule}</span>
          </div>

          <section className="mb-12">
            <h2 className="text-xl font-light mb-4">About the role</h2>
            <p className="text-sm text-black/55 leading-relaxed">{job.about}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-light mb-4">Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((item) => (
                <li
                  key={item}
                  className="text-sm text-black/55 leading-relaxed pl-4 border-l border-black/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-light mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((item) => (
                <li
                  key={item}
                  className="text-sm text-black/55 leading-relaxed pl-4 border-l border-black/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-light mb-4">What we offer</h2>
            <ul className="space-y-2">
              {job.offer.map((item) => (
                <li
                  key={item}
                  className="text-sm text-black/55 leading-relaxed pl-4 border-l border-black/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-black/[0.06] pt-12">
            <h2 className="text-2xl font-light mb-2">{tCommon("applyNow")}</h2>
            <p className="text-sm text-black/40 mb-6">{job.title}</p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
                <input
                  type="text"
                  placeholder={t("formName")}
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black/25"
                />
                <input
                  type="email"
                  placeholder={t("formEmail")}
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black/25"
                />
                <input
                  type="tel"
                  placeholder={t("formPhone")}
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black/25"
                />
                <button
                  type="submit"
                  className="w-full mt-2 px-8 py-3 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors"
                >
                  {t("formSubmit")}
                </button>
                <p className="text-xs text-black/35 text-center pt-2">
                  {tContact("privacyPrefix")}{" "}
                  <Link
                    href={enterprisePath(locale, tContact("privacyHref"))}
                    className="underline hover:text-[var(--enterprise-accent)]"
                  >
                    {tContact("privacyLabel")}
                  </Link>
                </p>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm">
                {t("formSuccess")}
              </div>
            )}
          </section>
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  )
}
