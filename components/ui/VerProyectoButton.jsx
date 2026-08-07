export default function VerProyectoButton({ className = '', ...props }) {
  return (
    <button
      className={`rounded-full border-2 border-accent px-8 py-3 text-sm font-medium uppercase tracking-widest text-accent transition-colors duration-200 hover:bg-accent/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
      {...props}
    >
      Ver proyecto
    </button>
  )
}
