/* eslint-disable react-hooks/exhaustive-deps */
import { useSecctionView } from '@hooks/useSeccionView'
import { IdDataNavbar } from '@mock/dataNavbar'
import { Container } from '../container'
import { TittleCustom } from '../tittleCustom'
import { DataResumen } from '@mock/dataResumen'
import { ItemResumen } from '@components/others/home'
import { TittleItemResumen } from './tittleItemResumen'
import { Numbers } from '../numbers'

export const Resumen = () => {
  const { ref } = useSecctionView(IdDataNavbar.Resumen)
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
              <div key={k}>
                <TittleItemResumen tittle={obj.Tittle} />

                {/** Cuerpo o items */}
                <div className="flex flex-col w-auto mt-6">
                  {obj.History?.map((obj, k) => (
                    <ItemResumen item={obj} key={k} k={k} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Numbers />
    </>
  )
}
