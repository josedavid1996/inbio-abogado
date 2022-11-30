/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@components/others/home'
import {
  ViewCategoriaBlogMobile,
  AllBlogs,
  ViewCategoriaBlogDesktop,
} from '@components/others/blog'
import { BlogDTO, CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { useGetAllCategoriaBlogs, useGetAllBlogs } from '@Services'

const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()

  return (
    <div className="bg-[#171A1D]">
      <Container Class="flex flex-col items-center">
        <ViewCategoriaBlogMobile
          loading={LoadingCategorysBlogs}
          Data={DataCategoryBlogs as CategoriaBlogDTO[]}
        />
        <div className="flex flex-row w-full min-h-screen">
          <ViewCategoriaBlogDesktop
            loading={LoadingCategorysBlogs}
            Data={DataCategoryBlogs as CategoriaBlogDTO[]}
          />
          <AllBlogs
            Data={DataAllBlogs as BlogDTO[]}
            loading={LoadingAllBlogs}
          />
        </div>
      </Container>
    </div>
  )
}
export default Index
