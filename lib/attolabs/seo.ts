import type { Metadata } from "next"
import { getAttolabsContent, attolabsLocales } from "./content"
import type { AttolabsLocale } from "./types"
import { ATTOLABS_SITE_URL, ATTOLABS_SOCIAL } from "./shared"

type PageKey =
  | "home"
  | "projects"
  | "projectDetail"
  | "about"
  | "workWithUs"
  | "jobs"
  | "jobDetail"
  | "privacy"
  | "terms"

type MetadataOverride = {
  title?: string
  description?: string
  path?: string
}

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

const pagePath = (page: PageKey, overridePath?: string): string => {
  if (overridePath) return overridePath.startsWith("/") ? overridePath : `/${overridePath}`
  switch (page) {
    case "projects":
      return "/projects"
    case "about":
      return "/about"
    case "workWithUs":
      return "/work-with-us"
    case "jobs":
      return "/jobs"
    case "privacy":
      return "/privacy-policy"
    case "terms":
      return "/terms-of-use"
    default:
      return ""
  }
}

const pageMeta = (
  locale: AttolabsLocale,
  page: PageKey,
  override?: MetadataOverride
) => {
  const content = getAttolabsContent(locale)
  if (override?.title && override?.description) {
    return { title: override.title, description: override.description }
  }
  switch (page) {
    case "projects":
    case "projectDetail":
      return {
        title: override?.title ?? content.metadata.projectsTitle,
        description: override?.description ?? content.metadata.projectsDescription,
      }
    case "about":
      return {
        title: content.metadata.aboutTitle,
        description: content.metadata.aboutDescription,
      }
    case "workWithUs":
      return {
        title: content.metadata.workWithUsTitle,
        description: content.metadata.workWithUsDescription,
      }
    case "jobs":
    case "jobDetail":
      return {
        title: override?.title ?? content.metadata.jobsTitle,
        description: override?.description ?? content.metadata.jobsDescription,
      }
    case "privacy":
      return {
        title: content.metadata.privacyTitle,
        description: content.metadata.privacyDescription,
      }
    case "terms":
      return {
        title: content.metadata.termsTitle,
        description: content.metadata.termsDescription,
      }
    default:
      return {
        title: content.metadata.homeTitle,
        description: content.metadata.homeDescription,
      }
  }
}

export const buildEnterpriseMetadata = (
  locale: AttolabsLocale,
  page: PageKey = "home",
  override?: MetadataOverride
): Metadata => {
  const content = getAttolabsContent(locale)
  const { title, description } = pageMeta(locale, page, override)
  const suffix = pagePath(page, override?.path)
  const path = `/${locale}/enterprise${suffix}`
  const absoluteUrl = `${getBaseUrl()}${path}`

  const languages = Object.fromEntries(
    attolabsLocales.map((l) => [
      l,
      `${getBaseUrl()}/${l}/enterprise${suffix}`,
    ])
  )

  return {
    title,
    description,
    keywords: [
      "AttoLabs",
      "software development",
      "cloud development",
      "digital transformation",
      "custom software",
      "Engineers for AI Era",
    ],
    authors: [{ name: "AttoLabs" }],
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    alternates: {
      canonical: absoluteUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl,
      siteName: "AttoLabs",
      locale: content.metadata.ogLocale,
      alternateLocale: attolabsLocales
        .filter((l) => l !== locale)
        .map((l) => getAttolabsContent(l).metadata.ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      site: "@attolabs",
      title,
      description,
    },
    metadataBase: new URL(getBaseUrl()),
  }
}

export const buildOrganizationJsonLd = (locale: AttolabsLocale) => {
  const content = getAttolabsContent(locale)

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AttoLabs",
    url: ATTOLABS_SITE_URL,
    logo: "https://attolabs.eu/wp-content/uploads/2024/04/logo.svg",
    email: "contact@attolabs.eu",
    sameAs: ATTOLABS_SOCIAL.map((s) => s.href),
    contactPoint: content.footer.offices.map((office) => ({
      "@type": "ContactPoint",
      telephone: office.phones[0],
      email: office.email,
      contactType: "customer service",
      areaServed: office.country,
    })),
    address: content.footer.offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressCountry: office.country,
    })),
  }
}
