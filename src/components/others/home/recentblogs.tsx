/* eslint-disable  */
import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  useGetAllBlogs,
  useGetAllBlogsCategoriaSlug,
  useGetAllCategoriaBlogs,
} from '@Services'
import { FaAngleRight } from 'react-icons/fa'
import { CategoriasBlogNavbar } from './CategoriasBlogNavbar'
import { BlogDTO } from '../blog/interfaces'
import { Dropdown, Show, SkeletorSwiperHomeBlogs } from '@components/shared'
import { IdDataNavbar } from '@mock/dataNavbar'
import { useSecctionView } from '@hooks/useSeccionView'
import { SwiperHomeBlogs } from './components/SwiperHomeBlogs'

export const RecentBlogs = () => {
  const { ref } = useSecctionView(IdDataNavbar.Blog, 1)
  const { push: Push } = useRouter()
  // Filtro para las cards del slider de los blogs
  const [isFilter, setIsFilter] = useState<string | null>(null)
  const [Blogs, setDataBlogs] = useState<BlogDTO[] | []>([])

  const { loading: LoadingBlogSlug, refetch } = useGetAllBlogsCategoriaSlug({
    estado: 'Activado',
    numeroPagina: 6,
    pagina: 1,
    slug: isFilter ?? '',
  })
  const {
    data: DataCategoryBlogs,
    loading: LoadingCategorysBlogs,
  } = useGetAllCategoriaBlogs()

  const VolverAtraerSegunSlug = async () =>
    await refetch({
      estado: 'Activado',
      numeroPagina: 6,
      pagina: 1,
      slug: isFilter ?? '',
    }).then(({ data }) =>
      setDataBlogs(data?.GetAllBlogsCategoriaSlug.data as BlogDTO[]),
    )

  useEffect(() => {
    VolverAtraerSegunSlug()
  }, [isFilter])

  //Funcion para actulizar el valor del estado y ponerle el estilo de seleccionado

  const SelectionItemNavbar = (value: string | null) => {
    const selected: HTMLElement | null = document.getElementById(
      value as string,
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
            isDefault={<SkeletorSwiperHomeBlogs />}
          >
            <SwiperHomeBlogs Blogs={Blogs} />
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
                  : '/blog',
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
