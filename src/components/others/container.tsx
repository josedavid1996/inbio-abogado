interface Iprops {
  children?: any
}
export const Container = ({ children }: Iprops) => {
  return <div className="w-[90%] h-full max-w-[1240px] mx-auto">{children || null}</div>
}
