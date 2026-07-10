import type { AttolabsMessages, JobItem, ProjectItem } from "../types"
import { ATTOLABS_IMAGES, PROJECT_COVER_IMAGES } from "../shared"

const IMG = {
  muhsin: ATTOLABS_IMAGES.muhsin,
  gufron: ATTOLABS_IMAGES.gufron,
} as const

export const enProjects: ProjectItem[] = [
  {
    id: "aat",
    slug: "aat-app",
    title: "Mobile APP FOR KIDS WITH AUTISM (AAT)",
    description:
      "A mobile learning app for children with autism spectrum disorder that develops communication skills, with support for individualising courses and creating personalised assignments.",
    industry: "Education",
    industryIds: ["education"],
    serviceIds: ["mobile-development"],
    coverImage: PROJECT_COVER_IMAGES.aat,
    client: "Tajikistan",
    goals: [
      "Providing access to personalised learning materials that meet the needs of each child with autism.",
      "Providing a user-friendly and intuitive user interface for children and teachers.",
      "Enabling the creation of personalised courses of study and monitoring each child's progress.",
      "Promoting communication, socialisation and cognitive skills for children with autism.",
      "Increasing independence and confidence in children with autism through effective teaching.",
    ],
    solutions: [
      {
        title: "Personalised learning paths",
        description: "Courses and assignments tailored to each child's developmental needs.",
      },
      {
        title: "Progress monitoring",
        description: "Teachers can track progress and adjust materials in real time.",
      },
      {
        title: "Accessible mobile UX",
        description: "Intuitive interface designed for children and educators.",
      },
    ],
    results: [
      {
        title: "Positive user feedback",
        description:
          "Successful launch of a mobile app providing a personalised approach and a safe learning environment.",
      },
    ],
  },
  {
    id: "hcs",
    slug: "smart-heating-control-system",
    title: "Smart Heating Control System",
    description:
      "The heating control system developed from October 2021 to May 2022 uses ESP32 and FreeRTOS modules in C and Python to intelligently monitor and control residential heating.",
    industry: "Energy & Utilities",
    industryIds: ["energy-utilities"],
    serviceIds: ["custom-software"],
    coverImage: PROJECT_COVER_IMAGES.hcs,
    client: "Germany",
    goals: [
      "Efficiently control and maintain optimal indoor temperatures.",
      "Consider external factors, such as street temperature, for effective heating system management.",
      "Provide real-time telemetry to monitor heating system status.",
      "Identify and address emergency conditions promptly.",
      "Enable remote system management and configuration for user convenience.",
      "Achieve energy savings in residential heating.",
    ],
    solutions: [
      { title: "ESP32 hardware integration", description: "Efficient and reliable control of heating systems." },
      { title: "FreeRTOS operating system", description: "Robust real-time task execution." },
      { title: "Temperature consideration", description: "Adapting control based on indoor and outdoor temperatures." },
      { title: "Telemetry collection", description: "MQTT, TCP/IP, HTTP for real-time data transmission." },
      { title: "Emergency condition detection", description: "Algorithms to identify and respond to emergencies." },
      { title: "Remote management", description: "Centralized control and configuration of the heating system." },
    ],
    results: [
      { title: "Optimized heating efficiency", description: "Efficient control based on real-time temperature considerations." },
      { title: "Real-time telemetry monitoring", description: "Continuous insights into heating system performance." },
      { title: "Energy savings", description: "Up to 30% energy savings in test mode on 15 houses." },
      { title: "Remote configuration success", description: "Efficient adjustments through centralized remote management." },
    ],
  },
  {
    id: "sls",
    slug: "street-lighting-control-system",
    title: "Street lighting control system",
    description:
      "The streetlight control system, built between February and October 2020, uses ESP32 and FreeRTOS modules. It autonomously controls streetlights according to sunset/sunrise and collects telemetry for real-time monitoring.",
    industry: "Energy & Utilities",
    industryIds: ["energy-utilities"],
    serviceIds: ["custom-software"],
    coverImage: PROJECT_COVER_IMAGES.sls,
    client: "Germany",
    goals: [
      "Enhance energy efficiency in street lighting.",
      "Provide automated control based on sunset/sunrise times.",
      "Establish a robust telemetry system for continuous monitoring.",
      "Enable remote configuration through a centralized server.",
      "Ensure reliable and secure communication protocols.",
    ],
    solutions: [
      { title: "ESP32 hardware integration", description: "Efficient and reliable streetlight control." },
      { title: "FreeRTOS operating system", description: "Real-time scheduling and task execution." },
      { title: "Sunset/sunrise time calculation", description: "Location-based algorithms for automated control." },
      { title: "Telemetry collection", description: "MQTT, TCP/IP, HTTP for real-time data collection." },
      { title: "Remote configuration", description: "Centralized server control for remote adjustments." },
      { title: "Energy-efficient protocols", description: "IEEE 802.11b Wi-Fi and GSM for communication." },
    ],
    results: [
      { title: "Optimized energy consumption", description: "Significant energy savings through precise scheduling." },
      { title: "Accurate sunset/sunrise control", description: "Streetlights adjusted based on natural light conditions." },
      { title: "Real-time telemetry monitoring", description: "Continuous insights into system performance." },
      { title: "Remote configuration success", description: "Efficient adjustments through the centralized server." },
    ],
  },
  {
    id: "mar-taxi",
    slug: "online-taxi-service-for-mar-taxi",
    title: "Online Taxi Service for MAR Taxi",
    description:
      "Web-based taxi booking platform to improve customer experience through a user-friendly online booking tool with accessibility for different passenger needs.",
    industry: "Logistic",
    industryIds: ["logistic"],
    serviceIds: ["web-development"],
    coverImage: PROJECT_COVER_IMAGES["mar-taxi"],
    client: "MAR Taxi GmbH, Germany",
    goals: [
      "Utilising a CMS for rapid development and content management.",
      "PHP development using MySQL to ensure reliability and performance.",
      "Optimising for mobile devices to improve user experience.",
      "Ensuring security, functionality and compatibility with different browsers.",
      "Testing and optimisation to improve performance and search engine visibility.",
    ],
    solutions: [
      { title: "Online booking platform", description: "Accessible web booking for diverse passenger needs." },
      { title: "Mobile-optimised UX", description: "Responsive experience across devices." },
      { title: "CMS-driven content", description: "Fast iteration and content updates for operations." },
    ],
    results: [
      {
        title: "Successful launch",
        description:
          "Improved accessibility and convenience for customers, strengthening MAR Taxi's position in German logistics.",
      },
    ],
  },
  {
    id: "edrp",
    slug: "environmental-data-reporting-portal-edp",
    title: "Environmental Data Reporting Portal (EDP)",
    description:
      "Developed for the EU Environment Agency to simplify reporting by facility operators to environmental regulations, providing several reporting modules.",
    industry: "Government",
    industryIds: ["government", "life-sciences"],
    serviceIds: ["cloud-development"],
    coverImage: PROJECT_COVER_IMAGES.edrp,
    client: "EU Environment Agency",
    goals: [
      "Simplify the reporting process for facility operators.",
      "Ensure compliance with environmental regulations and standards.",
      "Ensure data integrity and reliability.",
      "Improve the efficiency of the reporting process.",
      "Improve accessibility and usability of data.",
      "Ensure the security of data storage and processing.",
    ],
    solutions: [
      { title: "Multi-module reporting", description: "Dedicated modules for facility environmental reporting." },
      { title: "Compliance workflows", description: "Structured flows aligned with EU environmental standards." },
      { title: "Secure cloud platform", description: "Protected storage and processing of sensitive environmental data." },
    ],
    results: [
      {
        title: "Successful deployment",
        description:
          "Web-based application that simplified reporting while ensuring compliance and data integrity.",
      },
    ],
  },
  {
    id: "ini",
    slug: "web-app-for-inaia-fintech",
    title: "Web-app for INAIA FinTech",
    description:
      "Includes the development of two elements: a comprehensive goal calculator and an investment platform for Islamic-compliant savings and investment products across Europe.",
    industry: "Banking",
    industryIds: ["banking"],
    serviceIds: ["web-development"],
    coverImage: PROJECT_COVER_IMAGES.ini,
    client: "INAIA GmbH, Germany",
    goals: [
      "Developing a comprehensive goal calculator for effective financial planning.",
      "Create a platform for investing in Islamic-compliant savings and investment products.",
      "Providing scalability, security and performance of the web application.",
      "Integrating external APIs for interactive data visualisation and compatibility with financial instruments.",
      "Expanding INAIA's market presence in Islamic finance in Europe.",
    ],
    solutions: [
      { title: "ROI Calculator", description: "Help customers predict future investment portfolios." },
      { title: "Investment portfolio", description: "Analyze financial assets to earn profit while preserving capital." },
      { title: "Funds charts", description: "Display investment index funds, products and savings plans." },
      { title: "Funds performance", description: "Propose fund types based on performance tables." },
      { title: "Assets & holdings", description: "Detailed information on assets within investment funds." },
      { title: "Fund comparison tool", description: "Compare funds by risk, cost and investment criteria." },
      { title: "Interactive map", description: "Explore funds by geographical distribution." },
      { title: "Markets data API integration", description: "Real-time market data for up-to-date insights." },
      { title: "Data visualization and reporting", description: "Visual reports to help users understand investments." },
    ],
    results: [
      {
        title: "Market presence expanded",
        description:
          "Successful launch strengthened INAIA's position as a leader in Islamic finance across Europe.",
      },
      {
        title: "Minimizing investment risk",
        description: "Software predicts risk levels and proposes portfolios to maximize ROI.",
      },
      {
        title: "Dynamic public investment sources",
        description: "Daily updates from certified public investment sources.",
      },
      {
        title: "Convenient portfolio tracking",
        description: "Friendly UI to monitor client portfolios 24/7.",
      },
    ],
  },
  {
    id: "usb-flasher",
    slug: "secure-usb-flasher-for-stm32",
    title: "Secure USB Flasher for STM32",
    description:
      "A module for reflashing a device via USB with encryption and authentication, developed for STM32. Programmed in C using FreeRTOS.",
    industry: "Enterprise",
    industryIds: ["enterprise"],
    serviceIds: ["digital-transformation"],
    coverImage: PROJECT_COVER_IMAGES["usb-flasher"],
    client: "Germany",
    goals: [
      "Develop a secure method for device firmware updates.",
      "Implement USB-based reflashing for user convenience.",
      "Ensure the confidentiality of transmitted firmware through AES encryption.",
      "Establish user authentication using RSA keys.",
      "Enhance overall device security during the reprogramming process.",
    ],
    solutions: [
      { title: "STM32 platform integration", description: "Module developed for compatibility and efficiency." },
      { title: "FreeRTOS operating system", description: "Real-time task execution during reprogramming." },
      { title: "USB reflashing", description: "Firmware updates through a user-friendly USB interface." },
      { title: "AES encryption", description: "Encrypted firmware transmission for confidentiality." },
      { title: "RSA key authentication", description: "Prior user authentication for secure device access." },
      { title: "DMA for efficient data transfer", description: "Streamlined data transfer during reprogramming." },
    ],
    results: [
      { title: "Secure firmware updates", description: "Secure method for updating device firmware through USB." },
      { title: "AES-encrypted transmission", description: "Confidentiality of firmware updates ensured." },
      { title: "RSA key authentication success", description: "Secure authentication process established." },
      { title: "Enhanced device security", description: "Improved security during the reprogramming process." },
    ],
  },
  {
    id: "smartpay",
    slug: "micro-service-sme-proposition-smartpay",
    title: "Micro-service SME Proposition (SmartPay)",
    description:
      "Micro-service platform enabling SME payment propositions with scalable architecture for banking product delivery.",
    industry: "Banking",
    industryIds: ["banking"],
    serviceIds: ["mvp-development"],
    coverImage: PROJECT_COVER_IMAGES.smartpay,
    client: "Europe",
    goals: [
      "Deliver an MVP micro-service for SME payment propositions.",
      "Ensure scalable architecture for banking product delivery.",
      "Integrate securely with existing banking systems.",
      "Enable rapid iteration based on business feedback.",
    ],
    solutions: [
      { title: "Micro-service architecture", description: "Modular services for SME payment propositions." },
      { title: "Banking integrations", description: "Secure connections to core banking workflows." },
      { title: "MVP delivery", description: "Fast path from concept to production-ready proposition." },
    ],
    results: [
      {
        title: "SME proposition launched",
        description: "Platform ready to support SmartPay SME payment offerings at scale.",
      },
    ],
  },
]

