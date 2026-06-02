import {
  AppWindow,
  Database,
  GraduationCap,
  MonitorSmartphone,
  ShieldCheck,
  Store,
} from "lucide-react"

export const services = [
  {
    id: "websites-web-apps",
    icon: AppWindow,
    title: {
      en: "Websites & Web Apps",
      sw: "Websites & Web Apps",
    },
    description: {
      en: "Modern responsive websites, landing pages, dashboards, and business web applications.",
      sw: "Websites za kisasa, landing pages, dashboards na mifumo ya biashara inayofanya kazi vizuri kwenye simu na kompyuta.",
    },
  },

  {
    id: "mobile-apps-pwas",
    icon: MonitorSmartphone,
    title: {
      en: "Mobile Apps & PWAs",
      sw: "Mobile Apps & PWAs",
    },
    description: {
      en: "Installable mobile-first applications for Android, web, and progressive web app experiences.",
      sw: "Applications zinazoweza kusakinishwa kwenye simu kwa Android, web na PWA.",
    },
  },

  {
    id: "backend-databases",
    icon: Database,
    title: {
      en: "Backend & Databases",
      sw: "Backend & Databases",
    },
    description: {
      en: "APIs, authentication, PostgreSQL databases, admin dashboards, and production-ready data structures.",
      sw: "APIs, authentication, PostgreSQL databases, admin dashboards na miundo ya data iliyo tayari kwa production.",
    },
  },

  {
    id: "business-systems",
    icon: Store,
    title: {
      en: "Business Systems",
      sw: "Mifumo ya Biashara",
    },
    description: {
      en: "Custom systems for shops, groups, contribution tracking, reports, records, and operations.",
      sw: "Mifumo maalum kwa maduka, vikundi, michango, ripoti, kumbukumbu na uendeshaji wa kazi.",
    },
  },

  {
    id: "digital-safety",
    icon: ShieldCheck,
    title: {
      en: "Digital Safety",
      sw: "Usalama wa Kidigitali",
    },
    description: {
      en: "Cybersecurity awareness, safe internet use, account protection, and practical digital safety lessons.",
      sw: "Elimu ya cybersecurity, matumizi salama ya mtandao, ulinzi wa akaunti na lessons za digital safety.",
    },
  },

  {
    id: "digital-skills-training",
    icon: GraduationCap,
    title: {
      en: "Digital Skills Training",
      sw: "Mafunzo ya Digital Skills",
    },
    description: {
      en: "Guidance for youth and teams on digital tools, email, online applications, and digital readiness.",
      sw: "Mwongozo kwa vijana na timu kuhusu zana za kidigitali, email, maombi ya online na digital readiness.",
    },
  },
]