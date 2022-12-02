/* eslint-disable comma-dangle */
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetBlogSlugQuery } from '@Generated'
interface IVariable {
  slug: string
}
export const useGetBlogSlug = (variables: IVariable) => {
  const { data, loading } = useGetBlogSlugQuery({
    fetchPolicy: 'network-only',
    variables,
  })
  return { data: data?.GetBlogSlug as BlogDTO, loading }
}
