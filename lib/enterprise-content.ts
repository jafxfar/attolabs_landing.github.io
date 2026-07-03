export type CtaLink = {
  label: string
  href: string
}

export type ClientLogo = {
  name: string
  src: string
}

export type SolutionItem = {
  icon: "rocket" | "cloud" | "chart" | "shield" | "refresh"
  label: string
  title: string
  description: string
  benefits: string[]
  stats: { v: string; l: string }[]
  href: string
  image: string
}

export type IndustryItem = {
  id: string
  name: string
  problem: string
  solution: string
  image: string
}

export type CaseStudy = {
  client: string
  industry: string
  challenge: string
  solution: string
  result: string
  metrics: string[]
  href: string
  image?: string
}

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

export type Differentiator = {
  icon: "award" | "zap" | "brain" | "layers" | "headphones"
  title: string
  description: string
}

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

export const enterpriseNav = {
  brand: "ATTOLABS",
  links: [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Technology", href: "#technology" },
    { label: "Why Us", href: "#why-us" },
  ],
  cta: { label: "Talk to an Expert", href: "#contact" },
}

export const enterpriseHero = {
  headline: "Enterprise Software That Powers Scalable Digital Transformation",
  subheadline:
    "Helping global organizations modernize systems, reduce costs, and accelerate growth.",
  primaryCta: { label: "Talk to an Expert", href: "#contact" } satisfies CtaLink,
  secondaryCta: { label: "View Solutions", href: "#solutions" } satisfies CtaLink,
  videoSrc:
    "/images/agentic-hero.mp4",
  image: "/images/windmill.webp",
  clientLogos: [
    { name: "Northgate Financial", src: "/images/logos/northgate.svg" },
    { name: "Meridian Health", src: "/images/logos/meridian.svg" },
    { name: "Atlas Manufacturing", src: "/images/logos/atlas.svg" },
    { name: "Summit Retail", src: "/images/logos/summit.svg" },
    { name: "Vertex Energy", src: "/images/logos/vertex.svg" },
    { name: "Pinnacle Corp", src: "/images/logos/pinnacle.svg" },
  ] satisfies ClientLogo[],
}

export const enterpriseProblems = [
  {
    title: "Legacy systems slowing innovation",
    description:
      "Outdated infrastructure creates bottlenecks, increases maintenance costs, and blocks new product launches.",
  },
  {
    title: "Siloed data and disconnected workflows",
    description:
      "Teams operate on fragmented tools, leading to duplicate work, poor visibility, and delayed decisions.",
  },
  {
    title: "Security and compliance pressure",
    description:
      "Regulatory requirements and cyber threats demand enterprise-grade governance without sacrificing speed.",
  },
  {
    title: "Scaling without predictable ROI",
    description:
      "Digital initiatives stall when architecture cannot support growth or prove measurable business outcomes.",
  },
]

export const enterpriseApproach = {
  problemImage: "/images/footer.png",
  solutionImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Org%20Arc%20-%20Upscaled-Sk90jShfu7nltLnhoQbaMJC1YaQKuU.png",
}

export const enterpriseSolution = {
  title: "A unified path from strategy to scale",
  description:
    "We partner with enterprise leaders to modernize core systems, integrate platforms, and deliver measurable outcomes — with security and scalability built in from day one.",
  outcomes: [
    "Reduce operational costs through cloud-native modernization",
    "Accelerate time-to-market with modular, API-first architecture",
    "Improve reliability with observability and automated DevOps",
    "Meet compliance requirements with enterprise security controls",
  ],
  cta: { label: "See How It Works", href: "#case-studies" } satisfies CtaLink,
}

const IMG = {
  analyst:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  coder:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  deploy:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deploy-an8fgHSLzniojkcmRyGGIFQUJF9T5J.png",
  compose:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compose-5RT5VR4f1Y3GoFmovqTKLTG4UXp3g2.png",
  researcher:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  executor:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
  define:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/define-5aafAmGBrxZpOqJ3XLHY3n3qzC2I5K.png",
  test:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-zm8guZwxJHtwWsJ7XO4B0CF7GzlNK8.png",
  orgArc:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Org%20Arc%20-%20Upscaled-Sk90jShfu7nltLnhoQbaMJC1YaQKuU.png",
} as const

