import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import AgeVerificationProvider from '../components/AgeVerificationProvider'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <AgeVerificationProvider>
        <Component {...pageProps} />
      </AgeVerificationProvider>
    </main>
  )
}

export default MyApp