/* eslint-disable comma-dangle */
import {
  About,
  Services,
  Quote,
  Team,
  Resumen,
  Numbers,
  RecentBlogs,
  NavbarMobile,
  Contact,
  Footer,
  WrapperBanner,
  Head,
} from '@components/others'
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
      <Head />
      {/* existen 2 navbar, dependiendo del screen se cambia  */}
      {/* navbar solo  para mobile */}
      <NavbarMobile />

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
      <Footer />
    </>
  )
}

export default Home
