'use client'

import { motion } from 'motion/react'

import { LinkCard } from '@/components/link-card'
import { linkGroups } from '@/lib/content'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
}

export function LinkList() {
  return (
    <motion.div
      className="flex w-full flex-col gap-8"
      variants={containerVariants}
      initial={false}
      animate="visible"
    >
      {linkGroups.map((group) => (
        <section key={group.heading} aria-labelledby={`links-${group.heading.toLowerCase()}`}>
          <h2
            id={`links-${group.heading.toLowerCase()}`}
            className="mb-3 font-mono text-xs text-faint"
          >
            {group.heading}
          </h2>
          <ul className="flex flex-col gap-2">
            {group.links.map((link) => (
              <LinkCard key={link.title} link={link} />
            ))}
          </ul>
        </section>
      ))}
    </motion.div>
  )
}
