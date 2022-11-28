/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '@components/layout/Navbar'
import {
  Banner,
  BgNegroTransparente,
  IconsFloats,
  Scroll,
} from '@components/others/home'
import { useSecctionView } from '@hooks/useSeccionView'
import { IdDataNavbar } from '@mock/dataNavbar'

export const WrapperBanner = () => {
  const { ref } = useSecctionView(IdDataNavbar.Home, 1)
  return (
    <div
      className="imgBannerNabar relative h-auto"
      id={IdDataNavbar.Home}
      ref={ref}
    >
      <Navbar />
      <Banner />
      <BgNegroTransparente Height="lg:h-[210px]" />
      <Scroll />
      <IconsFloats />
    </div>
  )
}
