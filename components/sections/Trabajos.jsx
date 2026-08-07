'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'
import VerProyectoButton from '@/components/ui/VerProyectoButton'
import { trabajos } from '@/lib/data'

function TrabajoCard({ project, index, total }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className="sticky h-[85vh]"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="flex h-full flex-col gap-6 rounded-[40px] border-2 border-accent/20 bg-white p-4 shadow-card sm:gap-8 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-6xl font-black text-ink-primary sm:text-7xl">{project.number}</span>
            <div>
              <p className="text-small uppercase tracking-widest text-ink-secondary">{project.category}</p>
              <p className="mt-1 text-2xl font-bold text-ink-primary sm:text-3xl">{project.name}</p>
            </div>
          </div>
          <VerProyectoButton />
        </div>

        <div className="grid flex-1 grid-cols-[40%_60%] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={project.images[0]}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images[1]}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <img
            src={project.images[2]}
            alt={project.name}
            loading="lazy"
            className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function Trabajos() {
  const total = trabajos.length

  return (
    <section id="trabajos" className="relative -mt-10 z-10 rounded-t-[40px] bg-bg-primary pb-2xl pt-xl sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]">
      <Container>
        <h2
          className="text-h2 bg-clip-text font-black uppercase leading-none tracking-tight text-transparent"
          style={{ backgroundImage: 'linear-gradient(180deg, #2563EB 0%, #93C5FD 100%)' }}
        >
          Trabajos
        </h2>

        <div className="mt-lg flex flex-col gap-8">
          {trabajos.map((project, i) => (
            <TrabajoCard key={project.number} project={project} index={i} total={total} />
          ))}
        </div>
      </Container>
    </section>
  )
}
