/* eslint-disable comma-dangle */
import { useGetBlogSlugQuery } from '@Generated'
interface IVariable {
  slug: string
}
export const useGetBlogSlug = (variables: IVariable) => {
  const { data, loading } = useGetBlogSlugQuery({
    fetchPolicy: 'network-only',
    variables,
  })
  return { data: data?.GetBlogSlug, loading }
}
