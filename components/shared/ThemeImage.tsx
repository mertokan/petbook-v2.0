'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import logoTextLight from '@/app/public/images/petbook-light-logo-write-1.png'
import logoTextDark from '@/app/public/images/petbook-dark-logo-write-1.png'
import logoDark from '@/app/public/images/petbook-dark-logo.png'
import logoLight from '@/app/public/images/petbook-light-logo.png'
import {useTheme} from 'next-themes'

type Props = {
  content: string
}

const ThemeImage = (props: Props) => {
  const [mounted, setMounted] = useState(false)

  const {theme} = useTheme()
  console.log("Test theme:" , theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <>
      {props.content === 'logo' && (
        <>
          {theme === 'dark' ? (
            <Image src={logoLight} alt='Your Company' className='w-auto h-auto select-none' />
          ) : (
            <Image src={logoDark} alt='Your Company' className='w-auto h-auto select-none' />
          )}
        </>
      )}
      {props.content === 'text' && (
        <>
          {theme === 'dark' ? (
            <Image
              src={logoTextDark}
              alt='Logo'
              height={240}
              width={240}
              className='h-full object-cover select-none w-max'
            />
          ) : (
            <Image
              src={logoTextLight}
              alt='Logo'
              height={240}
              width={240}
              className='h-full object-cover select-none w-max'
            />
          )}
        </>
      )}
    </>
  )
}

export default ThemeImage
