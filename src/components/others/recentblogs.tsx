/* eslint-disable comma-dangle */
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { CardBlog } from './cardBlog'
import { DataBolgs } from '@mock/dataBlogs'
export const RecentBlogs = () => {
  return (
    <div className="bg-[#171A1D] py-10 z-30">
      <Container>
        <TittleCustom tittle="Recent Blog" />
        <div className="lg:p-6">
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
            {DataBolgs.map((obj, k) => (
              <SwiperSlide key={k}>
                <CardBlog data={obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  )
}
