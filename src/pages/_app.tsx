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
import { NavbarProvider } from '@contexts/NavbarProvider'
import { ApolloProvider } from '@apollo/client'
import { client } from '@apollo/index'
import {
  // Head,
  NavbarMobile,
  BannerForOtherPage,
  Footer
} from '@components/others/home'
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  useEffect(() => {
    Aos.init({
      // once: false,
      offset: 10,
      duration: 1000,
      delay: 500
      // data-aos-anchor-placement="center-center"
    })
  }, [])

  return (
    <ApolloProvider client={client}>
      {/* <SeoProvider> */}
      <NavbarProvider>
        <main>
          {/* <Head /> */}
          {/* existen 2 navbar, dependiendo del screen se cambia  */}
          {/* navbar solo  para mobile */}
          <NavbarMobile />

          {/* navbar para otras paginas */}
          <BannerForOtherPage />
          <Component {...pageProps} />
          <ToastContainer />
          <Footer />
        </main>
      </NavbarProvider>
      {/* </SeoProvider> */}
    </ApolloProvider>
  )
}

// export default MyApp
export default MyApp
