import { cn } from '@/shared/lib/utils'

interface LineProps {
  className?: string
}

export const Line = ({ className }: LineProps) => {
  return (
    <div className={cn('w-full  px-2', className)}>
      <div className="w-full h-px rounded-sm bg-border-soft"></div>
    </div>
  )
}
