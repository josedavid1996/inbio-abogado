export interface ImagenDTO {
  __typename: string
  estado: string
  id: string
  titulo: string
  url: string
}
export interface CategoriaBlogDTO {
  CategoriaBlog?: CategoriaBlogDTO
  created_at: string
  descripcionCorta: string
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

export interface BlogDTO {
  CategoriaBlog: CategoriaBlogDTO
  User: string | null
  blogId: string
  categoriaBlogId: number
  created_at: string
  descripcionCorta: string
  descripcionLarga: string
  destacado: string
  estado: string
  imagenPrincipal: ImagenDTO
  imagenSecundaria: ImagenDTO
  keywords: string
  slug: string
  titulo: string
  updated_at: string
  usuarioId: number
  __typename: string
}
