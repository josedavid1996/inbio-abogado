/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { useSecctionView } from '@hooks/useSeccionView'
import { IdDataNavbar } from '@mock/dataNavbar'
import { DataServices, IDataServices } from '@mock/dataServices'
import { Quote } from './quote'

export const Services = () => {
  const { ref } = useSecctionView(IdDataNavbar.Services, 1)
  const Item = ({ Icon, description, tittle }: IDataServices) => (
    <div
      className="flex flex-col gap-3"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div>
        <Icon className="w-10 h-10 text-[#AD8E6D]" />
      </div>
      <div className="text-white text-[22px] font-semibold">{tittle || ''}</div>
      <div className="text-custon4">{description || ''}</div>
    </div>
  )
  return (
    <>
      <section
        className="bg-[#171A1D] py-[90px] z-30 "
        id={IdDataNavbar.Services}
        ref={ref}
      >
        <Container>
          <>
            <TittleCustom tittle="My Services" />
            <div className="flex flex-col lg:flex-row gap-4">
              {DataServices?.map((obj, k) => (
                <Item key={k} {...obj} />
              ))}
            </div>
          </>
        </Container>
      <Quote />
      </section>

    </>
  )
}
