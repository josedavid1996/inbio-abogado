/* eslint-disable comma-dangle */
import { ReactNode } from 'react'
import {
  ViewCategoriaBlogDesktop,
  ViewCategoriaBlogMobile,
} from '@components/others/blog'
import { Container } from '@components/others/home'
import { CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { useGetAllCategoriaBlogs } from '@Services'

interface IProps {
  children: ReactNode
}
export const LayoutBlog = ({ children }: IProps) => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
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
          {children}
        </div>
      </Container>
    </div>
  )
}
