'use client'

import type { ReactNode } from 'react'
import { Sidebar } from '../../../shared/components/ui/sidebar/sidebar'
// import Image from 'next/image'

interface ChatAppShellProps {
  children: ReactNode
}

export const ChatAppShell = ({ children }: ChatAppShellProps) => {
  return (
    <div className="flex z-0 relative h-dvh overflow-hidden bg-background p-2 gap-2">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-hidden">{children}</main>
      {/* <div className='w-360 h-101.25 absolute -bottom-37.5 left-0 -z-1'>
        <Image
          src="/images/bg-sand.png"
          width={1440}
          height={405}
          alt="background sand image"
          className="w-full h-full"
        />
      </div> */}
    </div>
  )
}
