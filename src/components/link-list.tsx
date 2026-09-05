'use client'

import { motion } from 'motion/react'
import { LinkCard } from '@/components/link-card'
import { linkGroups } from '@/lib/content'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

export function LinkList() {
  return (
    <motion.div
      className="flex w-full flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {linkGroups.map((group) => (
        <section key={group.heading} aria-label={group.heading}>
          <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            {group.heading}
          </h2>
          <ul className="flex flex-col gap-3">
            {group.links.map((link) => (
              <LinkCard key={link.title} link={link} />
            ))}
          </ul>
        </section>
      ))}
    </motion.div>
  )
}
