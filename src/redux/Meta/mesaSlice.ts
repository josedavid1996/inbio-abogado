/* eslint-disable comma-dangle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
export interface MetaType {
  tittlePage?: string
  link?: string
  description?: string
  domain?: string
  imgPrincipal?: string
  imgSecundaria?: string
  keywords?: string
  url?: string
}
const InitialState: MetaType = {
  tittlePage: 'Kyros - Personal Website',
  link: 'Kyros',
  description: 'Somos los mejores en lo que hacemos',
  domain: 'inbio-abogado.vercel.app',
  imgPrincipal: 'https://inbio-abogado.vercel.app/images/imgpageseo.webp',
  imgSecundaria: 'https://inbio-abogado.vercel.app/images/imgpageseo.webp',
  keywords: 'Comercial services, employment services, civil ligitation',
  url: 'https://inbio-abogado.vercel.app/',
}
export const MetaSlice = createSlice({
  name: 'Meta',
  initialState: InitialState,
  reducers: {
    SetDataMeta: (state: MetaType, { payload }: PayloadAction<MetaType>) => ({
      ...state,
      ...payload,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state: MetaType, { payload }: PayloadAction<any>) => {
      return { ...state, ...payload.Meta }
    },
  },
})

/** Funciones para usar y actualizar el store del Meta */
export const { SetDataMeta } = MetaSlice.actions

/** Reducer para agregar al store general */
export const MetaReducer = MetaSlice.reducer
