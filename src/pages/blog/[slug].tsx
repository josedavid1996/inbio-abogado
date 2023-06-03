import { GetServerSidePropsContext } from 'next'
import NextImage from 'next/image'
import { useRouter, NextRouter } from 'next/router'

import request from 'graphql-request'

import { WrapperButtonShares } from '@components/others/blog'
import { BlogDTO } from '@components/others/blog/interfaces'
import { Container } from '@components/others/home'
import { BreadCrumbs } from '@components/shared'
import { Seo } from '@components/shared/Seo/Index'

import { FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa'

import { IMG_404 } from '@mock/etc'

import { URI } from '@Uri/index'

import { GET_SLUG_BLOG } from '@ssr/index'

import moment from 'moment'

import { CalculateTiempoPasado } from '@Util/CalculateTiempoPasado'

interface IPropsSSP {
  slug: string
  data: BlogDTO
  router: NextRouter
}
const Index = ({ data, slug }: IPropsSSP) => {
  const router = useRouter()
  const Page = router.pathname.split('/')[1]
  const MY_URL = process.env.NEXT_PUBLIC_DOMAIN + Page + '/' + slug
  const fechaCreada = moment(data.created_at)
  const fechaActual = moment(new Date())

  const dataSeo = {
    tittlePage: 'Kyros - ' + data.titulo,
    link: data.titulo,
    description: data.descripcionCorta,
    domain: process.env.NEXT_PUBLIC_DOMAIN + 'blog/' + data.slug,
    imgPrincipal: data.imagenPrincipal.url,
    imgSecundaria: data.imagenSecundaria.url,
    keywords: data.keywords,
    url: process.env.NEXT_PUBLIC_DOMAIN + 'blog/' + data.slug
  }

  const GroupBotom = () => (
    <WrapperButtonShares
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
            'https://web.whatsapp.com/send?text=' + data.titulo + ' ' + MY_URL,
          color: 'colorWsp'
        },
        {
          Icon: FaTwitter,
          url:
            'http://TWITTER.com/share?text=' + data.titulo + '&url=' + MY_URL,
          color: 'colorTw'
        }
      ]}
    />
  )
  return (
    <>
      <Seo data={dataSeo} />
      <div className="bg-[#171A1D] min-h-screen h-full">
        <Container>
          <BreadCrumbs
            history={[
              { description: 'Blog', url: '/blog' },
              {
                description: data.titulo || ''
              }
            ]}
          />
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="text-gray-200 font-bold">
              {data.CategoriaBlog.titulo}
            </div>
            <div className="flex flex-row gap-4">
              <GroupBotom />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full py-4">
            <div className="text-base md:text-2xl lg:text-3xl text-custon4 font-bold uppercase">
              {data?.titulo || ''}
            </div>
            <div className="relative aspect-video w-full">
              <NextImage
                src={data?.imagenSecundaria?.url || IMG_404}
                className="absolute w-full h-full object-cover rounded-md"
                priority
                layout="fill"
                alt="img_Slug"
              />
            </div>
            <div className="text-gray-100">{data?.descripcionCorta || ''}</div>
            <div
              className="font-medium leading-8 text-md font-customText text-gray-200 "
              dangerouslySetInnerHTML={{ __html: data?.descripcionLarga! }}
            />
            <div className="flex flex-col  sm:flex-row gap-4 sm:items-center justify-start sm:justify-between">
              <div className="flex flex-row gap-4 items-center">
                <p className="font-bold text-red-200">Compatir:</p>
                <div className="flex flex-row gap-2">
                  <GroupBotom />
                </div>
              </div>
              <p className="text-gray-200 font-bold flex  justify-end">
                {CalculateTiempoPasado(
                  fechaActual.diff(fechaCreada, 'minutes')
                )}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Index
export const getServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  const { GetBlogSlug }: { GetBlogSlug: BlogDTO } = await request(
    URI,
    GET_SLUG_BLOG,
    {
      slug: query.slug
    }
  )

  return {
    props: { data: GetBlogSlug, slug: query.slug }
  }
}
