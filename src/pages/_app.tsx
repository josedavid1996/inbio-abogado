/* eslint-disable comma-dangle */
// import '../assets/fonts/dm-sans/dm-sans.css'
import '../styles/index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'aos/dist/aos.css'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Aos from 'aos'
import useLoadTheme from '../hooks/useLoadTheme'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 10,
      duration: 1000,
    })
  }, [])

  return (
    <main>
      <Component {...pageProps} />
      <ToastContainer />
    </main>
  )
}

export default MyApp
