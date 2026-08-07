'use client'

import { useState } from 'react'
import { clientLogos } from '@/lib/data'

function LogoCard({ logo }) {
  return (
    <div className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-card">
      <img
        src={logo.image}
        alt={logo.name}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}

export default function LogoStrip() {
  const [paused, setPaused] = useState(false)
  const loop = [...clientLogos.logos, ...clientLogos.logos]

  return (
    <section className="mt-10 bg-white py-10">
      <p className="text-center text-xs uppercase tracking-widest text-slate-400">
        {clientLogos.eyebrow}
      </p>

      <div
        className="relative mt-8 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex w-max animate-marquee-left gap-6"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loop.map((logo, i) => (
            <LogoCard key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
