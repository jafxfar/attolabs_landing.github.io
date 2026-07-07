import en from "@/messages/en.json"
import type { AttolabsMessages } from "@/lib/attolabs/types"
import { HERO_POSTER, HERO_VIDEO, NAV_LOGO, SERVICE_IMAGES } from "@/lib/attolabs/shared"

export type ShowcaseProject = {
  id: string
  tags: string[]
  subtitle: string
  title: string
  coverImage: string
  mockupImage: string
  highlights: { label: string; value: string }[]
  href: string
}

const content = en as AttolabsMessages

export const enterpriseHero = {
  headline: content.hero.headline,
  subheadline: content.hero.subheadline,
  primaryCta: { label: content.hero.primaryCta, href: "#contact" },
  secondaryCta: { label: content.hero.secondaryCta, href: "#case-studies" },
  videoSrc: HERO_VIDEO,
  image: HERO_POSTER,
  clientLogos: [] as { name: string; src: string }[],
}

export const enterpriseNav = {
  brand: content.nav.brand,
  logo: NAV_LOGO,
  links: [
    { label: content.nav.whatWeDo, href: "#services" },
    { label: content.nav.whoWeAre, href: "#about" },
    { label: content.nav.workWithUs, href: content.nav.workWithUsHref },
    { label: content.nav.jobs, href: content.nav.jobsHref },
  ],
  cta: { label: content.nav.cta, href: "#contact" },
}

export const enterpriseFeaturedProjects: ShowcaseProject[] = content.projects.items.map(
  (project) => ({
    id: project.id,
    tags: [project.industry],
    subtitle: project.description,
    title: project.title,
    coverImage: project.coverImage,
    mockupImage: project.coverImage,
    highlights: [{ label: "Industry", value: project.industry }],
    href: project.href,
  })
)

export const enterpriseIndustries = content.industries.items.map((item) => ({
  id: item.id,
  name: item.name,
  problem: `${item.servicesCount} services · ${item.projectsCount} projects`,
  solution: item.name,
  image: SERVICE_IMAGES[item.id] ?? SERVICE_IMAGES.banking,
}))

export const enterpriseCaseStudies = content.projects.items.map((project) => ({
  client: project.title,
  industry: project.industry,
  challenge: project.description,
  solution: project.description,
  result: project.description,
  metrics: [project.industry],
  href: project.href,
  image: project.coverImage,
}))

export const enterpriseDifferentiators = content.about.differentiators.map((item, i) => ({
  icon: (["award", "zap", "brain", "layers", "headphones"] as const)[i] ?? "award",
  title: item.title,
  description: item.description,
}))

export const enterpriseContactCta = {
  headline: content.contact.headline,
  subheadline: content.contact.subheadline,
  emailPlaceholder: content.contact.emailPlaceholder,
  submitLabel: content.contact.submitLabel,
  successMessage: content.contact.successMessage,
}

export const enterpriseFooter = {
  company: {
    name: content.footer.copyright,
    description: content.hero.subheadline,
    email: "contact@attolabs.eu",
    phone: content.footer.offices[0]?.phones[0] ?? "",
  },
  links: {
    solutions: content.services.items.map((s) => ({ label: s.name, href: s.href })),
    industries: content.industries.items.map((i) => ({ label: i.name, href: i.href })),
    company: [
      { label: content.nav.whatWeDo, href: "#services" },
      { label: content.nav.whoWeAre, href: "#about" },
      { label: content.nav.jobs, href: content.nav.jobsHref },
    ],
  },
  social: content.footer.social,
  legal: content.footer.legal,
}

export type { AttolabsMessages }
