import React from 'react'
import { BgNegroTransparente } from './bgNegroTransparente'
import { TittleCustom } from './tittleCustom'

export const Contact = () => {
  return (
    <div className="bg-[#171A1D] py-10 z-30 bg-[url('/images/bgContact.jpg')] relative">
      <BgNegroTransparente light />
      <div className="mx-auto w-[90%] max-w-[740px] py-6">
        <TittleCustom tittle="Contact" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 ">
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full bg-transparent border border-[#999187]"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input w-full bg-transparent border border-[#999187]"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="input w-full bg-transparent border border-[#999187]"
            />
          </div>
          <div className="w-full h-[168px]">
            <textarea
              className="textarea bg-transparent border border-[#999187] w-full h-full"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-[173px] h-[37px] bg-[#AD8E6D] text-white mx-auto rounded-md font-semibold text-[14px]">
            Send Message
          </button>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex flex-col gap-2 md:w-1/3 items-center">
              <h4 className="text-[16px] text-white">Email Me</h4>
              <h6 className="text-[16px] text-[#999187]">
                contact@kyrosnoriaki.com
              </h6>
            </div>
            <div className="flex flex-col gap-2 md:w-1/3 items-center">
              <h4 className="text-[16px] text-white">Call Me</h4>
              <h6 className="text-[16px] text-[#999187]">+1 700 333 92 96</h6>
            </div>
            <div className="flex flex-col gap-2 md:w-1/3 items-center text-center">
              <h4 className="text-[16px] text-white">Address</h4>
              <h6 className="text-[16px] text-[#999187]">
                Collins Street West, Louisiana, Bayerfurt, USA
              </h6>
            </div>
          </div>
        </div>
      </div>
      <BgNegroTransparente light isReverse />
    </div>
  )
}
