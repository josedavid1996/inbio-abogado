/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { AllBlogs, CategoriasBlog } from '@components/others/blog'
import { useGetAllBlogs, useGetAllCategoriaBlogs } from '@Services'
import { Container } from '@components/others/home'
import { DOMAIN_URL } from '@mock/etc'
// import { OpenGraph } from '@components/seo/OpenGraph'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { Store } from '@reduxjs/toolkit'
import { SetDataMeta } from '@Redux/Meta/mesaSlice'
import { Wrapper } from '@Redux/store'
import { BreadCrumbs } from '@components/shared'
const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()
  return (
    <>
      <div className="bg-[#171A1D] min-h-screen h-full">
        <Container Class="flex flex-col items-center gap-2">
          <BreadCrumbs history={[{ description: 'Blog' }]} />
          <CategoriasBlog
            Data={DataCategoryBlogs}
            loading={LoadingCategorysBlogs}
          />
          <AllBlogs Data={DataAllBlogs!} loading={LoadingAllBlogs} />
        </Container>
      </div>
    </>
  )
}
export default Index

export const getServerSideProps: GetServerSideProps = Wrapper.getServerSideProps(
  (store: Store) => async (ctx: GetServerSidePropsContext) => {
    store.dispatch(
      SetDataMeta({
        tittlePage: 'Kyros - Blogs',
        link: 'Kyros',
        description: 'Vista de todos los blogs',
        domain: DOMAIN_URL,
        imgPrincipal: `${DOMAIN_URL}images/imgpageseo.webp`,
        imgSecundaria: `${DOMAIN_URL}images/imgpageseo.webp`,
        keywords: 'Comercial services, employment services, civil ligitation',
        url: DOMAIN_URL + 'blog',
      }),
    )
    return { props: {} }
  },
)
