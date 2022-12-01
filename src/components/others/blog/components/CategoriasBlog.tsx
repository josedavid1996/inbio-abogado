/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
import { CategoriaBlogDTO } from '../interfaces'
import { Show, LoaderSpinner } from '@components/shared/'
// import { Dispatch, SetStateAction } from 'react'
// import { useRouter } from 'next/router'
import NextLink from 'next/link'
interface IProps {
  Data: CategoriaBlogDTO[] | []
  loading: boolean
  // dispatch: Dispatch<SetStateAction<string>>
  // Slug: string
}
interface IListItem {
  tittle: string
  // onClick: () => void
  route: string
  slug: string
}
export const CategoriasBlog = ({ Data, loading }: IProps) => {
  // const { push } = useRouter()
  const ListItem = ({ route, tittle, slug }: IListItem) => (
    <div
      // onClick={onClick}
      className={`cursor-pointer text-center ${
        // Slug === slug
        // ? 'text-custom1 after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-custom1'
        'text-white'
      }  after:bg-transparent relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear`}
    >
      <NextLink href={route}>{tittle || ''}</NextLink>
    </div>
  )
  return (
    <Show condition={!loading} isDefault={<LoaderSpinner />}>
      <div className="hidden lg:flex w-full text-white font-medium  flex-row flex-wrap justify-around z-10 overflow-y-hidden gap-x-3 py-2">
        <ListItem route={'/blog'} tittle="Todos" slug="Todos" />
        {Data?.map((obj, k) => (
          <ListItem
            tittle={obj.titulo || ''}
            slug={obj.slug}
            route={'/blog/categoria/' + obj.slug}
            // onClick={() => push('blog/categoria/' + obj.slug)}
            key={k}
          />
        ))}
      </div>
    </Show>
  )
}
