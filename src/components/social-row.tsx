'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { socialLinks } from '@/lib/content'

export function SocialRow() {
  return (
    <motion.nav
      aria-label="Social links"
      className="flex items-center justify-center gap-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
    >
      {socialLinks.map((social) => (
        <Tooltip key={social.label}>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="size-11 rounded-full text-slate-300 hover:bg-sky-400/10 hover:text-sky-300"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <social.icon aria-hidden="true" className="size-5" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{social.label}</TooltipContent>
        </Tooltip>
      ))}
    </motion.nav>
  )
}
