'use client'
import {User} from '@supabase/supabase-js'
import React, {useEffect, useRef} from 'react'
import {useAppDispatch} from './hooks'
import {setUser} from './slicers/userSlice'
import {createClient} from '../supabase/client'

type Props = {}

const InitUser = async ({user}: {user: User | undefined}) => {
  const supabase = createClient()

  const initState = useRef(false)
  const dispatch = useAppDispatch()

  const {data} = await supabase
    .from('users')
    .select('*')
    .eq('email', user?.email || '')

  useEffect(() => {
    if (!initState.current) {
      dispatch(setUser(data))
    }
    initState.current = true
  }, [])

  return <></>
}

export default InitUser
