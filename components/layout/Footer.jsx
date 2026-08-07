'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Linkedin, ArrowUp, Mail, Phone, Clock } from 'lucide-react'
import Container from '@/components/ui/Container'
import { footer, nav, contact } from '@/lib/data'

const contactItems = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` },
  { icon: Clock, label: contact.hours, href: null },
]

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Europe/Madrid',
        }).format(new Date())
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative overflow-hidden bg-ink-primary pt-2xl">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background: 'radial-gradient(60% 100% at 50% 100%, rgba(37,99,235,0.45) 0%, rgba(10,10,10,0) 75%)',
        }}
      />

      <Container className="relative">
        <div className="flex flex-col gap-lg pb-lg sm:flex-row sm:items-start sm:justify-between">
          <div>
            <img src={nav.logoImage} alt={nav.logo} className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="mt-3 max-w-xs text-sm text-white/50">
              Diseño, tecnología y automatización con IA para marcas que quieren crecer de verdad.
            </p>
          </div>

          <div className="flex flex-col gap-lg sm:flex-row sm:gap-16 lg:gap-20">
            <div>
              <p className="mb-4 text-small uppercase tracking-widest text-white/40">Navegación</p>
              <ul className="flex flex-col gap-2.5">
                {footer.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm font-medium text-white/80 hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-small uppercase tracking-widest text-white/40">Contacto</p>
              <ul className="flex flex-col gap-2.5">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const inner = (
                    <span className="flex items-start gap-2 text-sm font-medium text-white/80 transition-colors group-hover:text-accent">
                      <Icon size={14} className="mt-0.5 shrink-0" />
                      <span className="max-w-[220px]">{item.label}</span>
                    </span>
                  )
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="group"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-small uppercase tracking-widest text-white/40">Redes</p>
              <ul className="flex flex-col gap-2.5">
                {footer.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-accent"
                    >
                      <Linkedin size={14} />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <p className="flex items-center gap-2 text-xs text-white/40">
            <span>{footer.location}</span>
            <span>→</span>
            <span className="tabular-nums">{time}</span>
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-white"
          >
            Volver arriba
            <ArrowUp size={13} />
          </a>
        </div>

        <div className="select-none overflow-hidden pb-6 pt-4 text-center leading-none">
          <span
            className="text-wordmark inline-block bg-gradient-to-b from-white/90 to-white/10 bg-clip-text text-transparent"
          >
            {nav.logo}
          </span>
        </div>
      </Container>
    </footer>
  )
}
