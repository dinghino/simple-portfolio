import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerHeader,
} from '@/components/ui/drawer'
import { NavItem } from './nav-item'
import { Logo } from './logo'

export interface DrawerProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  navItems: { href: string; label: string }[]
}

export const MobileDrawer: React.FC<DrawerProps> = ({ onClick, open, setOpen, navItems }) => {
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="top">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="sm:hidden">
          <span className="sr-only">Toggle menu</span>
          <BurgerIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-8 p-4 pb-12 z-[60] rounded-none border-none">
        <DrawerHeader className="flex flex-row items-center justify-between py-0 px-2">
          <DrawerTitle>
            <Logo />
          </DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <span className="sr-only">Close menu</span>
              <CloseIcon />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <DrawerClose asChild key={item.href}>
              <NavItem
                href={item.href}
                className="font-mono uppercase tracking-wide text-lg"
                onClick={(e) => onClick(e, item.href)}
              >
                {item.label}
              </NavItem>
            </DrawerClose>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}

const BurgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
