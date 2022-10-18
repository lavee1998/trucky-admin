import { createSlice } from '@reduxjs/toolkit'
import { User } from '../api'
// @ts-ignore
import { createSagaAction } from 'saga-toolkit'

const name = 'user'

export interface UserState {
  loading: boolean
  error: any
  users: User[]
  limit: number
  user: User | null
  nextToken: string | null
}

export interface UserActions {
  fetchUsers: () => unknown
  fetchUser: () => unknown
  removeUser: ({ id }: { id: string }) => unknown
  addUser: ({ file }: { file: File }) => unknown
}

const initialState: UserState = {
  loading: false,
  error: null,
  users: [],
  limit: 2,
  user: null,
  nextToken: null,
}

export const fetchUsers = createSagaAction(`${name}/fetchUsers`)
export const fetchUser = createSagaAction(`${name}/fetchUser`)
export const removeUser = createSagaAction(`${name}/removeUser`)
export const addUser = createSagaAction(`${name}/addUser`)

const handlePending = (state: UserState) => ({
  ...state,
  loading: true,
})

const handleRejected = (state: UserState, { error }: { error: Error }) => ({
  ...state,
  error,
  loading: false,
})

const slice = createSlice({
  name,
  initialState,
  reducers: {
    clearUser: state => ({
      ...state,
      user: null,
    }),
  },
  extraReducers: {
    // users
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled]: (
      state: UserState,
      { payload }: { payload: { items: User[]; nextToken: string | null } },
    ) => {
      state.users = [...state.users, ...payload.items]
      state.loading = false
      if (payload.nextToken) {
        state.nextToken = payload.nextToken
      }
    },
    [fetchUsers.rejected]: handleRejected,

    // user
    [fetchUser.pending]: handlePending,
    [fetchUser.fulfilled]: (state: UserState, { payload }: { payload: User }) => ({
      ...state,
      user: payload,
      loading: false,
    }),
    [fetchUser.rejected]: handleRejected,
    // remove
    [removeUser.pending]: handlePending,
    [removeUser.fulfilled]: (state: UserState, { payload }: { payload: User }) => ({
      ...state,
      loading: false,
    }),
    [removeUser.rejected]: handleRejected,
    // add
    [addUser.pending]: handlePending,
    [addUser.fulfilled]: (state: UserState, { payload }: { payload: User }) => ({
      ...state,
      loading: false,
    }),
    [addUser.rejected]: handleRejected,
  },
})

export const { clearUser } = slice.actions

export default slice.reducer
