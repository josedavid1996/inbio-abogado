import { FadeUp } from '@components/animated'

interface IPropsTitle {
  tittle: string
}
export const TittleItemResumen = ({ tittle }: IPropsTitle) => (
  <FadeUp>
    <h3
      className="text-white text-[28px] font-semibold "
      // data-aos="fade-up"
      // data-aos-anchor-placement="center-bottom"
    >
      {tittle || ''}
    </h3>
  </FadeUp>
)