export const enterpriseSolutions: SolutionItem[] = [
  {
    icon: "rocket",
    label: "APPLICATIONS",
    title: "Enterprise Application Development",
    description:
      "Custom platforms and mission-critical applications engineered for performance, maintainability, and long-term scale.",
    benefits: ["Faster delivery cycles", "Modular scalability", "Measurable ROI"],
    stats: [
      { v: "40%", l: "faster delivery" },
      { v: "10x", l: "scale" },
    ],
    href: "#contact",
    image: IMG.coder,
  },
  {
    icon: "cloud",
    label: "CLOUD",
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud migration, CI/CD pipelines, and infrastructure automation that reduce downtime and operational overhead.",
    benefits: ["99.9% uptime targets", "Cost optimization", "Automated deployments"],
    stats: [
      { v: "99.9%", l: "uptime" },
      { v: "35%", l: "cost savings" },
    ],
    href: "#contact",
    image: IMG.deploy,
  },
  {
    icon: "chart",
    label: "DATA & AI",
    title: "Data & AI Platforms",
    description:
      "Unified data lakes, analytics pipelines, and AI models that turn enterprise data into actionable intelligence.",
    benefits: ["Real-time insights", "Predictive analytics", "Data governance"],
    stats: [
      { v: "12x", l: "faster insights" },
      { v: "Real-time", l: "analytics" },
    ],
    href: "#contact",
    image: IMG.analyst,
  },
  {
    icon: "shield",
    label: "SECURITY",
    title: "Cybersecurity Solutions",
    description:
      "Zero-trust architecture, threat detection, and compliance frameworks tailored to regulated industries.",
    benefits: ["SOC 2 alignment", "Risk reduction", "Audit readiness"],
    stats: [
      { v: "SOC 2", l: "aligned" },
      { v: "Zero-trust", l: "architecture" },
    ],
    href: "#contact",
    image: IMG.compose,
  },
  {
    icon: "refresh",
    label: "INTEGRATION",
    title: "System Integration",
    description:
      "Seamless connectivity between ERP, CRM, legacy systems, and modern SaaS — without disrupting operations.",
    benefits: ["Unified workflows", "Reduced manual work", "API-first design"],
    stats: [
      { v: "API-first", l: "design" },
      { v: "Unified", l: "workflows" },
    ],
    href: "#contact",
    image: IMG.define,
  },
]

export const enterpriseStackingSolutions = enterpriseSolutions.slice(0, 4)

export const enterpriseIndustries: IndustryItem[] = [
  {
    id: "finance",
    name: "Finance",
    problem:
      "Banks and fintechs struggle with legacy core systems, real-time fraud detection, and strict regulatory reporting across fragmented data sources.",
    solution:
      "We modernize core banking platforms, implement real-time analytics, and build compliant API layers that connect legacy and cloud-native services.",
    image: IMG.researcher,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    problem:
      "Health systems face interoperability gaps, HIPAA compliance burdens, and patient data silos that slow care coordination.",
    solution:
      "We deliver FHIR-compliant integrations, secure patient portals, and AI-assisted workflows that improve outcomes while meeting HIPAA requirements.",
    image: IMG.define,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    problem:
      "Manufacturers need real-time visibility across supply chains, IoT devices, and production lines — often locked in outdated MES/ERP systems.",
    solution:
      "We build IoT data pipelines, predictive maintenance platforms, and ERP integrations that optimize throughput and reduce unplanned downtime.",
    image: IMG.executor,
  },
  {
    id: "retail",
    name: "Retail",
    problem:
      "Retailers battle omnichannel fragmentation, inventory inaccuracies, and personalization gaps that erode margins and customer loyalty.",
    solution:
      "We unify commerce platforms, implement real-time inventory systems, and deploy AI-driven personalization across web, mobile, and in-store.",
    image: IMG.test,
  },
  {
    id: "energy",
    name: "Energy",
    problem:
      "Energy companies manage aging SCADA systems, distributed asset networks, and increasing ESG reporting demands with limited digital tooling.",
    solution:
      "We modernize asset monitoring, build grid analytics platforms, and integrate sustainability reporting into unified operational dashboards.",
    image: IMG.analyst,
  },
]

