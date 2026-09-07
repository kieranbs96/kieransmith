import type { SVGProps } from 'react'
import { BriefcaseBusiness, FileText, Globe, Mail, Radio } from 'lucide-react'
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
  isExternal?: boolean
}

export interface LinkGroup {
  heading: string
  links: LinkItem[]
}

export const profile: Profile = {
  name: 'Kieran Smith',
  initials: 'KS',
  title: 'Software Engineer at Global',
  location: 'London, UK',
  bio: 'Self-taught software engineer, 9+ years in, working mainly with React for the last 6.',
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

export interface ProjectLink {
  title: string
  subtitle?: string
  href: string
  icon: IconComponent
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  icon: IconComponent
  technologies: string[]
  writeup: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'global-player',
    title: 'Global Player',
    subtitle: 'A radio & podcast streaming service',
    icon: Radio,
    technologies: ['React', 'Next.js', 'TypeScript', 'Jest', 'GraphQL'],
    writeup: [
      "Global Player is where you'll find Capital, Heart, Classic FM and LBC, plus podcasts and playlists. Millions of people listen through it every week, on the web and on mobile.",
      "I work on the web app, which is built with Next.js and TypeScript. That covers everything from live radio and catch-up to podcast browsing and playback, built alongside the designers and backend engineers on the team.",
      'Most of what I ship is backed by integration tests written with Jest, React Testing Library and Mock Service Worker, and I do component work in Storybook.',
    ],
    links: [
      {
        title: 'Visit Global Player',
        subtitle: 'globalplayer.com',
        href: 'https://globalplayer.com/',
        icon: Globe,
      },
    ],
  },
  {
    slug: 'twitter-clone',
    title: 'Twitter Clone',
    subtitle: 'Built with Next.js, Prisma & Tailwind CSS',
    icon: GithubIcon,
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'NextAuth'],
    writeup: [
      'A full-stack Twitter clone I built to try the T3-style stack properly: Next.js and TypeScript on the front, Prisma and a relational database behind it, Tailwind for styling.',
      'It does the core things you would expect: posting, following, likes and profile pages, with sign-in handled by NextAuth. The interesting parts were modelling followers and timelines in the database and keeping server and client state in sync.',
    ],
    links: [
      {
        title: 'View the source',
        subtitle: 'github.com/kieranbs96/twitter-clone',
        href: 'https://github.com/kieranbs96/twitter-clone',
        icon: GithubIcon,
      },
    ],
  },
]

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug)

export const linkGroups: LinkGroup[] = [
  {
    heading: 'Links',
    links: [
      {
        title: 'Experience',
        subtitle: 'My work history at a glance',
        href: '/experience',
        icon: BriefcaseBusiness,
        isExternal: false,
      },
      {
        title: 'View Full Résumé',
        subtitle: '9+ years of developer experience',
        href: 'https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/edit?usp=sharing',
        icon: FileText,
      },
    ],
  },
  {
    heading: 'Projects',
    links: projects.map((project) => ({
      title: project.title,
      subtitle: project.subtitle,
      href: `/projects/${project.slug}`,
      icon: project.icon,
      isExternal: false,
    })),
  },
]

export interface Experience {
  jobTitle: string
  name: string
  employerLink: string
  linkDisplay: string
  from: string
  to: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    jobTitle: 'Frontend Engineer',
    name: 'Global',
    employerLink: 'https://www.globalplayer.com',
    linkDisplay: 'www.globalplayer.com',
    from: 'Jun 2021',
    to: 'Present',
    description:
      "I build features for the Global Player web app, which is written in Next.js and TypeScript, and cover them with integration tests using Jest, React Testing Library and Mock Service Worker. It's a big team of developers and designers, and I've also picked up some backend work along the way in Python and GraphQL.",
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Jest',
      'Storybook',
      'Python',
      'GraphQL',
      'Figma',
    ],
  },
  {
    jobTitle: 'Frontend Engineer',
    name: 'Education First',
    employerLink: 'https://www.ef.com',
    linkDisplay: 'www.ef.com',
    from: 'July 2019',
    to: 'June 2021',
    description:
      'I looked after a large React codebase spanning the main EF website and a number of micro-sites, built with a mix of Next.js and Gatsby. I worked with a big team of developers and designers on new features and performance.',
    technologies: ['React', 'Gatsby', 'TypeScript', 'Next.js', 'Storybook'],
  },
  {
    jobTitle: 'Frontend Engineer',
    name: 'Conversion',
    employerLink: 'https://www.conversion.com',
    linkDisplay: 'www.conversion.com',
    from: 'May 2018',
    to: 'July 2019',
    description:
      "I built and monitored A/B tests for clients like Canon, Domino's and Just Eat, mostly in plain JavaScript on platforms like Conversion, Qubit and VWO.",
    technologies: ['JavaScript', 'A/B Testing', 'CSS'],
  },
  {
    jobTitle: 'Junior Web Developer',
    name: 'SellerDeck Ltd',
    employerLink: 'https://www.sellerdeck.co.uk',
    linkDisplay: 'www.sellerdeck.co.uk',
    from: 'Aug 2015',
    to: 'May 2018',
    description:
      "I started at SellerDeck on 3rd line support and moved over to development in 2015. From there I built custom sites for clients on the SellerDeck platform, using its PHP-like templating language, and did a fair bit with Magento and WordPress too.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery'],
  },
]
