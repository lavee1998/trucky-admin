import { createSlice } from '@reduxjs/toolkit'
// @ts-ignore
import { createSagaAction } from 'saga-toolkit'
import { User } from '../api'

const name = 'user'

export interface UserState {
  loading: boolean
  error: any
  users: User[]
  limit: number
  user: User | null
  nextToken: string | null
  total: number
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
  total: -1,
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
      state.loading = false
      state.users = [...state.users, ...payload.items]

      if (payload.nextToken) {
        state.nextToken = payload.nextToken
      } else {
        state.total = state.users.length
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
