'use client'

import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/ssr'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import type { LinkItem } from '@/lib/content'

import styles from './link-card.module.css'

interface LinkCardProps {
  link: LinkItem
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

export function LinkCard({ link }: LinkCardProps) {
  const isExternal = link.isExternal ?? true
  const TrailingIcon = isExternal ? ArrowUpRight : ArrowRight

  return (
    <motion.li variants={itemVariants} className={`list-none ${styles.item}`}>
      {link.preview ? (
        <figure className={styles.preview}>
          <Image
            src={link.preview.src}
            alt={link.preview.alt}
            width={link.preview.width}
            height={link.preview.height}
            sizes="(min-width: 1024px) 240px, (max-width: 448px) calc(100vw - 40px), 408px"
            className="h-auto w-full"
          />
        </figure>
      ) : null}
      <Link
        href={link.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        className="group flex items-center gap-4 rounded-lg border border-border bg-card/60 px-4 py-3 transition-colors hover:border-foreground/20 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-px"
      >
        <link.icon
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
        />

        <span className="min-w-0 flex-1 text-left">
          <span className="block truncate font-medium text-foreground">{link.title}</span>
          {link.subtitle ? (
            <span className="block truncate text-sm text-muted-foreground">{link.subtitle}</span>
          ) : null}
          {isExternal ? <span className="sr-only">(opens in a new tab)</span> : null}
        </span>

        <TrailingIcon
          aria-hidden="true"
          className="size-4 shrink-0 text-faint transition-[color,transform] group-hover:text-primary motion-safe:group-hover:translate-x-0.5"
        />
      </Link>
    </motion.li>
  )
}
