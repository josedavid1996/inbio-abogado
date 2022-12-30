/* eslint-disable  */
import { CategoriaBlogDTO } from '../interfaces'
import { Dropdown, Show, SkeletorText } from '@components/shared'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { IContext, NavbarContextConfig } from '@contexts/NavbarProvider'

interface IProps {
  Data: CategoriaBlogDTO[] | []
  loading?: boolean
}
interface IListItem {
  tittle: string
  route: string
  slug?: string
}
export const CategoriasBlog = ({ Data, loading = true }: IProps) => {
  const { push, query } = useRouter()
  // const [isFilter, setIsFilter] = useState<string | null>(null)
  const { isFilter, setIsFilter } = NavbarContextConfig() as IContext

  const ListItem = ({ route, tittle, slug }: IListItem) => {
    console.log(query.slug)
    return (
      <div
        // onClick={onClick}
        className={`cursor-pointer text-center ${
          // Slug === slug
          // ? 'text-custom1 after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-custom1'
          slug == query.slug ? ' text-custom1 after:bg-custom1 after:bottom-0' : ''
        }  after:bg-transparent text-white relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear`}
      >
        <NextLink href={route}>{tittle || ''}</NextLink>
      </div>
    )
  }
  return (
    <>
      <Show
        condition={!loading}
        isDefault={
          <div className="hidden flex-row gap-4 w-full lg:flex">
            <SkeletorText />
            <SkeletorText />
            <SkeletorText />
            <SkeletorText />
          </div>
        }
      >
        <div className="hidden lg:flex w-full text-white font-medium  flex-row flex-wrap justify-around z-10 overflow-y-hidden gap-x-3 py-2">
          <ListItem route={'/blog'} tittle="Todos" />
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
      <Dropdown
        data={Data || []}
        filter={isFilter}
        onChange={(target) => {
          setIsFilter(target.value !== '' ? target.value : null)
          push(
            target.value.length === 0
              ? '/blog'
              : '/blog/categoria/' + target.value,
          )
        }}
      />
    </>
  )
}
