import { useState } from 'react'
import { About } from '@components/others/abouts'
import { Services } from '@components/others/services'
import { Quote } from '@components/others/quote'
import { Team } from '@components/others/team'
import { Resumen } from '@components/others/resumen'
import { Numbers } from '@components/others/numbers'
import { RecentBlogs } from '@components/others/recentblogs'
import { NavbarMobile } from '@components/others/navbarMobile'
import { Contact } from '@components/others/contact'
import { Footer } from '@components/others/footer'
import { WrapperBanner } from '@components/others/wrapperBanner'
import { Head } from '@components/others/head'
export interface SideMultistepComponentProps {
  stepper: number
  isLast: boolean
  next: () => void
  back: () => void
  submit: () => void
}

const Home = () => {
  const [ViewMenu, setViewMenu] = useState(false)

  return (
    <>
      <Head />
      {/* existen 2 navbar, dependiendo del screen se cambia  */}
      <NavbarMobile ViewMenu={ViewMenu} setViewMenu={setViewMenu} />
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
