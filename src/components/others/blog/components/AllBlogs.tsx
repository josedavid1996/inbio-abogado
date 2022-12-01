/* eslint-disable react-hooks/exhaustive-deps */
import { Show } from '@components/shared'
import { BlogDTO } from '../interfaces'
import { CardBlog } from '@components/others/blog'

interface IProps {
  Data: BlogDTO[] | []
  loading: boolean
}
export const AllBlogs = ({ Data, loading }: IProps) => {
  return (
    <Show condition={!loading}>
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 transition-all duration-300 ease-in-out">
        {Data?.map((obj, k) => (
          <CardBlog key={k} Data={obj} />
        ))}
      </div>
    </Show>
  )
}
