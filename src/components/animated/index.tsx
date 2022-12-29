/* eslint-disable */
import { ReactNode, useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'

interface IProps {
  children: ReactNode
  threshold?: number
  className?: string
}

let ScroolActual = 0
let ScroolAnterior = 0

export const FadeUp = ({ children, threshold, className }: IProps) => {
  // const [PuntoInitial, setPuntoInitial] = useState<number>(0)
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false)
  const { ref, inView } = useInView({ threshold })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      ScroolActual = window.scrollY
      if (ScroolActual >= ScroolAnterior) {
        ScroolAnterior = ScroolActual
        setIsScrollBottom(true)
      } else {
        ScroolAnterior = ScroolActual + 1
        setIsScrollBottom(false)
      }
    })
  }, [])
  return (
    <div
      className={`${
        (inView && isScrollBottom) || isScrollBottom
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0'
      }  transition-all duration-700 delay-500 ease-in-out  ${className}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
