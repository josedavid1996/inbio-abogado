/* eslint-disable comma-dangle */
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetAllBlogsQuery } from '@Generated'
interface IVariables {
  pagina: number
  numeroPagina: number
  estado: 'Activado' | 'Desactivado'
  destacado: 'Activado' | 'Desactivado' | ''
}
export const useGetAllBlogs = (
  variable: IVariables | undefined = {
    pagina: 1,
    destacado: '',
    estado: 'Activado',
    numeroPagina: 20,
  },
) => {
  const { data, loading } = useGetAllBlogsQuery({
    fetchPolicy: 'network-only',
    variables: variable,
  })

  return {
    data: data?.GetAllBlogs.data as BlogDTO[],
    loading,
  }
}
