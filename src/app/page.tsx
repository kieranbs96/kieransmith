import { LinkList } from '@/components/link-list'
import { ProfileHeader } from '@/components/profile-header'
import { SocialRow } from '@/components/social-row'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-4 py-16">
      <ProfileHeader />
      <SocialRow />
      <LinkList />

      <footer className="mt-auto pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kieran Smith
      </footer>
    </main>
  )
}
