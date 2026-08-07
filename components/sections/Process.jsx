import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import BlurReveal from '@/components/ui/BlurReveal'
import { process } from '@/lib/data'

export default function Process() {
  return (
    <Section id="proceso">
      <BlurReveal className="max-w-3xl">
        <Eyebrow>{process.eyebrow}</Eyebrow>
        <h2 className="text-h2 text-ink-primary">{process.title}</h2>
      </BlurReveal>

      <div className="mt-lg grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-6">
        {process.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <div
              className={`flex flex-col gap-4 py-8 md:py-0 ${
                i !== 0 ? 'border-t border-border md:border-t-0 md:border-l md:pl-6' : ''
              }`}
            >
              <span className="text-sm font-semibold text-accent">{step.number}</span>
              <h3 className="text-h3 text-ink-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-secondary">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
