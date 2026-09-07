import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'

const plexMono = IBM_Plex_Mono({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Kieran Smith · Frontend Engineer',
  description:
    'Frontend Engineer at Global, based in London. Links to my résumé, projects, and socials.',
  metadataBase: new URL('https://www.kieransmith.co.uk'),
  openGraph: {
    title: 'Kieran Smith · Frontend Engineer',
    description:
      'Frontend Engineer at Global, based in London. Links to my résumé, projects, and socials.',
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
      <body className="flex min-h-full flex-col bg-slate-900 text-slate-300">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(56,189,248,0.12),transparent)]"
        />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
