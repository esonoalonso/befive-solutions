import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { stats } from '@/lib/data'

export default function Stats() {
  return (
    <Section>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">{stat.value}</span>
            <span className="mt-3 text-sm text-ink-secondary">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
