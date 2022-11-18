/* eslint-disable comma-dangle */
interface Iprops {
  isReverse?: boolean
  light?: boolean
  Height?: string
}
export const BgNegroTransparente = ({
  isReverse,
  light,
  Height = '',
}: Iprops) => (
  <div
    className={`absolute w-full h-[105px] ${Height} z-30 ${
      isReverse
        ? light
          ? 'bg-gradient-to-b top-0 from-blacktranparente30 to-transparent'
          : 'bg-gradient-to-b top-0 from-blacktranparente to-transparent'
        : light
        ? 'bg-gradient-to-t from-blacktranparente30 to-transparent bottom-0'
        : 'bg-gradient-to-t from-blacktranparente to-transparent bottom-0'
    } z-10`}
  />
)
