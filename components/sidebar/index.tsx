import Link from 'next/link'

import { AboutMeLinks } from '@/components/sidebar/about-me-links'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { SocialLinks } from '@/components/sidebar/social-links'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { githubLink } from '@/lib/data/links'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isMobile?: boolean
}

export function Sidebar({ isMobile }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col',
        !isMobile &&
          'hidden lg:flex fixed top-0 left-0 w-72 h-full p-4 border-r',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        {!isMobile && <ModeToggle />}
      </div>

      <Separator className="my-3" />
      <AboutMeLinks />
      <SocialLinks />

      <div
        className={cn(
          'flex items-baseline justify-center gap-x-2',
          isMobile ? 'absolute bottom-4 left-10' : 'mt-auto',
        )}
      >
        <p className="text-xs text-sky-500 pt-1">
          &copy; {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground">developed by</p>
        <Button variant="link" asChild className="text-xs p-0 underline">
          <Link href={githubLink}>joaovlsousa</Link>
        </Button>
      </div>
    </aside>
  )
}
