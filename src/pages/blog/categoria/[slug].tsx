/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
import { CategoriasBlog, AllBlogs } from '@components/others/blog'
import { Container } from '@components/others/home'
import { GetServerSidePropsContext } from 'next/types'
import { useGetAllBlogsCategoriaSlug, useGetAllCategoriaBlogs } from '@Services'
import { Wrapper } from '@Redux/store'
import { Store } from '@reduxjs/toolkit'
import request from 'graphql-request'
import { mode } from '@apollo/index'
import {
  GET_ALL_BLOG_CATEGORIA_SLUG,
  GET_CATEGORIA_BLOG_SLUG
} from '@ssr/index'
import { BlogDTO, CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { SetDataMeta } from '@Redux/Meta/mesaSlice'
import { BreadCrumbs } from '@components/shared'

// import Slug from '../[slug]'

interface IPropsSSP {
  // slug: string
  BlogsCategoriaSlug: BlogDTO[] | []
  GetCategoriaBlogSlug: CategoriaBlogDTO
}
const Index = ({ BlogsCategoriaSlug, GetCategoriaBlogSlug }: IPropsSSP) => {
  const { data: DataCategoryBlogs, loading: LoadingCategorysBlogs } =
    useGetAllCategoriaBlogs()
  // const {
  //   data: BlogsCategoriaSlug,
  //   loading: LoadingBlosCategoriaSlug,
  // } = useGetAllBlogsCategoriaSlug({
  //   estado: 'Activado',
  //   numeroPagina: 20,
  //   pagina: 1,
  //   slug,
  // })
  //   const [Slug, setSlug] = useState('Todos')

  return (
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
  )
}

// export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
//   return { props: { slug: ctx.query.slug } }
// }

export default Index

export const getServerSideProps = Wrapper.getServerSideProps(
  (store: Store) =>
    async ({ query }: GetServerSidePropsContext) => {
      {
        /** seleccionamos la uri atravez del env desarrollo */
      }
      const uri = mode[process.env.NEXT_PUBLIC_MODE || 'desarrollo']

      {
        /** llamamos la api, este metodo solo funciona para ssr */
      }
      const { GetAllBlogsCategoriaSlug } = await request(
        uri,
        GET_ALL_BLOG_CATEGORIA_SLUG,
        { estado: 'Activado', numeroPagina: 20, pagina: 1, slug: query.slug }
      )

      {
        /** usamos este query para actualizar el open graph */
      }
      const {
        GetCategoriaBlogSlug
      }: { GetCategoriaBlogSlug: CategoriaBlogDTO } = await request(
        uri,
        GET_CATEGORIA_BLOG_SLUG,
        {
          slug: query.slug
        }
      )

      store.dispatch(
        SetDataMeta({
          tittlePage: 'Kyros - ' + GetCategoriaBlogSlug.titulo,
          link: GetCategoriaBlogSlug.titulo,
          description: GetCategoriaBlogSlug.descripcionCorta,
          domain:
            process.env.NEXT_PUBLIC_DOMAIN + 'blog/categoria/' + query.slug,
          imgPrincipal: GetCategoriaBlogSlug.imagenSecundaria.url,
          imgSecundaria: GetCategoriaBlogSlug.imagenSecundaria.url,
          keywords: GetCategoriaBlogSlug.keywords,
          url: process.env.NEXT_PUBLIC_DOMAIN + 'blog/categoria/' + query.slug
        })
      )
      return {
        props: {
          BlogsCategoriaSlug: GetAllBlogsCategoriaSlug.data,
          GetCategoriaBlogSlug
        }
      }
    }
)
