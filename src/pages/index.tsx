import { useState } from 'react'
import SideMultistep, { Step } from '../components/shared/SideMultistep'
import DatosPersonalesForm from '../components/shared/SideMultistep/DatosPersonalesForm'
import IconMoon from '../icons/IconMoon'
import Navbar from '../components/layout/Navbar'
import NextImage from 'next/image'

export interface SideMultistepComponentProps {
  stepper: number
  isLast: boolean
  next: () => void
  back: () => void
  submit: () => void
}

const Home = () => {
  const [stepper, setStepper] = useState(0)

  const maxStep = 3

  const props: SideMultistepComponentProps = {
    stepper,
    isLast: stepper === maxStep,
    next: () => {
      setStepper((prev) => {
        if (prev === maxStep) return maxStep
        return prev + 1
      })
    },
    back: () => {
      setStepper((prev) => {
        if (prev === 0) return 0
        return prev - 1
      })
    },
    submit: () => {
      console.log('Enviar formulario')
    }
  }

  const steps: Step[] = [
    {
      icon: IconMoon,
      label: 'Datos Personales',
      desc: 'Lorem ipsum dolor sit.',
      component: <DatosPersonalesForm {...props} />
    },
    {
      icon: IconMoon,
      label: 'Datos Solicitante',
      desc: 'Lorem ipsum dolor sit.',
      component: <DatosPersonalesForm {...props} />
    },
    {
      icon: IconMoon,
      label: 'Cultivos',
      desc: 'Lorem ipsum dolor sit.',
      component: <DatosPersonalesForm {...props} />
    },
    {
      icon: IconMoon,
      label: 'Especies',
      desc: 'Lorem ipsum dolor sit.',
      component: <DatosPersonalesForm {...props} />
    }
  ]

  return (

    <div style={{ backgroundImage: `url('/images/bgbanner.jpg')` }}>
      <Navbar />
      <section className='h-auto w-[90%] flex flex-col md:flex-row mx-auto justify-center items-center'>
        <div className=''>
          <h4 className='text-white text-sm'>YOUR LEGAL PARTNER</h4>
          <div className='text-white'>
            Hi, I´m <span className='text-[#AD8E6D]'>Alberto Kyros</span> a
          </div>
        </div>
        <div className='relative w-60 h-60'>
          <NextImage
            src='/images/personbanner.png'
            className='absolute w-full h-full'
            layout='fill'
          />
        </div>
        {/* <SideMultistep
          title="Titulo"
          desc="Lorem ipsum dolor sit."
          steps={steps}
          stepper={stepper}
        />
        <SideMultistep
          title="Titulo"
          desc="Lorem ipsum dolor sit."
          steps={steps}
          stepper={stepper}
        /> */}
      </section>
    </div>
  )
}

export default Home
