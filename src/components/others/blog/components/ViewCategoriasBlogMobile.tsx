/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useMemo } from 'react'
import { CategoriaBlogDTO } from '../interfaces'
import { useRouter } from 'next/router'
interface IProps {
  Data?: CategoriaBlogDTO[]
}
export const ViewCategoriaBlogMobile = ({ Data }: IProps) => {
  const { push } = useRouter()
  console.log(Data)
  return (
    <div className="lg:hidden w-full border flex flex-row flex-wrap justify-around z-10 overflow-y-hidden gap-x-3">
      <div onClick={() => push('/blog?slug=all')} className="cursor-pointer">
        Todos
      </div>
      {Data?.map((obj, k) => (
        <div
          key={k}
          onClick={() => push(`/blog?slug=${obj.slug}`)}
          className="cursor-pointer text-center"
        >
          {obj.titulo || ''}
        </div>
      ))}
    </div>
  )
}
