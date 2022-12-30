import { CategoriaBlogDTO } from '@components/others/blog/interfaces'

interface IProps {
  data: CategoriaBlogDTO[] | []
  filter: string | null
  onChange: (target: EventTarget & HTMLSelectElement) => void
}
export const Dropdown = ({ data, filter, onChange }: IProps) => {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <select
        className=" text-md font-bold lg:hidden bg-custon3 rounded-md   p-3  "
        value={typeof filter !== 'string' ? '' : filter}
        onChange={({ target }) => {
          onChange(target)
        }}
        // onChange={(e) => {
        //   setFilter(target.value !== '' ? target.value : null)
        //   route.push('/blog/categoria/' + target.value)
        // }}
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
