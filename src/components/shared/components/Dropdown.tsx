import { CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { Dispatch, SetStateAction } from 'react'

interface IProps {
  data: CategoriaBlogDTO[] | []
  filter: string | null
  setFilter: Dispatch<SetStateAction<string | null>>
}
export const Dropdown = ({ data, filter, setFilter }: IProps) => {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <select
        className=" text-md font-bold lg:hidden bg-custon3 rounded-md   p-3  "
        value={typeof filter !== 'string' ? '' : filter}
        onChange={({ target }) =>
          setFilter(target.value !== '' ? target.value : null)
        }
      >
        <option value={''}>Todo</option>
        {data?.map((obj, k) => (
          <option key={k} value={obj.slug}>
            {obj.titulo || ''}
          </option>
        ))}
      </select>
    </div>
  )
}
