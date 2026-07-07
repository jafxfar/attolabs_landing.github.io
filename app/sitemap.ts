import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://attolabs.eu"
const locales = ["en", "de", "ru"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const enterprisePages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}/enterprise`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/enterprise/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ])

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...enterprisePages,
  ]
}
