import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BackLink } from '@/components/back-link'
import { ProjectDetail } from '@/components/project-detail'
import { SiteFooter } from '@/components/site-footer'
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
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-10 px-5 py-14 sm:py-20">
      <BackLink />
      <ProjectDetail slug={slug} />
      <SiteFooter />
    </main>
  )
}
