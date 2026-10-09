import type { Icon } from '@phosphor-icons/react'
import {
  Briefcase,
  Envelope,
  FileText,
  GithubLogo,
  Globe,
  LinkedinLogo,
  Radio,
} from '@phosphor-icons/react/ssr'

export type IconComponent = Icon

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

export interface ProjectPreview {
  src: string
  alt: string
}

export interface LinkItem {
  title: string
  subtitle?: string
  href: string
  icon: IconComponent
  isExternal?: boolean
  preview?: ProjectPreview
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
  bio: 'Self-taught software engineer building for the web since 2015. I work on Global Player with React, Next.js and TypeScript.',
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:kieranbs96@gmail.com',
    icon: Envelope,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kieranbs96/',
    icon: LinkedinLogo,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kieranbs96/',
    icon: GithubLogo,
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
  metadataTitle: string
  description: string
  icon: IconComponent
  technologies: string[]
  preview?: ProjectPreview
  writeup: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'global-player',
    title: 'Global Player',
    subtitle: 'A radio & podcast streaming service',
    metadataTitle: 'Frontend Engineering',
    description:
      'Explore Kieran Smith’s frontend engineering work on Global Player, building radio and podcast experiences with Next.js, React and TypeScript.',
    preview: {
      src: '/projects/global-player-placeholder.svg',
      alt: 'Global Player preview placeholder. Screenshot to be added.',
    },
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
    subtitle: 'A full-stack side project',
    metadataTitle: 'Full-stack Next.js Project',
    description:
      'Explore Kieran Smith’s full-stack Twitter clone, built with Next.js, TypeScript and Prisma, featuring posts, follows, likes and NextAuth sign-in.',
    preview: {
      src: '/projects/twitter-clone-placeholder.svg',
      alt: 'Twitter Clone preview placeholder. Screenshot to be added.',
    },
    icon: GithubLogo,
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
        icon: GithubLogo,
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
        subtitle: 'Where I’ve worked since 2015',
        href: '/experience',
        icon: Briefcase,
        isExternal: false,
      },
      {
        title: 'CV',
        subtitle: 'Full version on Google Docs',
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
      preview: project.preview,
    })),
  },
]

export interface Experience {
  jobTitle: string
  name: string
  employerLink: string
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
    from: 'Jul 2019',
    to: 'Jun 2021',
    description:
      'I looked after a large React codebase spanning the main EF website and a number of micro-sites, built with a mix of Next.js and Gatsby. I worked with a big team of developers and designers on new features and performance.',
    technologies: ['React', 'Gatsby', 'TypeScript', 'Next.js', 'Storybook'],
  },
  {
    jobTitle: 'Frontend Engineer',
    name: 'Conversion',
    employerLink: 'https://www.conversion.com',
    from: 'May 2018',
    to: 'Jul 2019',
    description:
      "I built and monitored A/B tests for clients like Canon, Domino's and Just Eat, mostly in plain JavaScript on platforms like Conversion, Qubit and VWO.",
    technologies: ['JavaScript', 'A/B Testing', 'CSS'],
  },
  {
    jobTitle: 'Junior Web Developer',
    name: 'SellerDeck Ltd',
    employerLink: 'https://www.sellerdeck.co.uk',
    from: 'Aug 2015',
    to: 'May 2018',
    description:
      "I started at SellerDeck on 3rd line support and moved over to development in 2015. From there I built custom sites for clients on the SellerDeck platform, using its PHP-like templating language, and did a fair bit with Magento and WordPress too.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery'],
  },
]
