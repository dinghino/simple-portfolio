import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'

type TechnologyBadgesProps = {
  technologies: string[]
  visible?: number
}

export function TechnologyBadges({ technologies, visible = 3 }: TechnologyBadgesProps) {
  const displayedTechs = technologies.slice(0, visible)
  return (
    <div className="flex flex-wrap gap-2">
      {displayedTechs.map((tech) => (
        <Badge key={tech} className="text-xs font-mono" variant="background">
          {tech}
        </Badge>
      ))}
      {technologies.length > visible && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="text-xs font-mono cursor-pointer select-none" variant="background">
              +{technologies.length - visible} more
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex flex-wrap gap-1 max-w-xs">
              {technologies.slice(visible).map((tech) => (
                <Badge key={tech} className="text-xs font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}
