import { useState } from "react"
import LanguageSwitcher from "./LanguageSwitcher"

function Header({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: "/#about", label: t.nav.about },
    { href: "/#products", label: t.nav.products },
    { href: "/#services", label: t.nav.services },
    { href: "/#contact", label: t.nav.contact },
    { href: "/privacy", label: t.nav.privacy },
  ]

  return (
    <header className="sticky top-0 z-[200] px-5">
      <div className="absolute inset-0 border-b border-white/[0.08] bg-[#07131F]/75 backdrop-blur-2xl" />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#21C55D] to-transparent opacity-80" />

      <nav className="relative mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-4">
        <a href="/" className="group flex shrink-0 items-center gap-3">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-[#21C55D] to-[#0E7C3B] text-lg font-black text-[#07131F] shadow-[0_8px_24px_rgba(33,197,93,0.25)] transition group-hover:shadow-[0_12px_32px_rgba(33,197,93,0.4)]">
            C
          </span>

          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-[-0.03em] text-[#F0F4F8]">
              CloveNet
            </span>
            <span className="mt-1 text-[10.5px] font-normal tracking-[0.02em] text-[#8A9BAE]">
              Technologies Limited
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-[13px] py-1.5 text-[13px] font-medium tracking-[0.01em] text-[#8A9BAE] transition hover:bg-white/[0.045] hover:text-[#F0F4F8]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="h-[18px] w-px bg-white/[0.08]" />

          <LanguageSwitcher lang={lang} setLang={setLang} />

          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#21C55D] px-5 py-2.5 text-[13px] font-bold text-[#07131F] shadow-[0_8px_32px_rgba(33,197,93,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2EE66D]"
          >
            {t.nav.talkToUs}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-[10px] border border-white/[0.08] bg-white/[0.045] transition hover:border-[#21C55D]/25 lg:hidden ${
            menuOpen ? "border-[#21C55D]/30" : ""
          }`}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-[1.5px] w-[18px] rounded-full bg-[#F0F4F8] transition duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-[18px] rounded-full bg-[#F0F4F8] transition duration-300 ${
              menuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-[18px] rounded-full bg-[#F0F4F8] transition duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`relative mx-auto max-w-[1180px] overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-white/[0.08] pb-5 pt-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] px-4 py-3 text-sm font-medium text-[#8A9BAE] transition hover:bg-white/[0.045] hover:text-[#F0F4F8]"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-2 flex items-center justify-between border-t border-white/[0.08] px-4 pt-4">
            <LanguageSwitcher lang={lang} setLang={setLang} />

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] bg-[#21C55D] px-5 py-2.5 text-[13px] font-bold text-[#07131F]"
            >
              {t.nav.talkToUs}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header