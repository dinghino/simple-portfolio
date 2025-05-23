import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

import { ThemeProvider } from '@/components/theme'
import { Navbar, Footer } from '@/components/blocks'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib'

// fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: '</> dinghino',
  description: 'Full-Stack Developer',
}

export type RootLayoutProps = {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params
  const messages = await getMessages({ locale })

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={cn(
          `${inter.variable} ${robotoMono.variable} font-sans`,
          'min-h-screen flex flex-col',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
