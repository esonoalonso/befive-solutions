import Link from 'next/link'
import { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot, MapPin, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import BlurReveal from '@/components/ui/BlurReveal'
import Button from '@/components/ui/Button'
import { serviceDetails, whatsappHref } from '@/lib/data'

const icons = { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot }

export default function LocalLandingContent({ page }) {
  return (
    <>
      <div className="pt-20 md:pt-24" />
      <Section>
        <BlurReveal className="max-w-3xl">
          <Eyebrow>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} />
              {page.city}
            </span>
          </Eyebrow>
          <h1 className="text-h2 text-ink-primary">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-ink-secondary">{page.intro}</p>
          <div className="mt-8">
            <Button href={whatsappHref}>Auditoría gratuita</Button>
          </div>
        </BlurReveal>
      </Section>

      <Section bg="secondary">
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Por qué Befive)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">Marketing digital cercano, sin agencia grande de por medio</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-3">
          {page.whyLocal.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full bg-white">
                <h3 className="text-base font-semibold text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Servicios)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.servicesIntro}</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link href={`/servicios/${service.slug}`} className="block h-full">
                  <Card hover className="h-full bg-white">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-sm"
                      style={{ backgroundColor: service.bg, color: service.color }}
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-ink-primary">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{service.shortDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Ver servicio
                      <ArrowRight size={14} />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section bg="secondary">
        <Container className="flex flex-col items-center gap-6 rounded-md bg-ink-primary px-6 py-14 text-center sm:px-12">
          <h2 className="max-w-xl text-h3 text-white">¿Hablamos de tu proyecto en {page.city}?</h2>
          <p className="max-w-lg text-body text-white/60">
            Auditoría gratuita y sin compromiso: te digo qué está fallando y qué haría distinto.
          </p>
          <Button href={whatsappHref}>Auditoría gratuita</Button>
        </Container>
      </Section>
    </>
  )
}
