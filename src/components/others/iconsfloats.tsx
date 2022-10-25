import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
export const IconsFloats = () => {
  return (
    <div className="fixed hidden xl:flex flex-col z-40 left-[36px] top-0 bottom-0  justify-center">
      <div className=" flex flex-col gap-[14px] h-[179px] mt-3 text-[#AD8E6D]">
        <FaFacebookF className="w-[15px] h-[15px]" />
        <FaTwitter className="w-[15px] h-[15px]" />
        <FaInstagram className="w-[15px] h-[15px]" />
        <h5 className="-rotate-90 writing -ml-[23px] tracking-wider mt-[35px] text-[12px] text-[rgba(255,255,255,.5)]">Follow Me</h5>
      </div>
    </div>
  )
}
