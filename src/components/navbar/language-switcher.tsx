import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LanguagesIcon } from 'lucide-react'
import { languages } from '@/data/locales'
import { Link } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { useLocale } from 'next-intl'
import { cn } from '@/lib'

export function LanguageSwitcher() {
  const locale = useLocale()
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <LanguagesIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem asChild key={lang}>
            {/* for now we link to `/` since we don't have other pages */}
            <Link locale={lang} href="/" className="flex items-center gap-2 w-full">
              <span
                className={cn('font-mono uppercase tracking-wide text-sm', {
                  'font-bold text-sky-500': lang === locale,
                })}
              >
                {lang}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
