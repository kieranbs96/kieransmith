'use client'

import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { profile } from '@/lib/content'

export function ProfileHeader() {
  return (
    <motion.header
      className="flex flex-col items-center gap-3 text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="rounded-full bg-gradient-to-tr from-sky-500 via-sky-300 to-slate-200 p-1">
        <Avatar className="size-24 border-4 border-background">
          <AvatarFallback className="bg-slate-800 text-2xl font-bold text-sky-200">
            {profile.initials}
          </AvatarFallback>
        </Avatar>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-sky-200 sm:text-4xl">
        {profile.name}
      </h1>

      <p className="text-lg font-medium text-slate-200">{profile.title}</p>

      <p className="inline-flex items-center gap-1 text-sm text-muted-foreground">
        <MapPin aria-hidden="true" className="size-4" />
        {profile.location}
      </p>

      <p className="max-w-sm text-sm leading-relaxed text-slate-300">{profile.bio}</p>
    </motion.header>
  )
}
