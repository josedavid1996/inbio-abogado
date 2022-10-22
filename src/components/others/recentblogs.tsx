import { Container } from './container'
import { TittleCustom } from './tittleCustom'
import NextImage from 'next/image'
export const RecentBlogs = () => {
  return (
    <div className="bg-[#171A1D] py-10 z-30">
      <Container>
        <TittleCustom tittle="Recent Blog" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col ">
            <div className="aspect-square relative ">
              <NextImage
                src="/images/person1.jpg"
                layout="fill"
                className="absolute w-full h-full rounded-lg z-0"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mt-3">
              <h4 className="text-white text-[20px] font-semibold text-center ">
                Fynley Wilkinson
              </h4>
              <h6>Managing Partner</h6>
            </div>
          </div>
          <div>
            <div className="aspect-square relative ">
              <NextImage
                src="/images/person2.jpg"
                layout="fill"
                className="absolute w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mt-3">
              <h4 className="text-white text-[20px] font-semibold text-center ">
                Sasha Welsh
              </h4>
              <h6>Senior Partner</h6>
            </div>
          </div>
          <div>
            <div className="aspect-square relative ">
              <NextImage
                src="/images/person3.jpg"
                layout="fill"
                className="absolute w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mt-3">
              <h4 className="text-white text-[20px] font-semibold text-center ">
                John Shepard
              </h4>
              <h6>Associate</h6>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}