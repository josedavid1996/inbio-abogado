/* eslint-disable react-hooks/exhaustive-deps */
import { FaBriefcase, FaUser, FaGavel } from 'react-icons/fa'
import { Container } from './container'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { IContext, NavbarContextConfig } from '@contexts/NavbarProvider'
import { TittleCustom } from './tittleCustom'
export const Services = () => {
  const { setViewSecction } = NavbarContextConfig() as IContext
  const { inView, ref } = useInView({ threshold: 1 })
  useEffect(() => {
    if (inView) setViewSecction('Services')
  }, [inView])
  return (
    <section className="bg-[#171A1D] py-[90px] z-30" id="Services" ref={ref}>
      <Container>
        <>
          <TittleCustom tittle="My Services" />
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div>
                <FaBriefcase className="w-10 h-10 text-[#AD8E6D]" />
              </div>
              <div className="text-white text-[22px] font-semibold">
                Commercial Services
              </div>
              <div>
                Ex velit cupidatat magna voluptate deserunt quis et dolor
                adipisicing elit culpa ad exercitation proident irure deserunt
                irure.
              </div>
            </div>
            <div
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div>
                <FaUser className="w-10 h-10 text-[#AD8E6D]" />
              </div>
              <div className="text-white text-[22px] font-semibold">
                Employment Services
              </div>
              <div>
                Ex velit cupidatat magna voluptate deserunt quis et dolor
                adipisicing elit culpa ad exercitation proident irure deserunt
                irure.
              </div>
            </div>
            <div
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div>
                <FaGavel className="w-10 h-10 text-[#AD8E6D]" />
              </div>
              <div className="text-white text-[22px] font-semibold">
                Civil Litigation
              </div>
              <div>
                Ex velit cupidatat magna voluptate deserunt quis et dolor
                adipisicing elit culpa ad exercitation proident irure deserunt
                irure.
              </div>
            </div>
          </div>
        </>
      </Container>
    </section>
  )
}
