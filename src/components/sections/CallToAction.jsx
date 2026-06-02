import Button from "../ui/Button"

function CallToAction({ t }) {
  return (
    <section id="cta" className="px-5 py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal relative grid overflow-hidden rounded-[34px] border border-[#21C55D]/25 bg-white/[0.045] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(33,197,93,0.12)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-16 right-24 h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,216,20,0.06)_0%,transparent_70%)]" />

          <div className="relative">
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-black leading-[1.1] tracking-[-0.04em] text-[#F0F4F8]">
              {t.cta.title}
            </h2>

            <p className="mt-4 max-w-[560px] text-[17px] leading-[1.7] text-[#C4CDD6]">
              {t.cta.text}
            </p>
          </div>

          <div className="relative mt-7 lg:mt-0">
            <Button href="/#contact" showArrow className="px-7 py-3.5">
              {t.cta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction