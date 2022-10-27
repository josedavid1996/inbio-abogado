/* eslint-disable comma-dangle */
import { TittleCustom } from './tittleCustom'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from 'react-icons/fa'
import NextImage from 'next/image'
import { Container } from './container'
export const Team = () => {
  return (
    <section className="bg-[#171A1D] py-[90px] z-30" id="Team">
      <Container>
        <>
          <TittleCustom tittle="Meet The Team" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col " data-aos="fade-left">
              <div className="aspect-square relative ">
                <NextImage
                  src="/images/person1.jpg"
                  layout="fill"
                  className="absolute w-full h-full rounded-lg z-0"
                />
                <div className="absolute bottom-9 w-full z-40">
                  <div className="flex flex-row gap-3 mx-auto w-[120px] h-[40px]  justify-center items-center rounded bg-[#AD8E6D] text-white">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaPinterest />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mt-3">
                <h4 className="text-white text-[20px] font-semibold text-center ">
                  Fynley Wilkinson
                </h4>
                <h6>Managing Partner</h6>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="aspect-square relative ">
                <NextImage
                  src="/images/person2.jpg"
                  layout="fill"
                  // width={350}
                  // height={350}
                  className="absolute w-full h-full rounded-lg"
                />
                <div className="absolute bottom-9 w-full z-40">
                  <div className="flex flex-row gap-3 mx-auto w-[120px] h-[40px]  justify-center items-center rounded bg-[#AD8E6D] text-white">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaPinterest />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mt-3">
                <h4 className="text-white text-[20px] font-semibold text-center ">
                  Sasha Welsh
                </h4>
                <h6>Senior Partner</h6>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="aspect-square relative ">
                <NextImage
                  src="/images/person3.jpg"
                  layout="fill"
                  // width={350}
                  // height={350}
                  className="absolute w-full h-full rounded-lg"
                />
                <div className="absolute bottom-9 w-full z-40">
                  <div className="flex flex-row gap-3 mx-auto w-[120px] h-[40px]  justify-center items-center rounded bg-[#AD8E6D] text-white">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaPinterest />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mt-3">
                <h4 className="text-white text-[20px] font-semibold text-center ">
                  John Shepard
                </h4>
                <h6>Associate</h6>
              </div>
            </div>
          </div>
        </>
      </Container>
    </section>
  )
}
