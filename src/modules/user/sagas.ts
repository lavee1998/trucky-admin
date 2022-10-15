import { API, Auth, graphqlOperation } from 'aws-amplify'
import { call } from 'redux-saga/effects'
// @ts-ignore
import { takeLatestAsync } from 'saga-toolkit'
import { listUsers, getUser } from '../api'
import * as actions from './slice'

function* fetchUsers() {
  console.log('fetchUsers')
  // @ts-ignore
  const user = yield call(() => Auth.currentAuthenticatedUser())
  const user2 = yield call(() => Auth.signIn('kovacslevi1234@gmail.com', 'teszt123'))
  console.log({ user, user2 })
  const result = yield call(() =>
    API.graphql(graphqlOperation(listUsers, undefined, user.signInUserSession.idToken.jwtToken)),
  )

  // @ts-ignore
  const { items } = result.data.listUsers

  return items
}

function* fetchUser({ meta }: any) {
  const { id } = meta.arg
  // @ts-ignore
  try {
    const result = yield call(() => API.graphql(graphqlOperation(getUser, { id })))
    const item = result.data.getUser

    return item
  } catch (e) {
    console.log({ e })
  }
}

export default [
  takeLatestAsync(actions.fetchUsers.type, fetchUsers),
  takeLatestAsync(actions.fetchUser.type, fetchUser),
]
