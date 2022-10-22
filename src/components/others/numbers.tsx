import { BgNegroTransparente } from './bgNegroTransparente'

export const Numbers = () => {
  return (
    <div className="bg-[url('/images/bgNumbers.jpg')] w-full h-[547px] md:h-[272px] aspect-square bg-cover bg-center relative flex items-center justify-center">
      <BgNegroTransparente isReverse light />
      <div className="flex flex-col md:flex-row w-[90%] max-w-[1240px] justify-around items-center gap-4">
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">8240</h4>
          <span className="text-[12px]">HOURS OF WORKS</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">315</h4>
          <span className="text-[12px]">CASES DONE</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">250</h4>
          <span className="text-[12px]">SATISFIED CUSTOMERS</span>
        </div>
        <div className=" flex flex-col items-center ">
          <h4 className="text-[32px] text-white font-semibold">32</h4>
          <span className="text-[12px]">AWARDS WINNING</span>
        </div>
      </div>
      <BgNegroTransparente light/>
    </div>
  )
}
