import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const recoleta = localFont({ src: './fonts/RecoletaAltSemiBold.otf', variable: '--font-recoleta' })

export const metadata = {
  title: 'Befive Solutions — Diseño, tecnología y automatización con IA',
  description:
    'Diseño, tecnología y automatización con IA para marcas que quieren crecer de verdad. Desarrollo web, ecommerce, branding, SEO y gestión de redes sociales.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${recoleta.variable} bg-bg-primary font-sans text-ink-primary antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
