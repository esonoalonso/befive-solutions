'use client'

import { useEffect, useRef } from 'react'
import { clientMarquee } from '@/lib/data'

const mid = Math.ceil(clientMarquee.length / 2)
const row1Source = clientMarquee.slice(0, mid)
const row2Source = clientMarquee.slice(mid)
const row1 = [...row1Source, ...row1Source, ...row1Source]
const row2 = [...row2Source, ...row2Source, ...row2Source]

function Tile({ item }) {
  return (
    <img
      src={item.image}
      alt={item.name}
      loading="lazy"
      width={420}
      height={270}
      className="h-[105px] w-[160px] shrink-0 rounded-xl border border-border object-cover sm:h-[170px] sm:w-[260px] sm:rounded-2xl md:h-[270px] md:w-[420px]"
    />
  )
}

export default function ClientMarquee() {
  const sectionRef = useRef(null)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3

      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-bg-secondary pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {row1.map((item, i) => (
            <Tile key={`r1-${i}`} item={item} />
          ))}
        </div>
        <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {row2.map((item, i) => (
            <Tile key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
