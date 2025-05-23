import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LanguagesIcon } from 'lucide-react'
import { languages } from '@/data/locales'
import { Link } from '@/lib/i18n'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const pathname = usePathname()
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
            <Link locale={lang} href="/" className="flex items-center gap-2 w-full">
              <span className="font-mono uppercase tracking-wide text-sm">{lang}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
