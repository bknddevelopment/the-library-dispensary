import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import AgeVerificationProvider from '../components/AgeVerificationProvider'
import PromotionalBanner from '../components/PromotionalBanner'
import FloatingPromotionalButton from '../components/FloatingPromotionalButton'
import '../styles/globals.css'

// Lazy load performance monitoring (not critical for initial render)
const PerformanceMonitor = dynamic(
  () => import('../components/PerformanceMonitor'),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <AgeVerificationProvider>
        <PromotionalBanner />
        <FloatingPromotionalButton />
        <Component {...pageProps} />
        <PerformanceMonitor />
      </AgeVerificationProvider>
    </main>
  )
}

export default MyApp