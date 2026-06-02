import { ArrowRight } from "lucide-react"

function ProductCard({ product, lang, t }) {
  const Icon = product.icon
  const isLive = product.status === "Live"

  const statusLabel = isLive
    ? t.products.statusLive || "Live"
    : t.products.statusDev || "In development"

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A1724] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#21C55D]/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(33,197,93,0.08)_0%,transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#21C55D]/10 text-[#21C55D]">
          <Icon size={26} strokeWidth={2.2} />
        </div>

        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-[19px] font-black leading-tight tracking-[-0.02em] text-[#F0F4F8]">
            {product.title}
          </h3>

          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
              isLive
                ? "border-[#21C55D]/25 bg-[#21C55D]/10 text-[#B8FFD0]"
                : "border-yellow-500/25 bg-yellow-500/10 text-yellow-200"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isLive ? "bg-[#21C55D]" : "bg-yellow-500"
              }`}
            />
            {statusLabel}
          </span>
        </div>

        <p className="mb-5 text-sm leading-[1.7] text-[#8A9BAE]">
          {product.description[lang]}
        </p>

        <a
          href={product.url}
          target={product.isExternal ? "_blank" : undefined}
          rel={product.isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#B8FFD0] transition hover:gap-2.5 hover:text-[#21C55D]"
        >
          {product.linkLabel[lang].replace(" →", "")}
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </article>
  )
}

export default ProductCard