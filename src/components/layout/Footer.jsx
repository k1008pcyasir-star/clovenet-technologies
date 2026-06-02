function Footer({ t }) {
  const year = new Date().getFullYear()

  const footerLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#products", label: t.nav.products },
    { href: "/#services", label: t.nav.services },
    { href: "/#contact", label: t.nav.contact },
    { href: "/privacy", label: t.nav.privacy },
    { href: "/terms", label: t.common.terms },
    { href: "mailto:support@clovenet.net", label: t.common.support },
  ]

  return (
    <footer className="border-t border-white/[0.08] bg-[#050E17] px-5 py-10 text-[#8A9BAE]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="block text-sm font-bold text-[#F0F4F8]">
            CloveNet Technologies Limited
          </strong>

          <p className="mt-1 text-[12.5px] text-[#8A9BAE]">
            © {year} {t.common.rights}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-1"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-[#8A9BAE] transition hover:bg-white/[0.045] hover:text-[#21C55D]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer