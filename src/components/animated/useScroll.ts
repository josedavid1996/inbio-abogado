/* eslint-disable */
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface IProps {
  threshold?: number
}

// nos apoyamos de estos datos
let ScroolActual = 0
let ScroolAnterior = 0

export const useScroll = (threshold?: number) => {
  const { ref, inView, ...ae } = useInView({ threshold })
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(true)

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

  return { inView, isScrollBottom, ref, ...ae }
}
