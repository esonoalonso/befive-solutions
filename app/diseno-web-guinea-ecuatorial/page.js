import ServiceLandingContent from '@/components/sections/ServiceLandingContent'
import { getGqPage, buildGqMetadata } from '@/lib/gqPages'

const page = getGqPage('diseno-web-guinea-ecuatorial')

export const metadata = buildGqMetadata(page)

export default function Page() {
  return <ServiceLandingContent page={page} />
}
