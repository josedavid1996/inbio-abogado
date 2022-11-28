/* eslint-disable comma-dangle */
import { useState, useEffect } from 'react'
import { BgNegroTransparente } from './bgNegroTransparente'
import CountUp from 'react-countup/build'
import { useInView } from 'react-intersection-observer'

export const Numbers = () => {
  const [isEffect, setIsEffect] = useState<boolean>(false)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) setIsEffect(true)
    else setIsEffect(false)
  }, [inView])

  return (
    <div
      className="bg-[url('/images/bgnumbers.webp')] w-full h-[547px] md:h-[272px] aspect-square bg-cover bg-center relative flex items-center justify-center"
      ref={ref}
    >
      <BgNegroTransparente isReverse light />
      <div className="flex flex-col md:flex-row w-[90%] max-w-[1240px] justify-around items-center gap-4">
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={8240} duration={1} />}
          </h4>
          <span className="text-[12px]">HOURS OF WORKS</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={315} duration={1} />}
          </h4>
          <span className="text-[12px]">CASES DONE</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={250} duration={1} />}
          </h4>
          <span className="text-[12px]">SATISFIED CUSTOMERS</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">
            {isEffect && <CountUp end={32} duration={1} />}
          </h4>
          <span className="text-[12px]">AWARDS WINNING</span>
        </div>
      </div>
      <BgNegroTransparente light />
    </div>
  )
}
