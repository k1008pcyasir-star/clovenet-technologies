function ServiceCard({ service, lang }) {
  const Icon = service.icon

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#21C55D]/45 hover:bg-[#21C55D]/[0.04]">
      <div className="relative">
        <div className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-[#21C55D]/10 text-[#21C55D]">
          <Icon size={24} strokeWidth={2.2} />
        </div>

        <h3 className="mb-2.5 text-[17px] font-bold tracking-[-0.01em] text-[#F0F4F8]">
          {service.title[lang]}
        </h3>

        <p className="text-[13.5px] leading-[1.7] text-[#8A9BAE]">
          {service.description[lang]}
        </p>
      </div>
    </article>
  )
}

export default ServiceCard