/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { AllBlogs } from '@components/others/blog'
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetAllBlogs } from '@Services'
import { LayoutBlog } from '@components/layout/blog'

const Index = () => {
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()

  return (
    <LayoutBlog>
      <AllBlogs Data={DataAllBlogs as BlogDTO[]} loading={LoadingAllBlogs} />
    </LayoutBlog>
  )
}
export default Index
