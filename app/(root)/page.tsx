import Image from 'next/image'
import BannerImage from '@/app/public/images/header-photo.jpg'

export default function Home() {
  return (
    <div className='h-[695px] w-full relative -z-10'>
      <div className='absolute h-full w-full bg-black/50' />
      <Image
        src={BannerImage}
        alt='banner image'
        className='w-full h-full object-cover select-none'
        priority={true}
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10'>
        <h1 className='text-5xl font-bold'>Petbook</h1>
        <p className='text-xl font-semibold'>
          Petbook, petlerinizi sevebileceğiniz bir platformdur.
        </p>
      </div>
    </div>
  )
}
