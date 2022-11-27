/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { CardBlog } from './cardBlog'
import { DataBolgs } from '@mock/dataBlogs'
import { NavbarContextConfig, IContext } from '@contexts/NavbarProvider'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetAllBlogs } from '@Services/index'
import { useRouter } from 'next/router'

export const RecentBlogs = () => {
  const { setViewSecction } = NavbarContextConfig() as IContext
  const { push: Push } = useRouter()
  const { ref, inView } = useInView({ threshold: 1 })
  const { data, loading } = useGetAllBlogs()

  useEffect(() => {
    if (inView) setViewSecction('Blog')
  }, [inView])

  useEffect(() => {
    console.log(data?.GetAllBlogs.data)
  }, [loading])

  return (
    <div className="bg-[#171A1D] py-[90px] z-30" id="Blog" ref={ref}>
      <Container>
        <TittleCustom tittle="Recent Blog" onClick={() => Push('/blog')} />
        <div
          className="lg:p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
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
