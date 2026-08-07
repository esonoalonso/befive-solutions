import { Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import BlurReveal from '@/components/ui/BlurReveal'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { pricing, whatsappHref } from '@/lib/data'

const GOLD_BG_GRADIENT = 'linear-gradient(135deg, #D4AF37 0%, #FCF6BA 22%, #BF953F 45%, #FBF5B7 68%, #AA771C 90%, #D4AF37 100%)'
const METALLIC_GOLD_GRADIENT =
  'linear-gradient(135deg, #BF953F 0%, #FCF6BA 20%, #AA771C 40%, #FFF3C4 60%, #B38728 80%, #FCF6BA 100%)'
const METALLIC_BLUE_SILVER_GRADIENT =
  'linear-gradient(135deg, #DCE2EA 0%, #F7F9FC 16%, #A9B8CC 36%, #FFFFFF 55%, #B7C3D6 75%, #E4E8EE 100%)'

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
              className={`flex h-full flex-col gap-8 rounded-md p-8 sm:p-10 md:flex-row md:gap-10 ${
                plan.gold ? '' : 'border border-border'
              }`}
              style={
                plan.gold
                  ? { backgroundImage: GOLD_BG_GRADIENT }
                  : { backgroundImage: 'linear-gradient(160deg, #FFFFFF 0%, #F7F9FF 55%, #EFF4FF 100%)' }
              }
            >
              <div className="flex flex-col gap-6 md:w-[45%]">
                <div>
                  <h3 className="text-h3 font-bold" style={{ color: '#0A0A0A' }}>
                    {plan.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${plan.gold ? 'text-[#0A0A0A]/70' : 'text-ink-secondary'}`}>
                    {plan.description}
                  </p>
                </div>
                <div
                  className="mt-auto flex items-center justify-between border-t pt-4 text-sm"
                  style={{ borderColor: plan.gold ? 'rgba(10,10,10,0.18)' : '#E7E9EC' }}
                >
                  <span className={plan.gold ? 'text-[#0A0A0A]/60' : 'text-ink-secondary'}>Entrega</span>
                  <span className={`font-medium ${plan.gold ? 'text-[#0A0A0A]' : 'text-ink-primary'}`}>{plan.delivery}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <div>
                  <p className={`text-3xl font-bold sm:text-4xl ${plan.gold ? 'text-[#0A0A0A]' : 'text-ink-primary'}`}>
                    {plan.price}
                  </p>
                  <p className={`mt-1.5 text-xs ${plan.gold ? 'text-[#0A0A0A]/60' : 'text-ink-secondary'}`}>{plan.note}</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.gold ? 'text-[#0A0A0A]/80' : 'text-ink-secondary'}`}>
                      <Check
                        size={15}
                        className="shrink-0"
                        strokeWidth={2.5}
                        style={{ color: plan.gold ? '#0A0A0A' : '#2563EB' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={whatsappHref}
                  variant="none"
                  className="animate-shiny mt-2 !w-fit font-semibold text-[#0A0A0A] shadow-[0_1px_2px_rgba(0,0,0,0.15)] hover:brightness-105"
                  style={{
                    backgroundImage: plan.gold ? METALLIC_GOLD_GRADIENT : METALLIC_BLUE_SILVER_GRADIENT,
                    backgroundSize: '200% auto',
                  }}
                >
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
