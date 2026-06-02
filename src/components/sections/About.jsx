import { Check } from "lucide-react"
import StatCard from "../ui/StatCard"

function About({ t }) {
  const stats = [
    {
      number: "3+",
      label: t.about.stats.products,
    },
    {
      number: "24/7",
      label: t.about.stats.access,
    },
    {
      number: "Web",
      label: t.about.stats.web,
    },
    {
      number: "TZ",
      label: t.about.stats.tanzania,
    },
  ]

  const points = [
    {
      title: t.about.missionTitle,
      text: t.about.missionText,
    },
    {
      title: t.about.visionTitle,
      text: t.about.visionText,
    },
    {
      title: t.about.approachTitle,
      text: t.about.approachText,
    },
  ]

  return (
    <section id="about" className="px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1180px] items-start gap-6 lg:grid-cols-2">
        <div className="reveal rounded-[34px] bg-[#F8F7F2] p-7 text-[#07131F] md:p-10">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#17A34A]">
            {t.about.eyebrow}
          </span>

          <h2 className="mb-4 text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.045em] text-[#07131F]">
            {t.about.title}
          </h2>

          <p className="mb-3 text-[15px] leading-[1.75] text-slate-700">
            {t.about.paragraphOne}
          </p>

          <p className="text-[15px] leading-[1.75] text-slate-700">
            {t.about.paragraphTwo}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {points.map((point, index) => (
            <article
              key={point.title}
              className={`reveal reveal-delay-${index + 1} flex items-start gap-4 rounded-[20px] border border-white/[0.08] bg-white/[0.045] p-5 transition hover:border-[#21C55D]/25 hover:bg-[#21C55D]/[0.04] md:px-6`}
            >
              <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#21C55D] text-[#07131F]">
                <Check size={16} strokeWidth={2.7} />
              </div>

              <div>
                <h3 className="mb-1.5 text-base font-bold text-[#F0F4F8]">
                  {point.title}
                </h3>

                <p className="text-[13.5px] leading-[1.65] text-[#8A9BAE]">
                  {point.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About