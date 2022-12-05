/* eslint-disable comma-dangle */
import { CategoriasBlog, AllBlogs } from '@components/others/blog'
import { Container } from '@components/others/home'
import { GetServerSidePropsContext } from 'next/types'
import { useGetAllBlogsCategoriaSlug, useGetAllCategoriaBlogs } from '@Services'
// import Slug from '../[slug]'

interface IPropsSSP {
  slug: string
}
const Index = ({ slug }: IPropsSSP) => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()

  const {
    data: BlogsCategoriaSlug,
    loading: LoadingBlosCategoriaSlug,
  } = useGetAllBlogsCategoriaSlug({
    estado: 'Activado',
    numeroPagina: 20,
    pagina: 1,
    slug,
  })
  //   const [Slug, setSlug] = useState('Todos')

  return (
    <div className="bg-[#171A1D] min-h-screen h-full">
      <Container Class="flex flex-col items-center">
        <CategoriasBlog
          Data={DataCategoryBlogs}
          loading={LoadingCategorysBlogs}
        />
        <AllBlogs
          Data={BlogsCategoriaSlug!}
          loading={LoadingBlosCategoriaSlug}
        />
      </Container>
    </div>
  )
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return { props: { slug: ctx.query.slug } }
}

export default Index
