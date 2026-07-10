import type { MetadataRoute } from "next"
import { getJobs, getProjects } from "@/lib/attolabs/content"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://attolabs.eu"
const locales = ["en", "de", "ru"] as const

const staticPaths = [
  "",
  "/projects",
  "/about",
  "/work-with-us",
  "/jobs",
  "/privacy-policy",
  "/terms-of-use",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = locales.flatMap((locale) =>
    staticPaths.map((path, index) => ({
      url: `${baseUrl}/${locale}/enterprise${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: index === 0 ? 1 : 0.8,
    }))
  )

  const projectPages = locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      url: `${baseUrl}/${locale}/enterprise/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  )

  const jobPages = locales.flatMap((locale) =>
    getJobs(locale).map((job) => ({
      url: `${baseUrl}/${locale}/enterprise/jobs/${job.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...staticPages,
    ...projectPages,
    ...jobPages,
  ]
}
