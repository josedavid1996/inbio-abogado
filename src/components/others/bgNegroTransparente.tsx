interface Iprops {
  isReverse?: boolean
}
export const BgNegroTransparente = ({ isReverse }: Iprops) => (
  <div
    className={`absolute w-full h-[80px]  ${
      isReverse
        ? 'bg-gradient-to-b top-0 from-blacktranparente to-customtranparente'
        : 'bg-gradient-to-t from-blacktranparente to-customtranparente bottom-0'
    } z-10`}
  />
)
