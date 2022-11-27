interface Iprops {
  tittle: string
  onClick?: () => void
}
export const TittleCustom = ({ tittle, onClick }: Iprops) => {
  return (
    <div
      className="text-white text-[34px] font-semibold text-center mb-8 cursor-pointer"
      data-aos="fade-up"
      onClick={onClick}
    >
      {tittle || ''}
    </div>
  )
}
