import type { Metadata } from 'next'

export const SITE_URL = 'https://www.kieransmith.co.uk'

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Kieran Smith',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export function breadcrumbSchema(path: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Kieran Smith', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }
}
