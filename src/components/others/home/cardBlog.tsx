import NextImage from 'next/image'
import { IDataBlog } from '@mock/dataBlogs'

interface Iprops {
  data: IDataBlog
}

export const CardBlog = ({ data }: Iprops) => {
  return (
    <div className="flex flex-col">
      <div className="aspect-video   relative object-cover">
        <NextImage
          src={data.img}
          layout="fill"
          className="absolute w-full h-full rounded-lg z-0 "
        />
      </div>
      <div className="flex flex-col justify-center gap-1 mt-6">
        <h4 className="text-white text-[20px] font-semibold  ">
          {data.tittle || ''}
        </h4>
        <h6 className="text-[16px] text-[#999187]">{data.description || ''}</h6>
      </div>
    </div>
  )
}
