import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import Link from 'next/link'
import {createClient} from '@/lib/supabase/client'
import {useAppDispatch} from '@/lib/redux/hooks'
import {clearUser} from '@/lib/redux/slicers/userSlice'
import {useRouter} from 'next/navigation'

type Props = {
  pp: string
}

const UserButton = (props: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    dispatch(clearUser())
    router.refresh()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='cursor-pointer'>
          <AvatarImage src={props.pp} alt='PB' />
          <AvatarFallback>PB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <Link href='/profile'>
          <DropdownMenuItem> Profile </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
