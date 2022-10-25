interface Iprops {
  children?: any
  Class?: string
}
export const Container = ({ children, Class }: Iprops) => {
  return (
    <div
      className={`w-[86%] sm:w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[954px] h-full xl:max-w-[1220px] mx-auto ${Class}`}
    >
      {children || null}
    </div>
  )
}
