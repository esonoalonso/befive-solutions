import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot, Check, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import BlurReveal from '@/components/ui/BlurReveal'
import Button from '@/components/ui/Button'
import { serviceDetails, whatsappHref } from '@/lib/data'

const icons = { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot }

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }) {
  const service = serviceDetails.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = serviceDetails.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const Icon = icons[service.icon]
  const otherServices = serviceDetails.filter((s) => s.slug !== service.slug)

  return (
    <>
      <div className="pt-20 md:pt-24" />
      <Section>
        <BlurReveal className="max-w-3xl">
          <Link href="/servicios" className="mb-4 inline-block text-small uppercase tracking-widest text-ink-secondary hover:text-ink-primary">
            ← Todos los servicios
          </Link>
          <div className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
              style={{ backgroundColor: service.bg, color: service.color }}
            >
              <Icon size={22} strokeWidth={1.75} />
            </span>
            <h1 className="text-h2 text-ink-primary">{service.title}</h1>
          </div>
          <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-ink-secondary">{service.heroSubtitle}</p>
          <div className="mt-8">
            <Button href={whatsappHref}>Auditoría gratuita</Button>
          </div>
        </BlurReveal>
      </Section>

      <Section bg="secondary">
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Por qué funciona)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">Lo que incluye este servicio</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-2">
          {service.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 2) * 0.08}>
              <Card className="h-full bg-white">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: service.bg, color: service.color }}
                >
                  <Check size={16} strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-primary">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{benefit.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Proceso)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">Cómo lo trabajamos</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <p className="text-3xl font-bold" style={{ color: service.color }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-base font-semibold text-ink-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="secondary">
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Preguntas frecuentes)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">Dudas habituales</h2>
        </BlurReveal>
        <div className="mt-lg flex max-w-3xl flex-col gap-5">
          {service.faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.06}>
              <Card className="bg-white">
                <h3 className="text-base font-semibold text-ink-primary">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{faq.a}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="flex flex-col items-center gap-6 rounded-md bg-ink-primary px-6 py-14 text-center sm:px-12">
          <h2 className="max-w-xl text-h3 text-white">¿Hablamos de tu proyecto?</h2>
          <p className="max-w-lg text-body text-white/60">
            Auditoría gratuita y sin compromiso: te digo qué está fallando y qué haría distinto.
          </p>
          <Button href={whatsappHref}>Auditoría gratuita</Button>
        </Container>
      </Section>

      <Section bg="secondary">
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Más servicios)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">También te puede interesar</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((other, i) => {
            const OtherIcon = icons[other.icon]
            return (
              <Reveal key={other.slug} delay={(i % 3) * 0.08}>
                <Link href={`/servicios/${other.slug}`} className="block h-full">
                  <Card hover className="h-full bg-white">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-sm"
                      style={{ backgroundColor: other.bg, color: other.color }}
                    >
                      <OtherIcon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-ink-primary">{other.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{other.shortDescription}</p>
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
    </>
  )
}
