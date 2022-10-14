import { API, graphqlOperation } from 'aws-amplify'
import { call } from 'redux-saga/effects'
// @ts-ignore
import { takeLatestAsync } from 'saga-toolkit'
import { listUsers, getUser } from '../api'
import * as actions from './slice'

function* fetchUsers() {
  console.log('fetchUsers')
  // @ts-ignore
  const result = yield call(() => API.graphql(graphqlOperation(listUsers)))

  // @ts-ignore
  const { items } = result.data.listUsers

  return items
}

function* fetchUser({ meta }: any) {
  const { id } = meta.arg
  // @ts-ignore
  const result = yield call(() => API.graphql(graphqlOperation(getUser, { id })))

  const item = result.data.getUser

  return item
}

export default [
  takeLatestAsync(actions.fetchUsers.type, fetchUsers),
  takeLatestAsync(actions.fetchUser.type, fetchUser),
]
