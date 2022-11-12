/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '@components/layout/Navbar'
import { useEffect } from 'react'
import { Banner } from './banner'
import { BgNegroTransparente } from './bgNegroTransparente'
import { IconsFloats } from './iconsfloats'
import { Scroll } from './scroll'
import { NavbarContextConfig, IContext } from '@contexts/NavbarProvider'
import { useInView } from 'react-intersection-observer'

export const WrapperBanner = () => {
  const { setViewSecction } = NavbarContextConfig() as IContext
  const { ref, inView } = useInView({ threshold: 0 })
  useEffect(() => {
    if (inView) {
      setViewSecction('Home')
    }
  }, [inView])
  return (
    <div className="imgBannerNabar relative h-auto" id="Home" ref={ref}>
      <Navbar />
      <Banner />
      <BgNegroTransparente Height="lg:h-[210px]" />
      <Scroll />
      <IconsFloats />
    </div>
  )
}
