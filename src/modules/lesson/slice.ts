import { createSlice } from '@reduxjs/toolkit'
import { Lesson } from '../api'
// @ts-ignore
import { createSagaAction } from 'saga-toolkit'

const name = 'lesson'

export interface LessonState {
  loading: boolean
  error: any
  lessons: Lesson[]
  lesson: Lesson | null
}

export interface LessonActions {
  fetchLessons: () => unknown
  fetchLesson: () => unknown
}

const initialState: LessonState = {
  loading: false,
  error: null,
  lessons: [],
  lesson: null,
}

export const fetchLessons = createSagaAction(`${name}/fetchLessons`)
export const fetchLesson = createSagaAction(`${name}/fetchLesson`)

const handlePending = (state: LessonState) => ({
  ...state,
  loading: true,
})

const handleRejected = (state: LessonState, { error }: { error: Error }) => ({
  ...state,
  error,
  loading: false,
})

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    // lessons
    [fetchLessons.pending]: handlePending,
    [fetchLessons.fulfilled]: (state, { payload }) => {
      state.lessons = payload
      state.loading = false
    },
    [fetchLessons.rejected]: handleRejected,

    // lesson
    [fetchLesson.pending]: handlePending,
    [fetchLesson.fulfilled]: (state, { payload }: { payload: Lesson }) => ({
      ...state,
      lesson: payload,
      loading: false,
    }),
    [fetchLesson.rejected]: handleRejected,
  },
})

export default slice.reducer
