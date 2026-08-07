import { Quote, Star } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import BlurReveal from '@/components/ui/BlurReveal'
import Reveal from '@/components/ui/Reveal'
import { testimonials } from '@/lib/data'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} strokeWidth={0} fill={i < rating ? 'currentColor' : '#E7E9EC'} />
      ))}
    </div>
  )
}

function Card({ t }) {
  if (t.featured) {
    return (
      <div className="overflow-hidden rounded-md bg-ink-primary">
        <img src={t.photo} alt={t.author} className="h-56 w-full object-cover" />
        <div className="p-6">
          <p className="text-sm leading-relaxed text-white">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
            <p className="text-sm font-semibold text-white">{t.author}</p>
            <span className="text-white/30">·</span>
            <p className="text-sm text-white/50">{t.role}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-border bg-white p-6">
      <div className="flex items-center justify-between">
        <Quote className="text-accent" size={22} strokeWidth={1.5} />
        <img src={t.avatar} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink-primary">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold text-ink-primary">{t.author}</p>
        <p className="text-xs text-ink-secondary">{t.role}</p>
        {t.rating && (
          <div className="mt-2">
            <Stars rating={t.rating} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const columns = [[], [], []]
  testimonials.forEach((t, i) => columns[i % 3].push(t))

  return (
    <Section bg="secondary">
      <BlurReveal className="max-w-3xl">
        <Eyebrow>(Por qué confían en nosotros)</Eyebrow>
        <h2 className="text-h2 text-ink-primary">Lo que dicen nuestros clientes</h2>
      </BlurReveal>

      <div className="mt-lg grid grid-cols-1 gap-5 md:grid-cols-3">
        {columns.map((col, ci) => (
          <div key={ci} className={`flex flex-col gap-5 ${ci === 1 ? 'md:mt-10' : ''}`}>
            {col.map((t, i) => (
              <Reveal key={t.author} delay={(ci * col.length + i) * 0.06}>
                <Card t={t} />
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
