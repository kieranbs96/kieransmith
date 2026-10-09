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
  width: number
  height: number
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

export interface CurrentFavourite {
  label: string
  title: string
  creator: string
  href: string
  artwork: ProjectPreview
}

// Update these entries and artwork paths as your favourites change; add href to link the artwork.
export const personal = {
  bio: 'Away from work, I’m usually getting stuck into a game, watching the football (CFC) or trying something new in the kitchen.',
  footballClub: {
    name: 'CFC',
    crest: '/personal/chelsea-fc.svg',
  },
  favourites: [
    {
      label: 'On repeat',
      title: 'If Time Could Talk',
      creator: 'Wesley Joseph',
      href: '',
      artwork: {
        src: '/personal/forever-ends-someday.webp',
        alt: 'Wesley Joseph album artwork accompanying If Time Could Talk',
        width: 800,
        height: 800,
      },
    },
    {
      label: 'Playing',
      title: 'Valheim',
      creator: 'Iron Gate Studio',
      href: '',
      artwork: {
        src: '/personal/valheim.png',
        alt: 'Valheim artwork with its glowing V logo',
        width: 360,
        height: 360,
      },
    },
    {
      label: 'Reading',
      title: 'Salt Fat Acid Heat',
      creator: 'Samin Nosrat',
      href: '',
      artwork: {
        src: '/personal/salt-fat-acid-heat.jpg',
        alt: 'Salt Fat Acid Heat book cover by Samin Nosrat',
        width: 1990,
        height: 2560,
      },
    },
  ] satisfies CurrentFavourite[],
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

export interface ProjectSection {
  heading: string
  paragraphs: string[]
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
  sections: ProjectSection[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'global-player',
    title: 'Global Player',
    subtitle: 'A radio & podcast streaming service',
    metadataTitle: 'Software Engineering',
    description:
      'Explore Kieran Smith’s work on Global Player, from its Next.js web app and content tools to Alexa, ad-free listening and backend services.',
    preview: {
      src: '/projects/global-player-hero.png',
      alt: 'Global Player web app showing podcast playback and live radio',
      width: 1448,
      height: 1086,
    },
    icon: Radio,
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'AWS Lambda', 'Python'],
    writeup: [
      'At Global, I build listening experiences and content tools for Global Player, which brings together Global’s radio stations, podcasts and playlists. My work spans the Next.js web app, internal publishing tools, Alexa and Apple TV, covering frontend development, backend services, testing and CI.',
    ],
    sections: [
      {
        heading: 'Web app',
        paragraphs: [
          'I develop features for globalplayer.com that help listeners find content, personalise their stations and control playback. My contributions include the dynamic home hub, the station selector customiser for logged-in users, and sharing podcasts and radio. I’ve also contributed to the podcast experience overhaul, playback speed, OAuth account linking and ad-free streams for premium subscribers.',
          'I work with Next.js, React, TypeScript and CSS Modules, developing reusable components in Storybook using Atomic Design. I back feature work with tests using Jest, React Testing Library and Mock Service Worker, exercising the interface with mocked API responses.',
        ],
      },
      {
        heading: 'Internal content tools',
        paragraphs: [
          'I build tools for the teams publishing content to Global Player and other Global products. I helped introduce collections to the internal admin panel, giving editors a way to bring different types of content together and display those collections across multiple products.',
          'This work uses React, TypeScript and Vite, with Apollo and GraphQL for data. I work with Chakra UI and Motion on the interface, and Storybook for component development.',
        ],
      },
      {
        heading: 'Alexa',
        paragraphs: [
          'My recent work includes bringing ad-free listening to Alexa, one of Global’s most-used radio platforms, alongside promotional pre-rolls for the premium subscription. I work on both the Alexa-facing app and its backend-for-frontend (BFF), connecting the listening experience with the services behind it.',
          'The Alexa-facing app runs on AWS Lambda, using TypeScript, the ASK SDK, AWS SDK and Axios. On the Node.js BFF, there’s a focus on reducing unnecessary calls and load on backend services given the number of people listening through Alexa.',
          'The BFF work also involves TypeScript, Zod and GraphQL with Codegen, with Jest and Mock Service Worker for testing.',
        ],
      },
      {
        heading: 'Entitlement expression parser',
        paragraphs: [
          'I wrote and published an internal package for parsing user entitlement expressions, which describe access to features and content.',
          'I built the package with TypeScript and Vite, and used Vitest to test the parsing logic.',
        ],
      },
      {
        heading: 'Other platform work',
        paragraphs: [
          'I implemented ad-free listening in an existing Apple TV app written in TVML, extending the subscription experience to a platform outside the React stack I use day to day.',
          'I’ve also added routes to a Python BFF, extending the backend services that support Global’s products.',
        ],
      },
      {
        heading: 'CI',
        paragraphs: [
          'I also contribute to CI improvements using GitHub Actions, Jenkins and Docker. My work extends beyond product features to the pipelines used to build, test and ship changes.',
        ],
      },
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
      'I started at SellerDeck on 3rd line support and moved over to development in 2015. From there I built custom sites for clients on the SellerDeck platform, using its PHP-like templating language, and did a fair bit with Magento and WordPress too.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery'],
  },
]
