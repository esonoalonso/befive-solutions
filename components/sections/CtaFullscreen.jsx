import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { ctaFullscreen, contact } from '@/lib/data'

export default function CtaFullscreen() {
  const ticker = Array.from({ length: 8 }).map(() => contact.email)

  return (
    <section className="relative flex min-h-[70vh] flex-col overflow-hidden bg-ink-primary text-center">
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div className="flex w-max animate-marquee-left whitespace-nowrap">
          {[...ticker, ...ticker].map((email, i) => (
            <span key={i} className="flex items-center gap-4 px-4 text-sm font-medium text-white/40">
              {email}
              <span className="text-accent">✕</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center py-2xl">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 40%, rgba(37,99,235,0.35) 0%, rgba(10,10,10,0) 70%)',
        }}
      />
      <Container className="relative">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-3xl text-hero text-white">{ctaFullscreen.title}</h2>
          <p className="mt-6 max-w-xl text-body-lg text-white/60">{ctaFullscreen.text}</p>
          <div className="mt-9">
            <Button href={ctaFullscreen.href}>{ctaFullscreen.cta}</Button>
          </div>
        </Reveal>
      </Container>
      </div>
    </section>
  )
}
