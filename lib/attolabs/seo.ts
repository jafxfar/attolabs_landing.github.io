import type { Metadata } from "next"
import { getAttolabsContent, attolabsLocales, type AttolabsLocale } from "./content"
import { ATTOLABS_SITE_URL, ATTOLABS_SOCIAL } from "./shared"

type PageKey = "home" | "projects"

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const buildEnterpriseMetadata = (
  locale: AttolabsLocale,
  page: PageKey = "home"
): Metadata => {
  const content = getAttolabsContent(locale)
  const title =
    page === "projects" ? content.metadata.projectsTitle : content.metadata.homeTitle
  const description =
    page === "projects"
      ? content.metadata.projectsDescription
      : content.metadata.homeDescription

  const path =
    page === "projects" ? `/${locale}/enterprise/projects` : `/${locale}/enterprise`

  const languages = Object.fromEntries(
    attolabsLocales.map((l) => [
      l,
      `${getBaseUrl()}/${l}/enterprise${page === "projects" ? "/projects" : ""}`,
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
      canonical: content.metadata.canonicalPath,
      languages,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: content.metadata.canonicalPath,
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
    other: {
      "og:url": content.metadata.canonicalPath,
    },
    metadataBase: new URL(getBaseUrl()),
    ...(page === "home" ? {} : {}),
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
