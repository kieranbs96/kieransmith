import type { Metadata } from 'next'
import Link from 'next/link'

import { BackLink } from '@/components/back-link'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Page not found · Kieran Smith',
}

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-10 px-5 py-14 sm:py-20">
      <BackLink />

      <header className="flex flex-col gap-3">
        <p className="font-mono text-xs text-faint">404</p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Page not found</h1>
        <p className="text-[15px] leading-relaxed text-foreground/80">
          This page doesn’t exist or has moved. My{' '}
          <Link
            href="/experience"
            className="underline decoration-faint/60 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:text-primary"
          >
            experience
          </Link>{' '}
          and projects are linked from the{' '}
          <Link
            href="/"
            className="underline decoration-faint/60 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:text-primary"
          >
            home page
          </Link>
          .
        </p>
      </header>

      <SiteFooter />
    </main>
  )
}
