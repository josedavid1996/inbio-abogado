/* eslint-disable  */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  blogId?: Maybe<Scalars['ID']>;
  categoriaBlogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['ID']>;
  categoriaBlogId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  numeroBlogs?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  descripcion?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type ComentarioBlog = {
  __typename?: 'ComentarioBlog';
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['Int']>;
  comentarioBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type ComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Contacto = {
  __typename?: 'Contacto';
  celular?: Maybe<Scalars['String']>;
  contactoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  tipoServicio?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ContactoInput = {
  celular?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  tipoServicio?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type GetAllBlogs = {
  __typename?: 'GetAllBlogs';
  data?: Maybe<Array<Blog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaBlogs = {
  __typename?: 'GetAllCategoriaBlogs';
  data?: Maybe<Array<CategoriaBlog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllContactos = {
  __typename?: 'GetAllContactos';
  data?: Maybe<Array<Contacto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Suscriptores>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllUsuarios = {
  __typename?: 'GetAllUsuarios';
  Usuario?: Maybe<Array<Maybe<User>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type Imagen = {
  __typename?: 'Imagen';
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateBlog: Blog;
  CreateCategoriaBlog: CategoriaBlog;
  CreateContactos: Contacto;
  CreateImagen: Scalars['String'];
  CreateSuscriptores: Suscriptores;
  CreateUsuario: User;
  DeleteBlog: Scalars['String'];
  DeleteCategoriaBlog: Scalars['String'];
  DeleteImagen: Scalars['String'];
  DeleteSuscriptores: Scalars['String'];
  Login: User;
  RecoverPasswordUsuario: Scalars['String'];
  UpdateCategoriaBlog: CategoriaBlog;
  UpdateDestacadoBlog: Blog;
  UpdateDestacadoCategoriaBlog: CategoriaBlog;
  UpdateEstadoBlog: Blog;
  UpdateEstadoCategoriaBlog: CategoriaBlog;
  UpdateEstadoContacto: Contacto;
  UpdateEstadoUsuario: Scalars['String'];
  UpdateImagen: Imagen;
  UpdatePasswordUsuario: User;
  UpdateSuscriptores: Suscriptores;
  UpdateUsuario: User;
  updateBlog: Blog;
};


export type MutationCreateBlogArgs = {
  input: BlogInput;
};


export type MutationCreateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationCreateContactosArgs = {
  input?: InputMaybe<ContactoInput>;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreateSuscriptoresArgs = {
  input: SuscriptoresInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationDeleteBlogArgs = {
  blogId: Scalars['Int'];
};


export type MutationDeleteCategoriaBlogArgs = {
  categoriaBlogId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteSuscriptoresArgs = {
  suscriptorId: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordUsuarioArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationUpdateDestacadoBlogArgs = {
  input: UpdateDestacadoBlogInput;
};


export type MutationUpdateDestacadoCategoriaBlogArgs = {
  input: UpdateDestacadoCategoriaBlogInput;
};


export type MutationUpdateEstadoBlogArgs = {
  input: UpdateEstadoBlogInput;
};


export type MutationUpdateEstadoCategoriaBlogArgs = {
  input: UpdateEstadoCategoriaBlogInput;
};


export type MutationUpdateEstadoContactoArgs = {
  input?: InputMaybe<UpdateEstadoContactoInput>;
};


export type MutationUpdateEstadoUsuarioArgs = {
  input: UpdateEstadoUsuarioInput;
};


export type MutationUpdateImagenArgs = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordUsuarioArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateSuscriptoresArgs = {
  input?: InputMaybe<SuscriptoresInput>;
};


export type MutationUpdateUsuarioArgs = {
  foto?: InputMaybe<Scalars['Upload']>;
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};

export type NotificacionComentarioBlog = {
  __typename?: 'NotificacionComentarioBlog';
  Blog?: Maybe<Blog>;
  blogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  notificacionComentarioBlogId?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type NotificacionComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetAllBlogs: GetAllBlogs;
  GetAllBlogsCategoriaSlug: GetAllBlogs;
  GetAllBlogsDestacados: GetAllBlogs;
  GetAllCategoriaBlogs: GetAllCategoriaBlogs;
  GetAllContactos: GetAllContactos;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllSuscriptores: GetAllSuscriptores;
  GetAllUsuarios: GetAllUsuarios;
  GetAllUsuariosRegistradosUltimoMes: GetAllUsuarios;
  GetBlogSlug: Blog;
  GetCategoriaBlogSlug: CategoriaBlog;
};


export type QueryGetAllBlogsArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBlogsCategoriaSlugArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsDestacadosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllCategoriaBlogsArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllContactosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSuscriptoresArgs = {
  fechaFin?: InputMaybe<Scalars['String']>;
  fechaInicio?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsuariosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsuariosRegistradosUltimoMesArgs = {
  fechaFin?: InputMaybe<Scalars['String']>;
  fechaInicio?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptores = {
  __typename?: 'Suscriptores';
  email?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptoresInput = {
  email?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  suscriptorId?: InputMaybe<Scalars['ID']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateDestacadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoContactoInput = {
  contactoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoUsuarioInput = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type UpdatePasswordInput = {
  id?: InputMaybe<Scalars['ID']>;
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  cantidadComprada?: Maybe<Scalars['Int']>;
  celular?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['DateTime']>;
  foto?: Maybe<Scalars['String']>;
  genero?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  montoTotalComprado?: Maybe<Scalars['Float']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaNacimiento?: InputMaybe<Scalars['Date']>;
  genero?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type GetAllBlogsQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', GetAllBlogs: { __typename?: 'GetAllBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'Blog', destacado?: string | null, blogId?: string | null, categoriaBlogId?: number | null, descripcionCorta?: string | null, created_at?: any | null, estado?: string | null, keywords?: string | null, slug?: string | null, titulo?: string | null, updated_at?: any | null, usuarioId?: number | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', created_at?: any | null, categoriaBlogId?: string | null, descripcion?: string | null, destacado?: string | null, estado?: string | null, keywords?: string | null, numeroBlogs?: number | null, slug?: string | null, titulo?: string | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null } | null, imagenPrincipal?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } };

export type GetAllBlogsCategoriaSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBlogsCategoriaSlugQuery = { __typename?: 'Query', GetAllBlogsCategoriaSlug: { __typename?: 'GetAllBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, destacado?: string | null, numeroBlogs?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null, estado?: string | null } | null } | null }> | null } };

export type GetAllCategoriaBlogsQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaBlogsQuery = { __typename?: 'Query', GetAllCategoriaBlogs: { __typename?: 'GetAllCategoriaBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, created_at?: any | null, descripcion?: string | null, destacado?: string | null, estado?: string | null, keywords?: string | null, numeroBlogs?: number | null, slug?: string | null, titulo?: string | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } };

export type GetBlogSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogSlugQuery = { __typename?: 'Query', GetBlogSlug: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, descripcionLarga?: string | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, destacado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } | null } };


export const GetAllBlogsDocument = gql`
    query GetAllBlogs($pagina: Int, $numeroPagina: Int, $estado: String, $destacado: String) {
  GetAllBlogs(
    pagina: $pagina
    numeroPagina: $numeroPagina
    estado: $estado
    destacado: $destacado
  ) {
    data {
      destacado
      CategoriaBlog {
        created_at
        categoriaBlogId
        descripcion
        destacado
        imagenPrincipal {
          estado
          id
          titulo
          url
        }
        estado
        keywords
        imagenSecundaria {
          estado
          id
          titulo
          url
        }
        numeroBlogs
        slug
        titulo
        updated_at
      }
      blogId
      categoriaBlogId
      descripcionCorta
      created_at
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
      slug
      titulo
      updated_at
      usuarioId
    }
    numeroTotal
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *      destacado: // value for 'destacado'
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetAllBlogsCategoriaSlugDocument = gql`
    query GetAllBlogsCategoriaSlug($slug: String, $pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllBlogsCategoriaSlug(
    slug: $slug
    pagina: $pagina
    numeroPagina: $numeroPagina
    estado: $estado
  ) {
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
}
    `;

/**
 * __useGetAllBlogsCategoriaSlugQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsCategoriaSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsCategoriaSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsCategoriaSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllBlogsCategoriaSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsCategoriaSlugQuery, GetAllBlogsCategoriaSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsCategoriaSlugQuery, GetAllBlogsCategoriaSlugQueryVariables>(GetAllBlogsCategoriaSlugDocument, options);
      }
export function useGetAllBlogsCategoriaSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsCategoriaSlugQuery, GetAllBlogsCategoriaSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsCategoriaSlugQuery, GetAllBlogsCategoriaSlugQueryVariables>(GetAllBlogsCategoriaSlugDocument, options);
        }
export type GetAllBlogsCategoriaSlugQueryHookResult = ReturnType<typeof useGetAllBlogsCategoriaSlugQuery>;
export type GetAllBlogsCategoriaSlugLazyQueryHookResult = ReturnType<typeof useGetAllBlogsCategoriaSlugLazyQuery>;
export type GetAllBlogsCategoriaSlugQueryResult = Apollo.QueryResult<GetAllBlogsCategoriaSlugQuery, GetAllBlogsCategoriaSlugQueryVariables>;
export const GetAllCategoriaBlogsDocument = gql`
    query GetAllCategoriaBlogs($estado: String, $destacado: String) {
  GetAllCategoriaBlogs(estado: $estado, destacado: $destacado) {
    data {
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
    numeroTotal
  }
}
    `;

/**
 * __useGetAllCategoriaBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaBlogsQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *      destacado: // value for 'destacado'
 *   },
 * });
 */
export function useGetAllCategoriaBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
      }
export function useGetAllCategoriaBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
        }
export type GetAllCategoriaBlogsQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsQuery>;
export type GetAllCategoriaBlogsLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsLazyQuery>;
export type GetAllCategoriaBlogsQueryResult = Apollo.QueryResult<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>;
export const GetBlogSlugDocument = gql`
    query GetBlogSlug($slug: String) {
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
}
    `;

/**
 * __useGetBlogSlugQuery__
 *
 * To run a query within a React component, call `useGetBlogSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
      }
export function useGetBlogSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
        }
export type GetBlogSlugQueryHookResult = ReturnType<typeof useGetBlogSlugQuery>;
export type GetBlogSlugLazyQueryHookResult = ReturnType<typeof useGetBlogSlugLazyQuery>;
export type GetBlogSlugQueryResult = Apollo.QueryResult<GetBlogSlugQuery, GetBlogSlugQueryVariables>;