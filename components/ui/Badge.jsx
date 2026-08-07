export default function Badge({ children, dot = true, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill border border-border bg-white px-4 py-2 text-small text-ink-secondary normal-case tracking-normal font-medium ${className}`}
    >
      {dot && <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>}
      {children}
    </span>
  )
}
