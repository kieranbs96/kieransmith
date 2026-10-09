'use client'

import { ArrowUpRight } from '@phosphor-icons/react/ssr'
import { motion } from 'motion/react'
import Link from 'next/link'

import { experiences } from '@/lib/content'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

export function ExperienceList() {
  return (
    <motion.ol
      className="flex w-full flex-col divide-y divide-border"
      variants={containerVariants}
      initial={false}
      animate="visible"
      aria-label="Work experience"
    >
      {experiences.map((experience) => (
        <motion.li
          key={experience.name}
          variants={itemVariants}
          className="grid gap-2 py-8 first:pt-0 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
        >
          <p className="font-mono text-xs leading-6 text-faint">
            {experience.from} -{' '}
            {experience.to === 'Present' ? (
              <span className="font-medium text-primary">Present</span>
            ) : (
              experience.to
            )}
          </p>

          <div>
            <h2 className="text-base leading-6 font-medium text-foreground">
              {experience.jobTitle},{' '}
              <Link
                href={experience.employerLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-0.5 underline decoration-faint/60 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:text-primary"
              >
                {experience.name}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </h2>

            <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
              {experience.description}
            </p>

            <p className="mt-3 font-mono text-xs leading-relaxed text-faint">
              <span className="sr-only">Technologies used: </span>
              {experience.technologies.join(', ')}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}
