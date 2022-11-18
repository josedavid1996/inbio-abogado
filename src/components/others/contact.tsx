/* eslint-disable react-hooks/exhaustive-deps */
import { NavbarContextConfig, IContext } from '@contexts/NavbarProvider'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { BgNegroTransparente } from './bgNegroTransparente'
import { InputArea } from '@components/shared/textArea'
import { TittleCustom } from './tittleCustom'
import Input from '@components/shared/Input'

export const Contact = () => {
  const { setViewSecction } = NavbarContextConfig() as IContext
  const { ref, inView } = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) setViewSecction('Contact')
  }, [inView])

  return (
    <div
      id="Contact"
      ref={ref}
      className="bg-[#171A1D] py-10 z-30 bg-[url('/images/bgcontact.webp')] relative"
    >
      <BgNegroTransparente light />
      <div className="mx-auto w-[90%] max-w-[740px] py-6">
        <TittleCustom tittle="Contact" />
        <div className="flex flex-col gap-6 " data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-6 ">
            <Input
              label="Your Name"
              className="input w-full h-full bg-transparent border border-[#999187]"
            />
            <Input
              label="Your Email"
              className="input w-full h-full bg-transparent border border-[#999187]"
            />
            <Input
              label="Your Phone"
              className="input w-full h-full bg-transparent border border-[#999187]"
            />
          </div>
          <InputArea />
          {/* <div className="w-full h-[168px] relative">
            <textarea
              className="textarea bg-transparent border border-[#999187] w-full h-full peer p-5"
              placeholder=""
            />
            <label
              className="absolute top-[20px] left-[15px] text-slate-500 duration-300 transition-all peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-4"
            >
              Your Message
            </label>
          </div> */}
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
