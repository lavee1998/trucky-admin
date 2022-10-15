// @ts-ignore
import { putAsync, takeEveryAsync } from 'saga-toolkit'
import { actions as userActions, selectors as userSelectors } from '../user'

import * as actions from './slice'
import * as selectors from './selectors'
import { put, takeEvery, select, take } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'

function* appStart() {
  try {
    // yield putAsync(lessonActions.fetchLessons())
  } catch (error) {
    console.error('Error during AppStart:', error)
  }
}

function* locationChange({ payload }: any) {
  const { location } = payload

  const { pathname } = location || {}
  const started = yield select(selectors.selectStarted)
  const pathParts = pathname.split('/')
  const id = pathParts[2]

  if (!started) {
    yield take(actions.start.fulfilled)
  }

  try {
    switch (true) {
      case pathname === '/users':
        yield put(userActions.clearUser())
        yield putAsync(userActions.fetchUsers())
        break
      case pathname.startsWith('/users/new'):
        break
      case pathname.startsWith('/users'):
        const user = yield select(userSelectors.selectUser)

        if (user?.id === +user) {
          break
        }

        yield put(userActions.fetchUser({ id }))
        break
      case pathname.startsWith('/users'):
        // const { lesson } = params
        yield putAsync(userActions.fetchUsers())
        break

      default:
        break
    }
  } catch (e) {
    console.log('locationChange Error: ', e)
  }
}

export default [
  takeEveryAsync(actions.start.type, appStart),
  takeEvery(LOCATION_CHANGE as any, locationChange), //TODO
]
