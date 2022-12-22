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

export const GET_ALL_BLOG_CATEGORIA_SLUG = `query GetAllBlogsCategoriaSlug($slug: String, $pagina: Int, $numeroPagina: Int, $estado: String) {
    GetAllBlogsCategoriaSlug(slug: $slug, pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
      numeroTotal
      data {
        blogId
        titulo
        slug
        descripcionCorta
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
          imagenPrincipal {
            id
            titulo
            url
            estado
          }
          estado
          destacado
          numeroBlogs
          created_at
          updated_at
        }
        usuarioId
        created_at
        updated_at
      }
    }
  }`

export const GET_CATEGORIA_BLOG_SLUG = ` query GetCategoriaBlogSlug($slug: String) {
    GetCategoriaBlogSlug(slug: $slug) {
      categoriaBlogId
      created_at
      descripcion
      destacado
      estado
      imagenPrincipal {
        estado
        id
        titulo
        url
      }
      imagenSecundaria {
        estado
        id
        titulo
        url
      }
      keywords
      numeroBlogs
      slug
      titulo
      updated_at
    }
  }`
