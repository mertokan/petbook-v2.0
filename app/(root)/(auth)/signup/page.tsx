'use client'
import {useEffect, useState} from 'react'
import {toast} from 'sonner'
import Image from 'next/image'
import logoDark from '@/app/public/images/petbook-dark-logo.png'
import logoLight from '@/app/public/images/petbook-light-logo.png'
import rightImage from '@/app/public/images/header-photo.jpg'
import {signup} from './actions'
import DialogUC from '@/components/shared/DialogUC'
import {useTheme} from 'next-themes'
import ThemeImage from '@/components/shared/ThemeImage'

export default function RegisterPage() {
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
    console.log('Theme: ', storedTheme)
  }, [setTheme])

  const handleSignup = async (formData: any) => {
    if (formData.get('password') !== formData.get('confirmPassword')) {
      toast.error('Passwords do not match')
      return
    }

    const result = await signup(formData)

    if (result?.code === 'weak_password') {
      toast.error('Password is too weak')
    } else if (result?.code === 'anonymous_provider_disabled') {
      toast.error('All fields are required')
    } else if (result?.status === 422) {
      toast.error('Email already exists')
    } else if (result?.error) {
      toast.error('Invalid email or password')
    } else {
      toast.success('Account created successfully')
    }
  }

  return (
    <div className='flex min-h-full flex-1'>
      {/* <DialogUC /> */}
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <ThemeImage content='logo' />
            {/* <Image
              alt='Your Company'
              src={logoLight}
              priority={true}
              className='size-32 w-auto select-none'
            /> */}
            <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-primary-blue-1'>
              Sign up to your account
            </h2>
            {/* <p className='mt-2 text-sm leading-6 text-gray-500'>
              Not a member?
              <a
                href='#'
                className='font-semibold text-custom-state-blue hover:text-custom-primary-0'
              >
                Start a 14 day free trial
              </a>
            </p> */}
          </div>

          <div className='mt-10'>
            <div>
              <form action='#' method='POST' className='space-y-6'>
                <div className='mt-6 grid grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium leading-6 text-primary select-none'
                    >
                      Name
                    </label>
                    <div className='mt-2'>
                      <input
                        id='name'
                        name='name'
                        type='text'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-state-blue sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='surname'
                      className='block text-sm font-medium leading-6 text-primary select-none'
                    >
                      Surname
                    </label>
                    <div className='mt-2'>
                      <input
                        id='surname'
                        name='surname'
                        type='text'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-state-blue sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='displayName'
                    className='block text-sm font-medium leading-6 text-primary select-none'
                  >
                    Username
                  </label>
                  <div className='mt-2'>
                    <input
                      id='displayName'
                      name='displayName'
                      type='text'
                      required
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-state-blue sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-primary select-none'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      autoComplete='email'
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-state-blue sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-primary select-none'
                  >
                    Password
                  </label>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      required
                      autoComplete='current-password'
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-state-blue sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-sm font-medium leading-6 text-primary select-none'
                  >
                    Confirm Password
                  </label>
                  <div className='mt-2'>
                    <input
                      id='confirmPassword'
                      name='confirmPassword'
                      type='password'
                      required
                      autoComplete='current-password'
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-state-blue sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    className='flex w-full justify-center rounded-md bg-custom-state-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-primary-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-state-blue'
                    onClick={(e) =>
                      handleSignup(new FormData((e.target as HTMLButtonElement).form!))
                    }
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='relative hidden w-0 flex-1 lg:block'>
        <Image
          alt=''
          src={rightImage}
          priority={true}
          className='absolute inset-0 h-full w-full object-cover select-none'
        />
      </div>
    </div>
  )
}
