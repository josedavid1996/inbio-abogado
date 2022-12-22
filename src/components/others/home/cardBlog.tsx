import NextImage from 'next/image'
import { BlogDTO } from '../blog/interfaces'

interface Iprops {
  data: BlogDTO
}

export const CardBlog = ({ data }: Iprops) => {
  return (
    <div className="flex flex-col">
      <div className="aspect-video   relative object-cover">
        <NextImage
          src={data.imagenPrincipal.url}
          layout="fill"
          className="absolute w-full h-full object-cover object-center rounded-lg  hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-center gap-1 mt-6">
        <h4 className="text-custom1 font-bold text-center mt-2 text-base">
          {data.titulo || ''}
        </h4>
        <h6 className="text-gray-300 font-medium text-center text-sm">
          {data.descripcionCorta || ''}
        </h6>
      </div>
    </div>
  )
}
