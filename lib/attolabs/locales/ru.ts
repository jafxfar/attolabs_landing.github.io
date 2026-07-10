import type { AttolabsMessages } from "../types"
import { enMessages, enProjects, enJobs } from "./en"

const ruProjects = enProjects.map((p) => {
  const titles: Record<string, string> = {
    aat: "Приложение для детей с аутизмом (AAT)",
    hcs: "Система управления отоплением",
    sls: "Система управления уличным освещением",
    "mar-taxi": "Онлайн-сервис для MAR Taxi",
    edrp: "Портал отчётности об экологических данных (EDP)",
    ini: "Веб-приложение для INAIA FinTech",
    "usb-flasher": "Защищённый USB Flasher для STM32",
    smartpay: "Микросервис SME Proposition (SmartPay)",
  }
  const descriptions: Record<string, string> = {
    aat: "Мобильное обучающее приложение для детей с расстройством аутистического спектра, развивающее навыки коммуникации с поддержкой персонализации курсов.",
    hcs: "Система управления отоплением на ESP32 и FreeRTOS для интеллектуального мониторинга и контроля отопления жилых домов.",
    sls: "Система автономного управления уличным освещением по расписанию заката/восхода со сбором телеметрии.",
    "mar-taxi": "Веб-платформа бронирования такси для улучшения клиентского опыта и доступности сервиса.",
    edrp: "Портал для упрощения отчётности операторов объектов по экологическим требованиям ЕС.",
    ini: "Калькулятор финансовых целей и инвестиционная платформа для исламских сберегательных и инвестиционных продуктов в Европе.",
    "usb-flasher": "Модуль безопасной перепрошивки устройств через USB с шифрованием и аутентификацией для STM32.",
    smartpay: "Микросервисная платформа для SME-платёжных предложений с масштабируемой банковской архитектурой.",
  }
  const industries: Record<string, string> = {
    Education: "Образование",
    "Energy & Utilities": "Энергетика",
    Logistic: "Логистика",
    Government: "Госсектор",
    Banking: "Банкинг",
    Enterprise: "Предприятие",
  }
  return {
    ...p,
    title: titles[p.id] ?? p.title,
    description: descriptions[p.id] ?? p.description,
    industry: industries[p.industry] ?? p.industry,
  }
})

const ruJobs = enJobs.map((j) => {
  const titles: Record<string, string> = {
    "hr-manager": "HR Manager",
    "it-operations-manager": "IT Operations Manager",
    "it-operations-engineer": "IT-Operations Engineer",
    "requirements-engineer": "Инженер по сбору требований",
    "scrum-master": "Scrum Master",
    "senior-account-manager": "Ведущий менеджер по работе с клиентами",
    "senior-cpp-engineer": "Senior C++ Engineer",
    "senior-sales-manager": "Senior Sales Manager",
    "senior-software-engineer": "Senior Инженер-разработчик",
    "technical-business-analyst": "Technical Business Analyst",
  }
  return { ...j, title: titles[j.id] ?? j.title }
})

