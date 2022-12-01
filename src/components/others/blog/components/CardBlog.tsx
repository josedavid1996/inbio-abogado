import { BlogDTO } from '../interfaces'
import { IMG_404 } from '@mock/etc'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
// import NextLink from 'next/link'

interface IProps {
  Data: BlogDTO
}

// /blog/categoria/' + obj.slug

export const CardBlog = ({ Data }: IProps) => {
  const { push } = useRouter()
  return (
    <div
      className="w-full flex flex-col items-center gap-2  cursor-pointer"
      onClick={() => push('/blog/' + Data.slug)}
    >
      {/* <NextLink href={'/blog/categoria/' + Data.slug}> */}
        <div className="relative aspect-square w-full rounded-lg overflow-hidden">
          <NextImage
            src={Data.imagenPrincipal.url || IMG_404}
            className="absolute w-full h-full object-cover object-center rounded-lg  hover:scale-110 transition-all duration-500 ease-in-out"
            alt="img_CardBlog"
            layout="fill"
          />
        </div>
        <div className="text-custom1 font-bold text-center mt-2 text-base">
          {Data.titulo || ''}
        </div>
        <div className="text-gray-300 font-medium text-center text-sm">
          {Data.descripcionCorta || ''}
        </div>
      {/* </NextLink> */}
    </div>
  )
}
