'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { hero, whatWeDo, whatsappHref } from '@/lib/data'

const menuItems = whatWeDo.items.map((item) => item.label)
const menuHalf = Array(4).fill(menuItems).flat()
const menuLoop = [...menuHalf, ...menuHalf]

const easeOut = [0.22, 1, 0.36, 1]

const BLUE_GRADIENT = 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)'

export default function Hero() {
  return (
    <div id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-[#0A0E17]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src="/hero-befive.mp4"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 72%, #FFFFFF 100%)' }}
        />
      </div>

      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-16 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
          className="mt-7 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:text-7xl"
        >
          <span className="block text-white">{hero.titleLine1}</span>
          <span
            className="animate-shiny block"
            style={{
              backgroundImage:
                'linear-gradient(to right, #0A0E17 0%, #1D4ED8 20%, #93C5FD 45%, #2563EB 65%, #1D4ED8 85%, #0A0E17 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              filter: 'url(#c3-noise)',
            }}
          >
            {hero.titleLine2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
          className="mx-auto mt-8 max-w-md text-base leading-[1.5] text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] md:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.7 }}
          className="mt-9 flex flex-col items-center gap-4"
        >
          <a
            href={whatsappHref}
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(29,78,216,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundImage: BLUE_GRADIENT }}
          >
            {hero.cta}
            <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-[1px]" />
          </a>
          <p className="text-xs text-white/50">{hero.microtext}</p>
        </motion.div>
      </section>

      <div className="relative z-10 h-10 overflow-hidden border-b border-t border-border bg-white/80 backdrop-blur-md">
        <div className="flex h-full animate-marquee-left items-center whitespace-nowrap [animation-duration:16s] sm:[animation-duration:24s] md:[animation-duration:40s]">
          {menuLoop.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 px-4 text-xs font-medium uppercase tracking-widest text-ink-secondary"
            >
              {item}
              <span className="text-border">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
