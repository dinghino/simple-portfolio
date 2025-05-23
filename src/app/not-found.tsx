'use client'

import { ThemeProvider } from '@/components/theme'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <body className="grid place-items-center h-[100dvh] w-[100dvw]">
          <Card className="font-mono rounded-xs border-none bg-muted/30 shadow-md text-center">
            <CardHeader>
              <h1 className="text-7xl uppercase font-bold">oopsie</h1>
            </CardHeader>
            <CardContent className="flex flex-col gap-16">
              <div>
                <h2 className="text-6xl text-muted font-bold mb-4">404</h2>
                <p className="text-lg ">Page not found</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" asChild className="mt-4 w-full">
                <Link href="/">
                  Back home
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </body>
      </ThemeProvider>
    </html>
  )
}
