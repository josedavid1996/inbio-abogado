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
import { SeoProvider } from '@contexts/seo/SeoContext'
import { ApolloProvider } from '@apollo/client'
import { client } from '@apollo/index'
import {
  // Head,
  NavbarMobile,
  BannerForOtherPage,
  Footer,
} from '@components/others/home'
import { OpenGraph } from '@components/seo/OpenGraph'
import { DOMAIN_URL } from '@mock/etc'
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  useEffect(() => {
    Aos.init({
      // once: false,
      offset: 10,
      duration: 1000,
      delay: 500,
      // data-aos-anchor-placement="center-center"
    })
  }, [])

  return (
    <ApolloProvider client={client}>
      <SeoProvider>
        <NavbarProvider>
          <main>
            <OpenGraph
              data={{
                tittlePage: 'Kyros - Personal Website',
                link: 'Kyros',
                description: 'Somos los mejores en lo que hacemos',
                domain: DOMAIN_URL,
                imgPrincipal: `${DOMAIN_URL}images/imgpageseo.webp`,
                imgSecundaria: `${DOMAIN_URL}images/imgpageseo.webp`,
                keywords:
                  'Comercial services, employment services, civil ligitation',
                url: DOMAIN_URL,
              }}
            />
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
      </SeoProvider>
    </ApolloProvider>
  )
}

export default MyApp
