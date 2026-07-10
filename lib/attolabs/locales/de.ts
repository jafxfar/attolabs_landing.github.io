import type { AttolabsMessages } from "../types"
import { enMessages, enProjects, enJobs } from "./en"

const deProjects = enProjects.map((p) => {
  const titles: Record<string, string> = {
    aat: "Mobile APP FÜR KINDER MIT AUTISMUS (AAT)",
    hcs: "Intelligentes Heizungssteuerungssystem",
    sls: "Straßenbeleuchtungs-Steuerungssystem",
    "mar-taxi": "Online-Taxidienst für MAR Taxi",
    edrp: "Portal zur Berichterstattung über Umweltdaten (EDP)",
    ini: "Webanwendung für INAIA FinTech",
    "usb-flasher": "Sicherer USB-Flasher für STM32",
    smartpay: "Micro-Service SME Proposition (SmartPay)",
  }
  const industries: Record<string, string> = {
    Education: "Bildung",
    "Energy & Utilities": "Energie & Versorgung",
    Logistic: "Logistik",
    Government: "Regierung",
    Banking: "Bankwesen",
    Enterprise: "Unternehmen",
  }
  return {
    ...p,
    title: titles[p.id] ?? p.title,
    industry: industries[p.industry] ?? p.industry,
  }
})

const deJobs = enJobs.map((j) => {
  const titles: Record<string, string> = {
    "hr-manager": "HR Manager",
    "it-operations-manager": "IT Operations Manager",
    "it-operations-engineer": "IT-Operations Engineer",
    "requirements-engineer": "Requirements Engineer",
    "scrum-master": "Scrum Master",
    "senior-account-manager": "Senior Account Manager",
    "senior-cpp-engineer": "Senior C++ Engineer",
    "senior-sales-manager": "Senior Sales Manager",
    "senior-software-engineer": "Senior Software Engineer",
    "technical-business-analyst": "Technical Business Analyst",
  }
  return { ...j, title: titles[j.id] ?? j.title }
})

