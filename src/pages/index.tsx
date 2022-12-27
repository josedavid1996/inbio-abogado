/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import { SetDataMeta } from '@Redux/Meta/mesaSlice'
import { Wrapper } from '@Redux/store'
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
import { Store } from '@reduxjs/toolkit'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

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

export const getServerSideProps: GetServerSideProps = Wrapper.getServerSideProps(
  (store: Store) => async (ctx: GetServerSidePropsContext) => {
    store.dispatch(
      SetDataMeta({
        tittlePage: 'Kyros - Personal Website',
        link: 'Kyros',
        description: 'Somos los mejores en lo que hacemos',
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        imgPrincipal: `${process.env.NEXT_PUBLIC_DOMAIN}images/imgpageseo.webp`,
        imgSecundaria: `${process.env.NEXT_PUBLIC_DOMAIN}images/imgpageseo.webp`,
        keywords: 'Comercial services, employment services, civil ligitation',
        url: process.env.NEXT_PUBLIC_DOMAIN,
      }),
    )
    return { props: {} }
  },
)
