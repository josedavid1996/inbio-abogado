import '../assets/fonts/dm-sans/dm-sans.css'
import '../styles/index.css'

import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import useLoadTheme from '../hooks/useLoadTheme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  return (
    <main>
      <Component {...pageProps} />
      <ToastContainer />
    </main>
  )
}

export default MyApp
