'use client'
import {useEffect, useState} from 'react'
import {login} from './actions'
import {toast} from 'sonner'
import Image from 'next/image'
import logoDark from '@/app/public/images/petbook-dark-logo.png'
import logoLight from '@/app/public/images/petbook-light-logo.png'
import rightImage from '@/app/public/images/header-photo.jpg'
import GoogleIcon from '@/components/shared/GoogleIcon'
import Link from 'next/link'
import {Mail} from 'lucide-react'
import {cn} from '@/lib/utils'
import {useTheme} from 'next-themes'
import {useAppDispatch} from '@/lib/redux/hooks'
import {setUser} from '@/lib/redux/slicers/userSlice'
import {createClient} from '@/lib/supabase/client'

export default function LoginPage() {
  const [theme, setTheme] = useState('light')

  const mTheme = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (mTheme) {
      setTheme(mTheme.theme || 'light')
    }
  }, [mTheme])

  const handleLogin = async (formData: FormData) => {
    const email = formData.get('email')?.toString()
    const password = formData.get('password')?.toString()

    const result = await login(formData)

    if (result?.code === 'validation_failed') {
      toast.error('All fields are required')
    } else if (result?.error) {
      toast.error('Invalid email or password')
    } else {
      const supabase = createClient()
      const {data, error} = await supabase.auth.getUser()

      const {data: usersData} = await supabase
        .from('users')
        .select('*')
        .eq('email', data?.user?.email || '')

      if (error) {
        toast.error('Error fetching user data')
        return
      }
      if (usersData && usersData.length > 0) {
        dispatch(setUser(usersData[0]))
      } else {
        toast.error('User data not found')
      }

      toast.success('Login successful!')
    }
  }

  return (
    <div className='flex min-h-full flex-1'>
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Image
              alt='Your Company'
              src={true ? logoDark : logoLight}
              priority={true}
              className='size-32 w-auto select-none'
            />
            <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-primary-blue-1'>
              Sign in to your account
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
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-primary'
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
                    className='block text-sm font-medium leading-6 text-primary'
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
                {/* 
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-custom-state-blue focus:ring-custom-state-blue'
                    />
                    <label
                      htmlFor='remember-me'
                      className='ml-3 block text-sm leading-6 text-gray-700'
                    >
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm leading-6'>
                    <a href='#' className='font-semibold text-custom-state-blue hover:text-custom-primary-0'>
                      Forgot password?
                    </a>
                  </div>
                </div> */}

                <div>
                  <button
                    type='button'
                    className='flex w-full justify-center rounded-md bg-custom-state-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-primary-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-state-blue'
                    onClick={(e) =>
                      handleLogin(new FormData((e.target as HTMLButtonElement).form!))
                    }
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <div className='mt-10'>
              <div className='relative'>
                <div aria-hidden='true' className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-200' />
                </div>
                <div className='relative flex justify-center text-sm font-medium leading-6'>
                  <span className='bg-background px-6 text-primary'>Or continue with</span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-2 gap-4'>
                <Link
                  href='/'
                  onClick={(e) => e.preventDefault()}
                  aria-disabled='true'
                  className={cn(
                    'flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent aria-disabled:bg-slate-600 aria-disabled:cursor-not-allowed'
                  )}
                >
                  <GoogleIcon />
                  <span className='text-sm font-semibold leading-6'>Google</span>
                </Link>
                <Link
                  href='/signup'
                  className='flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'
                >
                  <Mail />
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative hidden w-0 flex-1 lg:block'>
        <Image
          alt=''
          src={rightImage}
          className='absolute inset-0 h-full w-full object-cover select-none'
        />
      </div>
    </div>
    // <form>
    //   <label htmlFor='email'>Email:</label>
    //   <input id='email' name='email' type='email' required />
    //   <label htmlFor='password'>Password:</label>
    //   <input id='password' name='password' type='password' required />
    //   <button type='button' onClick={(e) => handleLogin(new FormData(e.target.form))}>
    //     Log in
    //   </button>
    //   <button type='button' onClick={(e) => handleSignup(new FormData(e.target.form))}>
    //     Sign up
    //   </button>
    // </form>
  )
}
