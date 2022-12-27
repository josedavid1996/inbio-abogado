/* eslint-disable */

import { BlogDTO, CategoriaBlogDTO } from '@components/others/blog/interfaces'
import { Show, SkeltorCardBlog } from '@components/shared'
import { SwiperSlide } from 'swiper/react'
import { CardBlog } from './cardBlog'

interface IProps {
  loading?: boolean
  children: JSX.Element
}
const CardsBlogs = ({ loading = false, children }: IProps) => {
  return (
    <Show
      condition={!loading}
      isDefault={
        <div className="grid grid-cols-1 ">
          <SkeltorCardBlog />
        </div>
      }
    >
      {children}
    </Show>
  )
}

export default CardsBlogs
