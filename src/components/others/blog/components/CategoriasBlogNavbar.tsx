/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
import { CategoriaBlogDTO } from '../interfaces'
import { Show, SkeletorText } from '@components/shared'
interface IProps {
  Data: CategoriaBlogDTO[] | []
  loading?: boolean
  onClick: (value: string) => void
}
// interface IListItem {
//   tittle: string
//   onClick: () => void
// }
export const CategoriasBlogNavbar = ({
  Data,
  loading = true,
  onClick
}: IProps) => {
  // const { push } = useRouter()
  // const ListItem = ({ tittle, onClick }: IListItem) => (
  //   <div
  //     className={`cursor-pointer text-center ${'text-white'}  after:bg-transparent relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear`}
  //   >
  //     <p onClick={onClick}>{tittle || ''}</p>
  //   </div>
  // )
  return (
    <Show
      condition={!loading}
      isDefault={
        <div className="flex flex-row gap-4 w-full">
          <SkeletorText />
          <SkeletorText />
          <SkeletorText />
          <SkeletorText />
        </div>
      }
    >
      <div className="hidden lg:flex w-full text-white font-medium  flex-row flex-wrap justify-around z-10 overflow-y-hidden gap-x-3 py-2 mb-4">
        <p
          onClick={() => onClick('')}
          className={`cursor-pointer text-center ${'text-white'}  after:bg-transparent relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear
        `}
        >
          Todos
        </p>
        {Data?.map((obj, k) => (
          <div
            key={k}
            className={`cursor-pointer text-center ${'text-white'}  after:bg-transparent relative flex flex-row after:absolute after:-bottom-2 after:w-full after:h-[1px] after:hover:bottom-0 hover:after:bg-custom1 hover:text-custom1 after:transition-all  after:duration-300 after:ease-linear`}
          >
            <p onClick={() => onClick(obj.slug)}>{obj.titulo || ''}</p>
          </div>
        ))}
      </div>
    </Show>
  )
}
