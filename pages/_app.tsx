import type { AppProps } from 'next/app'
import '../app/globals.css'
import { ReservationProvider } from '@/context/ReservationContext'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ReservationProvider>
      <Component {...pageProps} />
    </ReservationProvider>
  )
}