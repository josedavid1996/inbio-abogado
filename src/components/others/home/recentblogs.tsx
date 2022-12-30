/* eslint-disable  */
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { CardBlog } from './CardsBlogs/cardBlog'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  useGetAllBlogs,
  useGetAllBlogsCategoriaSlug,
  useGetAllCategoriaBlogs
} from '@Services'
import { FaAngleRight } from 'react-icons/fa'
import { CategoriasBlogNavbar } from './CategoriasBlogNavbar'
import { BlogDTO } from '../blog/interfaces'
import { Dropdown, Show, SkeltorCardBlog } from '@components/shared'
import { IdDataNavbar } from '@mock/dataNavbar'
import { useSecctionView } from '@hooks/useSeccionView'

export const RecentBlogs = () => {
  const { ref } = useSecctionView(IdDataNavbar.Blog, 1)
  const { push: Push } = useRouter()
  // Filtro para las cards del slider de los blogs
  const [isFilter, setIsFilter] = useState<string | null>(null)

  const [Blogs, setDataBlogs] = useState<BlogDTO[] | []>([])
  const { data: AllBlogs } = useGetAllBlogs({
    destacado: '',
    estado: 'Activado',
    pagina: 1,
    numeroPagina: 6
  })
  const { loading: LoadingBlogSlug, refetch } = useGetAllBlogsCategoriaSlug({
    estado: 'Activado',
    numeroPagina: 6,
    pagina: 1,
    slug: isFilter ?? ''
  })
  const { data: DataCategoryBlogs, loading: LoadingCategorysBlogs } =
    useGetAllCategoriaBlogs()

  const VolverAtraerSegunSlug = async () =>
    await refetch({
      estado: 'Activado',
      numeroPagina: 6,
      pagina: 1,
      slug: isFilter ?? ''
    }).then(({ data }) =>
      setDataBlogs(data?.GetAllBlogsCategoriaSlug.data as BlogDTO[])
    )

  // Preguntamos si el filter se cambio
  //Si es null trae todos los blogs
  // si es string,trae segun el slug obtenido
  useEffect(() => {
    if (isFilter === null) {
      setDataBlogs(AllBlogs)
    } else {
      VolverAtraerSegunSlug()
    }
  }, [isFilter])

  useEffect(() => {
    setDataBlogs(AllBlogs)
  }, [AllBlogs])

  //Funcion para actulizar el valor del estado y ponerle el estilo de seleccionado

  const SelectionItemNavbar = (value: string | null) => {
    const selected: HTMLElement | null = document.getElementById(
      value as string
    )
    let isClass
    if (typeof window !== 'undefined') {
      isClass = document.querySelectorAll('.selectionItemNavbar')
    }
    isClass?.forEach((item) => item.classList.remove('selectionItemNavbar'))
    selected?.classList.add('selectionItemNavbar')
    setIsFilter(value === 'todos' ? null : value)
  }

  return (
    <div className="bg-[#171A1D] py-[90px] z-30" id="Blog" ref={ref}>
      <Container>
        <TittleCustom tittle="Recent Blog" onClick={() => Push('/blog')} />
        <div
          className="lg:p-6 "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <CategoriasBlogNavbar
            Data={DataCategoryBlogs}
            loading={LoadingCategorysBlogs}
            onClick={SelectionItemNavbar}
          />
          <Dropdown
            data={DataCategoryBlogs || []}
            filter={isFilter}
            onChange={(target) =>
              setIsFilter(target.value !== '' ? target.value : null)
            }
          />
          <Show
            condition={!LoadingBlogSlug}
            isDefault={
              <div className="grid grid-cols-1 gap-2 w-full sm:grid-cols-2 lg:grid-cols-3 mb-12">
                <SkeltorCardBlog />
                <SkeltorCardBlog ClassName="hidden sm:block" />
                <SkeltorCardBlog ClassName="hidden lg:block" />
              </div>
            }
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
              {Blogs?.map((obj, k) => (
                <SwiperSlide key={k}>
                  <CardBlog data={obj} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Show>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="flex justify-center mt-3"
        >
          <button
            className="btn bg-custon4 border cursor-pointer"
            onClick={() =>
              Push(
                typeof isFilter === 'string'
                  ? `/blog/categoria/${isFilter}`
                  : '/blog'
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
