import { FileText } from "lucide-react"
import SectionHead from "../components/ui/SectionHead"

function TermsPage({ t }) {
  const blocks = [
    {
      title: t.termsPage.section1Title,
      text: t.termsPage.section1Text,
    },
    {
      title: t.termsPage.section2Title,
      text: t.termsPage.section2Text,
    },
    {
      title: t.termsPage.section3Title,
      text: t.termsPage.section3Text,
    },
    {
      title: t.termsPage.section4Title,
      text: t.termsPage.section4Text,
    },
    {
      title: t.termsPage.section5Title,
      text: t.termsPage.section5Text,
    },
  ]

  return (
    <main className="bg-[#F8F7F2] px-5 py-20 text-[#07131F] md:py-24">
      <div className="mx-auto max-w-[900px]">
        <div className="reveal">
          <SectionHead
            eyebrow={t.termsPage.eyebrow}
            title={t.termsPage.title}
            text={t.termsPage.intro}
            dark={false}
          />
        </div>

        <div className="reveal reveal-delay-1 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="border-b border-slate-200 bg-[#07131F] p-6 text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#21C55D]/15 text-[#21C55D]">
                <FileText size={24} strokeWidth={2.3} />
              </span>

              <div>
                <h1 className="text-lg font-black">
                  CloveNet Technologies Limited
                </h1>
                <p className="text-sm text-slate-400">Terms of Use</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-6 md:p-8">
            {blocks.map((block) => (
              <LegalBlock
                key={block.title}
                title={block.title}
                text={block.text}
              />
            ))}

            <div className="rounded-2xl border border-slate-200 bg-[#F8F7F2] p-5">
              <p className="text-sm font-bold text-slate-700">
                {t.termsPage.contactText}
              </p>

              <a
                href="mailto:support@clovenet.net"
                className="mt-2 inline-flex text-sm font-black text-[#16A34A]"
              >
                support@clovenet.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function LegalBlock({ title, text }) {
  return (
    <section>
      <h2 className="text-xl font-black tracking-[-0.02em] text-[#07131F]">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {text}
      </p>
    </section>
  )
}

export default TermsPage