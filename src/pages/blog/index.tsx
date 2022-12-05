/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { AllBlogs, CategoriasBlog } from '@components/others/blog'
import {
  useGetAllBlogs,
  useGetAllCategoriaBlogs,
} from '@Services'
import { Container } from '@components/others/home'
const Index = () => {
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()
  const { data: DataAllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs()
  return (
    <div className="bg-[#171A1D] min-h-screen h-full">
      <Container Class="flex flex-col items-center">
        <CategoriasBlog
          Data={DataCategoryBlogs}
          loading={LoadingCategorysBlogs}
        />
        <AllBlogs Data={DataAllBlogs!} loading={LoadingAllBlogs} />
      </Container>
    </div>
  )
}
export default Index
