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
  bio: 'Self-taught software engineer with 9+ years of professional software development experience, specialising in React for the past 6 years.',
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
      'Global Player is the home of radio brands like Capital, Heart, Classic FM, and LBC, alongside podcasts and playlists — serving millions of listeners across web and mobile.',
      'As part of the web team I develop and enhance features for the Next.js application, from live radio and catch-up experiences through to podcast browsing and playback. I work closely with designers and backend engineers across a large team to ship new functionality and improve performance.',
      'A big part of my work is confidence in shipping: integration tests with Jest, React Testing Library, and Mock Service Worker, plus component work in Storybook.',
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
      'A full-stack Twitter clone built to explore the T3-style stack end to end: Next.js with TypeScript on the front, Prisma against a relational database on the back, and Tailwind CSS for styling.',
      'It covers the core social loop — posting, following, likes, and profile pages — with authentication handled via NextAuth. Building it was a great exercise in modelling relational data (followers, timelines) and keeping server and client state in sync.',
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
      'Developing and enhancing features for the Global Player web application, constructed using Next.js and TypeScript. Proficiently conducting integration tests employing Jest, React Testing Library, and Mock Service Worker. Collaborating seamlessly within an extensive team of developers and designers to deliver novel functionalities and optimize overall performance. Additionally, gained valuable exposure to backend operations involving Python and GraphQL.',
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
      'Proficiently managing an extensive React codebase, encompassing numerous micro-sites developed using a combination of Next.js and Gatsby, including the primary EF website. Collaborating seamlessly within a sizable team of developers and designers to drive the creation of various functionalities and enhancements in performance.',
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
      "Developing functionalities and performance monitoring for prominent clients including Canon, Domino's, and Just Eat. Leveraging JavaScript expertise to execute A/B testing through platforms such as Conversion, Qubit, and VWO.",
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
      "Transitioned from a role as a 3rd line support engineer at SellerDeck to pursue a development career in 2015, assuming an in-house position. Focused on diverse client projects utilizing the SellerDeck platform. Proficiently delivered customized websites employing SellerDeck's templating language, similar to PHP, in addition to collaborating with Magento and WordPress.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery'],
  },
]
