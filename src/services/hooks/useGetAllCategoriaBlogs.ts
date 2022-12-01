/* eslint-disable comma-dangle */
import { CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { useGetAllCategoriaBlogsQuery } from '@Generated'

interface IVariables {
  estado: 'Activado' | 'Desactivado'
  destacado: 'Activado' | 'Desactivado' | ''
}

export const useGetAllCategoriaBlogs = (
  variable: IVariables | undefined = {
    destacado: '',
    estado: 'Activado',
  },
) => {
  const { data, loading } = useGetAllCategoriaBlogsQuery({
    fetchPolicy: 'network-only',
    variables: variable,
  })
  return {
    data: data?.GetAllCategoriaBlogs.data as CategoriaBlogDTO[],
    loading,
  }
}
