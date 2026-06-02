import { Home, SearchX } from "lucide-react"
import Button from "../components/ui/Button"

function NotFoundPage({ t }) {
  return (
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#07131F] px-5 py-20 text-white">
      <div className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(33,197,93,0.12)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_0%,transparent_100%)]" />

      <div className="reveal relative max-w-xl text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-3xl border border-[#21C55D]/25 bg-[#21C55D]/10 text-[#21C55D]">
          <SearchX size={32} strokeWidth={2.3} />
        </div>

        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#21C55D]">
          404
        </p>

        <h1 className="text-[clamp(36px,6vw,64px)] font-black leading-none tracking-[-0.05em] text-[#F0F4F8]">
          {t.notFound.title}
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#C4CDD6] md:text-lg">
          {t.notFound.text}
        </p>

        <div className="mt-8 flex justify-center">
          <Button href="/" showArrow>
            <Home size={16} strokeWidth={2.4} />
            {t.notFound.button}
          </Button>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage