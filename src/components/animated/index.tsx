/* eslint-disable */
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useScroll } from './useScroll'
interface IProps {
  children: ReactNode
  threshold?: number
  className?: string
}

//Seccion en deuso por el momento
export const FadeUp = ({ children, threshold, className }: IProps) => {
  const { inView, isScrollBottom, ref } = useScroll(threshold)
  return (
    <div
      className={`${
        (inView && isScrollBottom) || !isScrollBottom
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0'
      }  transition-all duration-700 delay-500 ease-in-out  ${className}`}
      ref={ref}
    >
      {children}
    </div>
  )
}

export const FadeRight = ({ children, threshold, className }: IProps) => {
  const { inView, isScrollBottom, ref } = useScroll(threshold)
  return (
    <div
      className={`
      ${(inView && isScrollBottom && 'translate-x-0 opacity-100') || ''} 
       ${(!isScrollBottom && inView && 'translate-x-0 opacity-100') || ''}
       transition-all duration-700 ease-in-out ${className}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
export const FadeLeft = ({ children, threshold, className }: IProps) => {
  const { inView, isScrollBottom, ref } = useScroll(threshold)
  return (
    <div
      className={`${
        (inView && isScrollBottom) || !isScrollBottom
          ? 'translate-y-0 opacity-100'
          : 'translate-x-16 opacity-0'
      }  transition-all duration-700 delay-500 ease-in-out  ${className}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
