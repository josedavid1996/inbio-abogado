import Navbar from '../components/layout/Navbar'
import NextImage from 'next/image'
import { About } from '@components/others/abouts'
import { Services } from '@components/others/services'
import { Quote } from '@components/others/quote'
import { BgNegroTransparente } from '@components/others/bgNegroTransparente'
import { Team } from '@components/others/team'
import { Resumen } from '@components/others/resumen'
import { Container } from '@components/others/container'
import { Numbers } from '@components/others/numbers'

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
      <div className="imgBannerNabar relative ">
        <Navbar />
        <Container>
          <section className="h-auto flex flex-col gap-4 md:flex-row justify-center items-center lg:pt-16 p-9">
            <div className="w-full  flex flex-col gap-[10px] md:w-1/2">
              <h4 className="text-white text-sm tracking-[5px]  ">
                YOUR LEGAL PARTNER
              </h4>
              <div className="text-white">
                Hi, I´m <span className="text-[#AD8E6D]">Alberto Kyros</span> a
              </div>
              <p className="text-[#999187] ">
                In quis amet ex veniam in irure est culpa veniam velit fugiat
                cupidatat duis anim commodo elit in occaecat cupidatat eu et
                sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum
                officia
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center ">
              {/* <div className="animate-renderimgabanner z-0"> */}
              <div className="animate-renderimgabanner relative w-full h-auto aspect-square z-0">
                <NextImage
                  src="/images/personbanner.png"
                  // width={450}
                  layout="fill"
                  className="w-full h-full absolute"
                  // height={550}
                />
              </div>
            </div>
          </section>
          <div />
        </Container>
        <BgNegroTransparente />
      </div>
      <About />
      <Services />
      <Quote />
      <Team />
      <Resumen />
      <Numbers />
    </>
  )
}

export default Home
