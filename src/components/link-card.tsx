'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import type { LinkItem } from '@/lib/content'

interface LinkCardProps {
  link: LinkItem
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export function LinkCard({ link }: LinkCardProps) {
  const isExternal = link.isExternal ?? true

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="list-none"
    >
      <Card className="group border-slate-700/60 bg-slate-800/50 p-0 transition-colors hover:border-sky-400/50 hover:bg-slate-800">
        <Link
          href={link.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          className="flex items-center gap-4 p-4 focus-visible:outline-2 focus-visible:outline-sky-300"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">
            <link.icon aria-hidden="true" className="size-5" />
          </span>

          <span className="min-w-0 flex-1 text-left">
            <span className="block truncate font-medium text-slate-100">{link.title}</span>
            {link.subtitle ? (
              <span className="block truncate text-sm text-slate-400">{link.subtitle}</span>
            ) : null}
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="size-5 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300 motion-reduce:transition-none"
          />
        </Link>
      </Card>
    </motion.li>
  )
}
