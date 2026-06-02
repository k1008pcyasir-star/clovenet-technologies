import { ArrowRight } from "lucide-react"

function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  showArrow = false,
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5"

  const variants = {
    primary:
      "bg-[#21C55D] text-[#07131F] shadow-[0_8px_32px_rgba(33,197,93,0.25)] hover:bg-[#2EE66D] hover:shadow-[0_12px_40px_rgba(33,197,93,0.4)]",
    secondary:
      "border border-white/[0.08] bg-white/[0.045] text-[#F0F4F8] hover:border-white/[0.15] hover:bg-white/[0.075]",
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={`group ${classes}`}>
      {content}
    </button>
  )
}

export default Button