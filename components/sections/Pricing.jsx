import { Check, Sparkles } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import BlurReveal from '@/components/ui/BlurReveal'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { pricing } from '@/lib/data'

export default function Pricing() {
  return (
    <Section>
      <BlurReveal className="max-w-3xl">
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <h2 className="text-h2 text-ink-primary">{pricing.title}</h2>
      </BlurReveal>

      <div className="mt-lg grid grid-cols-1 gap-6 lg:grid-cols-2">
        {pricing.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1}>
            <div
              className={`flex h-full flex-col gap-8 rounded-md border p-8 sm:p-10 md:flex-row md:gap-10 ${
                plan.dark ? 'border-ink-primary bg-ink-primary' : 'border-border bg-white'
              }`}
            >
              <div className="flex flex-col gap-6 md:w-[45%]">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-sm ${
                    plan.dark ? 'bg-white/10 text-accent' : 'bg-accent-soft text-accent'
                  }`}
                >
                  <Sparkles size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className={`text-h3 ${plan.dark ? 'text-white' : 'text-ink-primary'}`}>{plan.name}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${plan.dark ? 'text-white/60' : 'text-ink-secondary'}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t pt-4 text-sm"
                  style={{ borderColor: plan.dark ? 'rgba(255,255,255,0.1)' : undefined }}
                >
                  <span className={plan.dark ? 'text-white/40' : 'text-ink-secondary'}>Entrega</span>
                  <span className={`font-medium ${plan.dark ? 'text-white' : 'text-ink-primary'}`}>{plan.delivery}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <div>
                  <p className={`text-3xl font-bold sm:text-4xl ${plan.dark ? 'text-white' : 'text-ink-primary'}`}>
                    {plan.price}
                  </p>
                  <p className={`mt-1.5 text-xs ${plan.dark ? 'text-white/40' : 'text-ink-secondary'}`}>{plan.note}</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.dark ? 'text-white/70' : 'text-ink-secondary'}`}>
                      <Check size={15} className="shrink-0 text-accent" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contacto" variant={plan.dark ? 'primary' : 'secondary'} className="mt-2 !w-fit">
                  Auditoría gratuita
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
