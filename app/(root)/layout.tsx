import Navbar from '@/components/shared/Navbar'
import InitUser from '@/lib/redux/initUser'
import {createServer} from '@/lib/supabase/server'
import React from 'react'

type Props = React.PropsWithChildren<{}>

const Layout = async ({children}: Props) => {
  const supabase = createServer()

  const {data: user, error} = await supabase.auth.getUser()

  return (
    <>
      {/* <InitUser user={user?.user ?? undefined} /> */}
      <Navbar />
      {children}
    </>
  )
}

export default Layout
