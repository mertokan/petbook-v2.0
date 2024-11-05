import Navbar from '@/components/shared/Navbar'
import React from 'react'
import {Toaster} from 'sonner'

type Props = React.PropsWithChildren<{}>

const Layout = ({children}: Props) => {

  
  return (
    <>
      {/* <Navbar /> */}
      <main className='flex items-center justify-center h-screen'>{children}</main>
      <Toaster richColors />
    </>
  )
}

export default Layout
