// import { DataPageGeneral } from '@components/seo/data'
import { OpenGraph } from '@components/seo/OpenGraph'
import { CallSeoContext } from '@contexts/seo/SeoContext'

export const Head = () => {
  const { state } = CallSeoContext()
  return <OpenGraph {...state} />
}
