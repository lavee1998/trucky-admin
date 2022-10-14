import { createSlice } from '@reduxjs/toolkit'
// @ts-ignore
import { createSagaAction } from 'saga-toolkit'

const name = 'app'

const initialState = {
  started: false,
  appState: 'active',
  previousAppState: null,
}

export const start = createSagaAction(`${name}/start`)

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [start.fulfilled]: state => ({
      ...state,
      started: true,
    }),
  },
})

export default slice.reducer
