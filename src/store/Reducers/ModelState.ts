import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  modelState: boolean
}

const initialState: CounterState = {
    modelState: false
}

export const ModelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    openModel: (state, action) => {
      state.modelState = action.payload;
    }
  },
})

export const { openModel } = ModelSlice.actions

export default ModelSlice.reducer