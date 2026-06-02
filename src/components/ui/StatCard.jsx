function StatCard({ number, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-[18px]">
      <div className="mb-1.5 text-[26px] font-black leading-none tracking-[-0.03em] text-[#07131F]">
        {number}
      </div>

      <div className="text-[12.5px] font-semibold leading-snug text-slate-500">
        {label}
      </div>
    </div>
  )
}

export default StatCard