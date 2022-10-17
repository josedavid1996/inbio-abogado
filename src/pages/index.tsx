import { useState } from 'react'
import SideMultistep, { Step } from '../components/shared/SideMultistep'
import DatosPersonalesForm from '../components/shared/SideMultistep/DatosPersonalesForm'
import IconMoon from '../icons/IconMoon'

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
    <section>
      <SideMultistep
        title="Titulo"
        desc="Lorem ipsum dolor sit."
        steps={steps}
        stepper={stepper}
      />
    </section>
  )
}

export default Home
