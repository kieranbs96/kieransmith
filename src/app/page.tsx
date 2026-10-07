import { LinkList } from '@/components/link-list'
import { ProfileHeader } from '@/components/profile-header'
import { SiteFooter } from '@/components/site-footer'
import { SocialRow } from '@/components/social-row'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-10 px-5 py-14 sm:py-20">
      <div className="flex flex-col gap-4">
        <ProfileHeader />
        <SocialRow />
      </div>
      <LinkList />
      <SiteFooter />
    </main>
  )
}
