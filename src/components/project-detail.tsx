'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { LinkCard } from '@/components/link-card'
import { getProject } from '@/lib/content'

interface ProjectDetailProps {
  slug: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = getProject(slug)

  if (!project) {
    return null
  }

  return (
    <motion.div
      className="flex w-full flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants} className="flex flex-col items-center gap-3 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">
          <project.icon aria-hidden="true" className="size-7" />
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-sky-200 sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-sm text-slate-400">{project.subtitle}</p>
      </motion.header>

      <motion.ul
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-1.5"
        aria-label="Technologies used"
      >
        {project.technologies.map((technology) => (
          <li key={technology}>
            <Badge className="bg-sky-400/10 text-sky-300">{technology}</Badge>
          </li>
        ))}
      </motion.ul>

      <motion.section
        variants={itemVariants}
        aria-label="About this project"
        className="flex flex-col gap-4"
      >
        {project.writeup.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-slate-300">
            {paragraph}
          </p>
        ))}
      </motion.section>

      <section aria-label="Project links">
        <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Links
        </h2>
        <ul className="flex flex-col gap-3">
          {project.links.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </ul>
      </section>
    </motion.div>
  )
}
