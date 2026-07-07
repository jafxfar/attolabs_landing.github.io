export type AttolabsLocale = "en" | "de" | "ru"

export type NavLink = {
  label: string
  href: string
}

export type ServiceItem = {
  id: string
  name: string
  industriesCount: number
  projectsCount: number
  href: string
}

export type IndustryItem = {
  id: string
  name: string
  servicesCount: number
  projectsCount: number
  href: string
}

export type ProjectItem = {
  id: string
  title: string
  description: string
  industry: string
  coverImage: string
  href: string
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  category: string
}

export type OfficeItem = {
  country: string
  address: string
  phones: string[]
  email: string
}

export type SocialLink = {
  platform: "LinkedIn" | "Instagram" | "X" | "Facebook" | "Behance"
  href: string
}

export type LegalLink = {
  label: string
  href: string
}

export type AttolabsMessages = {
  metadata: {
    homeTitle: string
    homeDescription: string
    projectsTitle: string
    projectsDescription: string
    ogLocale: string
    canonicalPath: string
  }
  nav: {
    brand: string
    whatWeDo: string
    whoWeAre: string
    workWithUs: string
    jobs: string
    cta: string
    workWithUsHref: string
    jobsHref: string
  }
  hero: {
    headline: string
    subheadline: string
    primaryCta: string
    secondaryCta: string
  }
  teamStrip: {
    label: string
  }
  approach: {
    tag: string
    title: string
    missionTitle: string
    missionBody: string
    commitmentTitle: string
    commitmentBody: string
    cta: string
  }
  services: {
    tag: string
    title: string
    subtitle: string
    items: ServiceItem[]
  }
  industries: {
    tag: string
    title: string
    items: IndustryItem[]
  }
  projects: {
    tag: string
    title: string
    viewAll: string
    learnMore: string
    viewAllHref: string
    items: ProjectItem[]
  }
  testimonials: {
    tag: string
    title: string
    subtitle: string
    items: TestimonialItem[]
  }
  tech: {
    tag: string
    title: string
    subtitle: string
    securityNote: string
  }
  about: {
    tag: string
    title: string
    subtitle: string
    description: string
    stats: { value: number; suffix: string; label: string }[]
    differentiators: { title: string; description: string }[]
  }
  contact: {
    headline: string
    subheadline: string
    emailPlaceholder: string
    namePlaceholder: string
    submitLabel: string
    successMessage: string
    privacyPrefix: string
    privacyLabel: string
    privacyHref: string
  }
  footer: {
    copyright: string
    offices: OfficeItem[]
    social: SocialLink[]
    legal: LegalLink[]
    languages: { code: AttolabsLocale; label: string }[]
  }
}
