import { ChatAppShell } from '@/features/chat'
import type { ReactNode } from 'react'

interface ChatLayoutProps {
  children: ReactNode
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return <ChatAppShell>{children}</ChatAppShell>
}
