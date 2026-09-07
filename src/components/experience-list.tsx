'use client'

import { motion } from 'motion/react'
import { Link as LinkIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/lib/content'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function ExperienceList() {
  return (
    <motion.ol
      className="flex w-full flex-col gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Work experience"
    >
      {experiences.map((experience) => (
        <motion.li
          key={experience.name}
          variants={itemVariants}
          className="rounded-xl border border-slate-700/60 bg-slate-800/50 p-6 transition-colors hover:border-sky-400/50 hover:bg-slate-800"
        >
          <header className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {experience.from} — {experience.to}
          </header>

          <h2 className="text-base font-medium leading-tight text-slate-200">
            <a
              href={experience.employerLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${experience.jobTitle} at ${experience.name}`}
              className="hover:text-sky-300 focus-visible:text-sky-300"
            >
              {experience.jobTitle} · {experience.name}
            </a>
          </h2>

          <p className="mt-2 text-sm leading-normal text-slate-300">
            {experience.description}
          </p>

          <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
            <LinkIcon aria-hidden="true" className="size-4" />
            {experience.linkDisplay}
          </p>

          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {experience.technologies.map((technology) => (
              <li key={technology}>
                <Badge className="bg-sky-400/10 text-sky-300">{technology}</Badge>
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ol>
  )
}
