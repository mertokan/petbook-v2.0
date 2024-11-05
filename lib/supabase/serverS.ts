import {createServerClient} from '@supabase/ssr'
import {cookies} from 'next/headers'
import {Database} from '../types/database.types'

export function createServerS() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookieStore,
    }
  )
}
