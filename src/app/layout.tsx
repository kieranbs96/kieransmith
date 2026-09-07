import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GlowBackground } from '@/components/glow-background'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'

const plexMono = IBM_Plex_Mono({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`dark ${plexMono.variable} h-full bg-slate-900 antialiased`}
    >
      {/* No background on the body: the glow layer sits at -z-10, and an
          opaque body background would paint over it. html carries bg-slate-900. */}
      <body className="flex min-h-full flex-col text-slate-300">
        <GlowBackground />
        <TooltipProvider>{children}</TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
