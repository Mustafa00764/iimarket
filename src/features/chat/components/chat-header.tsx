import { Button } from '@/shared/components/ui/kit/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/shared/components/ui/kit/dropdown-menu'
import { AIModels } from '../config/ai-model'
import { Fragment, useState } from 'react'
import ArrowBottom from '@/shared/assets/icons/other/arrow-bottom.svg'
import Config from '@/shared/assets/icons/other/config.svg'

export const ChatHeader = () => {
  const [model, setModel] = useState<string>('sonnet-4.5')

  return (
    <div className="flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'dropdown'} size={'sm'}>
            {AIModels.filter(i => i.value === model).map((item, index) => {
              const Icon = item.icon

              return (
                <Fragment key={index}>
                  <Icon className={'text-black! dark:text-white'} />
                  <p>{item.label}</p>
                </Fragment>
              )
            })}
            <ArrowBottom className={'group-aria-expanded/button:rotate-180 size-3.5'} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-fit"
          align="start"
        >
          <DropdownMenuRadioGroup
            value={model}
            onValueChange={setModel}
            className="flex flex-col gap-0.5"
          >
            {AIModels.map((model, index) => {
              const Icon = model.icon
              return (
                <DropdownMenuRadioItem value={model.value} key={index}>
                  <Icon />
                  <p>{model.label}</p>
                </DropdownMenuRadioItem>
              )
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'dropdown'} size={'sm'}>
            <Config className={'size-3.5'} />
            <p>Control</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-fit"
          align="end"
        >
          <DropdownMenuRadioGroup
            value={model}
            onValueChange={setModel}
            className="flex flex-col gap-0.5"
          >
            {AIModels.map((model, index) => {
              const Icon = model.icon
              return (
                <DropdownMenuRadioItem value={model.value} key={index}>
                  <Icon />
                  <p>{model.label}</p>
                </DropdownMenuRadioItem>
              )
            })}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
