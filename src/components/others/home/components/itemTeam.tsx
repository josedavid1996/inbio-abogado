import NextImage from 'next/image'
import NextLink from 'next/link'
import { IDataTeam as IitemTeam } from '@mock/dataTeam'

export const ItemTeam = ({ icons, img, subtittle, tittle }: IitemTeam) => (
  <div
    className="flex flex-col"
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
  >
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
      <h6 className="text-custon4">{subtittle || ''}</h6>
    </div>
  </div>
)
