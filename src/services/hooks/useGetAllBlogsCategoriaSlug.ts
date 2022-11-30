/* eslint-disable comma-dangle */
import { useGetAllBlogsCategoriaSlugQuery } from '@Generated'

interface IVariables {
  slug: string
  pagina: number
  numeroPagina: number
  estado: 'Activado' | 'Desactivado'
}

export const useGetAllBlogsCategoriaSlug = (
  variable: IVariables | undefined = {
    estado: 'Activado',
    numeroPagina: 20,
    pagina: 1,
    slug: '',
  },
) => {
  const { data, loading } = useGetAllBlogsCategoriaSlugQuery({
    fetchPolicy: 'network-only',
    variables: variable,
  })
  return {
    data: data?.GetAllBlogsCategoriaSlug.data,
    loading,
  }
}
