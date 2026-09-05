import type { SVGProps } from 'react'
import {
  FileText,
  Gamepad2,
  Globe,
  Mail,
  Radio,
  UtensilsCrossed,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export type IconComponent = React.ComponentType<SVGProps<SVGSVGElement>>

export interface Profile {
  name: string
  initials: string
  title: string
  location: string
  bio: string
}

export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
}

export interface LinkItem {
  title: string
  subtitle?: string
  href: string
  icon: IconComponent
}

export interface LinkGroup {
  heading: string
  links: LinkItem[]
}

export const profile: Profile = {
  name: 'Kieran Smith',
  initials: 'KS',
  title: 'Frontend Engineer at Global',
  location: 'London, UK',
  bio: 'Self-taught web developer with 7+ years of professional experience, specialising in React for the past 4 years.',
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:kieranbs96@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kieranbs96/',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kieranbs96/',
    icon: GithubIcon,
  },
]

export const linkGroups: LinkGroup[] = [
  {
    heading: 'Links',
    links: [
      {
        title: 'View Full Résumé',
        subtitle: '7+ years of frontend experience',
        href: 'https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/edit?usp=sharing',
        icon: FileText,
      },
      {
        title: 'Portfolio',
        subtitle: 'kieransmith.co.uk',
        href: 'https://www.kieransmith.co.uk/',
        icon: Globe,
      },
    ],
  },
  {
    heading: 'Projects',
    links: [
      {
        title: 'Global Player',
        subtitle: 'A radio & podcast streaming service',
        href: 'https://globalplayer.com/',
        icon: Radio,
      },
      {
        title: 'Recipe Web App',
        subtitle: 'Built with Next.js, Sanity & Tailwind CSS',
        href: 'https://recipes.kieransmith.co.uk/',
        icon: UtensilsCrossed,
      },
      {
        title: 'Twitter Clone',
        subtitle: 'Built with Next.js, Prisma & Tailwind CSS',
        href: 'https://github.com/kieranbs96/twitter-clone',
        icon: GithubIcon,
      },
      {
        title: 'Lake Side RPG',
        subtitle: 'Game server site built with React & Drizzle',
        href: 'https://lakesiderpg.com/',
        icon: Gamepad2,
      },
    ],
  },
]
