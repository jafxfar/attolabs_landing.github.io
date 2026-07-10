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

export type ProjectSolution = {
  title: string
  description: string
}

export type ProjectItem = {
  id: string
  slug: string
  title: string
  description: string
  industry: string
  industryIds: string[]
  serviceIds: string[]
  coverImage: string
  client: string
  goals: string[]
  solutions: ProjectSolution[]
  results: ProjectSolution[]
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

export type LegalSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type AboutValue = {
  number: string
  title: string
  description: string
}

export type WorkWithUsContact = {
  role: string
  name: string
  email: string
  phone: string
  photo: string
}

export type JobItem = {
  id: string
  slug: string
  title: string
  department: string
  locations: string[]
  type: string
  schedule: string
  about: string
  responsibilities: string[]
  requirements: string[]
  offer: string[]
}

export type AttolabsMessages = {
  metadata: {
    homeTitle: string
    homeDescription: string
    projectsTitle: string
    projectsDescription: string
    aboutTitle: string
    aboutDescription: string
    workWithUsTitle: string
    workWithUsDescription: string
    jobsTitle: string
    jobsDescription: string
    privacyTitle: string
    privacyDescription: string
    termsTitle: string
    termsDescription: string
    ogLocale: string
    canonicalPath: string
  }
  common: {
    backToHome: string
    backToProjects: string
    backToJobs: string
    learnMore: string
    viewProjects: string
    applyNow: string
    filterAll: string
    clearFilters: string
    openPositions: string
    goals: string
    solutions: string
    results: string
    department: string
    location: string
    jobType: string
    lastUpdated: string
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
    filterService: string
    filterIndustry: string
    empty: string
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
  aboutPage: {
    tag: string
    title: string
    lead: string
    impactTitle: string
    impactBody: string
    valuesTitle: string
    branchesTitle: string
    stats: { value: string; label: string }[]
    values: AboutValue[]
    branches: OfficeItem[]
  }
  workWithUsPage: {
    tag: string
    title: string
    subtitle: string
    contacts: WorkWithUsContact[]
  }
  jobsPage: {
    tag: string
    title: string
    intro: string
    formTitle: string
    formRole: string
    formName: string
    formEmail: string
    formPhone: string
    formSubmit: string
    formSuccess: string
    noMatch: string
    items: JobItem[]
  }
  legal: {
    privacy: {
      title: string
      updated: string
      sections: LegalSection[]
    }
    terms: {
      title: string
      updated: string
      sections: LegalSection[]
    }
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
