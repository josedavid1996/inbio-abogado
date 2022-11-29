/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { CategoriaBlogDTO } from '../interfaces'
import { useRouter } from 'next/router'
interface IProps {
  Data?: CategoriaBlogDTO[]
}
interface IListItem {
  k?: number
  tittle: string
  onClick: () => void
}
export const ViewCategoriaBlogMobile = ({ Data }: IProps) => {
  console.log('render')
  const DataMemo = useMemo(() => Data, [Data])

  const ListItem = ({ k, onClick, tittle }: IListItem) => (
    <div
      key={k}
      onClick={onClick}
      className="cursor-pointer text-center text-white after:bg-transparent relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear"
    >
      {tittle || ''}
    </div>
  )
  const { push } = useRouter()
  return (
    <div className="lg:hidden w-full text-white font-medium flex flex-row flex-wrap justify-around z-10 overflow-y-hidden gap-x-3 py-2">
      <ListItem onClick={() => push('/blog?slug=all')} tittle="Todos" />
      {DataMemo?.map((obj, k) => (
        <ListItem
          k={k}
          tittle={obj.titulo}
          onClick={() => push(`/blog?slug=${obj.slug}`)}
          key={k}
        />
      ))}
    </div>
  )
}
