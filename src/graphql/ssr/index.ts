/* eslint-disable quotes */
export const GET_SLUG_BLOG = `query GetBlogSlug($slug: String) {
    GetBlogSlug(slug: $slug) {
      blogId
      titulo
      slug
      descripcionCorta
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      keywords
      estado
      destacado
      categoriaBlogId
      CategoriaBlog {
        categoriaBlogId
        titulo
        slug
        keywords
        descripcion
        imagenSecundaria {
          id
          titulo
          estado
          url
        }
        imagenPrincipal {
          id
          titulo
          estado
          url
        }
        estado
        destacado
        created_at
        updated_at
        numeroBlogs
      }
      usuarioId
      created_at
      descripcionLarga
    }
  }`
