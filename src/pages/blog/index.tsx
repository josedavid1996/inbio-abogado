/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { AllBlogs, CategoriasBlog } from '@components/others/blog'
import { useGetAllBlogs, useGetAllCategoriaBlogs } from '@Services'
import { Container } from '@components/others/home'
import { BreadCrumbs } from '@components/shared'
import { DOMAIN_URL } from '@mock/etc'
// import { OpenGraph } from '@components/seo/OpenGraph'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { Store } from '@reduxjs/toolkit'
import { SetDataMeta } from '@Redux/Meta/mesaSlice'
import { Wrapper } from '@Redux/store'
const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()
  return (
    <>
      {/* <OpenGraph
        data={{
          tittlePage: 'Kyros - Personal Website',
          link: 'Kyros',
          description: 'Somos los mejores en lo que hacemos',
          domain: DOMAIN_URL,
          imgPrincipal: `${DOMAIN_URL}images/imgpageseo.webp`,
          imgSecundaria: `${DOMAIN_URL}images/imgpageseo.webp`,
          keywords: 'Comercial services, employment services, civil ligitation',
          url: DOMAIN_URL + 'blog',
        }}
      /> */}
      <div className="bg-[#171A1D] min-h-screen h-full">
        <Container Class="flex flex-col items-center">
          <BreadCrumbs />
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
        tittlePage: 'Blogs',
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
