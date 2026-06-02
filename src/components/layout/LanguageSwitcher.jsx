function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="flex shrink-0 items-center gap-0.5 rounded-[9px] border border-white/[0.08] bg-white/[0.045] p-[3px]">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`cursor-pointer rounded-[7px] px-3 py-1 text-xs font-semibold tracking-[0.05em] transition ${
          lang === "en"
            ? "bg-[#21C55D] text-[#07131F]"
            : "text-[#8A9BAE] hover:text-[#F0F4F8]"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("sw")}
        className={`cursor-pointer rounded-[7px] px-3 py-1 text-xs font-semibold tracking-[0.05em] transition ${
          lang === "sw"
            ? "bg-[#21C55D] text-[#07131F]"
            : "text-[#8A9BAE] hover:text-[#F0F4F8]"
        }`}
      >
        SW
      </button>
    </div>
  )
}

export default LanguageSwitcher