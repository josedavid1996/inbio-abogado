/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@components/others/home'
import { ViewCategoriaBlogMobile } from '@components/others/blog'
import { LoaderSpinner } from '@components/shared/loaderSpinner'
import { CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { Show } from '@components/shared/Show'
import { useGetAllCategoriaBlogs } from '@Services'
import { useCallback } from 'react'

const Index = () => {
  const { data, loading } = useGetAllCategoriaBlogs()
  const Data = useCallback(
    () => data?.GetAllCategoriaBlogs.data as CategoriaBlogDTO[],
    [data?.GetAllCategoriaBlogs.data],
  )
  return (
    <div className="bg-[#171A1D]">
      <Container Class="flex flex-col items-center">
        <Show condition={!loading} isDefault={<LoaderSpinner />}>
          <ViewCategoriaBlogMobile Data={Data()} />
        </Show>
      </Container>
    </div>
  )
}
export default Index
