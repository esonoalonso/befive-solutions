'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { nav } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <Container className="!px-0">
        <div
          className={`flex items-center justify-between rounded-pill border px-5 py-3 transition-all duration-300 ease-out ${
            scrolled
              ? 'border-border bg-white/90 shadow-nav backdrop-blur-md'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link href="#top" className="flex items-center">
            <img
              src={nav.logoImage}
              alt={nav.logo}
              className="h-7 w-auto transition-all duration-300"
              style={scrolled ? undefined : { filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] transition-colors duration-300 ${
                  scrolled ? 'text-ink-secondary hover:text-ink-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={nav.cta.href} className="!py-2.5 !px-5 !text-sm">
              {nav.cta.label}
            </Button>
          </div>

          <button
            className={`flex items-center justify-center rounded-full p-2 transition-colors duration-300 md:hidden ${
              scrolled ? 'text-ink-primary' : 'text-white'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-md border border-border bg-white p-4 shadow-nav md:hidden">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2.5 text-[15px] text-ink-secondary hover:bg-bg-secondary hover:text-ink-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button href={nav.cta.href} className="mt-2 w-full" onClick={() => setOpen(false)}>
              {nav.cta.label}
            </Button>
          </div>
        )}
      </Container>
    </header>
  )
}
