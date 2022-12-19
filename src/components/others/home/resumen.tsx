/* eslint-disable react-hooks/exhaustive-deps */
import { useSecctionView } from '@hooks/useSeccionView'
import { IdDataNavbar } from '@mock/dataNavbar'
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { DataResumen, History } from '@mock/dataResumen'
import { Numbers } from './numbers'

interface IPropsTitle {
  tittle: string
}

interface IPropsBody {
  history: History[]
}

interface IPropsItem {
  item: History
  k: number
}
export const Resumen = () => {
  const { ref } = useSecctionView(IdDataNavbar.Resumen)
  const Tittle = ({ tittle }: IPropsTitle) => (
    <h3 className="text-white text-[28px] font-semibold">{tittle || ''}</h3>
  )
  const Item = ({ item, k }: IPropsItem) => (
    <div className="flex flex-col">
      <div className="flex flex-row relative">
        <div className="w-10 h-10 rounded-full bg-[#AD8E6D] flex items-center justify-center text-white z-30">
          {k + 1}
        </div>
        <div className="h-10 w-full absolute bg-gradient-to-r from-gradResumen1 to-gradResumen2 z-20 rounded-l-full flex items-center">
          <h4 className="ml-16 text-white">
            {item.RangeYear.initial || ''} - {item.RangeYear.finish || ''}
          </h4>
        </div>
      </div>
      <div className="flex flex-row  relative h-full ">
        <div className="w-[0.5px] bg-custon4 ml-5"></div>
        <div className="ml-11 flex flex-col gap-2 py-6">
          <h4 className="text-white text-lg font-semibold">
            {item.tittle || ''}
          </h4>
          <h5 className="text-custon3 text-base">{item.subtittle || ''}</h5>
          <p className="text-custon4 text-[16px]">{item.description || ''}</p>
        </div>
      </div>
    </div>
  )
  const Body = ({ history }: IPropsBody) => (
    <div className="flex flex-col w-auto mt-6">
      {history?.map((obj, k) => (
        <Item item={obj} key={k} k={k} />
      ))}
    </div>
  )
  return (
    <>
      <div
        className="bg-[#171A1D] py-[90px] z-30"
        id={IdDataNavbar.Resumen}
        ref={ref}
      >
        <Container>
          <TittleCustom tittle="My Resume" />
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
            {DataResumen?.map((obj, k) => (
              <div
                key={k}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <Tittle tittle={obj.Tittle} />
                <Body history={obj.History} />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Numbers />
    </>
  )
}
