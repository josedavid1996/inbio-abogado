/* eslint-disable comma-dangle */
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'

export interface IContext {
  isFilter: string | null
  setIsFilter: Dispatch<SetStateAction<string | null>>
}
export const PageBlogContext = createContext<IContext | {}>({})

interface Iprops {
  children: ReactNode
}
export const PageBlogProvider = ({ children }: Iprops) => {
  const [isFilter, setIsFilter] = useState<string | null>(null)

  return (
    <PageBlogContext.Provider
      value={{
        isFilter,
        setIsFilter
      }}
    >
      {children}
    </PageBlogContext.Provider>
  )
}

export const PageBlogProviderContextConfig = () => useContext(PageBlogContext)
