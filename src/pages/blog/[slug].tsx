/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import {
  AllBlogs,
  ViewCategoriaBlogDesktop,
  ViewCategoriaBlogMobile,
} from '@components/others/blog'
import { BlogDTO, CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { Container } from '@components/others/home'
import { useGetAllCategoriaBlogs, useGetAllBlogs } from '@Services'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()

  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()
  useEffect(() => {
    console.log(DataAllBlogs)
  }, [DataAllBlogs])

  const { query } = useRouter()
  return (
    <div className="bg-[#171A1D]">
      <Container Class="flex flex-col items-center">
        <ViewCategoriaBlogMobile
          Data={DataCategoryBlogs as CategoriaBlogDTO[]}
          loading={LoadingCategorysBlogs}
        />
        <div className="flex flex-row w-full min-h-screen">
          <ViewCategoriaBlogDesktop
            Data={DataCategoryBlogs as CategoriaBlogDTO[]}
            loading={LoadingCategorysBlogs}
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
