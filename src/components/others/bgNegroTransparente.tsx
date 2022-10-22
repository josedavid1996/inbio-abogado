interface Iprops {
  isReverse?: boolean
  light?: boolean
}
export const BgNegroTransparente = ({ isReverse, light }: Iprops) => (
  <div
    className={`absolute w-full h-[80px] z-30 ${
      isReverse
        ? light
          ? 'bg-gradient-to-b top-0 from-blacktranparente30 to-customtranparente'
          : 'bg-gradient-to-b top-0 from-blacktranparente to-customtranparente'
        : light
        ? 'bg-gradient-to-t from-blacktranparente30 to-customtranparente bottom-0'
        : 'bg-gradient-to-t from-blacktranparente to-customtranparente bottom-0'
    } z-10`}
  />
)
