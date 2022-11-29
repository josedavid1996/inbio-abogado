/* eslint-disable no-undef */
import { CategoriaBlogDTO } from '../interfaces'
interface IProps {
  Data?: CategoriaBlogDTO[]
  loading: boolean
}
export const ViewCategoriaBlogDesktop = ({ Data, loading }: IProps) => {
  return (
    <div className="hidden lg:block border border-red-500 w-full max-w-[350px]">
      blogs dektpo
    </div>
  )
}
