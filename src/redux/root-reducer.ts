/* eslint-disable comma-dangle */
import { combineReducers } from '@reduxjs/toolkit'
import { MetaReducer } from './Meta/mesaSlice'
export const RootReducer = combineReducers({
  Meta: MetaReducer,
})
