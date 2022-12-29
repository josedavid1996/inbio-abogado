/* eslint-disable comma-dangle */
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'

export interface IContext {
  ViewSecction: string
  setViewSecction: Dispatch<SetStateAction<string>>
  isFilter: string | null
  setIsFilter: Dispatch<SetStateAction<string | null>>
}
export const NavbarContext = createContext<IContext | {}>({})

interface Iprops {
  children: ReactNode
}
export const NavbarProvider = ({ children }: Iprops) => {
  const [ViewSecction, setViewSecction] = useState<string>('')
  const [isFilter, setIsFilter] = useState<string | null>(null)

  useEffect(() => {}, [ViewSecction])
  return (
    <NavbarContext.Provider
      value={{
        setViewSecction,
        ViewSecction,
        isFilter,
        setIsFilter
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export const NavbarContextConfig = () => useContext(NavbarContext)
