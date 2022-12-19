import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
interface Iprops {
  percentage: string
  tittlePercentege?: string
}
export const Progressbar = ({ percentage, tittlePercentege }: Iprops) => {
  const [isEffect, setIsEffect] = useState<boolean>(false)
  const { ref, inView } = useInView({ threshold: 0 })

  useEffect(() => {
    if (inView) setIsEffect(true)
    else setIsEffect(false)
  }, [inView])

  return (
    <div className="w-full bg-[#303030] h-[6px] rounded relative" ref={ref}>
      <div
        // data-aos="fade-right"
        className={`absolute bg-[#AD8E6D] h-full ${percentage} ${
          isEffect ? 'animate-renderprogresbar' : ''
        } rounded  transition-all scale-0 origin-left`}
      >
        <div className="relative w-full h-full rounded ">
          <div className="absolute bg-[#202020] text-white -top-10 right-0 p-1 z-20">
            {tittlePercentege || 'NOT_FOUND'}
          </div>
          <div className="absolute bg-[#202020] w-4 h-4 transform skew-y-12 z-10 -top-6 right-0 p-1" />
        </div>
      </div>
    </div>
  )
}
