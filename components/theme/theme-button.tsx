'use client'

import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {useAppDispatch} from '@/lib/redux/hooks'
import {toggleTheme} from '@/lib/redux/slicers/themeSlice'

export function ThemeButton() {
  const {setTheme} = useTheme()
  const dispatch = useAppDispatch()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => {
            setTheme('light')
            dispatch(toggleTheme('light'))
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark')
            dispatch(toggleTheme('dark'))
          }}
        >
          Dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem
          onClick={() => {
            setTheme('system')
            dispatch(toggleTheme('system'))
          }}
        >
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
