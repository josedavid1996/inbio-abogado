/* eslint-disable react-hooks/exhaustive-deps */
import { CategoriaBlogDTO } from '../interfaces'
import { Show, LoaderSpinner } from '@components/shared/'
import { useRouter } from 'next/router'
interface IProps {
  Data: CategoriaBlogDTO[] | []
  loading: boolean
}
interface IListItem {
  tittle: string
  onClick: () => void
}
export const ViewCategoriaBlogMobile = ({ Data, loading }: IProps) => {
  const ListItem = ({ onClick, tittle }: IListItem) => (
    <div
      onClick={onClick}
      className="cursor-pointer text-center text-white after:bg-transparent relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear"
    >
      {tittle || ''}
    </div>
  )
  const { push } = useRouter()
  return (
    <Show
      condition={!loading}
      isDefault={<LoaderSpinner className="lg:hidden" />}
    >
      <div className="lg:hidden w-full text-white font-medium flex flex-row flex-wrap justify-around z-10 overflow-y-hidden gap-x-3 py-2">
        <ListItem onClick={() => push('/blog')} tittle="Todos" />
        {Data?.map((obj, k) => (
          <ListItem
            tittle={obj.titulo || ''}
            onClick={() => push(`/blog/${obj.slug || ''}`)}
            key={k}
          />
        ))}
      </div>
    </Show>
  )
}
