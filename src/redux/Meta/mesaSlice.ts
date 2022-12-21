/* eslint-disable comma-dangle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
export interface MetaType {
  user: any
  token: string | null
}
const InitialState: MetaType = {
  user: {},
  token: null,
}
export const MetaSlice = createSlice({
  name: 'Meta',
  initialState: InitialState,
  reducers: {
    SetUser: (state: MetaType, { payload }: PayloadAction<any>) => ({
      ...state,
      user: payload,
    }),
    SetToken: (state: MetaType, { payload }: PayloadAction<string | null>) => ({
      ...state,
      token: payload,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state: any, action: PayloadAction<any>) => {
      console.log(action)
      return { ...state, ...action }
    },
  },
})

/** Funciones para usar y actualizar el store del Meta */
export const { SetToken, SetUser } = MetaSlice.actions

/** Reducer para agregar al store general */
export const MetaReducer = MetaSlice.reducer
