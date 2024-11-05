'use server'

import {createServer} from '@/lib/supabase/server'
import {createServerS} from '@/lib/supabase/serverS'
import {revalidatePath} from 'next/cache'
import {redirect} from 'next/navigation'

export async function signup(formData: FormData) {
  const supabase = createServerS()

  const data = {
    name: formData.get('name') as string,
    surname: formData.get('surname') as string,
    display_name: formData.get('displayName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }



  const {error} = await supabase.auth.signUp(data)

  const {error: updateError} = await supabase
    .from('users')
    .update({display_name: data.display_name, name: data.name, surname: data.surname})
    .match({email: data.email})

  const {data: allData} = await supabase.from('users').select('*')

  if (error) {

    return {error: error.message, code: error.code, status: error.status}
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}
