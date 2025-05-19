'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export type ThemeProviderProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof NextThemesProvider>

/**
 * Theme provider component for handling light/dark mode
 * Wraps Next.js theme provider with client-side rendering
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