const jobTemplate = (
  partial: Omit<JobItem, "about" | "responsibilities" | "requirements" | "offer"> &
    Partial<Pick<JobItem, "about" | "responsibilities" | "requirements" | "offer">>
): JobItem => ({
  about:
    partial.about ??
    "AttoLabs is an international full-cycle software development company specializing in custom digital solutions for clients across Europe. Combining technological expertise with deep business insights, we are growing and looking for talented professionals to join our team.",
  responsibilities: partial.responsibilities ?? [
    "Collaborate with cross-functional teams on international projects",
    "Own outcomes end-to-end and communicate progress clearly",
    "Contribute to process improvements and high engineering standards",
    "Work closely with stakeholders across locations",
  ],
  requirements: partial.requirements ?? [
    "Relevant professional experience for the role",
    "Strong communication skills in English",
    "Ability to work in a distributed international team",
    "Ownership mindset and attention to quality",
  ],
  offer: partial.offer ?? [
    "Competitive compensation",
    "Flexible schedule and remote-friendly options",
    "International projects and growth opportunities",
    "Support for professional development: conferences, certifications, training",
  ],
  ...partial,
})

export const enJobs: JobItem[] = [
  jobTemplate({
    id: "hr-manager",
    slug: "hr-manager",
    title: "HR Manager",
    department: "People Operations",
    locations: ["Khujand"],
    type: "Permanent Employment",
    schedule: "Full-time",
    about:
      "We are looking for an HR Manager to strengthen People Operations across our international offices, supporting hiring, employee experience, and organizational development.",
    responsibilities: [
      "Lead end-to-end recruitment for key roles",
      "Own onboarding and employee lifecycle processes",
      "Partner with managers on performance and engagement",
      "Maintain HR policies aligned with local regulations",
    ],
    requirements: [
      "2+ years in HR or People Operations",
      "Experience with full-cycle recruiting",
      "Strong interpersonal and organizational skills",
      "English proficiency; Russian is an advantage",
    ],
  }),
  jobTemplate({
    id: "it-operations-manager",
    slug: "it-operations-manager",
    title: "IT Operations Manager",
    department: "IT - Operations",
    locations: ["Tashkent", "Khujand", "Dushanbe"],
    type: "Permanent Employment",
    schedule: "Full-time",
  }),
  jobTemplate({
    id: "it-operations-engineer",
    slug: "it-operations-engineer",
    title: "IT-Operations Engineer",
    department: "IT - Operations",
    locations: ["Khujand", "Tashkent", "Dushanbe"],
    type: "Permanent Employment",
    schedule: "Full-time",
  }),
  jobTemplate({
    id: "requirements-engineer",
    slug: "requirements-engineer",
    title: "Requirements Engineer",
    department: "Engineering",
    locations: ["Tashkent", "Khujand", "Dushanbe", "Istanbul", "Namangan", "Samarqand", "Urgenj"],
    type: "Permanent Employment",
    schedule: "Full-time",
    about:
      "We are looking for an experienced Requirements Engineer / Business Analyst to initiate business-process improvements and architectural decisions on complex software projects.",
    responsibilities: [
      "Elicit, analyze and document business and technical requirements",
      "Facilitate workshops with stakeholders and engineering teams",
      "Initiate improvements to business processes and architecture",
      "Maintain clear specifications throughout delivery",
    ],
    requirements: [
      "2+ years as Requirements Engineer or Business Analyst",
      "Strong analytical and documentation skills",
      "Experience with Agile delivery",
      "English proficiency for international stakeholders",
    ],
  }),
  jobTemplate({
    id: "scrum-master",
    slug: "scrum-master",
    title: "Scrum Master",
    department: "Engineering",
    locations: ["Tashkent", "Khujand", "Dushanbe"],
    type: "Permanent Employment",
    schedule: "Full-time",
  }),
  jobTemplate({
    id: "senior-account-manager",
    slug: "senior-account-manager",
    title: "Senior Account Manager",
    department: "Management",
    locations: ["Tashkent", "Remote", "Khujand", "Dushanbe"],
    type: "Permanent Employment",
    schedule: "Full-time",
  }),
  jobTemplate({
    id: "senior-cpp-engineer",
    slug: "senior-cpp-engineer",
    title: "Senior C++ Engineer",
    department: "Engineering",
    locations: ["Tashkent", "Khujand", "Dushanbe"],
    type: "Permanent Employment",
    schedule: "Full-time",
    about:
      "We are looking for an experienced Senior C++ Engineer to work on complex and large-scale projects requiring high performance and reliability.",
    responsibilities: [
      "Design and implement high-performance C++ components",
      "Collaborate with embedded and systems teams",
      "Own code quality, reviews and technical decisions",
      "Contribute to architecture and performance optimization",
    ],
    requirements: [
      "5+ years of professional C++ experience",
      "Strong understanding of systems programming and concurrency",
      "Experience with Linux and modern C++ standards",
      "English for documentation and team communication",
    ],
  }),
  jobTemplate({
    id: "senior-sales-manager",
    slug: "senior-sales-manager",
    title: "Senior Sales Manager",
    department: "Management",
    locations: ["Tashkent", "Khujand", "Dushanbe"],
    type: "Permanent Employment",
    schedule: "Full or part-time",
    about:
      "AttoLabs is an international full-cycle software development company specializing in custom digital solutions for clients across Europe. Combining technological expertise (Java, JavaScript, TypeScript, Kotlin, Rust, .NET, Blockchain, etc.) with deep business insights, we are rapidly growing and looking for a Senior Sales Manager to scale our sales and break into new markets.",
    responsibilities: [
      "Proactively identify and acquire new clients in IT outsourcing and custom software development",
      "Develop partnerships with international companies, startups, and IT departments",
      "Contribute to the preparation of commercial proposals, tenders, and presentations",
      "Manage full-cycle deals: from initial contact to contract signing",
      "Gather and analyze client requirements together with the technical team",
      "Maintain CRM data and sales reports; achieve sales KPIs",
      "Collaborate closely with Marketing, Recruiting, and the CTO",
    ],
    requirements: [
      "5+ years of B2B sales experience in IT or IT consulting",
      "Understanding of software development processes and methodologies (Agile, Scrum)",
      "Proven track record in European or other international markets",
      "Excellent business communication, presentation, and negotiation skills (including in English)",
      "Familiarity with industry platforms (Sortlist, Clutch, Upwork, LinkedIn Sales Navigator, etc.) is a plus",
      "Fluency in English; additional languages are an advantage",
    ],
    offer: [
      "Competitive base salary plus performance-based bonuses",
      "Flexible schedule and opportunity to work remotely from anywhere",
      "Participation in international projects and business trips",
      "Support for professional development: conferences, certifications, training",
      "Direct impact on the company's sales strategy and growth",
    ],
  }),
  jobTemplate({
    id: "senior-software-engineer",
    slug: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    locations: ["Tashkent", "Khujand", "Dushanbe", "Namangan", "Samarqand"],
    type: "Permanent Employment",
    schedule: "Full-time",
    requirements: [
      "5+ years of professional software engineering experience",
      "Strong knowledge of Spring (Core, Boot, MVC, JPA) or equivalent modern stack",
      "Experience designing scalable services",
      "English for collaboration on international projects",
    ],
  }),
  jobTemplate({
    id: "technical-business-analyst",
    slug: "technical-business-analyst",
    title: "Technical Business Analyst",
    department: "Engineering",
    locations: ["Tashkent", "Khujand", "Dushanbe", "Namangan", "Samarqand", "Urgenj"],
    type: "Permanent Employment",
    schedule: "Full-time",
  }),
]

