import LocalLandingContent from '@/components/sections/LocalLandingContent'
import { localPages } from '@/lib/data'

const page = localPages.find((p) => p.slug === 'agencia-marketing-alcala-de-henares')

export const metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
}

export default function AgenciaMarketingAlcalaDeHenaresPage() {
  return <LocalLandingContent page={page} />
}
