/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
interface Iprops {
  children: any
  condition: boolean
  isDefault?: any
}
export const Show = ({ children, condition, isDefault }: Iprops) =>
  condition ? children : isDefault || null
