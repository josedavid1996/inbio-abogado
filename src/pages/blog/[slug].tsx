/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { AllBlogs } from '@components/others/blog'
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetBlogSlug } from '@Services'
import { LayoutBlog } from '@components/layout/blog'
import { useEffect } from 'react'
import NextImage from 'next/image'
import request from 'graphql-request'
import { GetServerSidePropsContext } from 'next'
import { Container } from '@components/others/home'
import { DOMAIN_URL, IMG_404 } from '@mock/etc'
import { URI } from '@Uri/index'
import { GET_SLUG_BLOG } from '@ssr/index'
import { CallSeoContext } from '@contexts/seo/SeoContext'
import { OpenGraph } from '@components/seo/OpenGraph'
import { FaFacebook, FaInstagram, FaWhatsapp, FaShare } from 'react-icons/fa'
import NextLink from 'next/link'
import { useRouter, Router, withRouter, NextRouter } from 'next/router'
interface IPropsSSP {
  slug: string
  data: BlogDTO
  router: NextRouter
}
const Index = ({ data, slug, router }: IPropsSSP) => {
  const Page = router.pathname.split('/')[1]

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
              <NextLink
                href={`https://www.facebook.com/sharer/sharer.php?u=${DOMAIN_URL}${Page}/${slug}`}
              >
                <a target={'_blank'}>
                  <FaFacebook className="w-6 h-6" />
                </a>
              </NextLink>
              <FaInstagram className="w-6 h-6" />
              <FaWhatsapp className="w-6 h-6" />
              <FaShare className="w-6 h-6" />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export const getServerSideProps = async ({
  query,
  req,
}: GetServerSidePropsContext) => {
  const { GetBlogSlug } = await request(URI, GET_SLUG_BLOG, {
    slug: query.slug,
  })
  return {
    props: { data: GetBlogSlug, slug: query.slug },
  }
}

export default withRouter(Index)
