import Navbar from '../components/layout/Navbar'
import { useState } from 'react'
import { About } from '@components/others/abouts'
import { Services } from '@components/others/services'
import { Quote } from '@components/others/quote'
import { BgNegroTransparente } from '@components/others/bgNegroTransparente'
import { Team } from '@components/others/team'
import { Resumen } from '@components/others/resumen'
import { Numbers } from '@components/others/numbers'
import { RecentBlogs } from '@components/others/recentblogs'
import { NavbarMobile } from '@components/others/navbarMobile'
import { Banner } from '@components/others/banner'
import { Contact } from '@components/others/contact'
import { Footer } from '@components/others/footer'
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
      {/* existen 2 navbar, dependiendo del screen se cambia  */}
      <NavbarMobile ViewMenu={ViewMenu} setViewMenu={setViewMenu} />
      <div className="imgBannerNabar relative h-auto">
        <Navbar />
        <Banner />
        <BgNegroTransparente />
      </div>
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
