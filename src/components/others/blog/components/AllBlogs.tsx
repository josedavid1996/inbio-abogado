/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { BlogDTO } from '../interfaces'

interface IProps {
  Data: BlogDTO[] | []
  loading: boolean
}
export const AllBlogs = ({ Data, loading }: IProps) => {
  useEffect(() => {
    console.log(Data)
  }, [loading])
  return <div className="w-full border border-yellow-200">todas los blogs</div>
}
