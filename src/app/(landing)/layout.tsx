import type { ReactNode } from 'react'

interface LandingLayoutProps {
  children: ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return <div className="min-h-dvh bg-background">{children}</div>
}
