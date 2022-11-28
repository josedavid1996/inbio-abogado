/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import { TittleCustom } from './tittleCustom'
import NextImage from 'next/image'
import { Container } from './container'
import { IDataTeam as IitemTeam, DataTeam } from '@mock/dataTeam'
import NextLink from 'next/link'
import { useSecctionView } from '@hooks/useSeccionView'
import { IdDataNavbar } from '@mock/dataNavbar'
export const Team = () => {
  const { ref } = useSecctionView(IdDataNavbar.Team, 1)

  const ItemTeam = ({ icons, img, subtittle, tittle }: IitemTeam) => (
    <div className="flex flex-col">
      <div className="aspect-square relative ">
        <NextImage
          src={img}
          layout="fill"
          alt="img_itemTeam"
          className="absolute w-full h-full rounded-lg z-0"
        />
        <div className="absolute bottom-9 w-full z-40">
          <div className="flex flex-row gap-3 mx-auto w-[120px] h-[40px]  justify-center items-center rounded bg-[#AD8E6D] text-white">
            {icons?.map(({ Icon, url }, k) => (
              <NextLink href={url} key={k}>
                <a target={'_blank'}>{<Icon />}</a>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 mt-3">
        <h4 className="text-white text-[20px] font-semibold text-center ">
          {tittle || ''}
        </h4>
        <h6>{subtittle || ''}</h6>
      </div>
    </div>
  )

  return (
    <section
      className="bg-[#171A1D] py-[90px] z-30"
      id={IdDataNavbar.Team}
      ref={ref}
    >
      <Container>
        <>
          <TittleCustom tittle="Meet The Team" />
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {DataTeam?.map((obj, k) => (
              <ItemTeam key={k} {...obj} />
            ))}
          </div>
        </>
      </Container>
    </section>
  )
}
