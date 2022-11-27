/* eslint-disable comma-dangle */
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
  return { data, loading }
}
