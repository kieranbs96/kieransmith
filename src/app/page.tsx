import { LinkList } from '@/components/link-list'
import { ProfileHeader } from '@/components/profile-header'
import { SiteFooter } from '@/components/site-footer'
import { SocialRow } from '@/components/social-row'
import { StructuredData } from '@/components/structured-data'
import { profile, socialLinks } from '@/lib/content'
import { pageMetadata, SITE_URL } from '@/lib/seo'

export const metadata = pageMetadata(
  '/',
  'Kieran Smith · React & Next.js Software Engineer, London',
  'Kieran Smith is a software engineer at Global in London, building with React, Next.js and TypeScript. Explore his experience, projects and CV.',
)

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/`,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: profile.name,
    url: `${SITE_URL}/`,
    jobTitle: 'Software Engineer',
    description: profile.bio,
    sameAs: socialLinks.filter((link) => link.href.startsWith('https://')).map((link) => link.href),
  },
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-10 px-5 py-14 sm:py-20">
      <StructuredData data={profileSchema} />
      <div className="flex flex-col gap-4">
        <ProfileHeader />
        <SocialRow />
      </div>
      <LinkList />
      <SiteFooter />
    </main>
  )
}
