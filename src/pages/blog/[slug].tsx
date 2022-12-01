/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { AllBlogs } from '@components/others/blog'
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetAllBlogsCategoriaSlug } from '@Services'
import { useRouter } from 'next/router'
import { LayoutBlog } from '@components/layout/blog'

const Index = () => {
  const { query } = useRouter()
  // const {
  //   data: DataAllBlogs,
  //   loading: LoadingAllBlogs,
  // } = useGetAllBlogsCategoriaSlug({
  //   estado: 'Activado',
  //   numeroPagina: 20,
  //   pagina: 1,
  //   slug: query.slug! + '',
  // })
  return (
    <LayoutBlog>
      {/* <AllBlogs Data={[]} loading={LoadingAllBlogs} /> */}
      slug
    </LayoutBlog>
  )
}
export default Index
