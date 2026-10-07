import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GlowBackground } from '@/components/glow-background'
import { MotionProvider } from '@/components/motion-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Kieran Smith · Software Engineer',
  description:
    'Software Engineer at Global, based in London. Links to my CV, projects and socials.',
  metadataBase: new URL('https://www.kieransmith.co.uk'),
  openGraph: {
    title: 'Kieran Smith · Software Engineer',
    description:
      'Software Engineer at Global, based in London. Links to my CV, projects and socials.',
    url: 'https://www.kieransmith.co.uk',
    siteName: 'Kieran Smith',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      {/* No background on the body: the glow layer sits at -z-10, and an
          opaque body background would paint over it. html carries bg-background. */}
      <body className="flex min-h-full flex-col">
        <GlowBackground />
        <MotionProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
