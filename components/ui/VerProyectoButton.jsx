export default function VerProyectoButton({ href = '#', className = '' }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex shrink-0 items-center rounded-full border-2 border-accent px-8 py-3 text-sm font-medium uppercase tracking-widest text-accent transition-colors duration-200 hover:bg-accent/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      Ver proyecto
    </a>
  )
}
