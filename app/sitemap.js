import { serviceDetails, localPages } from '@/lib/data'
import { gqPages, siteUrl } from '@/lib/gqPages'

export default function sitemap() {
  const paths = [
    '',
    '/servicios',
    ...serviceDetails.map((s) => `/servicios/${s.slug}`),
    ...localPages.map((p) => `/${p.slug}`),
    ...gqPages.map((p) => `/${p.slug}`),
  ]
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() }))
}
