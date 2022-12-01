/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { AllBlogs } from '@components/others/blog'
import { BlogDTO } from '@components/others/blog/interfaces'
import { useGetBlogSlug } from '@Services'
import { useRouter } from 'next/router'
import { LayoutBlog } from '@components/layout/blog'
import NextImage from 'next/image'
import { GetServerSidePropsContext } from 'next'
import { Container } from '@components/others/home'
import { IMG_404 } from '@mock/etc'
interface IPropsSSP {
  slug: string
}
const Index = ({ slug }: IPropsSSP) => {
  const { data, loading } = useGetBlogSlug({ slug })
  return (
    <div className="bg-[#171A1D] min-h-screen h-full">
      <Container>
        <div className="flex flex-col gap-6 w-full py-4">
          <div className="text-gray-100 w-max flex flex-col font-semibold relative after:absolute after:-bottom-1 after:w-full after:h-[1px] after:bg-custom1">
            {data?.CategoriaBlog?.titulo || ''}
          </div>
          <div className="text-base md:text-2xl lg:text-3xl text-cus font-bold">
            {data?.titulo || ''}
          </div>
          <div className="relative aspect-video w-full">
            <NextImage
              src={data?.imagenPrincipal?.url || IMG_404}
              className="absolute w-full h-full object-cover rounded-md"
              priority
              layout="fill"
              alt="img_Slug"
            />
          </div>
          <div className="text-gray-100">{data?.descripcionCorta || ''}</div>
          <div
            className="font-medium leading-8 text-md font-customText text-gray-200"
            dangerouslySetInnerHTML={{ __html: data?.descripcionLarga! }}
          >
          </div>
        </div>
      </Container>
    </div>
  )
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return { props: { slug: ctx.query.slug } }
}

export default Index
