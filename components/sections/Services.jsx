import { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import BlurReveal from '@/components/ui/BlurReveal'
import { services } from '@/lib/data'

const icons = { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot }

export default function Services() {
  return (
    <Section id="servicios" bg="secondary">
      <BlurReveal className="max-w-3xl">
        <Eyebrow>{services.eyebrow}</Eyebrow>
        <h2 className="text-h2 text-ink-primary">{services.title}</h2>
      </BlurReveal>

      <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service, i) => {
          const Icon = icons[service.icon]
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <Card hover className="h-full bg-white">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-sm"
                  style={{ backgroundColor: service.bg, color: service.color }}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-h3 text-ink-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{service.description}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-lg max-w-2xl text-body text-ink-secondary">{services.closing}</p>
      </Reveal>
    </Section>
  )
}
