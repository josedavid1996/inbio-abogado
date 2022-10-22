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
      <NavbarMobile ViewMenu={ViewMenu} setViewMenu={setViewMenu} />
      <div className="imgBannerNabar relative h-auto">
        <Navbar />
        <Banner />
        <BgNegroTransparente />
      </div>
      <About />
      <Services />
      <Quote />
      <Team />
      <Resumen />
      <Numbers />
      <RecentBlogs />
    </>
  )
}

export default Home
