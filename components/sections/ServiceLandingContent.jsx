import Link from 'next/link'
import { Check, ArrowRight, ShieldCheck } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import BlurReveal from '@/components/ui/BlurReveal'
import Button from '@/components/ui/Button'
import { gqPages, gqWhatsappHref, siteUrl } from '@/lib/gqPages'

function buildJsonLd(page) {
  const url = `${siteUrl}/${page.slug}`
  const provider = { '@type': 'Organization', name: 'Befive Solutions', url: siteUrl }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h1,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url,
        provider,
        areaServed: [
          { '@type': 'Country', name: 'Guinea Ecuatorial' },
          { '@type': 'City', name: 'Malabo' },
          { '@type': 'City', name: 'Bata' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: page.footerLabel, item: url },
        ],
      },
    ],
  }
}

export default function ServiceLandingContent({ page }) {
  const cta = gqWhatsappHref(page.ctaMessage)
  const related = page.related.map((r) => ({ ...r, page: gqPages.find((p) => p.slug === r.slug) }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }} />
      <div className="pt-20 md:pt-24" />

      <Section>
        <BlurReveal className="max-w-4xl">
          <Eyebrow>({page.eyebrow})</Eyebrow>
          <h1 className="text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-ink-primary">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-ink-secondary">{page.subtitle}</p>
          <div className="mt-8">
            <Button href={cta}>{page.ctaLabel}</Button>
          </div>
        </BlurReveal>
      </Section>

      <Section bg="secondary">
        <BlurReveal className="max-w-3xl">
          <Eyebrow>(El problema)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.problem.title}</h2>
          <p className="mt-5 text-body leading-relaxed text-ink-secondary">{page.problem.text}</p>
        </BlurReveal>
        <ul className="mt-lg grid grid-cols-1 gap-5 md:grid-cols-3">
          {page.problem.points.map((point, i) => (
            <Reveal key={point} delay={i * 0.08}>
              <Card className="h-full bg-white">
                <p className="text-sm leading-relaxed text-ink-primary">{point}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(La solución)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.solutionsTitle}</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.solutions.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <Card className="h-full bg-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {page.callout && (
        <Section bg="secondary">
          <BlurReveal className="max-w-3xl">
            <Eyebrow>(API oficial)</Eyebrow>
            <h2 className="text-h3 text-ink-primary">{page.callout.title}</h2>
            <p className="mt-5 text-body leading-relaxed text-ink-secondary">{page.callout.intro}</p>
          </BlurReveal>
          <div className="mt-lg grid grid-cols-1 gap-5 md:grid-cols-2">
            {page.callout.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.08}>
                <Card className="h-full bg-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <ShieldCheck size={16} strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {page.showcase && (
        <Section bg={page.callout ? 'primary' : 'secondary'}>
          <BlurReveal className="max-w-2xl">
            <Eyebrow>(Trabajos)</Eyebrow>
            <h2 className="text-h3 text-ink-primary">{page.showcase.title}</h2>
          </BlurReveal>
          <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-3">
            {page.showcase.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="overflow-hidden rounded-md border border-border">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width="1800"
                      height="1040"
                      className="aspect-[1800/1040] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink-primary group-hover:text-accent">{item.name}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section bg={page.showcase && !page.callout ? 'primary' : 'secondary'}>
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Beneficios)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.benefitsTitle}</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-2">
          {page.benefits.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08}>
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
          <Eyebrow>(Casos de uso)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.useCasesTitle}</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-8 md:grid-cols-3">
          {page.useCases.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <h3 className="border-t border-border pt-5 text-base font-semibold text-ink-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="secondary">
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Proceso)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.processTitle}</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {page.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <p className="text-3xl font-bold text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-base font-semibold text-ink-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Por qué Befive)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">{page.differenceTitle}</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 sm:grid-cols-3">
          {page.difference.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full bg-white">
                <h3 className="text-base font-semibold text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.text}</p>
              </Card>
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
          {page.faqs.map((faq, i) => (
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
        <BlurReveal className="max-w-2xl">
          <Eyebrow>(Servicios relacionados)</Eyebrow>
          <h2 className="text-h3 text-ink-primary">Lo que suele ir de la mano</h2>
        </BlurReveal>
        <div className="mt-lg grid grid-cols-1 gap-5 md:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <Link href={`/${item.slug}`} className="block h-full">
                <Card hover className="h-full bg-white">
                  <h3 className="text-base font-semibold text-ink-primary">{item.page.footerLabel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{item.reason}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Ver servicio
                    <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="secondary">
        <Container className="flex flex-col items-center gap-6 rounded-md bg-ink-primary px-6 py-14 text-center sm:px-12">
          <h2 className="max-w-xl text-h3 text-white">{page.ctaTitle}</h2>
          <p className="max-w-lg text-body text-white/60">{page.ctaText}</p>
          <Button href={cta}>{page.ctaLabel}</Button>
        </Container>
      </Section>
    </>
  )
}
