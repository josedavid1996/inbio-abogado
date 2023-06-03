import {
  About,
  Services,
  Team,
  Resumen,
  RecentBlogs,
  Contact,
  WrapperBanner
} from '@components/others/home'

import { Seo } from '@components/shared/Seo/Index'

export interface SideMultistepComponentProps {
  stepper: number
  isLast: boolean
  next: () => void
  back: () => void
  submit: () => void
}

const Home = () => {
  const dataSeo = {
    tittlePage: 'Kyros - Personal Website',
    description: 'Somos los mejores en lo que hacemos',
    url: process.env.NEXT_PUBLIC_DOMAIN!,
    keywords: 'Comercial services, employment services, civil ligitation',
    imgPrincipal: `${process.env.NEXT_PUBLIC_DOMAIN}images/imgpageseo.webp`,
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    imgSecundaria: `${process.env.NEXT_PUBLIC_DOMAIN}images/imgpageseo.webp`,
    link: 'Kyros'
  }

  return (
    <>
      <Seo data={dataSeo} />
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
