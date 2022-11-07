import NextImage from 'next/image'
import { Progressbar } from '@components/others/progressbar'
import { DataProgressBar } from '@mock/dataProgressBar'
import { Container } from './container'
interface Iprops {
  Class?: string
}
export const About = ({ Class }: Iprops) => {
  return (
    <section className={`bg-[#171A1D]  ${Class}`} id="About">
      <Container>
        <div className=" flex flex-col md:flex-row gap-4 py-[90px] z-30 ">
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="animate-renderimgabout  ">
              <NextImage
                src="/images/personabout.png"
                // className='absolute w-full h-full object-cover'
                // objectFit='cover'
                // layout='fill'
                width={450}
                height={500}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="flex flex-col gap-4 animate-renderaboutme">
              <h4 className="text-white text-[34px] font-semibold">About Me</h4>
              <p className="text-[#999187]">
                In quis amet ex veniam in irure est culpa veniam velit fugiat
                cupidatat duis anim commodo elit in occaecat cupidatat eu et
                sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum
                officia veniam enim sit culpa velit proident enim ea officia
                aute non in mollit culpa anim magna sit veniam irure eiusmod.
              </p>
              {/* data-aos="fade-right" */}
              <div className="mt-5 flex flex-col gap-[22px]">
                {DataProgressBar &&
                  DataProgressBar.map((data, k) => (
                    <div key={k}>
                      <h4 className="text-white text-[16px] font-semibold mb-4">
                        {data.tittle || ''}
                      </h4>
                      <Progressbar
                        percentage={data.percentage}
                        tittlePercentege={data.tittlePercentege}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
