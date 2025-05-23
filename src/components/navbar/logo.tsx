import Link from 'next/link'
import { Code2 } from 'lucide-react'

export const Logo: React.FC = ({ href = '/' }: { href?: string }) => (
  <Link
    href={href}
    className="font-mono font-bold text-lg tracking-tighter flex flex-row items-center gap-2"
  >
    <Code2 />
    dinghino
  </Link>
)
