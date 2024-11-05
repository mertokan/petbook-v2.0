'use client'
import {useEffect, useRef, useState} from 'react'
import {Provider} from 'react-redux'
import {makeStore, AppStore} from '../lib/redux/store'
import LoadTheme from '@/components/theme/LoadTheme'
import Loading from '@/components/shared/Loading'

export default function StoreProvider({children}: {children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false)
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // if (!mounted) {
  //   return (
  //     <div className='flex items-center justify-center h-screen bg-gray-800'>
  //       <Loading />
  //     </div>
  //   )
  // }

  return (
    <Provider store={storeRef.current}>
      <LoadTheme />
      {children}
    </Provider>
  )
}