export const enterpriseCaseStudies: CaseStudy[] = [
  {
    client: "Northgate Financial",
    industry: "Finance",
    challenge:
      "A regional bank needed to migrate 40+ legacy applications to the cloud without disrupting 2M daily transactions.",
    solution:
      "Phased cloud migration with containerized microservices, automated CI/CD, and a unified API gateway for legacy system coexistence.",
    result:
      "The bank achieved zero-downtime migration and reduced infrastructure costs while improving deployment frequency 10x.",
    metrics: ["Reduced costs by 35%", "10x faster deployments", "Zero downtime migration"],
    href: "#",
    image: IMG.orgArc,
  },
  {
    client: "Meridian Health",
    industry: "Healthcare",
    challenge:
      "A hospital network lacked interoperability between EHR systems, causing care delays and duplicate patient records.",
    solution:
      "FHIR-based integration hub connecting 12 facilities, with a patient portal and clinician dashboard for unified records.",
    result:
      "Care teams gained real-time patient visibility, reducing duplicate tests and improving care coordination across sites.",
    metrics: ["Improved system performance by 2x", "40% fewer duplicate records", "HIPAA compliant"],
    href: "#",
  },
  {
    client: "Atlas Manufacturing",
    industry: "Manufacturing",
    challenge:
      "A global manufacturer faced unplanned downtime costing $2M annually due to disconnected IoT sensors and legacy MES.",
    solution:
      "IoT data platform with predictive maintenance models, integrated with existing ERP and real-time alerting dashboards.",
    result:
      "Predictive maintenance reduced unplanned downtime and gave operations teams proactive visibility across 8 plants.",
    metrics: ["60% less unplanned downtime", "25% maintenance cost savings", "8 plants connected"],
    href: "#",
    image: IMG.executor,
  },
]

export const enterpriseProjectsCta = {
  label: "View All Projects",
  href: "/enterprise/projects",
} satisfies CtaLink

export const enterpriseFeaturedProjects: ShowcaseProject[] = [
  {
    id: "northgate-financial",
    tags: ["Cloud Migration", "FinTech"],
    subtitle: "Zero-downtime cloud migration for a regional bank",
    title: "Northgate Financial",
    coverImage: "/images/windmill.webp",
    mockupImage: "/images/windmill.webp",
    highlights: [
      { label: "Cost reduction", value: "35%" },
      { label: "Deployments", value: "10x faster" },
    ],
    href: "#",
  },
  {
    id: "meridian-health",
    tags: ["Healthcare", "Integration"],
    subtitle: "FHIR integration hub across 12 hospital facilities",
    title: "Meridian Health",
    coverImage: IMG.deploy,
    mockupImage: IMG.deploy,
    highlights: [
      { label: "Performance", value: "2x improvement" },
      { label: "Duplicate records", value: "40% fewer" },
    ],
    href: "#",
  },
  {
    id: "atlas-manufacturing",
    tags: ["IoT", "Manufacturing"],
    subtitle: "Predictive maintenance platform across 8 plants",
    title: "Atlas Manufacturing",
    coverImage: IMG.analyst,
    mockupImage: IMG.analyst,
    highlights: [
      { label: "Downtime", value: "60% less" },
      { label: "Plants connected", value: "8" },
    ],
    href: "#",
  },
]

export const enterpriseTechStack = {
  cloud: ["AWS", "Azure", "GCP"],
  backend: ["Java", ".NET", "Node.js", "Python", "Go"],
  aiMl: ["TensorFlow", "PyTorch", "OpenAI", "Databricks", "Snowflake"],
  security: ["SOC 2", "ISO 27001", "Zero Trust", "OAuth 2.0", "Kubernetes"],
  securityNote:
    "Every solution is architected with security-first principles — encryption at rest and in transit, role-based access control, automated compliance scanning, and horizontal scalability through container orchestration.",
  architectureImage: "/images/arc.png",
}

