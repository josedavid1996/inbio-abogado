import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { FaHome } from 'react-icons/fa'
interface IProps {
  history?: { description: string; url?: string }[]
}
interface IPropsHref {
  children: ReactNode
  url?: string
}

export const BreadCrumbs = ({ history }: IProps) => {
  const { push } = useRouter()
  const Href = ({ children, url }: IPropsHref) => (
    <li>
      <a
        onClick={() => (typeof url !== 'undefined' ? push(url) : null)}
        className="cursor-pointer"
      >
        {children}
      </a>
    </li>
  )
  return (
    <div className="hidden w-full md:flex justify-end px-4">
      <div className="text-sm breadcrumbs font-medium text-white font-customText">
        <ul>
          <Href url="/">
            <FaHome />
          </Href>
          {history?.map((obj, k) => (
            <Href url={obj?.url || undefined} key={k}>
              {obj.description || ''}
            </Href>
          ))}
        </ul>
      </div>
    </div>
  )
}
