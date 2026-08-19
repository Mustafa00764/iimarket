'use client'

import { Line } from '@/shared/components/ui/kit/line'
import IIMarket from '@/shared/assets/icons/logos/iimarket.svg'
import SearchIcon from '@/shared/assets/icons/other/search.svg'
import SidebarIcon from '@/shared/assets/icons/other/sidebar.svg'
import ChatIcon from '@/shared/assets/icons/other/chat.svg'
import SettingsIcon from '@/shared/assets/icons/other/settings-2.svg'
import ChevronsUpDownIcon from '@/shared/assets/icons/other/chevrons-up-down.svg'

import { Button } from '@/shared/components/ui/kit/button'
import { mainNavigation } from '@/shared/config/navigation'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/kit/avatar'
import { ChatCard } from '../../../../features/chat/components/chat-card'
import { cn } from '@/shared/lib/utils'
import { useSidebar } from './use-sidebar'
import { SidebarDropdownMenu } from './sidebar-dropdown-menu'

export const Sidebar = () => {
  const { isScroll, isScrolled, isSidebarSize, resentRef, onScroll, setIsSidebarSize } =
    useSidebar()

  return (
    <aside
      className={cn(
        ' w-full relative flex flex-col gap-4 transition-all rounded-xl bg-sidebar px-2 pt-4 pb-2 border border-sidebar-border shadow-xs',
        isSidebarSize ? 'max-w-63' : 'max-w-12.5'
      )}
    >
      <div
        className={cn('w-full h-full absolute top-0 left-0 inset-0 ', !isSidebarSize || 'hidden')}
        onClick={() => setIsSidebarSize(true)}
      />
      <div
        className={cn(
          'flex relative items-center justify-between transition-all gap-2 ',
          isSidebarSize ? 'px-2 ' : 'px-1 gap-0'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-2 transition-all duration-100',
            isSidebarSize || 'w-0 opacity-0 text-[0px]'
          )}
        >
          <IIMarket className={'transition-all'} />
          <p className="text-[18px] leading-6 font-lemonada transition-all font-semibold pointer-events-none select-none">
            IIMarket
          </p>
        </div>

        <div className="h-8 flex items-center gap-1">
          <Button variant={'ghost'} size={'icon-xs'} className={isSidebarSize ? '' : 'hidden'}>
            <SearchIcon />
          </Button>
          <Button
            variant={'ghost'}
            size={'icon-xs'}
            onClick={() => setIsSidebarSize(!isSidebarSize)}
          >
            <SidebarIcon />
          </Button>
        </div>
      </div>

      <Line className={cn('', isSidebarSize || 'px-1')} />

      <nav className="min-h-1 h-full flex flex-col gap-4">
        <div
          className={cn(
            'flex items-center justify-center transition-all',
            !isSidebarSize || 'px-2'
          )}
        >
          <Button
            variant={'primary'}
            size={'lg'}
            title={'New Chat'}
            className={cn('', isSidebarSize || 'gap-0')}
          >
            <ChatIcon />
            <p
              className={cn(
                'transition-all ',
                isSidebarSize ? 'opacity-100' : 'opacity-0 text-[0px]'
              )}
            >
              New Chat
            </p>
          </Button>
        </div>

        {isSidebarSize || <Line className="px-1" />}

        <div
          className={cn(
            'flex items-center transition-all gap-2 px-2',
            isSidebarSize ? '' : 'flex-col'
          )}
        >
          {mainNavigation.map(nav => {
            const Icon = nav.icon
            return (
              <Link key={nav.href} href={nav.href} title={nav.label}>
                <Button variant={'ghost'} size={'icon'}>
                  <Icon className={''} />
                </Button>
              </Link>
            )
          })}
        </div>
        <div className={cn('min-h-1 h-full relative', isSidebarSize || '-z-1')}>
          <div
            className={cn(
              'w-full h-6 absolute transition-all bg-[linear-gradient(180deg,var(--sidebar)_0%,rgba(239,239,237,0.6)_50%,rgba(239,239,237,0))] z-1 inset-0 top-0 left-0 ',
              !!isScrolled ? 'translate-y-0' : '-translate-y-4'
            )}
          />
          <div
            className={cn(
              'w-full h-6 absolute bg-[linear-gradient(0deg,var(--sidebar)_0%,rgba(239,239,237,0.6)_50%,rgba(239,239,237,0))] z-1 inset-0 top-[calc(100%-24px)] left-0',
              isScroll ? 'opacity-100' : 'opacity-0'
            )}
          />

          <div
            onScroll={onScroll}
            ref={resentRef}
            className={cn(
              'w-full h-full relative flex flex-col gap-1 overflow-x-hidden',
              isSidebarSize || 'hidden'
            )}
          >
            <div className="flex items-center px-2">
              <p className="text-[12px] leading-4 text-graphite">Resent search</p>
            </div>
            <div className="w-full h-auto flex flex-col gap-1 pb-6">
              {new Array(50).fill(1).map((_, index) => {
                return (
                  <Link key={index} href={`/chat/c/${index}`}>
                    <ChatCard />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <Link href={'/settings'} title={'Settings'}>
          <Button variant={'default'} size={'default'}>
            <SettingsIcon className={'overflow-visible'} />
            <p className={cn('transition-all', isSidebarSize ? 'px-1' : 'text-[0px] duration-100')}>
              Settings
            </p>
          </Button>
        </Link>

        <Line className={cn('', isSidebarSize || 'px-1')} />

        <SidebarDropdownMenu>
          <Button
            variant="default"
            size={'xl'}
            className={cn('', isSidebarSize || 'p-0 bg-transparent!')}
          >
            <Avatar>
              <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
              <AvatarFallback className="rounded-xs">E</AvatarFallback>
            </Avatar>
            <p
              className={cn(
                'w-full text-start transition-all',
                isSidebarSize || 'text-[0px] duration-100  opacity-0'
              )}
            >
              Mustafa Eshchanov
            </p>
            <ChevronsUpDownIcon className={cn('size-3.5 mr-1', isSidebarSize || 'hidden')} />
          </Button>
        </SidebarDropdownMenu>
      </nav>
    </aside>
  )
}
