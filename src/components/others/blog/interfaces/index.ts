export interface ImagenDTO {
  __typename: string
  estado: string
  id: string
  titulo: string
  url: string
}
export interface CategoriaBlogDTO {
  categoriaBlogId: string
  created_at: string
  descripcion: string
  destacado: string
  estado: string
  imagenPrincipal: ImagenDTO
  imagenSecundaria: ImagenDTO
  keywords: string
  numeroBlogs: number
  slug: string
  titulo: string
  updated_at: string
  __typename: string
}
