interface Iprops {
  className?: string
}
export const LoaderSpinner = ({ className }: Iprops) => {
  return (
    <span
      className={`w-10 h-10 border-[5px] border-gray-100 border-b-custom1 rounded-full animate-spin ${className}`}
    />
  )
}