export const enterpriseDifferentiators: Differentiator[] = [
  {
    icon: "award",
    title: "Proven enterprise experience",
    description: "15+ years delivering mission-critical systems for Fortune 500 and global organizations.",
  },
  {
    icon: "zap",
    title: "Scalability & performance-first",
    description: "Architecture designed for high throughput, low latency, and elastic growth from day one.",
  },
  {
    icon: "brain",
    title: "AI-driven innovation",
    description: "Practical AI and ML integration that delivers measurable business outcomes, not hype.",
  },
  {
    icon: "layers",
    title: "End-to-end delivery",
    description: "From consulting and strategy through development, deployment, and ongoing optimization.",
  },
  {
    icon: "headphones",
    title: "Dedicated support teams",
    description: "24/7 enterprise support with SLAs, dedicated account managers, and proactive monitoring.",
  },
]

export const enterpriseTestimonials: Testimonial[] = [
  {
    name: "Jonathan Smith",
    role: "CTO",
    company: "Northgate Financial",
    quote:
      "ATTOLABS transformed our legacy infrastructure without a single hour of downtime. Their team understood our compliance requirements from day one.",
  },
  {
    name: "Sarah Chen",
    role: "CIO",
    company: "Meridian Health",
    quote:
      "The integration hub they built gave our clinicians unified patient visibility across 12 facilities. Care coordination improved dramatically within the first quarter.",
  },
  {
    name: "Marcus Webb",
    role: "VP Engineering",
    company: "Atlas Manufacturing",
    quote:
      "Their IoT platform cut our unplanned downtime by 60%. The predictive maintenance models paid for themselves within the first quarter of deployment.",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of IT",
    company: "Summit Retail",
    quote:
      "We unified our omnichannel inventory in under six months. ATTOLABS delivered a scalable architecture that handles peak holiday traffic without breaking a sweat.",
  },
  {
    name: "David Park",
    role: "Chief Digital Officer",
    company: "Vertex Energy",
    quote:
      "Modernizing our SCADA systems felt impossible until ATTOLABS mapped a phased migration path. We now have real-time grid analytics across all regions.",
  },
  {
    name: "Rachel Kim",
    role: "Head of Platform",
    company: "Pinnacle Corp",
    quote:
      "The cloud migration was seamless — zero downtime across 40 applications. Their DevOps practices transformed how our teams ship software.",
  },
  {
    name: "James Okafor",
    role: "CISO",
    company: "Northgate Financial",
    quote:
      "Security was non-negotiable for our financial platform. ATTOLABS built zero-trust architecture that passed SOC 2 audit on the first attempt.",
  },
  {
    name: "Lisa Hartmann",
    role: "COO",
    company: "Meridian Health",
    quote:
      "Patient data interoperability was our biggest bottleneck. Now clinicians access unified records in seconds, not hours. Game-changing for care delivery.",
  },
  {
    name: "Tom Bradley",
    role: "Plant Manager",
    company: "Atlas Manufacturing",
    quote:
      "Eight plants connected to one dashboard. Operations finally has the visibility we needed to optimize throughput and reduce maintenance costs.",
  },
]

export const enterpriseFooter = {
  company: {
    name: "ATTOLABS",
    description:
      "Enterprise software partner helping global organizations modernize, integrate, and scale with confidence.",
    email: "enterprise@attolabs.ai",
    phone: "+1 (800) 555-0199",
  },
  links: {
    solutions: [
      { label: "Application Development", href: "#solutions" },
      { label: "Cloud & DevOps", href: "#solutions" },
      { label: "Data & AI", href: "#solutions" },
      { label: "Cybersecurity", href: "#solutions" },
    ],
    industries: [
      { label: "Finance", href: "#industries" },
      { label: "Healthcare", href: "#industries" },
      { label: "Manufacturing", href: "#industries" },
      { label: "Retail", href: "#industries" },
    ],
    company: [
      { label: "Projects", href: "/enterprise/projects" },
      { label: "Technology", href: "#technology" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}
