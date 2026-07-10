"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { enterprisePath } from "@/lib/attolabs/content"
import type { JobItem } from "@/lib/attolabs/types"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"
import { useLocale, useTranslations } from "next-intl"

export const JobsPageClient = () => {
  const t = useTranslations("jobsPage")
  const tCommon = useTranslations("common")
  const locale = useLocale()
  const items = t.raw("items") as JobItem[]

  const [department, setDepartment] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ role: "", name: "", email: "", phone: "" })

  const departments = useMemo(
    () => [...new Set(items.map((job) => job.department))],
    [items]
  )
  const locations = useMemo(
    () => [...new Set(items.flatMap((job) => job.locations))],
    [items]
  )
  const types = useMemo(
    () => [...new Set(items.map((job) => job.type))],
    [items]
  )

  const filtered = items.filter((job) => {
    if (department && job.department !== department) return false
    if (location && !job.locations.includes(location)) return false
    if (jobType && job.type !== jobType) return false
    return true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email) setSubmitted(true)
  }

  const selectClass =
    "bg-white border border-black/10 rounded-xl px-3 py-2 text-sm text-[#111] focus:outline-none focus:border-black/25"

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
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-6 max-w-4xl"
          >
            {t("title")}
          </RevealText>
          <p className="text-sm text-black/50 leading-relaxed max-w-3xl mb-12">
            {t("intro")}
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <label className="flex flex-col gap-1 text-[11px] tracking-widest uppercase text-black/35">
              {tCommon("department")}
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className={selectClass}
                aria-label={tCommon("department")}
              >
                <option value="">{tCommon("filterAll")}</option>
                {departments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-[11px] tracking-widest uppercase text-black/35">
              {tCommon("location")}
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={selectClass}
                aria-label={tCommon("location")}
              >
                <option value="">{tCommon("filterAll")}</option>
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-[11px] tracking-widest uppercase text-black/35">
              {tCommon("jobType")}
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className={selectClass}
                aria-label={tCommon("jobType")}
              >
                <option value="">{tCommon("filterAll")}</option>
                {types.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="text-sm text-black/40 mb-8">
            {tCommon("openPositions")} ({filtered.length})
          </p>

          {filtered.length === 0 ? (
            <p className="text-sm text-black/45 py-10">{t("noMatch")}</p>
          ) : (
            <div className="space-y-3 mb-20">
              {filtered.map((job) => (
                <Link
                  key={job.id}
                  href={enterprisePath(locale, `/jobs/${job.slug}`)}
                  className="block border border-black/[0.07] rounded-2xl p-6 hover:border-[var(--enterprise-accent)]/30 hover:bg-black/[0.015] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-light mb-2">{job.title}</h2>
                      <p className="text-sm text-black/40">
                        {job.department} · {job.locations.join(", ")}
                      </p>
                    </div>
                    <div className="text-xs tracking-widest uppercase text-black/35">
                      {job.type} · {job.schedule}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <section className="border-t border-black/[0.06] pt-16 max-w-lg">
            <h2 className="text-2xl font-light mb-6">{t("formTitle")}</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder={t("formRole")}
                  value={form.role}
                  onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black/25"
                />
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
