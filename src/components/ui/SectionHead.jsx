function SectionHead({ eyebrow, title, text, align = "left", dark = true }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left"

  const titleColor = dark ? "text-[#F0F4F8]" : "text-[#07131F]"
  const textColor = dark ? "text-[#C4CDD6]" : "text-slate-500"
  const eyebrowColor = dark ? "text-[#21C55D]" : "text-[#17A34A]"

  return (
    <div className={`mb-14 max-w-[640px] ${alignment}`}>
      {eyebrow && (
        <span
          className={`mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`mb-4 text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.045em] ${titleColor}`}
      >
        {title}
      </h2>

      {text && (
        <p className={`text-[17px] leading-[1.75] ${textColor}`}>
          {text}
        </p>
      )}
    </div>
  )
}

export default SectionHead