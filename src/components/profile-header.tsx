'use client'

import { motion } from 'motion/react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { profile } from '@/lib/content'

export function ProfileHeader() {
  return (
    <motion.header
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4">
        <Avatar className="size-16 ring-1 ring-border">
          <AvatarFallback className="bg-muted text-lg font-medium text-foreground">
            {profile.initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {profile.name}
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            {profile.title}, {profile.location}
          </p>
        </div>
      </div>

      <p className="text-[15px] leading-relaxed text-foreground/80">{profile.bio}</p>
    </motion.header>
  )
}
