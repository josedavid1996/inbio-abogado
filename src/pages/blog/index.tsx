import { AllBlogs, CategoriasBlog } from '@components/others/blog'
import { Container } from '@components/others/home'
import { BreadCrumbs } from '@components/shared'
import { Seo } from '@components/shared/Seo/Index'

import { useGetAllBlogsCategoriaSlug, useGetAllCategoriaBlogs } from '@Services'

const Index = () => {
  const dataSeo = {
    tittlePage: 'Kyros - Blogs',
    link: 'Kyros',
    description: 'Vista de todos los blogs',
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    imgPrincipal: `${process.env.NEXT_PUBLIC_DOMAIN}images/imgpageseo.webp`,
    imgSecundaria: `${process.env.NEXT_PUBLIC_DOMAIN}images/imgpageseo.webp`,
    keywords: 'Comercial services, employment services, civil ligitation',
    url: process.env.NEXT_PUBLIC_DOMAIN + 'blog'
  }

  const { data: DataCategoryBlogs, loading: LoadingCategorysBlogs } =
    useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } =
    useGetAllBlogsCategoriaSlug({
      estado: 'Activado',
      numeroPagina: 20,
      pagina: 1,
      slug: ''
    })

  return (
    <>
      <Seo data={dataSeo} />
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
