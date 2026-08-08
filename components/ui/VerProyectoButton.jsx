const BLUE_GRADIENT = 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)'

export default function VerProyectoButton({ href = '#', className = '' }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{ backgroundImage: BLUE_GRADIENT }}
      className={`inline-flex shrink-0 items-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-[0_1px_6px_rgba(29,78,216,0.35)] transition-transform duration-200 hover:scale-[1.02] sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      Ver proyecto
    </a>
  )
}
