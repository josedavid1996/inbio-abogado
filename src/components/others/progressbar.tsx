interface Iprops {
  percentage: string
  tittlePercentege?: string
}
export const Progressbar = ({ percentage, tittlePercentege }: Iprops) => {
  return (
    <div className="w-full bg-[#303030] h-[6px] rounded relative ">
      <div
        className={`absolute bg-[#AD8E6D] h-full ${percentage} rounded animate-renderprogresbar transition-all scale-0 origin-left`}
      >
        <div className="relative w-full h-full rounded ">
          <div className="absolute bg-[#202020] -top-10 right-0 p-1 z-20">
            {tittlePercentege || 'NOT_FOUND'}
          </div>
          <div className="absolute bg-[#202020] w-4 h-4 transform skew-y-12 z-10 -top-6 right-0 p-1" />
        </div>
      </div>
    </div>
  )
}
