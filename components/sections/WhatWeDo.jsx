'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import Section from '@/components/ui/Section'
import { whatWeDo } from '@/lib/data'

function PhotoLayer({ image, index, total, scrollYProgress }) {
  const start = index / total
  const mid = (index + 0.5) / total
  const end = (index + 1) / total
  const prevMid = (index - 0.5) / total
  const fadeOutEnd = Math.min(1, end + (mid - start))
  const safeFadeOutEnd = fadeOutEnd > end ? fadeOutEnd : end + 0.0001

  const opacity = useTransform(
    scrollYProgress,
    [prevMid, start, end, safeFadeOutEnd],
    [0, 1, 1, 0]
  )
  const scale = useTransform(scrollYProgress, [start, mid, end], [1.06, 1, 1.06])

  return (
    <motion.img
      src={image}
      alt=""
      style={{ opacity, scale }}
      className="absolute inset-0 h-full w-full rounded-md object-cover"
    />
  )
}

export default function WhatWeDo() {
  const containerRef = useRef(null)
  const total = whatWeDo.items.length
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(total - 1, Math.max(0, Math.floor(v * total))))
  })

  return (
    <Section id="lo-que-hacemos">
      <div ref={containerRef} style={{ height: `${total * 90}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen items-start">
          <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-bg-secondary shadow-card">
              {whatWeDo.items.map((item, i) => (
                <PhotoLayer
                  key={item.label}
                  image={item.image}
                  index={i}
                  total={total}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            <div>
              <p className="mb-6 font-recoleta text-right text-small uppercase tracking-widest text-accent">
                {whatWeDo.eyebrow}
              </p>
              <div className="flex flex-col items-end gap-1 text-right">
                {whatWeDo.items.map((item, i) => (
                  <span
                    key={item.label}
                    className={`text-stack transition-colors duration-500 ${
                      i === active ? 'text-ink-primary' : 'text-ink-primary/10'
                    }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
