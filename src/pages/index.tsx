/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import {
  About,
  Services,
  Quote,
  Team,
  Resumen,
  Numbers,
  RecentBlogs,
  Contact,
  WrapperBanner,
} from '@components/others/home'
import { useEffect } from 'react'
import { CallSeoContext } from '@contexts/seo/SeoContext'
import { DOMAIN_URL } from '@mock/etc'
export interface SideMultistepComponentProps {
  stepper: number
  isLast: boolean
  next: () => void
  back: () => void
  submit: () => void
}

const Home = () => {
  const { dispatch } = CallSeoContext()
  useEffect(() => {
    dispatch({
      type: 'UpdateSeo',
      payload: {
        tittlePage: 'Kyros - Personal Website',
        link: 'Kyros',
        description: 'Somos los mejores en lo que hacemos',
        domain: DOMAIN_URL,
        img: `${DOMAIN_URL}images/imgpageseo.webp`,
        keywords: 'Comercial services, employment services, civil ligitation',
        url: DOMAIN_URL,
      },
    })
  }, [])
  return (
    <>
      {/* navbar solo  para desktop */}
      <WrapperBanner />
      {/* Secciones separadas por componentes */}
      <About />
      <Services />
      <Quote />
      <Team />
      <Resumen />
      <Numbers />
      <RecentBlogs />
      <Contact />
    </>
  )
}

export default Home
