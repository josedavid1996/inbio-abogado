import { BgNegroTransparente } from './bgNegroTransparente'
import { RiDoubleQuotesR } from 'react-icons/ri'
export const Quote = () => {
  return (
    <div className="bg-[url('/images/bgquote.jpg')] w-full h-[850px] bg-cover bg-center xl:h-[950px] relative top-0 z-0">
      <BgNegroTransparente isReverse />
      <div className="flex flex-col justify-center h-full p-6 gap-4">
        <div>
          <RiDoubleQuotesR className="text-[#AD8E6D] w-36 h-36" />
        </div>
        <div>
          <h3 className="text-[32px] text-white leading-[44px] font-bold">
            In matters of truth and justice, there is no difference between
            large and small problems, for issues concerning the treatment of
            people are all the same
          </h3>
        </div>
        <h5 className="text-white text-sm before:mr-4 before:w-[0.5px] before:h-full before:inline-flex flex items-center before:bg-[#999187] ">
          Albert Einstein
        </h5>
      </div>
      <BgNegroTransparente />
    </div>
  )
}
