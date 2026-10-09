'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { socialLinks } from '@/lib/content'

export function SocialRow() {
  return (
    <motion.nav
      aria-label="Social links"
      className="-ml-2.5 flex items-center gap-1"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
    >
      {socialLinks.map((social) => (
        <Tooltip key={social.label}>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="size-10 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
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
