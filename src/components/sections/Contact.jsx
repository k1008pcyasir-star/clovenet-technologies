import { Mail, MessageCircle, UserRound } from "lucide-react"
import SectionHead from "../ui/SectionHead"

function Contact({ t }) {
  const contacts = [
    {
      label: t.contact.generalEmail,
      value: "admin@clovenet.net",
      href: "mailto:admin@clovenet.net",
      icon: Mail,
      external: false,
      special: false,
    },
    {
      label: t.contact.supportEmail,
      value: "support@clovenet.net",
      href: "mailto:support@clovenet.net",
      icon: Mail,
      external: false,
      special: false,
    },
    {
      label: t.contact.founderEmail,
      value: "yasir.hassan@clovenet.net",
      href: "mailto:yasir.hassan@clovenet.net",
      icon: UserRound,
      external: false,
      special: false,
    },
    {
      label: t.contact.marketplace,
      value: "soko.clovenet.net",
      href: "https://soko.clovenet.net",
      icon: MessageCircle,
      external: true,
      special: true,
    },
  ]

  return (
    <section id="contact" className="bg-white/[0.045] px-5 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal">
          <SectionHead
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            text={t.contact.text}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((item, index) => (
            <ContactCard
              key={item.value}
              item={item}
              delay={`reveal-delay-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({ item, delay }) {
  const Icon = item.icon

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={`reveal ${delay} group relative block overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-0.5 ${
        item.special
          ? "border-[#25D366]/20 bg-[#25D366]/[0.06] hover:border-[#25D366]/35"
          : "border-white/[0.08] bg-[#0A1724] hover:border-[#21C55D]/25"
      }`}
    >
      <span className="absolute left-0 top-0 h-0 w-[3px] rounded-full bg-[#21C55D] transition-all duration-300 group-hover:h-full" />

      <div className="mb-2.5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A9BAE]">
        <Icon size={15} strokeWidth={2.2} className="text-[#21C55D]" />
        <span>{item.label}</span>
      </div>

      <strong className="block break-all text-base font-bold leading-snug text-[#F0F4F8]">
        {item.value}
      </strong>
    </a>
  )
}

export default Contact