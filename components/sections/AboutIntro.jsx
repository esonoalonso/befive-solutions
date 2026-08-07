import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import BlurReveal from '@/components/ui/BlurReveal'
import Reveal from '@/components/ui/Reveal'
import { about } from '@/lib/data'

export default function AboutIntro() {
  return (
    <Section bg="secondary">
      <BlurReveal className="text-center">
        <Eyebrow className="justify-center text-center">{about.eyebrow}</Eyebrow>
        <h2 className="text-h2 text-ink-primary">{about.title}</h2>
        <p className="mt-2 text-body-lg text-ink-secondary">{about.subtitle}</p>
      </BlurReveal>

      <div className="mt-lg grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <img src={about.image} alt="Equipo Befive" className="aspect-[4/5] w-full rounded-lg object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-body-lg leading-relaxed text-ink-secondary">{about.bio}</p>
        </Reveal>
      </div>
    </Section>
  )
}
