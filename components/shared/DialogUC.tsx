'use client'
import React, {useEffect, useState} from 'react'
import {Button} from '../ui/button'
import {Loader2} from 'lucide-react'

type Props = {}

const DialogUC = (props: Props) => {
  const [reading, setReading] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setReading(false)
    }, 5000)
  }, [])

  const handleClose = () => {
    const element = document.getElementById('constructionAlert')
    if (element) {
      element.remove()
    }
  }
  return (
    <div
      id='constructionAlert'
      className='absolute h-screen w-full bg-black/50 z-50 flex items-center justify-center'
    >
      <div className='max-w-screen-sm bg-background flex-1 rounded-lg shadow-lg'>
        <div className='flex justify-between p-4 items-center'>
          <h1 className='text-2xl font-bold'>Under Development</h1>
        </div>
        <div className='px-8 py-4'>
          <ul className='list-decimal'>
            <li>
              <b>Do not use your real password!</b> All registered information will be deleted when
              the site is fully activated.
            </li>
            <li>
              <b>Your suggestions are valuable to us.</b> Do not hesitate to share your suggestions
              about the site, we will be happy to evaluate them.
            </li>
            <li>
              <b>You can report errors.</b> If you report any errors you encounter, you can help us
              improve the site.
            </li>
            <li>
              <b>Thank you for visiting!</b> Thank you for reviewing our site and taking the time.
            </li>
          </ul>
          {/* <li>
              <b>Gerçek şifrenizi kullanmayın!</b> Site tamamen aktif hale geldiğinde tüm kayıtlı bilgiler silinecektir.
            </li>
            <li>
              <b>Önerileriniz bizim için değerli. </b> Siteyle ilgili tavsiyelerinizi iletmekten çekinmeyin, memnuniyetle değerlendireceğiz.
            </li>
            <li>
              <b>Hata bildirimi yapabilirsiniz. </b> Karşılaştığınız hataları bildirirseniz, siteyi geliştirmemize yardımcı olabilirsiniz.
            </li>
            <li>
              <b>Ziyaretiniz için teşekkürler!</b>Sitemizi incelediğiniz ve zaman ayırdığınız için teşekkür ederiz.
            </li>
          </ul> */}
        </div>
        <div className='p-4 text-end'>
          <Button
            disabled={reading}
            variant={reading ? 'outline' : 'success'}
            className=''
            onClick={handleClose}
          >
            {reading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {reading ? 'Reading...' : 'Understood'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DialogUC
