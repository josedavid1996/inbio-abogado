/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@components/others/home'
import {
  ViewCategoriaBlogMobile,
  AllBlogs,
  ViewCategoriaBlogDesktop,
} from '@components/others/blog'
import { BlogDTO, CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { Show } from '@components/shared'
import { useGetAllCategoriaBlogs, useGetAllBlogs } from '@Services'

const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()

  return (
    <div className="bg-[#171A1D]">
      <Container Class="flex flex-col items-center ">
        <ViewCategoriaBlogMobile
          loading={LoadingCategorysBlogs}
          Data={
            DataCategoryBlogs?.GetAllCategoriaBlogs.data as CategoriaBlogDTO[]
          }
        />
        <div className="flex flex-row w-full">
          <ViewCategoriaBlogDesktop
            Data={
              DataCategoryBlogs?.GetAllCategoriaBlogs.data as CategoriaBlogDTO[]
            }
            loading={LoadingCategorysBlogs}
          />
          <Show
            condition={!LoadingAllBlogs}
            isDefault={<h2>Falta Rellenar mas Blogs</h2>}
          >
            <AllBlogs
              Data={DataAllBlogs?.GetAllBlogs.data as BlogDTO[]}
              loading={LoadingAllBlogs}
            />
          </Show>
        </div>
      </Container>
    </div>
  )
}
export default Index
