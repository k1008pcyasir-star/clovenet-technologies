import { GraduationCap, ShoppingBag, WalletCards } from "lucide-react"

export const products = [
  {
    id: "clovenet-soko",
    icon: ShoppingBag,
    title: "CloveNet Soko",
    url: "https://soko.clovenet.net",
    isExternal: true,
    status: "Live",
    description: {
      en: "A WhatsApp-first marketplace helping vendors list products and customers order easily through direct communication.",
      sw: "Marketplace inayotumia WhatsApp kuwasaidia wauzaji kuweka bidhaa na wateja kuagiza kwa urahisi kupitia mawasiliano ya moja kwa moja.",
    },
    linkLabel: {
      en: "Visit Soko →",
      sw: "Tembelea Soko →",
    },
  },

  {
    id: "bajetihub",
    icon: WalletCards,
    title: "BajetiHub",
    url: "#contact",
    isExternal: false,
    status: "In development",
    description: {
      en: "A personal finance app for tracking income, budgets, expenses, goals, and money movement in a simple way.",
      sw: "App ya fedha binafsi kwa kufuatilia mapato, bajeti, matumizi, malengo na mzunguko wa fedha kwa namna rahisi.",
    },
    linkLabel: {
      en: "Learn more →",
      sw: "Jifunze zaidi →",
    },
  },

  {
    id: "clovenet-hub",
    icon: GraduationCap,
    title: "CloveNet Hub",
    url: "https://hubv1.clovenet.net",
    isExternal: true,
    status: "Live",
    description: {
      en: "A digital readiness platform helping youth understand digital tools, opportunities, applications, and online safety.",
      sw: "Jukwaa la digital readiness linalowasaidia vijana kuelewa zana za kidigitali, fursa, maombi ya mtandaoni na usalama wa kidigitali.",
    },
    linkLabel: {
      en: "Visit Hub →",
      sw: "Tembelea Hub →",
    },
  },
]