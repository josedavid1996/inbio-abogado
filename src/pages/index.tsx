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
