// import { useState } from 'react'
// import { Step } from '../components/shared/SideMultistep'
// import DatosPersonalesForm from '../components/shared/SideMultistep/DatosPersonalesForm'
// import IconMoon from '../icons/IconMoon'
import Navbar from '../components/layout/Navbar'
import NextImage from 'next/image'
import { About } from '@components/others/abouts'

export interface SideMultistepComponentProps {
  stepper: number
  isLast: boolean
  next: () => void
  back: () => void
  submit: () => void
}

const Home = () => {
  // const [stepper, setStepper] = useState(0)

  // const maxStep = 3

  // const props: SideMultistepComponentProps = {
  //   stepper,
  //   isLast: stepper === maxStep,
  //   next: () => {
  //     setStepper((prev) => {
  //       if (prev === maxStep) return maxStep
  //       return prev + 1
  //     })
  //   },
  //   back: () => {
  //     setStepper((prev) => {
  //       if (prev === 0) return 0
  //       return prev - 1
  //     })
  //   },
  //   submit: () => {
  //     console.log('Enviar formulario')
  //   }
  // }

  // const steps: Step[] = [
  //   {
  //     icon: IconMoon,
  //     label: 'Datos Personales',
  //     desc: 'Lorem ipsum dolor sit.',
  //     component: <DatosPersonalesForm {...props} />
  //   },
  //   {
  //     icon: IconMoon,
  //     label: 'Datos Solicitante',
  //     desc: 'Lorem ipsum dolor sit.',
  //     component: <DatosPersonalesForm {...props} />
  //   },
  //   {
  //     icon: IconMoon,
  //     label: 'Cultivos',
  //     desc: 'Lorem ipsum dolor sit.',
  //     component: <DatosPersonalesForm {...props} />
  //   },
  //   {
  //     icon: IconMoon,
  //     label: 'Especies',
  //     desc: 'Lorem ipsum dolor sit.',
  //     component: <DatosPersonalesForm {...props} />
  //   }
  // ]

  return (
    <>
    {/*navbar y header */}
      <div className='imgBannerNabar relative'>
        <Navbar />
        <section className='h-auto w-[87%] flex flex-col gap-4 md:flex-row mx-auto justify-center items-center '>
          <div className='w-full mt-[90px] flex flex-col gap-[10px] md:w-1/2'>
            <h4 className='text-white text-sm tracking-[5px]  '>YOUR LEGAL PARTNER</h4>
            <div className='text-white'>
              Hi, I´m <span className='text-[#AD8E6D]'>Alberto Kyros</span> a
            </div>
            <p className='text-[#999187] '>
              In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia
            </p>
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center '>
            <div className='animate-renderimgabanner z-0'>
              <NextImage
                src='/images/personbanner.png'
                width={450}
                height={550}
              />
            </div>
          </div>
        </section>
        <div className='absolute w-full h-[100px] bottom-0 bg-gradient-to-t from-blacktranparente to-customtranparente z-10' />
      </div>
      <About />
    </>
  )
}

export default Home
