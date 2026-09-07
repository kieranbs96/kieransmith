import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ProjectDetail } from '@/components/project-detail'
import { getProject, projects } from '@/lib/content'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }))

export const dynamicParams = false

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return { title: 'Project · Kieran Smith' }
  }

  return {
    title: `${project.title} · Kieran Smith`,
    description: project.subtitle,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-16">
      <nav aria-label="Back to home">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-sky-300 focus-visible:text-sky-300"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </nav>

      <ProjectDetail slug={slug} />

      <footer className="mt-auto pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kieran Smith
      </footer>
    </main>
  )
}
