import { Star, Sparkles, Bot, Layers, MessageCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import BlurReveal from '@/components/ui/BlurReveal'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { stats, whyUs, testimonials, nav, whatsappHref } from '@/lib/data'

const avatars = testimonials.slice(0, 4).map((t) => t.avatar)
const BLUE_GRADIENT = 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)'

export default function WhyUs() {
  const [iconsCard, photoCard, chatCard] = whyUs.featureCards

  return (
    <Section bg="secondary">
      <BlurReveal>
        <Eyebrow>{whyUs.eyebrow}</Eyebrow>
        <h2 className="text-h2 text-ink-primary">{whyUs.title}</h2>
      </BlurReveal>

      <div className="mt-lg grid grid-cols-1 gap-5 md:grid-cols-3">
        <Reveal>
          <div className="noise-bg relative h-full overflow-hidden rounded-md bg-ink-primary p-8">
            <div className="relative grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs leading-snug text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between rounded-md border border-border bg-white p-8">
            <div>
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-secondary">Resultados para clientes en varios países</p>
            </div>
            <div className="mt-8 flex -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <img src={nav.logoImage} alt={nav.logo} className="mt-6 h-7 w-auto self-start" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-md bg-ink-primary p-8">
            <div>
              <h3 className="text-h3 text-white">{whyUs.focusTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{whyUs.focusText}</p>
            </div>
            <Button
              href={whatsappHref}
              variant="none"
              className="mt-8 !w-fit text-white"
              style={{ backgroundImage: BLUE_GRADIENT }}
            >
              Hablemos
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex h-full flex-col justify-between rounded-md border border-border bg-white p-6">
            <div>
              <h4 className="text-base font-semibold text-ink-primary">{iconsCard.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">{iconsCard.text}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[Sparkles, Bot, Layers].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-primary text-white"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full min-h-[220px] overflow-hidden rounded-md">
            <img
              src={photoCard.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex h-full flex-col justify-between rounded-md border border-border bg-white p-6">
            <div>
              <h4 className="text-base font-semibold text-ink-primary">{chatCard.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">{chatCard.text}</p>
            </div>
            <div className="mt-6 flex w-fit items-center gap-2 rounded-pill bg-bg-secondary px-3.5 py-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                <MessageCircle size={12} strokeWidth={2} />
              </span>
              <span className="text-xs font-medium text-ink-primary">{chatCard.chatBubble}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
