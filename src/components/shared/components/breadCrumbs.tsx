import { useRouter } from 'next/router'
import React, { Fragment, ReactNode } from 'react'
import { FaAngleRight, FaHome } from 'react-icons/fa'
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
    <div
      onClick={() => (typeof url !== 'undefined' ? push(url) : null)}
      className="cursor-pointer"
    >
      {children}
    </div>
  )
  return (
    <div className=" w-full flex justify-start px-4 ">
      <div className="text-sm font-medium text-white font-customText flex flex-row items-center gap-2 flex-wrap">
        <Href url="/">
          <FaHome />
        </Href>
        {history?.map((obj, k) => (
          <Fragment key={k}>
            <FaAngleRight />
            <Href url={obj?.url || undefined}>{obj.description || ''}</Href>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
