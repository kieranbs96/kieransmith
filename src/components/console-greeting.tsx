'use client'

import { useEffect, useRef } from 'react'
import { profile, socialLinks } from '@/lib/content'

export function ConsoleGreeting() {
  const hasLogged = useRef(false)

  useEffect(() => {
    if (hasLogged.current) return
    hasLogged.current = true

    const github = socialLinks.find((link) => link.label === 'GitHub')?.href
    const email = socialLinks.find((link) => link.label === 'Email')?.href.replace('mailto:', '')
    const links = [
      github ? `GitHub: ${github}` : null,
      email ? `Say hello: ${email}` : null,
    ].filter(Boolean)

    console.log(
      `%c${profile.name}%c\nThanks for taking a look under the hood.\n\n${links.join('\n')}`,
      'font-family: monospace; font-size: 18px; font-weight: 600;',
      'font-family: monospace; font-size: 12px; font-weight: 400;',
    )
  }, [])

  return null
}
