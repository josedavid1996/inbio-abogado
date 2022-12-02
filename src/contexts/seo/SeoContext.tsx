/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { DOMAIN_URL } from '@mock/etc'
import { ReactNode, useReducer, createContext, useContext } from 'react'
import { ActionReducer, SeoReducer } from './SeoReducer'
interface IProps {
  children: ReactNode
}
export interface SeoType {
  tittlePage?: string
  link?: string
  description?: string
  domain?: string
  img?: string
  keywords?: string
  url?: string
}

export const InitialStateSeo: SeoType = {
  // tittlePage: 'Kyros - Personal Website',
  // link: 'Kyros',
  // description: 'Somos los mejores en lo que hacemos',
  // domain: DOMAIN_URL,
  // img: `${DOMAIN_URL}images/imgpageseo.webp`,
  // keywords: 'Comercial services, employment services, civil ligitation',
  // url: DOMAIN_URL,
  tittlePage: '',
  link: '',
  description: '',
  domain: '',
  img: '',
  keywords: '',
  url: '',
}

export interface IContext {
  state: SeoType
  dispatch: (payload: ActionReducer) => void
}
export const SeoContext = createContext<IContext | {}>({
  state: InitialStateSeo,
  dispatch: SeoReducer,
})

export const SeoProvider = ({ children }: IProps) => {
  const [State, Distpatch] = useReducer(SeoReducer, InitialStateSeo)
  return (
    <SeoContext.Provider value={{ dispatch: Distpatch, state: State }}>
      {children}
    </SeoContext.Provider>
  )
}

export const CallSeoContext = () => useContext(SeoContext) as IContext
