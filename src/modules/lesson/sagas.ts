import { API, graphqlOperation } from 'aws-amplify'
import { call } from 'redux-saga/effects'
// @ts-ignore
import { takeLatestAsync } from 'saga-toolkit'
import { listLessons, getLesson } from '../api'
import * as actions from './slice'

function* fetchLessons() {
  // @ts-ignore
  const result = yield call(() => API.graphql(graphqlOperation(listLessons)))

  // @ts-ignore
  const { items: lessons } = result.data.listLessons

  return lessons
}

function* fetchLesson({ meta }: any) {
  const { id } = meta.arg
  // @ts-ignore
  const result = yield call(() => API.graphql(graphqlOperation(getLesson, { id })))

  const lesson = result.data.getLesson

  return lesson
}

export default [
  takeLatestAsync(actions.fetchLessons.type, fetchLessons),
  takeLatestAsync(actions.fetchLesson.type, fetchLesson),
]
