import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

import { getLocale, getMessages } from 'next-intl/server'
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
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
