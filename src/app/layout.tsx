/** @format */

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'A showcase of my projects and skills',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
