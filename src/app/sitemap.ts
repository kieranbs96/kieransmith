import type { MetadataRoute } from 'next'

import { projects } from '@/lib/content'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/experience', ...projects.map((project) => `/projects/${project.slug}`)].map(
    (path) => ({ url: `${SITE_URL}${path}` }),
  )
}
