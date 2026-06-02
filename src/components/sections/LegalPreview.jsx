import { ArrowRight } from "lucide-react"
import SectionHead from "../ui/SectionHead"

function LegalPreview({ t }) {
  return (
    <section id="privacy" className="bg-[#F8F7F2] px-5 py-20 text-[#07131F] md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal">
          <SectionHead
            eyebrow={t.legal.eyebrow}
            title={t.legal.title}
            text={t.legal.text}
            dark={false}
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <LegalCard
            title={t.legal.privacyTitle}
            text={t.legal.privacyText}
            href="/privacy"
            label={t.legal.readPrivacy}
            delay="reveal-delay-1"
          />

          <LegalCard
            title={t.legal.termsTitle}
            text={t.legal.termsText}
            href="/terms"
            label={t.legal.readTerms}
            delay="reveal-delay-2"
          />
        </div>
      </div>
    </section>
  )
}

function LegalCard({ title, text, href, label, delay }) {
  return (
    <article className={`reveal ${delay} rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:border-[#21C55D]/40 hover:shadow-[0_8px_32px_rgba(33,197,93,0.08)]`}>
      <h3 className="text-xl font-black text-[#07131F]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-[1.7] text-slate-500">
        {text}
      </p>

      <a
        href={href}
        className="group mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#16A34A] transition hover:gap-2.5"
      >
        <span>{label.replace(" →", "")}</span>
        <ArrowRight size={14} strokeWidth={2.5} />
      </a>
    </article>
  )
}

export default LegalPreview