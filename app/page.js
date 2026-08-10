import Hero from '@/components/sections/Hero'
import ClientMarquee from '@/components/sections/ClientMarquee'
import LogoStrip from '@/components/sections/LogoStrip'
import WhyUs from '@/components/sections/WhyUs'
import WhatWeDo from '@/components/sections/WhatWeDo'
import Trabajos from '@/components/sections/Trabajos'
import Testimonials from '@/components/sections/Testimonials'
import Process from '@/components/sections/Process'
import AboutIntro from '@/components/sections/AboutIntro'
import Pricing from '@/components/sections/Pricing'
import CtaFullscreen from '@/components/sections/CtaFullscreen'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ClientMarquee />
      <WhyUs />
      <WhatWeDo />
      <Trabajos />
      <Testimonials />
      <Process />
      <AboutIntro />
      <Pricing />
      <CtaFullscreen />
    </>
  )
}
