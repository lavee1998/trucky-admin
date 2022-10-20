import { API, graphqlOperation } from 'aws-amplify'
import { call, select } from 'redux-saga/effects'
// @ts-ignore
import { takeLatestAsync } from 'saga-toolkit'
import { listUsers, getUser } from '../api'
import * as actions from './slice'
import * as selectors from './selectors'

function* fetchUsers() {
  const { limit, users, nextToken, total, search }: actions.UserState = yield select(
    selectors.selectRoot,
  )
  if (users.length === total) throw new Error('Total user reached')

  // @ts-ignore
  const result = yield call(() =>
    API.graphql(
      graphqlOperation(listUsers, {
        limit,
        nextToken,
        filter: { companyId: { contains: search } },
      }),
    ),
  )

  // @ts-ignore
  const { items, nextToken: newNextToken } = result.data.listUsers

  return { items, nextToken: newNextToken }
}

function* fetchUser({ meta }: any): any {
  const { id } = meta.arg
  // @ts-ignore
  const result = yield call(() => API.graphql(graphqlOperation(getUser, { id })))
  const item = result.data.getUser

  return item
}

function* removeUser({ meta }: any) {
  const { id } = meta.arg
  // @ts-ignore
  // const result = yield call(() => API.graphql(graphqlOperation(deleteUser, { id })))

  return true
}

function* addUser({ meta }: any) {
  const { file } = meta.arg

  // @ts-ignore
  // const result = yield call(() => API.graphql(graphqlOperation(deleteUser, { id })))

  return true
}

export default [
  takeLatestAsync(actions.fetchUsers.type, fetchUsers),
  takeLatestAsync(actions.fetchUser.type, fetchUser),
  takeLatestAsync(actions.removeUser.type, removeUser),
  takeLatestAsync(actions.addUser.type, addUser),
]
