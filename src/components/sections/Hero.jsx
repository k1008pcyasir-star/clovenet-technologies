import {
  GraduationCap,
  Settings,
  ShoppingBag,
  WalletCards,
} from "lucide-react"
import Button from "../ui/Button"

function Hero({ t }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 py-20 md:py-24 lg:py-28"
    >
      {/* Glow background orbs */}
      <div className="pointer-events-none absolute -left-24 -top-48 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(33,197,93,0.12)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,216,20,0.06)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-48 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(33,197,93,0.08)_0%,transparent_70%)] blur-3xl" />

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_0%,transparent_100%)]" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div>
          <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#21C55D]/25 bg-[#21C55D]/10 px-4 py-2 text-[13px] font-semibold text-[#B8FFD0]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#21C55D] shadow-[0_0_0_3px_rgba(33,197,93,0.2)] [animation:pulseGreen_2s_ease-in-out_infinite]" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="reveal reveal-delay-1 mb-6 max-w-4xl text-[clamp(42px,5.5vw,72px)] font-black leading-none tracking-[-0.055em] text-[#F0F4F8]">
            {t.hero.titleA}
            <br />
            <span className="bg-gradient-to-br from-white via-[#B8FFD0] to-[#FFD814] bg-clip-text text-transparent">
              {t.hero.titleB}
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mb-9 max-w-[520px] text-[17px] leading-[1.75] text-[#C4CDD6]">
            {t.hero.text}
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
            <Button href="/#products" showArrow>
              {t.hero.primaryButton}
            </Button>

            <Button href="/#contact" variant="secondary">
              {t.hero.secondaryButton}
            </Button>
          </div>
        </div>

        {/* Right card */}
        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[480px] lg:mx-0">
          <div className="rounded-[34px] border border-white/[0.14] bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-[5px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="min-h-[480px] rounded-[28px] border border-white/[0.08] bg-[#0A1724] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[15px] font-black text-[#F0F4F8]">
                  <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#21C55D] text-[15px] font-black text-[#07131F]">
                    C
                  </div>
                  CloveNet
                </div>

                <span className="rounded-full border border-[#21C55D]/25 bg-[#21C55D]/10 px-3 py-1.5 text-[11px] font-bold text-[#B8FFD0]">
                  {t.hero.ecosystem}
                </span>
              </div>

              <div className="mb-4 rounded-[20px] border border-[#21C55D]/15 bg-gradient-to-br from-[#21C55D]/20 to-[#FFD814]/10 p-5">
                <h3 className="mb-2 text-lg font-black leading-tight tracking-[-0.03em] text-[#F0F4F8]">
                  {t.hero.screenTitle}
                </h3>

                <p className="text-[12.5px] leading-[1.6] text-[#C4CDD6]">
                  {t.hero.screenText}
                </p>
              </div>

              <AppMiniRow
                icon={ShoppingBag}
                title="CloveNet Soko"
                text={t.hero.sokoSmall}
                status="live"
              />

              <AppMiniRow
                icon={WalletCards}
                title="BajetiHub"
                text={t.hero.bajetiSmall}
                status="soon"
              />

              <AppMiniRow
                icon={GraduationCap}
                title="CloveNet Hub"
                text={t.hero.hubSmall}
                status="live"
              />

              <AppMiniRow
                icon={Settings}
                title={t.hero.systemsTitle}
                text={t.hero.systemsSmall}
                status="live"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-[14px] border border-[#21C55D]/25 bg-[#0A1724] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.4)] [animation:floatSoft_4s_ease-in-out_infinite] sm:flex">
            <span className="text-xl font-black text-[#21C55D]">3+</span>
            <span className="text-[11px] leading-tight text-[#8A9BAE]">
              Live
              <br />
              Products
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function AppMiniRow({ icon: Icon, title, text, status = "live" }) {
  const isLive = status === "live"

  return (
    <div className="mb-2.5 grid grid-cols-[44px_1fr_12px] items-center gap-3 rounded-[14px] border border-white/[0.08] bg-white/[0.045] p-3 transition hover:border-[#21C55D]/25 hover:bg-[#21C55D]/[0.04] last:mb-0">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#21C55D]/10 text-[#21C55D]">
        <Icon size={22} strokeWidth={2.2} />
      </div>

      <div>
        <h4 className="mb-0.5 text-[13px] font-bold text-[#F0F4F8]">
          {title}
        </h4>

        <p className="text-[11.5px] text-[#8A9BAE]">{text}</p>
      </div>

      <span
        className={`h-2.5 w-2.5 rounded-full ${
          isLive
            ? "bg-[#21C55D] shadow-[0_0_0_4px_rgba(33,197,93,0.12)]"
            : "bg-yellow-500 shadow-[0_0_0_4px_rgba(234,179,8,0.12)]"
        }`}
      />
    </div>
  )
}

export default Hero