export const enMessages: AttolabsMessages = {
  metadata: {
    homeTitle: "Engineers for AI Era - AttoLabs",
    homeDescription:
      "AttoLabs is a leader in innovation and technology that drives global change. Custom software, cloud, mobile, and digital transformation across Europe and beyond.",
    projectsTitle: "Projects - AttoLabs",
    projectsDescription:
      "Explore AttoLabs software development projects portfolio. Custom web and mobile applications for business growth and innovation.",
    aboutTitle: "About - AttoLabs",
    aboutDescription:
      "AttoLabs is your trusted technology partner. We create innovative software solutions and drive digital transformation for businesses.",
    workWithUsTitle: "Work with us - AttoLabs",
    workWithUsDescription:
      "Explore partnership opportunities with AttoLabs. We collaborate with businesses to deliver innovative software solutions.",
    jobsTitle: "Jobs - AttoLabs",
    jobsDescription:
      "Explore current job openings and join our team. Find the right position and apply today to start your career with us.",
    privacyTitle: "Privacy Policy - AttoLabs",
    privacyDescription:
      "AttoLabs Privacy Policy: personal data protection, GDPR compliance, cookie usage, and user rights.",
    termsTitle: "Terms of use - AttoLabs",
    termsDescription:
      "AttoLabs Terms of Use: website usage rules, warranty, liability, and privacy.",
    ogLocale: "en_GB",
    canonicalPath: "/en/enterprise",
  },
  common: {
    backToHome: "Back to Home",
    backToProjects: "Back to Projects",
    backToJobs: "Back to Jobs",
    learnMore: "Learn more",
    viewProjects: "View projects",
    applyNow: "Apply now",
    filterAll: "All",
    clearFilters: "Clear filters",
    openPositions: "Open positions",
    goals: "Goals",
    solutions: "Solutions",
    results: "Project Results",
    department: "Department",
    location: "Location",
    jobType: "Job type",
    lastUpdated: "Last updated",
  },
  nav: {
    brand: "ATTOLABS",
    whatWeDo: "What we do",
    whoWeAre: "Who we are",
    workWithUs: "Work with us",
    jobs: "Jobs",
    cta: "Share your vision",
    workWithUsHref: "/work-with-us",
    jobsHref: "/jobs",
  },
  hero: {
    headline: "Engineers for AI Era",
    subheadline:
      "AttoLabs is a leader in the world of innovation and technology that drives global change. Our focus on the comfort of our employees and world-class manufacturing efficiency puts us at the forefront of the high-tech industry.",
    primaryCta: "Share your vision",
    secondaryCta: "View Projects",
  },
  teamStrip: {
    label: "Meet the team behind AttoLabs",
  },
  approach: {
    tag: "MISSION",
    title: "Innovation with purpose",
    missionTitle: "Global impact through technology",
    missionBody:
      "AttoLabs strives to make a global impact by developing solutions that contribute to sustainable development and improve the quality of life in different countries.",
    commitmentTitle: "Our commitment",
    commitmentBody:
      "Our team is committed to the highest quality and innovative solutions to ensure your project is realized at the highest level, exceeds expectations and leaves a lasting impression.",
    cta: "View Projects",
  },
  services: {
    tag: "SERVICES",
    title: "What we do",
    subtitle:
      "Full-cycle software development services for enterprises across banking, energy, government, and more.",
    items: [
      { id: "cloud-development", name: "Cloud Development", industriesCount: 2, projectsCount: 1, href: "/projects?service=cloud-development" },
      { id: "custom-software", name: "Custom Software Development", industriesCount: 1, projectsCount: 2, href: "/projects?service=custom-software" },
      { id: "digital-transformation", name: "Digital Transformation", industriesCount: 1, projectsCount: 1, href: "/projects?service=digital-transformation" },
      { id: "mobile-development", name: "Mobile Development", industriesCount: 1, projectsCount: 1, href: "/projects?service=mobile-development" },
      { id: "mvp-development", name: "MVP Development", industriesCount: 1, projectsCount: 1, href: "/projects?service=mvp-development" },
      { id: "web-development", name: "Web Development", industriesCount: 2, projectsCount: 2, href: "/projects?service=web-development" },
    ],
  },
  industries: {
    tag: "INDUSTRIES",
    title: "Industries we serve",
    items: [
      { id: "banking", name: "Banking", servicesCount: 2, projectsCount: 2, href: "/projects?industry=banking" },
      { id: "education", name: "Education", servicesCount: 1, projectsCount: 1, href: "/projects?industry=education" },
      { id: "energy-utilities", name: "Energy & Utilities", servicesCount: 1, projectsCount: 2, href: "/projects?industry=energy-utilities" },
      { id: "enterprise", name: "Enterprise", servicesCount: 1, projectsCount: 1, href: "/projects?industry=enterprise" },
      { id: "government", name: "Government", servicesCount: 1, projectsCount: 1, href: "/projects?industry=government" },
      { id: "life-sciences", name: "Life Sciences", servicesCount: 1, projectsCount: 1, href: "/projects?industry=life-sciences" },
      { id: "logistic", name: "Logistic", servicesCount: 1, projectsCount: 1, href: "/projects?industry=logistic" },
    ],
  },
  projects: {
    tag: "PROJECTS",
    title: "Our Projects",
    viewAll: "View all",
    learnMore: "Learn more",
    viewAllHref: "/projects",
    filterService: "Service",
    filterIndustry: "Industry",
    empty: "No projects match the selected filters.",
    items: enProjects,
  },
  testimonials: {
    tag: "TEAM VOICES",
    title: "Hear directly from our team",
    subtitle:
      "Experiences at AttoLabs — global impact, innovation, learning, collaboration, and well-being.",
    items: [
      { category: "Global impact", name: "Mikhail B.", role: "Software Engineer", quote: "AttoLabs strives to make a global impact by developing solutions that contribute to sustainable development and improve the quality of life in different countries, while implementing only best development practices and collaborating only with like-minded people." },
      { category: "Global impact", name: "Shuhrat M.", role: "Software Engineering Manager", quote: "Our company's global impact is substantial, with groundbreaking projects and initiatives that make a difference on a global scale. Notable achievements include EDP project, which demonstrate our commitment to making a positive impact on environment." },
      { category: "Innovation", name: "Zikrillo I.", role: "QA Engineer", quote: "Our company is at the forefront when it comes to selecting and integrating the newest tech frameworks and devices into our daily operations. We're always staying ahead of the curve." },
      { category: "Innovation", name: "Michail B.", role: "Software Engineer", quote: "Our company actively innovates through the development and implementation of new technologies and working methodologies. We regularly utilize best practices such as Agile and DevOps." },
      { category: "Learning", name: "Ilhomjon T.", role: "Software Engineer", quote: "The company's support for attending conferences on cutting-edge technologies has allowed me to stay up-to-date on the latest industry trends." },
      { category: "Learning", name: "Rustam Y.", role: "Business Analyst", quote: "AttoLabs offered and sponsored fully relevant courses and mentors for me, which I completed using online resources." },
      { category: "Collaboration", name: "Shuhrat M.", role: "Software Engineering Manager", quote: "I've experienced a strong culture of collaboration here, where teamwork is highly valued. Regular team meetings and open communication channels contribute significantly to fostering collaboration." },
      { category: "Collaboration", name: "Ilhomjon T.", role: "Software Engineer", quote: "I've been impressed by the company's focus on project-based collaboration. This fosters teamwork and a sense of shared responsibility." },
      { category: "Well-being", name: "Shahlo R.", role: "QA Engineer", quote: "I really appreciate what our company does to ensure the overall well-being of our employees. Overall, I rate our work environment as supportive and comfortable." },
      { category: "Well-being", name: "Rustam Y.", role: "Business Analyst", quote: "Supporting work-life balance, the ability to work remotely and opportunities for professional and personal development — overall employee wellbeing is at a high level." },
    ],
  },
  tech: {
    tag: "TECHNOLOGY",
    title: "Modern engineering stack",
    subtitle:
      "From cloud platforms to embedded systems — we choose the right technology for each challenge.",
    securityNote:
      "Every solution is architected with security-first principles — encryption at rest and in transit, role-based access control, and scalable container orchestration.",
  },
  about: {
    tag: "ABOUT",
    title: "Engineers for a new era",
    subtitle: "Real mastery in software development",
    description:
      "At AttoLabs, we redefine excellence in software development. Our commitment to cutting-edge solutions and employee well-being sets us apart.",
    stats: [
      { value: 4, suffix: "", label: "Global offices" },
      { value: 6, suffix: "+", label: "Core services" },
      { value: 8, suffix: "+", label: "Industries served" },
      { value: 10, suffix: "+", label: "Years of innovation" },
    ],
    differentiators: [
      { title: "Global impact", description: "Solutions that contribute to sustainable development and improve quality of life across countries." },
      { title: "Innovation culture", description: "Agile, DevOps, and freedom to choose the best technology stack for each task." },
      { title: "Learning & growth", description: "Conference support, sponsored courses, and continuous professional development." },
      { title: "Collaborative teams", description: "Project-based collaboration with open communication and shared responsibility." },
      { title: "Employee well-being", description: "Remote work, work-life balance, and a supportive, comfortable environment." },
    ],
  },
  aboutPage: {
    tag: "ABOUT",
    title: "Engineers for new era embodying real mastery",
    lead:
      "At AttoLabs, we redefine excellence in software development. Our commitment to cutting-edge solutions and employee well-being sets us apart. Experience the future of business optimization with us.",
    impactTitle: "Making impact across industries",
    impactBody:
      "At AttoLabs, we transform E-Government and Logistics through projects that optimize information retrieval, enhance community engagement, and streamline operations. Our commitment to impactful solutions shapes the future of diverse sectors.",
    valuesTitle: "Our values",
    branchesTitle: "Our Branches",
    stats: [
      { value: "50", label: "Employees" },
      { value: "40+", label: "Projects" },
      { value: "6", label: "Branches" },
    ],
    values: [
      {
        number: "01",
        title: "Flexible approach to projects",
        description:
          "We don't follow predefined patterns; instead, each project is treated as unique. Through in-depth diagnostics of the client's problem, we create bespoke solutions tailored to their specific needs.",
      },
      {
        number: "02",
        title: "Human-centered culture",
        description:
          "We value each member of our team, fostering collaboration among smart, creative engineers, analysts, developers, and managers in an atmosphere that prioritizes talents and professional growth.",
      },
      {
        number: "03",
        title: "High quality and results",
        description:
          "Our pursuit of excellence is evident in every solution we deliver. Our solutions are not only aesthetically pleasing but also highly practical, offering reliability and efficiency.",
      },
      {
        number: "04",
        title: "Advanced technologies",
        description:
          "Our products are crafted using cutting-edge technology stacks, enabling the creation of innovative solutions and the transformation of outdated concepts.",
      },
    ],
    branches: [
      { country: "Switzerland", address: "Alte Gfennstrasse 16, 8600 Dübendorf (Zürich)", phones: ["+41 76 565 41 71"], email: "contact@attolabs.eu" },
      { country: "Germany", address: "Freiligrathstraße 31, 50935 Köln", phones: ["+49 176 4445 0770", "+49 2238 4780 6118"], email: "contact@attolabs.eu" },
      { country: "Türkiye", address: "Cuma Yolu Caddesi Göksu Mah, 34815 Beykoz, İstanbul", phones: ["+90 552 724 93 38"], email: "contact@attolabs.eu" },
      { country: "Uzbekistan", address: "st. Afrosiyob 8A, BC Dmaar office 708, 100031 Tashkent", phones: ["+998 93 652 87 05"], email: "contact@attolabs.eu" },
      { country: "Tajikistan, Khujand", address: "I. Somoni st. 5A, BC Somon Plaza 7th floor, 735700 Khujand", phones: ["+992 92 7752111", "+992 3422 62111"], email: "hr@attolabs.eu" },
      { country: "Tajikistan, Dushanbe", address: "I. Somoni st. 5A, BC Somon Plaza 7th floor, 735700 Dushanbe", phones: ["+992 92 7752111", "+992 3422 62111"], email: "contact@attolabs.eu" },
    ],
  },
  workWithUsPage: {
    tag: "PARTNERSHIP",
    title: "Work with us to unlock new opportunities and drive growth",
    subtitle: "Connect with our partnership leads to explore collaboration.",
    contacts: [
      {
        role: "Investor Relations Manager",
        name: "Muhsin Muhamadjonov",
        email: "muhsin@attolabs.eu",
        phone: "+41 76 565 41 71",
        photo: IMG.muhsin,
      },
      {
        role: "Business Development Manager",
        name: "Gufron Atto",
        email: "gufron.atto@attolabs.eu",
        phone: "+49 170 522 25 07",
        photo: IMG.gufron,
      },
    ],
  },
  jobsPage: {
    tag: "CAREERS",
    title: "AttoLabs: where innovation, community, and impact converge",
    intro:
      "Joining AttoLabs means being part of a team that values creativity, diversity, and growth. Here, you'll have the opportunity to work on cutting-edge projects that have a real impact on industries and communities worldwide.",
    formTitle: "Get in touch with us!",
    formRole: "What role are you seeking for?",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone number",
    formSubmit: "Submit",
    formSuccess: "Thank you! Your submission has been received!",
    noMatch: "No positions match the selected filters.",
    items: enJobs,
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "15 December, 2025",
      sections: [
        {
          heading: "Data protection",
          paragraphs: [
            "We take protecting your personal data very seriously. We treat your personal data confidential and compliant with current data protection laws and this privacy policy.",
            "By using this website several personal data will be collected. Personal data is data that allows to identify you. Transmission of data via the internet can never be fully secure.",
          ],
        },
        {
          heading: "Responsible entity",
          paragraphs: [
            "The responsible entity for processing your data on this website is: AttoLabs AG, Alte Gfennstrasse 16, 8600 Dübendorf (Zürich), Switzerland. +41 76 565 41 71, contact@attolabs.eu",
          ],
        },
        {
          heading: "Revocation",
          paragraphs: [
            "Most processing of personal data is only allowed by consent. You can recall any consent given by you at any time by contacting us via email. The legitimacy of processing data is valid until revocation.",
          ],
        },
        {
          heading: "Revocation of data collection (Art. 21 GDPR)",
          paragraphs: [
            "If data is processed based on Art. 6 Abs. 1 Lit. E or F GDPR you have the right to object to processing based on your special case at any time. If data is processed for direct advertising you have the right to object to this kind of processing.",
          ],
        },
        {
          heading: "Right of data transmission",
          paragraphs: [
            "You have the right to request transmission of your data, which is collected based on your consent or automatically processed to fulfill a contract, to yourself or a third party in a machine-parsable format.",
          ],
        },
        {
          heading: "SSL/TLS encryption",
          paragraphs: [
            "This site uses SSL encryption to ensure a standard level of confidentiality whilst transferring data from and to the website.",
          ],
        },
        {
          heading: "Disclosure, deletion and correction",
          paragraphs: [
            "You have the right to request source, purpose and potential receiver of your personal data and, if applicable, correction or deletion of your personal data.",
          ],
        },
        {
          heading: "Right to constrain data processing",
          paragraphs: [
            "You have the right to constrain the processing of your personal data in cases such as contested accuracy, unlawful processing, or while an objection assessment is pending.",
          ],
          bullets: [
            "If you question correctness of your personal data saved by us",
            "If processing was done unlawfully and you prefer constraint over deletion",
            "If we no longer need the data but you need them for legal reasons",
            "If you object based on Art. 21 Abs. 1 GDPR pending interest assessment",
          ],
        },
        {
          heading: "External hosting",
          paragraphs: [
            "This website is hosted by an external contractor. Personal data collected by this website may be saved on the hoster's servers, including IP addresses, meta-data and contact form data.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our websites use session cookies and permanent cookies. Cookies needed for electronic communication or requested functions are saved based on Art. 6 Abs. 1 lit. f GDPR. Consent-based cookie processing is based on Art. 6 Abs. 1 lit. a GDPR and can be recalled at any time.",
          ],
        },
        {
          heading: "Contact form",
          paragraphs: [
            "If you contact us via the contact form, the input including contact details will be saved to process your request. Your personal data will not be forwarded without a legal basis. Data is saved until deletion is requested, consent is recalled, or the purpose becomes void.",
          ],
        },
        {
          heading: "Google reCAPTCHA",
          paragraphs: [
            "We use Google reCAPTCHA on this website (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) to check whether form input is done by a human or automated software. Processing is based on Art. 6 Abs. 1 lit. f GDPR, or Art. 6 Abs. 1 lit. a GDPR where consent was given.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of use",
      updated: "15 December, 2025",
      sections: [
        {
          heading: "General",
          paragraphs: [
            "Via the contact form you can send direct and nonbinding requests to AttoLabs online.",
          ],
        },
        {
          heading: "Terms of use and notes",
          paragraphs: [
            "The usage of the website's contact form is optional. By submitting the data of the contact form AttoLabs will receive an automatically generated email with the given data. The data communication is SSL-encrypted.",
            "Please note that communication via the internet is never fully secure. It cannot be fully excluded that a third party intercepts or modifies data transmitted by you. Please consider other ways of communication for transmitting data of high confidentiality.",
          ],
        },
        {
          heading: "Privacy policy",
          paragraphs: [
            "With use of the contact form the website's privacy policy is applied.",
          ],
        },
        {
          heading: "Change of terms",
          paragraphs: [
            "AttoLabs can change its website www.attolabs.eu at any time and without any further notice. AttoLabs is therefore also able to change its terms of use at any time.",
          ],
        },
        {
          heading: "Warranty / liability",
          paragraphs: [
            "The use of the contact form of AttoLabs is not guaranteed and dependent on technical availability not controlled by AttoLabs. AttoLabs is not liable by any means for damages that are caused by using the contact form.",
          ],
        },
      ],
    },
  },
  contact: {
    headline: "Share your vision",
    subheadline: "How to get in touch with you? Tell us about your project and our team will reach out.",
    emailPlaceholder: "How to get in touch with you?",
    namePlaceholder: "What can I call you?",
    submitLabel: "Submit",
    successMessage: "Thank you! Your submission has been received!",
    privacyPrefix: 'By clicking "Submit" you agree to our',
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy-policy",
  },
  footer: {
    copyright: "AttoLabs",
    offices: [
      { country: "Switzerland", address: "Alte Gfennstrasse 16, 8600 Dübendorf (Zürich)", phones: ["+41 76 565 41 71"], email: "contact@attolabs.eu" },
      { country: "Germany", address: "Freiligrathstraße 31, 50935 Köln", phones: ["+49 176 4445 0770", "+49 2238 4780 6118"], email: "contact@attolabs.eu" },
      { country: "Türkiye", address: "Cuma Yolu Caddesi Göksu Mah, 34815 Beykoz, İstanbul", phones: ["+90 552 724 93 38"], email: "contact@attolabs.eu" },
      { country: "Uzbekistan", address: "st. Afrosiyob 8A, BC Dmaar office 708, 100031 Tashkent", phones: ["+998 93 652 87 05"], email: "contact@attolabs.eu" },
      { country: "Tajikistan, Khujand", address: "I. Somoni st. 5A, BC Somon Plaza 7th floor, 735700 Khujand", phones: ["+992 92 7752111", "+992 3422 62111"], email: "hr@attolabs.eu" },
      { country: "Tajikistan, Dushanbe", address: "I. Somoni st. 5A, BC Somon Plaza 7th floor, 735700 Dushanbe", phones: ["+992 92 7752111", "+992 3422 62111"], email: "contact@attolabs.eu" },
    ],
    social: [
      { platform: "LinkedIn", href: "https://www.linkedin.com/company/attolabs" },
      { platform: "Instagram", href: "https://www.instagram.com/attolabs" },
      { platform: "X", href: "https://x.com/attolabs" },
      { platform: "Facebook", href: "https://m.facebook.com/attolabs.eu" },
      { platform: "Behance", href: "https://www.behance.net/attolabs" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms-of-use" },
    ],
    languages: [
      { code: "en", label: "English" },
      { code: "de", label: "Deutsch" },
      { code: "ru", label: "Русский" },
    ],
  },
}
