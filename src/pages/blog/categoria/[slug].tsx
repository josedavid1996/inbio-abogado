import { GetServerSideProps, GetServerSidePropsContext } from 'next/types'

import { CategoriasBlog, AllBlogs } from '@components/others/blog'
import { BlogDTO, CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { Container } from '@components/others/home'

import { useGetAllCategoriaBlogs } from '@Services'
import request from 'graphql-request'
import { mode } from '@apollo/index'
import {
  GET_ALL_BLOG_CATEGORIA_SLUG,
  GET_CATEGORIA_BLOG_SLUG
} from '@ssr/index'
import { BreadCrumbs } from '@components/shared'

import { GetAllBlogsCategoriaSlugQuery } from '@Generated'
import { Seo } from '@components/shared/Seo/Index'

// import Slug from '../[slug]'

interface IPropsSSP {
  // slug: string
  BlogsCategoriaSlug: BlogDTO[] | []
  GetCategoriaBlogSlug: CategoriaBlogDTO
}
const Index = ({ BlogsCategoriaSlug, GetCategoriaBlogSlug }: IPropsSSP) => {
  const { data: DataCategoryBlogs, loading: LoadingCategorysBlogs } =
    useGetAllCategoriaBlogs()

  const dataSeo = {
    tittlePage: 'Kyros - ' + GetCategoriaBlogSlug.titulo,
    link: GetCategoriaBlogSlug.titulo,
    description: GetCategoriaBlogSlug.descripcionCorta,
    domain:
      process.env.NEXT_PUBLIC_DOMAIN + 'blog/' + GetCategoriaBlogSlug.slug,
    imgPrincipal: GetCategoriaBlogSlug.imagenPrincipal.url,
    imgSecundaria: GetCategoriaBlogSlug.imagenSecundaria.url,
    keywords: GetCategoriaBlogSlug.keywords,
    url: process.env.NEXT_PUBLIC_DOMAIN + 'blog/' + GetCategoriaBlogSlug.slug
  }

  return (
    <>
      <Seo data={dataSeo} />
      <div className="bg-[#171A1D] min-h-screen h-full z-999">
        <Container Class="flex flex-col items-center gap-2">
          <BreadCrumbs
            history={[
              { description: 'Blog', url: '/blog' },
              { description: 'Categoría' },
              {
                description: GetCategoriaBlogSlug.titulo || ''
              }
            ]}
          />
          <CategoriasBlog
            Data={DataCategoryBlogs}
            loading={LoadingCategorysBlogs}
          />

          <AllBlogs
            Data={BlogsCategoriaSlug!}
            // loading={LoadingBlosCategoriaSlug}
          />
        </Container>
      </div>
    </>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  {
    /** seleccionamos la uri atravez del env desarrollo */
  }
  const uri = mode[process.env.NEXT_PUBLIC_MODE || 'desarrollo']

  {
    /** llamamos la api, este metodo solo funciona para ssr */
  }
  const { GetAllBlogsCategoriaSlug } =
    await request<GetAllBlogsCategoriaSlugQuery>(
      uri,
      GET_ALL_BLOG_CATEGORIA_SLUG,
      { estado: 'Activado', numeroPagina: 20, pagina: 1, slug: query.slug }
    )

  {
    /** usamos este query para actualizar el open graph */
  }
  const { GetCategoriaBlogSlug }: { GetCategoriaBlogSlug: CategoriaBlogDTO } =
    await request(uri, GET_CATEGORIA_BLOG_SLUG, {
      slug: query.slug
    })
  return {
    props: {
      BlogsCategoriaSlug: GetAllBlogsCategoriaSlug.data,
      GetCategoriaBlogSlug
    }
  }
}
