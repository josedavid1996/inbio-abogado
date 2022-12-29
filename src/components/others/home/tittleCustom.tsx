import { FadeUp } from '@components/animated'

interface Iprops {
  tittle: string
  onClick?: () => void
}
export const TittleCustom = ({ tittle, onClick }: Iprops) => {
  return (
    <FadeUp>
      <div
        className="text-white text-[34px] font-semibold text-center mb-8 cursor-pointer"
        // data-aos="fade-up"
        onClick={onClick}
      >
        {tittle || ''}
      </div>
    </FadeUp>
  )
}
