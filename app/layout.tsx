import type {Metadata} from 'next'
import localFont from 'next/font/local'
import {Space_Grotesk} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from '@/components/theme/theme-provider'
import StoreProvider from './StoreProvider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Petbook',
  description: 'Petbook, petlerinizi sevebileceğiniz bir platformudur.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