export const deMessages: AttolabsMessages = {
  ...enMessages,
  metadata: {
    ...enMessages.metadata,
    homeDescription:
      "Engineers for New Era – Ihr Partner für innovative Ingenieurlösungen. Wir realisieren Projekte mit modernster Technik und Erfahrung.",
    projectsTitle: "Forschungsprojekte - AttoLabs",
    projectsDescription:
      "AttoLabs Softwareentwicklungsprojekte Portfolio. Maßgeschneiderte Web- und Mobile-Apps für Ihr Geschäftswachstum und Innovation.",
    aboutTitle: "Über uns - AttoLabs",
    aboutDescription:
      "AttoLabs ist Ihr vertrauenswürdiger Technologiepartner. Wir entwickeln innovative Softwarelösungen für die digitale Transformation.",
    workWithUsTitle: "Arbeite mit uns - AttoLabs",
    workWithUsDescription:
      "Entdecken Sie Partnerschaftsmöglichkeiten mit AttoLabs. Wir arbeiten mit Unternehmen zusammen für innovative Softwarelösungen.",
    jobsTitle: "Jobs - AttoLabs",
    jobsDescription:
      "Entdecken Sie aktuelle Stellenangebote und werden Sie Teil unseres Teams.",
    privacyTitle: "Datenschutzerklärung - AttoLabs",
    privacyDescription:
      "Datenschutzrichtlinie AttoLabs: Schutz personenbezogener Daten, DSGVO-Konformität, Cookie-Nutzung und Nutzerrechte.",
    termsTitle: "Nutzungsbedingungen - AttoLabs",
    termsDescription:
      "Nutzungsbedingungen AttoLabs: Regeln für Website-Nutzung, Gewährleistung, Haftung und Datenschutz.",
    ogLocale: "de_DE",
    canonicalPath: "/de/enterprise",
  },
  common: {
    backToHome: "Zurück zur Startseite",
    backToProjects: "Zurück zu Projekten",
    backToJobs: "Zurück zu Jobs",
    learnMore: "Mehr erfahren",
    viewProjects: "Projekte anzeigen",
    applyNow: "Jetzt bewerben",
    filterAll: "Alle",
    clearFilters: "Filter zurücksetzen",
    openPositions: "Offene Stellen",
    goals: "Ziele",
    solutions: "Lösungen",
    results: "Projektergebnisse",
    department: "Abteilung",
    location: "Standort",
    jobType: "Anstellungsart",
    lastUpdated: "Zuletzt aktualisiert",
  },
  nav: {
    brand: "ATTOLABS",
    whatWeDo: "Unsere Projekte",
    whoWeAre: "Wer wir sind",
    workWithUs: "Partnerschaft",
    jobs: "Jobs",
    cta: "Teilen Sie Ihre Vision",
    workWithUsHref: "/work-with-us",
    jobsHref: "/jobs",
  },
  hero: {
    headline: "Engineers for AI Era",
    subheadline:
      "AttoLabs ist ein führendes Unternehmen in der Welt der Innovation und Technologie, das den globalen Wandel vorantreibt. Unser Fokus auf den Komfort unserer Mitarbeiter und eine erstklassige Produktionseffizienz bringt uns an die Spitze der High-Tech-Industrie.",
    primaryCta: "Teilen Sie Ihre Vision",
    secondaryCta: "Projekte anzeigen",
  },
  teamStrip: { label: "Lernen Sie das Team hinter AttoLabs kennen" },
  approach: {
    tag: "MISSION",
    title: "Innovation mit Purpose",
    missionTitle: "Globale Wirkung durch Technologie",
    missionBody:
      "AttoLabs hat sich zum Ziel gesetzt, durch die Entwicklung von Lösungen, die zu einer nachhaltigen Entwicklung beitragen, eine globale Wirkung zu erzielen.",
    commitmentTitle: "Unser Engagement",
    commitmentBody:
      "Unser Team setzt sich für höchste Qualität und innovative Lösungen ein, um sicherzustellen, dass Ihr Projekt den höchsten Standards entspricht und die Erwartungen übertrifft.",
    cta: "Projekte anzeigen",
  },
  services: {
    tag: "DIENSTE",
    title: "Was wir tun",
    subtitle:
      "Full-Cycle Softwareentwicklung für Unternehmen in Bankwesen, Energie, Regierung und mehr.",
    items: [
      { id: "digital-transformation", name: "Digitale Transformation", industriesCount: 1, projectsCount: 1, href: "/projects?service=digital-transformation" },
      { id: "custom-software", name: "Individuelle Softwareentwicklung", industriesCount: 1, projectsCount: 2, href: "/projects?service=custom-software" },
      { id: "mobile-development", name: "Mobile Entwicklung", industriesCount: 1, projectsCount: 1, href: "/projects?service=mobile-development" },
      { id: "mvp-development", name: "MVP-Entwicklung", industriesCount: 1, projectsCount: 1, href: "/projects?service=mvp-development" },
      { id: "web-development", name: "Web Entwicklung", industriesCount: 2, projectsCount: 2, href: "/projects?service=web-development" },
      { id: "cloud-development", name: "Cloud Entwicklung", industriesCount: 2, projectsCount: 1, href: "/projects?service=cloud-development" },
    ],
  },
  industries: {
    tag: "BRANCHEN",
    title: "Branchen, die wir bedienen",
    items: [
      { id: "banking", name: "Bankwesen", servicesCount: 2, projectsCount: 2, href: "/projects?industry=banking" },
      { id: "education", name: "Bildung", servicesCount: 1, projectsCount: 1, href: "/projects?industry=education" },
      { id: "energy-utilities", name: "Energie & Versorgung", servicesCount: 1, projectsCount: 2, href: "/projects?industry=energy-utilities" },
      { id: "enterprise", name: "Unternehmen", servicesCount: 1, projectsCount: 1, href: "/projects?industry=enterprise" },
      { id: "government", name: "Regierung", servicesCount: 1, projectsCount: 1, href: "/projects?industry=government" },
      { id: "life-sciences", name: "Life Sciences", servicesCount: 1, projectsCount: 1, href: "/projects?industry=life-sciences" },
      { id: "logistic", name: "Logistik", servicesCount: 1, projectsCount: 1, href: "/projects?industry=logistic" },
    ],
  },
  projects: {
    ...enMessages.projects,
    tag: "PROJEKTE",
    title: "Unsere Projekte",
    viewAll: "Alle anzeigen",
    learnMore: "Mehr erfahren",
    viewAllHref: "/projects",
    filterService: "Dienst",
    filterIndustry: "Branche",
    empty: "Keine Projekte entsprechen den ausgewählten Filtern.",
    items: deProjects,
  },
  aboutPage: {
    ...enMessages.aboutPage,
    tag: "ÜBER UNS",
    title: "Engineers for new era embodying real mastery",
    lead:
      "Bei AttoLabs definieren wir Exzellenz in der Softwareentwicklung neu. Unser Engagement für zukunftsweisende Lösungen und das Wohlbefinden der Mitarbeitenden zeichnet uns aus.",
    impactTitle: "Wirkung über Branchen hinweg",
    impactBody:
      "Bei AttoLabs transformieren wir E-Government und Logistik durch Projekte, die Informationszugriff optimieren, Engagement stärken und Abläufe vereinfachen.",
    valuesTitle: "Unsere Werte",
    branchesTitle: "Unsere Standorte",
    stats: [
      { value: "50", label: "Mitarbeitende" },
      { value: "40+", label: "Projekte" },
      { value: "6", label: "Standorte" },
    ],
  },
  workWithUsPage: {
    tag: "PARTNERSCHAFT",
    title: "Arbeiten Sie mit uns, um neue Chancen zu erschließen und Wachstum zu fördern",
    subtitle: "Kontaktieren Sie unsere Partnerschaftsverantwortlichen.",
    contacts: enMessages.workWithUsPage.contacts,
  },
  jobsPage: {
    ...enMessages.jobsPage,
    tag: "KARRIERE",
    title: "AttoLabs: wo Innovation, Community und Impact zusammenkommen",
    intro:
      "Bei AttoLabs werden Sie Teil eines Teams, das Kreativität, Vielfalt und Wachstum schätzt — mit Projekten, die Branchen und Communities weltweit beeinflussen.",
    formTitle: "Kontaktieren Sie uns!",
    formRole: "Welche Rolle suchen Sie?",
    formName: "Name",
    formEmail: "E-Mail",
    formPhone: "Telefonnummer",
    formSubmit: "Absenden",
    formSuccess: "Vielen Dank! Ihre Nachricht wurde empfangen!",
    noMatch: "Keine Stellen entsprechen den ausgewählten Filtern.",
    items: deJobs,
  },
  legal: {
    privacy: {
      title: "Datenschutzerklärung",
      updated: "15. Dezember 2025",
      sections: enMessages.legal.privacy.sections,
    },
    terms: {
      title: "Nutzungsbedingungen",
      updated: "15. Dezember 2025",
      sections: enMessages.legal.terms.sections,
    },
  },
  contact: {
    ...enMessages.contact,
    headline: "Teilen Sie Ihre Vision",
    subheadline: "Wie können wir Sie erreichen? Erzählen Sie uns von Ihrem Projekt.",
    emailPlaceholder: "Wie können wir Sie erreichen?",
    namePlaceholder: "Wie darf ich Sie nennen?",
    submitLabel: "Absenden",
    successMessage: "Vielen Dank! Ihre Nachricht wurde empfangen!",
    privacyPrefix: 'Mit dem Klick auf „Absenden“ stimmen Sie unserer',
    privacyLabel: "Datenschutzerklärung",
    privacyHref: "/privacy-policy",
  },
  footer: {
    ...enMessages.footer,
    legal: [
      { label: "Datenschutzerklärung", href: "/privacy-policy" },
      { label: "Nutzungsbedingungen", href: "/terms-of-use" },
    ],
  },
}
