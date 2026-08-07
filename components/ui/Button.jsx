import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Button({
  href,
  children,
  variant = 'primary',
  icon = true,
  className = '',
  onClick,
  type,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-[15px] font-medium transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-[0_1px_2px_rgba(37,99,235,0.15)]',
    secondary: 'bg-transparent text-ink-primary border border-border hover:border-ink-primary/30 hover:bg-bg-secondary',
    dark: 'bg-ink-primary text-white hover:bg-black',
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={16} strokeWidth={2.25} />}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  )
}
