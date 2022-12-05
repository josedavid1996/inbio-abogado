/* eslint-disable n/handle-callback-err */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { AllBlogs, WrapperButtonShares } from '@components/others/blog'
import dynamic from 'next/dynamic'
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetBlogSlug } from '@Services'
import { LayoutBlog } from '@components/layout/blog'
import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import request from 'graphql-request'
import { GetServerSidePropsContext } from 'next'
import { Container } from '@components/others/home'
import { DOMAIN_URL, IMG_404 } from '@mock/etc'
import { URI } from '@Uri/index'
import { GET_SLUG_BLOG } from '@ssr/index'
import { CallSeoContext } from '@contexts/seo/SeoContext'
import { OpenGraph } from '@components/seo/OpenGraph'
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaShare,
  FaTwitter,
} from 'react-icons/fa'
import { useRouter, NextRouter } from 'next/router'
interface IPropsSSP {
  slug: string
  data: BlogDTO
  router: NextRouter
}
const ButtonShare = dynamic(
  () =>
    import('../../components/others/blog/components/ButtonShare').then(
      (data) => data.ButtonShare,
    ),
  { ssr: false },
)
const Index = ({ data, slug }: IPropsSSP) => {
  const router = useRouter()
  const Page = router.pathname.split('/')[1]
  const MY_URL = DOMAIN_URL + Page + '/' + slug

  return (
    <>
      <OpenGraph
        data={{
          tittlePage: data.titulo,
          description: data.descripcionCorta,
          imgPrincipal: data.imagenSecundaria.url,
          imgSecundaria: data.imagenPrincipal.url,
          url: DOMAIN_URL + 'blog/' + data.slug,
          domain: DOMAIN_URL + 'blog/' + data.slug,
        }}
      />
      <div className="bg-[#171A1D] min-h-screen h-full">
        <Container>
          <div className="flex flex-col gap-6 w-full py-4">
            <div className="text-gray-100 w-max flex flex-col font-semibold relative after:absolute after:-bottom-1 after:w-full after:h-[1px] after:bg-custom1">
              {data?.CategoriaBlog?.titulo || ''}
            </div>
            <div className="text-base md:text-2xl lg:text-3xl text-cus font-bold">
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
              className="font-medium leading-8 text-md font-customText text-gray-200"
              dangerouslySetInnerHTML={{ __html: data?.descripcionLarga! }}
            />
            <div className="flex flex-row w-full gap-4 justify-end">
              <WrapperButtonShares
                MetaData={{ text: data.descripcionCorta, tittle: data.titulo }}
                RedesSociales={[
                  {
                    Icon: FaFacebook,
                    url:
                      'https://www.facebook.com/sharer/sharer.php?u=' + MY_URL,
                  },
                  {
                    Icon: FaWhatsapp,
                    url:
                      'https://web.whatsapp.com/send?text=' +
                      data.titulo +
                      ' ' +
                      MY_URL,
                  },
                  {
                    Icon: FaTwitter,
                    url:
                      'http://TWITTER.com/share?text=' +
                      data.titulo +
                      '&url=' +
                      MY_URL,
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export const getServerSideProps = async (a: GetServerSidePropsContext) => {
  const { GetBlogSlug } = await request(URI, GET_SLUG_BLOG, {
    slug: a.query.slug,
  })
  return {
    props: { data: GetBlogSlug, slug: a.query.slug },
  }
}

export default Index
