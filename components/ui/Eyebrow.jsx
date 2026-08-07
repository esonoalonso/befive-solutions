export default function Eyebrow({ children, className = '' }) {
  return <p className={`mb-4 text-small uppercase tracking-widest text-accent font-semibold ${className}`}>{children}</p>
}
