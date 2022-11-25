/* eslint-disable react-hooks/exhaustive-deps */
import { IContext, NavbarContextConfig } from '@contexts/NavbarProvider'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export const useSecctionView = (NameSeccion: string, tre?: number) => {
  const { setViewSecction } = NavbarContextConfig() as IContext
  const { ref, inView } = useInView({ threshold: tre || 0.4 })

  useEffect(() => {
    if (inView) {
      setViewSecction(NameSeccion)
    }
  }, [inView])

  return { ref }
}
