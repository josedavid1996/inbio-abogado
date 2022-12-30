/* eslint-disable comma-dangle */
import { Pagination, Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { CardBlog } from '../CardsBlogs/cardBlog'
import { BlogDTO } from '@components/others/blog/interfaces'
interface IProps {
  Blogs: BlogDTO[] | []
}

export const SwiperHomeBlogs = ({ Blogs }: IProps) => {
  return (
    <Swiper
      grabCursor={true}
      slidesPerView="auto"
      slidesPerGroup={3}
      spaceBetween={0}
      loopFillGroupWithBlank={true}
      breakpoints={{
        380: {
          slidesPerView: 1,
          spaceBetween: 5,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {Blogs?.map((obj, k) => (
        <SwiperSlide key={k}>
          <CardBlog data={obj} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
