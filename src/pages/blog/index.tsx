/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { AllBlogs, CategoriasBlog } from '@components/others/blog'
import { BlogDTO } from '@components/others/blog/interfaces'
import {
  useGetAllBlogs,
  useGetAllCategoriaBlogs,
  useGetAllBlogsCategoriaSlug,
} from '@Services'
import { Container } from '@components/others/home'
import { useEffect, useState } from 'react'

const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()
  const {
    FunctionGellAllBlosCategoriaSlug,
    loading: LoadingBlogsCategoriasSlug,
  } = useGetAllBlogsCategoriaSlug()
  const [Blogs, setBlogs] = useState<BlogDTO[]>()
  const [Slug, setSlug] = useState('Todos')
  const [LoadingViewBlogs, SetLoadingViewBlogs] = useState(true)

  const TraerBlogsForSlug = async (slug: string) => {
    if (slug !== 'Todos') {
      const { data } = await FunctionGellAllBlosCategoriaSlug({
        estado: 'Activado',
        numeroPagina: 20,
        pagina: 1,
        slug,
      })
      setBlogs(data)
    } else {
      setBlogs(DataAllBlogs)
    }
  }

  useEffect(() => {
    if (!LoadingAllBlogs) setBlogs(DataAllBlogs)
  }, [LoadingAllBlogs])

  useEffect(() => {
    TraerBlogsForSlug(Slug)
  }, [Slug])

  useEffect(() => {
    if (!LoadingBlogsCategoriasSlug && !LoadingCategorysBlogs) {
      SetLoadingViewBlogs(false)
    } else {
      SetLoadingViewBlogs(true)
    }
  }, [LoadingBlogsCategoriasSlug, LoadingCategorysBlogs])
  return (
    <div className="bg-[#171A1D] min-h-screen h-full">
      <Container Class="flex flex-col items-center">
        <CategoriasBlog
          Slug={Slug}
          dispatch={setSlug}
          Data={DataCategoryBlogs}
          loading={LoadingCategorysBlogs}
        />
        <AllBlogs Data={Blogs!} loading={LoadingViewBlogs} />
      </Container>
    </div>
  )
}
export default Index
