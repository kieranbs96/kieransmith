'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { LinkCard } from '@/components/link-card'
import { getProject } from '@/lib/content'

interface ProjectDetailProps {
  slug: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
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
      initial={false}
      animate="visible"
    >
      <motion.header variants={itemVariants} className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-muted-foreground">{project.subtitle}</p>
      </motion.header>

      {project.preview ? (
        <motion.figure
          variants={itemVariants}
          className="overflow-hidden rounded-lg border border-border bg-card"
        >
          <Image
            src={project.preview.src}
            alt={project.preview.alt}
            width={640}
            height={400}
            sizes="(max-width: 576px) calc(100vw - 40px), 536px"
            preload
            className="aspect-[8/5] w-full object-cover"
          />
        </motion.figure>
      ) : null}

      <motion.section
        variants={itemVariants}
        aria-labelledby="project-engineering"
        className="flex flex-col gap-4"
      >
        <h2 id="project-engineering" className="text-lg font-medium text-foreground">
          {slug === 'global-player' ? 'My frontend engineering work' : 'Building the full-stack app'}
        </h2>
        {project.writeup.map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
        <p className="font-mono text-xs leading-relaxed text-faint">
          <span className="sr-only">Technologies used: </span>
          {project.technologies.join(', ')}
        </p>
      </motion.section>

      <ul aria-label="Project links" className="flex flex-col gap-2">
        {project.links.map((link) => (
          <LinkCard key={link.title} link={link} />
        ))}
      </ul>
    </motion.div>
  )
}
