'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoLight from '@/app/public/images/petbook-light-logo-write-1.png'
import logoDark from '@/app/public/images/petbook-dark-logo-write-1.png'
import {ThemeButton} from '../theme/theme-button'
import {RootState} from '@/lib/redux/store'
import {useAppSelector, useAppDispatch} from '@/lib/redux/hooks'
import UserButton from './UserButton'
import {useTheme} from 'next-themes'
import {useEffect} from 'react'
import {toggleTheme} from '@/lib/redux/slicers/themeSlice'
import ThemeImage from './ThemeImage'

const Navbar = () => {
  const user = useAppSelector((state: RootState) => state.user.user) as {avatar_url: string}
  const dispatch = useAppDispatch()
  const {theme} = useTheme()

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') || 'light'
  //   dispatch(toggleTheme(savedTheme))
  // }, [dispatch])

  return (
    <nav className='flex justify-around w-full fixed z-50 items-center text-foreground'>
      <Link href='/' className='relative w-32 h-6'>
        <ThemeImage content='text' />
        {/* <Image
          src={logoLight}
          alt='Logo'
          height={240}
          width={240}
          priority={true}
          className='h-full object-cover select-none w-max'
        /> */}
      </Link>
      <div className='flex flex-row w-1/3 justify-evenly dark:text-background'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/blog'>Blog</Link>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <ThemeButton />
        {user ? <UserButton pp={user?.avatar_url} /> : <Link href='/login'>Login</Link>}
      </div>
    </nav>
  )
}

export default Navbar
