interface Iprops {
  percentage: string,
  tittlePercentege?: string,

}
export const Progressbar = ({ percentage, tittlePercentege }: Iprops) => {
  return (
    <div className=''>
      <div className='absolute bg-[#202020]'>{tittlePercentege || 'NOT_FOUND'}</div>
      <div className='w-full bg-[#303030] h-[6px] rounded relative'>
        <div className={`absolute bg-[#AD8E6D] h-full ${percentage} rounded`} />
      </div>
    </div>
  )
}
