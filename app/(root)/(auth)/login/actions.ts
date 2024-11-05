'use server'

import {createServer} from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function login(formData: FormData) {
  const supabase = createServer()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const {error} = await supabase.auth.signInWithPassword(data)

  if (error) {
 
    return {error: error.message, code: error.code}
 
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
