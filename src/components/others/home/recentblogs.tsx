/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { CardBlog } from './cardBlog'
import { NavbarContextConfig, IContext } from '@contexts/NavbarProvider'
import { useEffect, useState, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'
import {
  useGetAllBlogs,
  useGetAllBlogsCategoriaSlug,
  useGetAllCategoriaBlogs
} from '@Services'
import { FaAngleRight } from 'react-icons/fa'
import { CategoriasBlogNavbar } from '../blog/components/CategoriasBlogNavbar'
import { BlogDTO, CategoriaBlogDTO } from '../blog/interfaces'

export const RecentBlogs = () => {
  const { setViewSecction } = NavbarContextConfig() as IContext
  const { push: Push } = useRouter()
  const { ref, inView } = useInView({ threshold: 1 })
  // Filtro para las cards del slider de los blogs
  const [isFilter, setIsFilter] = useState<string>('')
  const [dataBlog, setDataBlog] = useState<(BlogDTO | CategoriaBlogDTO)[]>([])

  const { data: AllBlogs, loading: LoadingAllBlogs } = useGetAllBlogs({
    destacado: '',
    estado: 'Activado',
    pagina: 1,
    numeroPagina: 6
  })

  useEffect(() => {
    if (inView) setViewSecction('Blog')
  }, [inView])
  const { data: DataCategoryBlogs, loading: LoadingCategorysBlogs } =
    useGetAllCategoriaBlogs()

  const { data: categoryBlog, loading } = useGetAllBlogsCategoriaSlug({
    estado: 'Activado',
    numeroPagina: 6,
    pagina: 1,
    slug: isFilter
  })

  useEffect(() => {
    categoryBlog?.length === 0
      ? setDataBlog(AllBlogs)
      : setDataBlog(categoryBlog)
  }, [categoryBlog])
  return (
    <div className="bg-[#171A1D] py-[90px] z-30" id="Blog" ref={ref}>
      <Container>
        <TittleCustom tittle="Recent Blog" onClick={() => Push('/blog')} />
        <div
          className="lg:p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <CategoriasBlogNavbar
            Data={DataCategoryBlogs}
            loading={loading}
            onClick={(value: string) => setIsFilter(value)}
          />
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
                slidesPerGroup: 1
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 3
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 3
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 2
              }
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {dataBlog &&
              dataBlog.map((obj, k) => (
                <SwiperSlide key={k}>
                  <CardBlog data={obj} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="flex justify-center"
        >
          <button
            className="btn bg-custon4 border cursor-pointer"
            onClick={() =>
              Push(
                isFilter.length === 0 ? '/blog' : `blog/categoria/${isFilter}`
              )
            }
          >
            Ver Mas
            <FaAngleRight className="ml-2 animate-pulse" />
          </button>
        </div>
      </Container>
    </div>
  )
}
