/* eslint-disable */
import { TittleCustom } from './tittleCustom'
import { Container } from './container'
import { IDataTeam as IitemTeam, DataTeam } from '@mock/dataTeam'
import { useSecctionView } from '@hooks/useSeccionView'
import { IdDataNavbar } from '@mock/dataNavbar'
import { ItemTeam } from '@components/others/home'
export const Team = () => {
  const { ref } = useSecctionView(IdDataNavbar.Team, 1)

  return (
    <section
      className="bg-[#171A1D] py-[90px] z-30"
      id={IdDataNavbar.Team}
      ref={ref}
    >
      <Container>
        <>
          <TittleCustom tittle="Meet The Team" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DataTeam?.map((obj, k) => (
              <ItemTeam key={k} {...obj} />
            ))}
          </div>
        </>
      </Container>
    </section>
  )
}
