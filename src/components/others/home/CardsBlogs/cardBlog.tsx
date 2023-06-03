/* eslint-disable comma-dangle */
import NextImage from 'next/image'
import { useRouter } from 'next/router'

import moment from 'moment'

import { BlogDTO, CategoriaBlogDTO } from '../../blog/interfaces'
import { FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import { WrapperButtonShares } from '@components/shared/WrapperButtonShares'
import { CalculateTiempoPasado } from 'src/utils/CalculateTiempoPasado'

interface Iprops {
  data: BlogDTO | CategoriaBlogDTO
}

export const CardBlog = ({ data }: Iprops) => {
  const { push } = useRouter()

  const fechaCreada = moment(data.created_at)
  const fechaActual = moment(new Date())

  const router = useRouter()
  const Page = router.pathname.split('/')[1]
  const MY_URL =
    process.env.NEXT_PUBLIC_DOMAIN + Page + '/' + data.CategoriaBlog?.titulo
  return (
    <div className="flex flex-col ">
      <div
        className="aspect-square relative object-cover cursor-pointer overflow-hidden rounded-lg"
        onClick={() => push('/blog/' + data.slug)}
      >
        <NextImage
          src={data.imagenPrincipal.url}
          layout="fill"
          className="absolute w-full h-full object-cover object-center hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-center gap-1 mt-6">
        <h3
          className="text-custom1 font-bold text-[12px] uppercase cursor-pointer"
          onClick={() => push('/blog/' + data.slug)}
        >
          {data.CategoriaBlog?.titulo || ''}
        </h3>
        <h4
          className="text-white font-bold  mt-2 text-base uppercase cursor-pointer transition-all duration-500 hover:text-custom1"
          onClick={() => push('/blog/' + data.slug)}
        >
          {data.titulo || ''}
        </h4>
        <div className="flex justify-between items-center mt-2 pr-2">
          <h6 className="text-custom1 text-[10px]">
            {CalculateTiempoPasado(fechaActual.diff(fechaCreada, 'minutes'))}
          </h6>
          <WrapperButtonShares
            bg="bg-custom1"
            colorIcon="text-white"
            width="w-6"
            height="h-6"
            MetaData={{
              text: data.descripcionCorta,
              tittle: data.titulo,
              url: MY_URL
            }}
            RedesSociales={[
              {
                Icon: FaFacebook,
                color: 'colorFb',
                url: 'https://www.facebook.com/sharer/sharer.php?u=' + MY_URL
              },
              {
                Icon: FaWhatsapp,
                url:
                  'https://web.whatsapp.com/send?text=' +
                  data.titulo +
                  ' ' +
                  MY_URL,
                color: 'colorWsp'
              },
              {
                Icon: FaTwitter,
                url:
                  'http://TWITTER.com/share?text=' +
                  data.titulo +
                  '&url=' +
                  MY_URL,
                color: 'colorTw'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
