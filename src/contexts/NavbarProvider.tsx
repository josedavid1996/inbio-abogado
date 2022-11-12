/* eslint-disable comma-dangle */
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'

export interface IContext {
  ViewSecction: string
  setViewSecction: Dispatch<SetStateAction<string>>
}
export const NavbarContext = createContext<IContext | {}>({})

interface Iprops {
  children: ReactNode
}
export const NavbarProvider = ({ children }: Iprops) => {
  const [ViewSecction, setViewSecction] = useState<string>('')
  useEffect(() => {}, [ViewSecction])
  return (
    <NavbarContext.Provider value={{ setViewSecction, ViewSecction }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const NavbarContextConfig = () => useContext(NavbarContext)
