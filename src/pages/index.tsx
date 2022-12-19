/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import {
  About,
  Services,
  Team,
  Resumen,
  RecentBlogs,
  Contact,
  WrapperBanner,
} from '@components/others/home'
import { OpenGraph } from '@components/seo/OpenGraph'
import { DOMAIN_URL } from '@mock/etc'
import { useEffect } from 'react'

// import { OpenGraph } from '@components/seo/OpenGraph'
export interface SideMultistepComponentProps {
  stepper: number
  isLast: boolean
  next: () => void
  back: () => void
  submit: () => void
}

const Home = () => {
  return (
    <>
      <OpenGraph
        data={{
          tittlePage: 'Kyros - Personal Website',
          link: 'Kyros',
          description: 'Somos los mejores en lo que hacemos',
          domain: DOMAIN_URL,
          imgPrincipal: `${DOMAIN_URL}images/imgpageseo.webp`,
          imgSecundaria: `${DOMAIN_URL}images/imgpageseo.webp`,
          keywords: 'Comercial services, employment services, civil ligitation',
          url: DOMAIN_URL,
        }}
      />
      {/* <OpenGraph data={} /> */}
      {/* navbar solo  para desktop */}
      <WrapperBanner />
      {/* Secciones separadas por componentes */}
      <About />
      <Services />
      <Team />
      <Resumen />
      <RecentBlogs />
      <Contact />
    </>
  )
}

export default Home
