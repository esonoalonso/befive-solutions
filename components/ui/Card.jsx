export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`rounded-md border border-border bg-white p-8 shadow-card ${
        hover ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
