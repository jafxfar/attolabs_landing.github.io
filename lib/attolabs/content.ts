import type { AttolabsLocale, AttolabsMessages, JobItem, ProjectItem } from "./types"
import { enMessages } from "./locales/en"
import { deMessages } from "./locales/de"
import { ruMessages } from "./locales/ru"

const messages: Record<AttolabsLocale, AttolabsMessages> = {
  en: enMessages,
  de: deMessages,
  ru: ruMessages,
}

export const attolabsLocales: AttolabsLocale[] = ["en", "de", "ru"]

export const getAttolabsContent = (locale: string): AttolabsMessages => {
  if (locale === "de" || locale === "ru") return messages[locale]
  return messages.en
}

export const isAttolabsLocale = (locale: string): locale is AttolabsLocale =>
  attolabsLocales.includes(locale as AttolabsLocale)

export const getProjects = (locale: string): ProjectItem[] =>
  getAttolabsContent(locale).projects.items

export const getProjectBySlug = (
  locale: string,
  slug: string
): ProjectItem | undefined =>
  getProjects(locale).find((project) => project.slug === slug)

export const getJobs = (locale: string): JobItem[] =>
  getAttolabsContent(locale).jobsPage.items

export const getJobBySlug = (locale: string, slug: string): JobItem | undefined =>
  getJobs(locale).find((job) => job.slug === slug)

export const enterprisePath = (
  locale: string,
  path: string = ""
): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`
  if (normalized === "/") return `/${locale}/enterprise`
  return `/${locale}/enterprise${normalized}`
}
