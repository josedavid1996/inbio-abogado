/* eslint-disable no-unused-vars */
// import { DataPageGeneral } from '@components/seo/data'
import { OpenGraph } from '@components/seo/OpenGraph'
import { CallSeoContext } from '@contexts/seo/SeoContext'

export const Head = () => {
  const { state } = CallSeoContext()
  // return <OpenGraph {...state} />
  return <div></div>
}