export const ruMessages: AttolabsMessages = {
  ...enMessages,
  metadata: {
    ...enMessages.metadata,
    homeDescription:
      "Инженерная компания нового поколения. Мы разрабатываем современные решения и реализуем инновационные проекты.",
    projectsTitle: "Проекты - AttoLabs",
    projectsDescription:
      "Изучите портфолио успешных проектов AttoLabs. Индивидуальные веб и мобильные приложения для роста и инноваций вашего бизнеса.",
    aboutTitle: "О нас - AttoLabs",
    aboutDescription:
      "AttoLabs — ваш надёжный технологический партнёр. Мы создаём инновационные программные решения и цифровую трансформацию.",
    workWithUsTitle: "Сотрудничество - AttoLabs",
    workWithUsDescription:
      "Откройте возможности партнёрства с AttoLabs. Мы работаем с компаниями над инновационными программными решениями.",
    jobsTitle: "Вакансии - AttoLabs",
    jobsDescription:
      "Изучите открытые вакансии и присоединяйтесь к команде AttoLabs.",
    privacyTitle: "Политика конфиденциальности - AttoLabs",
    privacyDescription:
      "Политика конфиденциальности AttoLabs: защита персональных данных, GDPR, cookies и права пользователей.",
    termsTitle: "Пользовательское соглашение - AttoLabs",
    termsDescription:
      "Пользовательское соглашение AttoLabs — условия использования сайта и услуг.",
    ogLocale: "ru_RU",
    canonicalPath: "/ru/enterprise",
  },
  common: {
    backToHome: "На главную",
    backToProjects: "К проектам",
    backToJobs: "К вакансиям",
    learnMore: "Подробнее",
    viewProjects: "Смотреть проекты",
    applyNow: "Откликнуться",
    filterAll: "Все",
    clearFilters: "Сбросить фильтры",
    openPositions: "Открытые вакансии",
    goals: "Цели",
    solutions: "Решения",
    results: "Результаты проекта",
    department: "Отдел",
    location: "Локация",
    jobType: "Тип занятости",
    lastUpdated: "Обновлено",
  },
  nav: {
    brand: "ATTOLABS",
    whatWeDo: "Проекты",
    whoWeAre: "О нас",
    workWithUs: "Сотрудничество",
    jobs: "Карьера",
    cta: "Поделитесь вашим видением",
    workWithUsHref: "/work-with-us",
    jobsHref: "/jobs",
  },
  hero: {
    headline: "Engineers for AI Era",
    subheadline:
      "AttoLabs — лидер в мире инноваций и технологий, который приводит к глобальным переменам. Наше внимание к комфорту наших сотрудников и производственная эффективность мирового класса ставят нас на первое место в индустрии высоких технологий.",
    primaryCta: "Поделитесь вашим видением",
    secondaryCta: "Посмотреть проекты",
  },
  teamStrip: { label: "Познакомьтесь с командой AttoLabs" },
  approach: {
    tag: "МИССИЯ",
    title: "Инновации с целью",
    missionTitle: "Глобальное влияние через технологии",
    missionBody:
      "AttoLabs стремится оказывать влияние на глобальный уровень благодаря разработке решений, которые способствуют устойчивому развитию и улучшению качества жизни.",
    commitmentTitle: "Наше обязательство",
    commitmentBody:
      "Наша команда стремится к высочайшему качеству и инновационным решениям, чтобы ваш проект был реализован на самом высоком уровне, превзошел ожидания и оставил неизгладимое впечатление.",
    cta: "Посмотреть проекты",
  },
  services: {
    tag: "УСЛУГИ",
    title: "Что мы делаем",
    subtitle:
      "Полный цикл разработки ПО для предприятий в банкинге, энергетике, госсекторе и других отраслях.",
    items: [
      { id: "web-development", name: "Web Разработка", industriesCount: 2, projectsCount: 2, href: "/projects?service=web-development" },
      { id: "cloud-development", name: "Облачная Разработка", industriesCount: 1, projectsCount: 1, href: "/projects?service=cloud-development" },
      { id: "mvp-development", name: "Разработка MVP", industriesCount: 1, projectsCount: 1, href: "/projects?service=mvp-development" },
      { id: "mobile-development", name: "Разработка мобильных приложений", industriesCount: 1, projectsCount: 1, href: "/projects?service=mobile-development" },
      { id: "custom-software", name: "Разработка ПО", industriesCount: 1, projectsCount: 2, href: "/projects?service=custom-software" },
      { id: "digital-transformation", name: "Цифровая трансформация", industriesCount: 1, projectsCount: 1, href: "/projects?service=digital-transformation" },
    ],
  },
  industries: {
    tag: "ИНДУСТРИИ",
    title: "Отрасли, с которыми мы работаем",
    items: [
      { id: "banking", name: "Банкинг", servicesCount: 2, projectsCount: 2, href: "/projects?industry=banking" },
      { id: "education", name: "Образование", servicesCount: 1, projectsCount: 1, href: "/projects?industry=education" },
      { id: "energy-utilities", name: "Энергетика", servicesCount: 1, projectsCount: 2, href: "/projects?industry=energy-utilities" },
      { id: "enterprise", name: "Предприятие", servicesCount: 1, projectsCount: 1, href: "/projects?industry=enterprise" },
      { id: "government", name: "Госсектор", servicesCount: 1, projectsCount: 1, href: "/projects?industry=government" },
      { id: "life-sciences", name: "Life Sciences", servicesCount: 1, projectsCount: 1, href: "/projects?industry=life-sciences" },
      { id: "logistic", name: "Логистика", servicesCount: 1, projectsCount: 1, href: "/projects?industry=logistic" },
    ],
  },
  projects: {
    ...enMessages.projects,
    tag: "ПРОЕКТЫ",
    title: "Наши проекты",
    viewAll: "Смотреть все",
    learnMore: "Подробнее",
    viewAllHref: "/projects",
    filterService: "Услуга",
    filterIndustry: "Индустрия",
    empty: "Нет проектов по выбранным фильтрам.",
    items: ruProjects,
  },
  aboutPage: {
    ...enMessages.aboutPage,
    tag: "О НАС",
    title: "Инженеры новой эры, воплощающие настоящее мастерство",
    lead:
      "В AttoLabs мы заново определяем совершенство в разработке ПО. Наша приверженность передовым решениям и благополучию сотрудников отличает нас.",
    impactTitle: "Влияние в разных отраслях",
    impactBody:
      "В AttoLabs мы трансформируем e-Government и логистику через проекты, которые оптимизируют доступ к информации, усиливают вовлечённость и упрощают операции.",
    valuesTitle: "Наши ценности",
    branchesTitle: "Наши филиалы",
    stats: [
      { value: "50", label: "Сотрудников" },
      { value: "40+", label: "Проектов" },
      { value: "6", label: "Филиалов" },
    ],
    values: [
      {
        number: "01",
        title: "Гибкий подход к проектам",
        description:
          "Мы не следуем шаблонам: каждый проект уникален. Через глубокую диагностику задачи клиента мы создаём индивидуальные решения.",
      },
      {
        number: "02",
        title: "Человекоцентричная культура",
        description:
          "Мы ценим каждого члена команды и создаём атмосферу, в которой приоритетны таланты и профессиональный рост.",
      },
      {
        number: "03",
        title: "Высокое качество и результат",
        description:
          "Стремление к совершенству видно в каждом решении: практичность, надёжность и эффективность.",
      },
      {
        number: "04",
        title: "Передовые технологии",
        description:
          "Мы используем современный технологический стек, чтобы создавать инновационные решения и обновлять устаревшие подходы.",
      },
    ],
  },
  workWithUsPage: {
    tag: "ПАРТНЁРСТВО",
    title: "Работайте с нами, чтобы открывать новые возможности и добиваться роста",
    subtitle: "Свяжитесь с нашими менеджерами по партнёрству.",
    contacts: enMessages.workWithUsPage.contacts,
  },
  jobsPage: {
    ...enMessages.jobsPage,
    tag: "КАРЬЕРА",
    title: "AttoLabs: где сходятся инновации, сообщество и влияние",
    intro:
      "Присоединиться к AttoLabs — значит стать частью команды, которая ценит творчество, разнообразие и рост. Здесь вы будете работать над передовыми проектами с реальным влиянием.",
    formTitle: "Свяжитесь с нами!",
    formRole: "Какую роль вы ищете?",
    formName: "Имя",
    formEmail: "Email",
    formPhone: "Телефон",
    formSubmit: "Отправить",
    formSuccess: "Спасибо! Ваша заявка получена!",
    noMatch: "Нет вакансий по выбранным фильтрам.",
    items: ruJobs,
  },
  legal: {
    privacy: {
      title: "Политика конфиденциальности",
      updated: "15 декабря 2025",
      sections: enMessages.legal.privacy.sections,
    },
    terms: {
      title: "Пользовательское соглашение",
      updated: "15 декабря 2025",
      sections: enMessages.legal.terms.sections,
    },
  },
  contact: {
    ...enMessages.contact,
    headline: "Поделитесь вашим видением",
    subheadline: "Как с вами связаться? Расскажите о проекте — команда свяжется с вами.",
    emailPlaceholder: "Как с вами связаться?",
    namePlaceholder: "Как к вам обращаться?",
    submitLabel: "Отправить",
    successMessage: "Спасибо! Ваша заявка получена!",
    privacyPrefix: "Нажимая «Отправить», вы соглашаетесь с",
    privacyLabel: "Политикой конфиденциальности",
    privacyHref: "/privacy-policy",
  },
  footer: {
    ...enMessages.footer,
    legal: [
      { label: "Политика конфиденциальности", href: "/privacy-policy" },
      { label: "Пользовательское соглашение", href: "/terms-of-use" },
    ],
  },
}
