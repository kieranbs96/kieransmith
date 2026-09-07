import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ExperienceList } from '@/components/experience-list'

export const metadata: Metadata = {
  title: 'Experience · Kieran Smith',
  description:
    'Work experience of Kieran Smith, Frontend Engineer at Global — 7+ years across Global, Education First, Conversion, and SellerDeck.',
}

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-4 py-16">
      <nav aria-label="Back to home">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-sky-300 focus-visible:text-sky-300"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </nav>

      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-sky-200 sm:text-4xl">
          Experience
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          7+ years of building for the web
        </p>
      </header>

      <ExperienceList />

      <footer className="mt-auto pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kieran Smith
      </footer>
    </main>
  )
}
