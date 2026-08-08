import Link from 'next/link'
import { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import BlurReveal from '@/components/ui/BlurReveal'
import Button from '@/components/ui/Button'
import { servicesHub, serviceDetails, whatsappHref } from '@/lib/data'

const icons = { Megaphone, ShoppingCart, Share2, Sparkles, Search, Bot }

export const metadata = {
  title: 'Servicios | Diseño web, branding, SEO y automatización con IA | Befive',
  description:
    'Diseño web, ecommerce, branding, gestión de redes sociales, SEO/SEM y automatización con IA. Servicios de Befive Solutions para negocios en Madrid y alrededores.',
}

export default function ServiciosPage() {
  return (
    <>
      <div className="pt-20 md:pt-24" />
      <Section>
        <BlurReveal className="max-w-3xl">
          <Eyebrow>{servicesHub.eyebrow}</Eyebrow>
          <h1 className="text-h2 text-ink-primary">{servicesHub.title}</h1>
          <p className="mt-5 max-w-2xl text-body-lg text-ink-secondary">{servicesHub.intro}</p>
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
                    <h2 className="mt-6 text-h3 text-ink-primary">{service.title}</h2>
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
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-h3 text-ink-primary">¿No sabes por dónde empezar?</h2>
          <p className="max-w-xl text-body text-ink-secondary">
            Cuéntame qué necesita tu negocio y te digo, sin rodeos, qué servicios tienen sentido para ti — sin
            paquetes cerrados ni compromisos.
          </p>
          <Button href={whatsappHref}>Auditoría gratuita</Button>
        </Container>
      </Section>
    </>
  )
}
