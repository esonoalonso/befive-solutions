import LocalLandingContent from '@/components/sections/LocalLandingContent'
import { localPages } from '@/lib/data'

const page = localPages.find((p) => p.slug === 'agencia-marketing-azuqueca-de-henares')

export const metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function AgenciaMarketingAzuquecaDeHenaresPage() {
  return <LocalLandingContent page={page} />
}
