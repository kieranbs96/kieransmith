import { BackLink } from '@/components/back-link'
import { ExperienceList } from '@/components/experience-list'
import { SiteFooter } from '@/components/site-footer'
import { StructuredData } from '@/components/structured-data'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/experience',
  'Frontend Engineering Experience · Kieran Smith',
  'Explore Kieran Smith’s frontend engineering experience at Global, Education First, Conversion and SellerDeck, building for the web since 2015.',
)

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-5 py-14 sm:py-20">
      <StructuredData data={breadcrumbSchema('/experience', 'Experience')} />
      <BackLink currentPage="Experience" />

      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Experience
        </h1>
        <p className="text-muted-foreground">Building for the web since 2015.</p>
      </header>

      <ExperienceList />
      <SiteFooter />
    </main>
  )
}
