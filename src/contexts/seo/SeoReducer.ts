/* eslint-disable comma-dangle */
import { SeoType } from './SeoContext'
export type ActionReducer = { type: 'UpdateSeo'; payload: SeoType }

export const SeoReducer = (
  state: SeoType,
  { payload, type }: ActionReducer,
) => {
  switch (type) {
    case 'UpdateSeo':
      return { ...state, ...payload }
    default:
      return state
  }
}
