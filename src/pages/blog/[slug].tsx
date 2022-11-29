/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import {
  AllBlogs,
  ViewCategoriaBlogDesktop,
  ViewCategoriaBlogMobile,
} from '@components/others/blog'
import { CategoriaBlogDTO } from '@components/others/blog/interfaces'
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
      <Container Class="flex flex-col items-center border">
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
            loading={LoadingAllBlogs}
          />
          {/* <AllBlogs Data={} /> */}
        </div>
      </Container>
    </div>
  )
}
export default Index
