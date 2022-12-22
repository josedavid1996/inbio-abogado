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
import { Wrapper } from '@Redux/store'
import { Store } from '@reduxjs/toolkit'
import { SetDataMeta } from '@Redux/Meta/mesaSlice'
import { BreadCrumbs } from '@components/shared'
interface IPropsSSP {
  slug: string
  data: BlogDTO
  router: NextRouter
}
const Index = ({ data, slug }: IPropsSSP) => {
  const router = useRouter()
  const Page = router.pathname.split('/')[1]
  const MY_URL = DOMAIN_URL + Page + '/' + slug

  return (
    <>
      <div className="bg-[#171A1D] min-h-screen h-full">
        <Container>
          <BreadCrumbs
            history={[
              { description: 'Blog', url: '/blog' },
              {
                description: data.titulo || '',
              },
            ]}
          />
          <div className="flex flex-col gap-6 w-full py-4">
            <div className="text-base md:text-2xl lg:text-3xl text-custon4 font-bold">
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
            <div className="text-gray-100 w-max flex flex-col font-semibold relative after:absolute after:-bottom-1 after:w-full after:h-[1px] after:bg-custom1">
              {data?.CategoriaBlog?.titulo || ''}
            </div>
            <div className="flex flex-row w-full gap-4 justify-end">
              <WrapperButtonShares
                MetaData={{
                  text: data.descripcionCorta,
                  tittle: data.titulo,
                  url: MY_URL,
                }}
                RedesSociales={[
                  {
                    Icon: FaFacebook,
                    color: '#1877F2',
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
                    color: '#25D366',
                  },
                  {
                    Icon: FaTwitter,
                    url:
                      'http://TWITTER.com/share?text=' +
                      data.titulo +
                      '&url=' +
                      MY_URL,
                    color: '#1DA1F2',
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

// export const getServerSideProps = async ({
//   query,
// }: GetServerSidePropsContext) => {
//   const { GetBlogSlug }: { GetBlogSlug: BlogDTO } = await request(
//     URI,
//     GET_SLUG_BLOG,
//     {
//       slug: query.slug,
//     },
//   )
//   return {
//     props: { data: GetBlogSlug, slug: query.slug },
//   }
// }

export default Index
export const getServerSideProps = Wrapper.getServerSideProps(
  (store: Store) => async ({ query }: GetServerSidePropsContext) => {
    const { GetBlogSlug }: { GetBlogSlug: BlogDTO } = await request(
      URI,
      GET_SLUG_BLOG,
      {
        slug: query.slug,
      },
    )

    store.dispatch(
      SetDataMeta({
        tittlePage: 'Kyros - ' + GetBlogSlug.titulo,
        link: GetBlogSlug.titulo,
        description: GetBlogSlug.descripcionCorta,
        domain: DOMAIN_URL + 'blog/' + query.slug,
        imgPrincipal: GetBlogSlug.imagenPrincipal.url,
        imgSecundaria: GetBlogSlug.imagenSecundaria.url,
        keywords: GetBlogSlug.keywords,
        url: DOMAIN_URL + 'blog/' + query.slug,
      }),
    )
    return {
      props: { data: GetBlogSlug, slug: query.slug },
    }
  },
)
