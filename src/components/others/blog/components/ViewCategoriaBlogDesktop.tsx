/* eslint-disable no-undef */
import { CategoriaBlogDTO } from '../interfaces'
import { useRouter } from 'next/router'
interface IProps {
  Data?: CategoriaBlogDTO[]
  loading: boolean
}

interface IListItem {
  tittle: string
  onClick: () => void
}
export const ViewCategoriaBlogDesktop = ({ Data, loading }: IProps) => {
  const { push } = useRouter()

  const ListItem = ({ onClick, tittle }: IListItem) => {
    return (
      <div
        className="cursor-pointer p-1 text-sm flex items-center justify-center text-center text-white rounded-full border border-custom1"
        onClick={onClick}
      >
        {tittle}
      </div>
    )
  }
  return (
    <div className="hidden lg:block w-full max-w-[350px]">
      <div className="px-6 sticky top-[114px]">
        <div className="text-custom1 font-bold lg:text-xl">Categorias</div>
        <div className="grid grid-cols-2 gap-2 mt-6 justify-evenly ">
          <ListItem tittle="Todos" onClick={() => push('/blog')} />
          {Data?.map((obj, k) => (
            <ListItem
              tittle={obj.titulo}
              onClick={() => push(`/blog/${obj.slug || ''}`)}
              key={k}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
