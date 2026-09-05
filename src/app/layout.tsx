import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-900 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(56,189,248,0.12),transparent)] text-slate-300">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
