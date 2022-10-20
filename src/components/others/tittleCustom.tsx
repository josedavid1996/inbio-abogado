interface Iprops {
  tittle: string
}
export const TittleCustom = ({ tittle }: Iprops) => {
  return <div className="text-white text-[34px] font-semibold text-center mb-8">{tittle || ''}</div>
}
