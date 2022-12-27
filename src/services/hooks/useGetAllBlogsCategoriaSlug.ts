/* eslint-disable comma-dangle */
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetAllBlogsCategoriaSlugQuery } from '@Generated'

interface IVariables {
  slug: string
  pagina: number
  numeroPagina: number
  estado: 'Activado' | 'Desactivado'
}
// variable: IVariables | undefined = {
//   estado: 'Activado',
//   numeroPagina: 20,
//   pagina: 1,
//   slug: '',
// },

export const useGetAllBlogsCategoriaSlug = (variables: IVariables) => {
  const { data, loading, refetch } = useGetAllBlogsCategoriaSlugQuery({
    nextFetchPolicy: 'network-only',
    variables,
  })
  // const [
  //   MutationUseGetAllBlogsCategoriaSlug,
  //   { loading },
  // ] = useGetAllBlogsCategoriaSlugLazyQuery({
  //   onError: ({ message }) => console.log(message),
  // })

  // const FunctionGellAllBlosCategoriaSlug = async (Variables: IVariables) => {
  //   try {
  //     const { data } = await MutationUseGetAllBlogsCategoriaSlug({
  //       variables: Variables,
  //     })
  //     return {
  //       status: true,
  //       code: 200,
  //       data: data?.GetAllBlogsCategoriaSlug.data as BlogDTO[],
  //     }
  //   } catch (error) {
  //     return { status: false, error, code: 404 }
  //   }
  // }
  return {
    loading,
    data: data?.GetAllBlogsCategoriaSlug.data as BlogDTO[],
    refetch,
  }
}
