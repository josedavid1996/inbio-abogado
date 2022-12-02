/* eslint-disable comma-dangle */
import { CallSeoContext, SeoType } from './SeoContext'

export const useSeoMethods = () => {
  const { dispatch, state } = CallSeoContext()
  const UpdateSeo = (data: SeoType) =>
    dispatch({ type: 'UpdateSeo', payload: data })
  return {
    state,
    UpdateSeo,
  }
}
