import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { translations } from "./data/translations"

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import HomePage from "./pages/HomePage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("clovenet_lang") || "en"
  })

  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem("clovenet_lang", lang)
  }, [lang])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#07131F] text-white">
        <Header lang={lang} setLang={setLang} t={t} />

        <Routes>
          <Route path="/" element={<HomePage t={t} lang={lang} />} />
          <Route path="/privacy" element={<PrivacyPage t={t} />} />
          <Route path="/terms" element={<TermsPage t={t} />} />
          <Route path="*" element={<NotFoundPage t={t} />} />
        </Routes>

        <Footer t={t} />
      </div>
    </BrowserRouter>
  )
}

export default App