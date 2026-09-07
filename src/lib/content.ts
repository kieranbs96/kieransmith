import type { SVGProps } from 'react'
import {
  BriefcaseBusiness,
  FileText,
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
  isExternal?: boolean
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
        title: 'Experience',
        subtitle: 'My work history at a glance',
        href: '/experience',
        icon: BriefcaseBusiness,
        isExternal: false,
      },
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
    ],
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
